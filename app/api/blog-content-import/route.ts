import fs from "node:fs/promises";
import path from "node:path";
import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

import { blogData } from "@/data/blogs";
import { convertDocxToPortableText } from "@/lib/blog-import/docx-to-portable-text";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ImportStatus = "success" | "failed";

type ImportResult = {
  id: string;
  title: string;
  filename?: string;
  slug?: string;
  status: ImportStatus;
  message: string;
  blockCount?: number;
  warnings?: string[];
};

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ??
  "production";

const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ??
  "2025-01-01";

const token =
  process.env.SANITY_API_WRITE_TOKEN;

const sanityClient = createClient({
  projectId: projectId ?? "",
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: "published",
});

const getBlogNumberFromFilename = (
  filename: string,
) => {
  const match = filename.match(/^(\d{3})/);

  return match?.[1] ?? null;
};

const getDocxFiles = async (
  directoryPath: string,
) => {
  const directoryEntries =
    await fs.readdir(directoryPath, {
      withFileTypes: true,
    });

  return directoryEntries
    .filter(
      (entry) =>
        entry.isFile() &&
        entry.name
          .toLowerCase()
          .endsWith(".docx") &&
        !entry.name.startsWith("~$"),
    )
    .map((entry) => entry.name)
    .sort((first, second) =>
      first.localeCompare(second),
    );
};

const validateEnvironment = () => {
  const missingVariables: string[] = [];

  if (!projectId) {
    missingVariables.push(
      "NEXT_PUBLIC_SANITY_PROJECT_ID",
    );
  }

  if (!dataset) {
    missingVariables.push(
      "NEXT_PUBLIC_SANITY_DATASET",
    );
  }

  if (!token) {
    missingVariables.push(
      "SANITY_API_WRITE_TOKEN",
    );
  }

  return missingVariables;
};

export async function POST() {
  const missingVariables =
    validateEnvironment();

  if (missingVariables.length) {
    return NextResponse.json(
      {
        success: false,
        message: `Missing environment variables: ${missingVariables.join(
          ", ",
        )}`,
      },
      {
        status: 500,
      },
    );
  }

  const blogsDirectory = path.join(
    process.cwd(),
    "content",
    "blogs",
  );

  try {
    await fs.access(blogsDirectory);
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          "DOCX folder not found. Required path: content/blogs",
      },
      {
        status: 404,
      },
    );
  }

  let docxFiles: string[];

  try {
    docxFiles =
      await getDocxFiles(blogsDirectory);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to read content/blogs directory.",
      },
      {
        status: 500,
      },
    );
  }

  if (!docxFiles.length) {
    return NextResponse.json(
      {
        success: false,
        message:
          "No DOCX files found inside content/blogs.",
      },
      {
        status: 404,
      },
    );
  }

  const results: ImportResult[] = [];

  for (const filename of docxFiles) {
    const blogNumber =
      getBlogNumberFromFilename(filename);

    if (!blogNumber) {
      results.push({
        id: "Unknown",
        title: filename,
        filename,
        status: "failed",
        message:
          "Filename must begin with a three-digit blog ID, for example 001-blog-name.docx.",
      });

      continue;
    }

    const blogRecord = blogData.find(
      (blog) => blog.id === blogNumber,
    );

    if (!blogRecord) {
      results.push({
        id: blogNumber,
        title: filename,
        filename,
        status: "failed",
        message:
          "No matching blog record was found in data/blogs.ts.",
      });

      continue;
    }

    const filePath = path.join(
      blogsDirectory,
      filename,
    );

    try {
      const conversion =
        await convertDocxToPortableText(
          filePath,
        );

      if (!conversion.blocks.length) {
        throw new Error(
          "DOCX conversion returned no content blocks.",
        );
      }

      const sanityDocument =
        await sanityClient.fetch<{
          _id: string;
          title: string;
          slug?: {
            current?: string;
          };
        } | null>(
          `*[
            _type == "blog" &&
            slug.current == $slug
          ][0]{
            _id,
            title,
            slug
          }`,
          {
            slug: blogRecord.slug,
          },
        );

      if (!sanityDocument?._id) {
        throw new Error(
          `Sanity blog document not found for slug: ${blogRecord.slug}`,
        );
      }

      await sanityClient
        .patch(sanityDocument._id)
        .set({
          content: conversion.blocks,
        })
        .commit({
          autoGenerateArrayKeys: true,
        });

      results.push({
        id: blogRecord.id,
        title: blogRecord.title,
        filename,
        slug: blogRecord.slug,
        status: "success",
        blockCount:
          conversion.blocks.length,
        warnings:
          conversion.warnings.length
            ? conversion.warnings
            : undefined,
        message: `${conversion.blocks.length} content blocks imported successfully.`,
      });
    } catch (error) {
      results.push({
        id: blogRecord.id,
        title: blogRecord.title,
        filename,
        slug: blogRecord.slug,
        status: "failed",
        message:
          error instanceof Error
            ? error.message
            : "Unknown import error.",
      });
    }
  }

  const successful = results.filter(
    (result) =>
      result.status === "success",
  ).length;

  const failed = results.filter(
    (result) =>
      result.status === "failed",
  ).length;

  return NextResponse.json(
    {
      success: failed === 0,
      message:
        failed === 0
          ? `${successful} blog contents imported successfully.`
          : `${successful} blog contents imported and ${failed} failed.`,
      total: results.length,
      successful,
      failed,
      results,
    },
    {
      status: failed === results.length
        ? 500
        : 200,
    },
  );
}