import { createClient } from "@sanity/client";
import { NextResponse } from "next/server";

import {
  blogData,
  type BlogInput,
} from "@/data/blogs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

const token =
  process.env.SANITY_API_WRITE_TOKEN;

const apiVersion = "2026-07-29";

const AUTHOR_ID =
  "author-steelbuild-editorial-team";

type ImportResult = {
  id: string;
  title: string;
  status: "success" | "failed";
  message: string;
};

const splitCommaSeparatedValues = (
  value?: string,
): string[] => {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getReadingTime = (
  readingTime?: string,
): number => {
  if (!readingTime) {
    return 1;
  }

  const match = readingTime.match(/\d+/);
  const minutes = match ? Number(match[0]) : 1;

  return Number.isFinite(minutes) && minutes > 0
    ? minutes
    : 1;
};

const getCategoryId = (
  category: string,
): string =>
  `category-${slugify(category)}`;

const getBlogDocumentId = (
  blog: BlogInput,
): string =>
  `blog-${String(blog.id).padStart(3, "0")}`;

const getPublishedAt = (
  publishedAt: string,
): string => {
  if (publishedAt.includes("T")) {
    return publishedAt;
  }

  return `${publishedAt}T09:00:00.000Z`;
};

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      {
        success: false,
        message:
          "Blog import route is disabled in production.",
      },
      {
        status: 403,
      },
    );
  }

  if (!projectId) {
    return NextResponse.json(
      {
        success: false,
        message:
          "NEXT_PUBLIC_SANITY_PROJECT_ID is missing.",
      },
      {
        status: 500,
      },
    );
  }

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        message:
          "SANITY_API_WRITE_TOKEN is missing in .env.local.",
      },
      {
        status: 500,
      },
    );
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  const results: ImportResult[] = [];

  try {
    /*
     * Create or update the common author.
     */
    await client.createOrReplace({
      _id: AUTHOR_ID,
      _type: "author",

      name: "Steelbuild Editorial Team",

      slug: {
        _type: "slug",
        current: "steelbuild-editorial-team",
      },

      designation: "Editorial Team",

      bio:
        "Steelbuild's knowledge resources are developed around practical experience in Pre-Engineered Building engineering, manufacturing and project execution.",
    });

    /*
     * Create or update every unique blog category.
     */
    const categories = Array.from(
      new Set(
        blogData
          .map((blog) => blog.category?.trim())
          .filter(
            (
              category,
            ): category is string =>
              Boolean(category),
          ),
      ),
    );

    for (const category of categories) {
      await client.createOrReplace({
        _id: getCategoryId(category),
        _type: "category",

        title: category,

        slug: {
          _type: "slug",
          current: slugify(category),
        },

        active: true,

        description:
          `${category} articles and knowledge resources from Steelbuild Infra Projects Limited.`,
      });
    }

    /*
     * Import all blog metadata.
     */
    for (const blog of blogData) {
      try {
        const documentId =
          getBlogDocumentId(blog);

        /*
         * Find an existing document using either
         * the final deterministic ID or the same slug.
         */
        const existingBlog =
          await client.fetch<{
            _id: string;
            content?: unknown[];
            mainImage?: unknown;
          } | null>(
            `
              *[
                _type == "blog" &&
                (
                  _id == $documentId ||
                  slug.current == $slug
                )
              ][0] {
                _id,
                content,
                mainImage
              }
            `,
            {
              documentId,
              slug: blog.slug,
            },
          );

        /*
         * Preserve article content if it was already
         * manually entered in Sanity.
         */
        const existingContent =
          Array.isArray(existingBlog?.content)
            ? existingBlog.content
            : [];

        /*
         * Preserve an existing manually uploaded image.
         * No new image upload happens in this route.
         */
        const existingMainImage =
          existingBlog?.mainImage;

        /*
         * Remove a duplicate document if the same slug
         * exists under a random Sanity document ID.
         */
        if (
          existingBlog?._id &&
          existingBlog._id !== documentId
        ) {
          await client.delete(
            existingBlog._id,
          );
        }

        await client.createOrReplace({
          _id: documentId,
          _type: "blog",

          blogId: String(blog.id),

          title: blog.title,

          slug: {
            _type: "slug",
            current: blog.slug,
          },

          excerpt: blog.excerpt,

          category: {
            _type: "reference",
            _ref: getCategoryId(
              blog.category,
            ),
          },

          author: {
            _type: "reference",
            _ref: AUTHOR_ID,
          },

          publishedAt: getPublishedAt(
            blog.publishedAt,
          ),

          readingTime: getReadingTime(
            blog.readingTime,
          ),

          featured: Boolean(
            blog.featured,
          ),

          tags:
            splitCommaSeparatedValues(
              blog.tags,
            ),

          seoTitle:
            blog.seoTitle ||
            blog.title,

          seoDescription:
            blog.seoDescription ||
            blog.excerpt,

          seoKeywords:
            splitCommaSeparatedValues(
              blog.seoKeywords,
            ),

          content: existingContent,

          /*
           * Retain an existing Sanity image,
           * but do not upload a local image yet.
           */
          ...(existingMainImage
            ? {
                mainImage:
                  existingMainImage,
              }
            : {}),
        });

        results.push({
          id: String(blog.id),
          title: blog.title,
          status: "success",
          message:
            "Blog metadata imported successfully. Thumbnail upload is pending.",
        });
      } catch (error) {
        results.push({
          id: String(blog.id),
          title: blog.title,
          status: "failed",

          message:
            error instanceof Error
              ? error.message
              : "Unknown import error.",
        });
      }
    }

    /*
     * Remove the temporary Test Blogs document.
     */
    const testDocuments =
      await client.fetch<
        Array<{
          _id: string;
        }>
      >(
        `
          *[
            _type == "blog" &&
            (
              slug.current == "test-blog" ||
              title == "Test Blogs"
            )
          ] {
            _id
          }
        `,
      );

    for (const document of testDocuments) {
      await client.delete(document._id);
    }

    const successful =
      results.filter(
        (result) =>
          result.status === "success",
      ).length;

    const failed =
      results.filter(
        (result) =>
          result.status === "failed",
      ).length;

    return NextResponse.json({
      success: failed === 0,

      message:
        failed === 0
          ? `${successful} blogs imported successfully.`
          : `${successful} blogs imported and ${failed} failed.`,

      total: results.length,
      successful,
      failed,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,

        message:
          error instanceof Error
            ? error.message
            : "Blog import failed.",
      },
      {
        status: 500,
      },
    );
  }
}