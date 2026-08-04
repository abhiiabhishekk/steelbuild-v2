import fs from "node:fs/promises";
import path from "node:path";

import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

import { blogData } from "@/data/blogs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

type ImportStatus =
  | "success"
  | "failed"
  | "skipped";

type ThumbnailImportResult = {
  id: string;
  title: string;
  slug: string;
  filename: string;
  status: ImportStatus;
  message: string;
  assetId?: string;
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

const getContentType = (
  filename: string,
): string => {
  const extension = path
    .extname(filename)
    .toLowerCase();

  switch (extension) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";

    case ".png":
      return "image/png";

    case ".webp":
      return "image/webp";

    case ".gif":
      return "image/gif";

    default:
      return "application/octet-stream";
  }
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

const findImagePath = async ({
  folder,
  filename,
}: {
  folder: string;
  filename: string;
}): Promise<string | null> => {
  const expectedPath = path.join(
    process.cwd(),
    "public",
    "images",
    "blogs",
    folder,
    filename,
  );

  try {
    await fs.access(expectedPath);
    return expectedPath;
  } catch {
    return null;
  }
};

export async function POST() {
  const missingVariables =
    validateEnvironment();

  if (missingVariables.length > 0) {
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

  const results: ThumbnailImportResult[] =
    [];

  for (const blog of blogData) {
    const filename =
      blog.thumbnailFilename;

    const imagePath =
      await findImagePath({
        folder: blog.folder,
        filename,
      });

    if (!imagePath) {
      results.push({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        filename,
        status: "failed",
        message: `Image not found at public/images/blogs/${blog.folder}/${filename}`,
      });

      continue;
    }

    try {
      const sanityDocument =
        await sanityClient.fetch<{
          _id: string;
          title: string;
          thumbnail?: {
            asset?: {
              _ref?: string;
            };
          };
        } | null>(
          `*[
            _type == "blog" &&
            slug.current == $slug
          ][0]{
            _id,
            title,
            thumbnail{
              asset{
                _ref
              }
            }
          }`,
          {
            slug: blog.slug,
          },
        );

      if (!sanityDocument?._id) {
        throw new Error(
          `Sanity blog document not found for slug: ${blog.slug}`,
        );
      }

      const imageBuffer =
        await fs.readFile(imagePath);

      if (imageBuffer.length === 0) {
        throw new Error(
          "The local image file is empty.",
        );
      }

      const uploadedAsset =
        await sanityClient.assets.upload(
          "image",
          imageBuffer,
          {
            filename,
            contentType:
              getContentType(filename),
            title: blog.title,
            label: `Blog ${blog.id}`,
          },
        );

      await sanityClient
        .patch(sanityDocument._id)
        .set({
          thumbnail: {
            _type: "image",

            asset: {
              _type: "reference",
              _ref: uploadedAsset._id,
            },

            alt: blog.title,
          },
        })
        .commit({
          autoGenerateArrayKeys: true,
        });

      results.push({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        filename,
        assetId: uploadedAsset._id,
        status: "success",
        message:
          "Thumbnail uploaded and connected successfully.",
      });
    } catch (error) {
      results.push({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        filename,
        status: "failed",
        message:
          error instanceof Error
            ? error.message
            : "Unknown thumbnail import error.",
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

  const skipped = results.filter(
    (result) =>
      result.status === "skipped",
  ).length;

  return NextResponse.json(
    {
      success: failed === 0,

      message:
        failed === 0
          ? `${successful} blog thumbnails imported successfully.`
          : `${successful} thumbnails imported and ${failed} failed.`,

      total: results.length,
      successful,
      failed,
      skipped,
      results,
    },
    {
      status:
        failed === results.length
          ? 500
          : 200,
    },
  );
}