import fs from "node:fs";
import path from "node:path";

import { createClient } from "@sanity/client";

import {
  blogData,
  type BlogInput,
} from "../data/blogs";

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ||
  "2026-07-29";

const token =
  process.env.SANITY_API_WRITE_TOKEN;

if (!projectId) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local",
  );
}

if (!dataset) {
  throw new Error(
    "Missing NEXT_PUBLIC_SANITY_DATASET in .env.local",
  );
}

if (!token) {
  throw new Error(
    "Missing SANITY_API_WRITE_TOKEN in .env.local",
  );
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const PROJECT_ROOT = process.cwd();

const AUTHOR_ID =
  "author-steelbuild-editorial-team";

const splitList = (value: string): string[] =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

const slugify = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getReadingTimeNumber = (
  readingTime: string,
): number => {
  const match = readingTime.match(/\d+/);

  if (!match) {
    return 1;
  }

  const minutes = Number(match[0]);

  return Number.isFinite(minutes) && minutes > 0
    ? minutes
    : 1;
};

const getCategoryId = (
  category: string,
): string => {
  return `category-${slugify(category)}`;
};

const getBlogDocumentId = (
  blog: BlogInput,
): string => {
  return `blog-${blog.id}`;
};

const getThumbnailPath = (
  blog: BlogInput,
): string => {
  return path.join(
    PROJECT_ROOT,
    "public",
    "images",
    "blogs",
    blog.folder,
    blog.thumbnailFilename,
  );
};

async function ensureAuthor(): Promise<void> {
  await client.createOrReplace({
    _id: AUTHOR_ID,
    _type: "author",

    name: "Steelbuild Editorial Team",

    slug: {
      _type: "slug",
      current: "steelbuild-editorial-team",
    },

    designation: "Editorial Team",

    bio: [
      {
        _key: "author-bio",
        _type: "block",
        style: "normal",
        markDefs: [],

        children: [
          {
            _key: "author-bio-span",
            _type: "span",
            marks: [],
            text:
              "Steelbuild's knowledge resources are developed around practical experience in Pre-Engineered Building engineering, manufacturing and project execution.",
          },
        ],
      },
    ],
  });

  console.log(
    "✓ Author ready: Steelbuild Editorial Team",
  );
}

async function ensureCategories(): Promise<
  Map<string, string>
> {
  const categoryMap = new Map<string, string>();

  const categories = Array.from(
    new Set(
      blogData
        .map((blog) => blog.category.trim())
        .filter(Boolean),
    ),
  );

  for (const category of categories) {
    const categoryId = getCategoryId(category);

    await client.createOrReplace({
      _id: categoryId,
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

    categoryMap.set(category, categoryId);

    console.log(`✓ Category ready: ${category}`);
  }

  return categoryMap;
}

async function uploadThumbnail(
  blog: BlogInput,
): Promise<string | null> {
  const thumbnailPath = getThumbnailPath(blog);

  if (!fs.existsSync(thumbnailPath)) {
    console.warn(
      `⚠ Thumbnail not found for Blog ${blog.id}: ${thumbnailPath}`,
    );

    return null;
  }

  const imageStream =
    fs.createReadStream(thumbnailPath);

  const asset = await client.assets.upload(
    "image",
    imageStream,
    {
      filename: blog.thumbnailFilename,
      title: blog.title,
    },
  );

  console.log(
    `  ✓ Thumbnail uploaded: ${blog.thumbnailFilename}`,
  );

  return asset._id;
}

async function importBlog(
  blog: BlogInput,
  categoryMap: Map<string, string>,
): Promise<void> {
  const categoryId = categoryMap.get(
    blog.category,
  );

  if (!categoryId) {
    throw new Error(
      `Category reference not found for: ${blog.category}`,
    );
  }

  const existingBlog = await client.fetch<{
    _id: string;
    mainImage?: {
      asset?: {
        _ref?: string;
      };
    };
    content?: unknown[];
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
        mainImage,
        content
      }
    `,
    {
      documentId: getBlogDocumentId(blog),
      slug: blog.slug,
    },
  );

  let imageAssetId =
    existingBlog?.mainImage?.asset?._ref ?? null;

  if (!imageAssetId) {
    imageAssetId = await uploadThumbnail(blog);
  } else {
    console.log(
      `  ↳ Existing thumbnail retained`,
    );
  }

  const existingContent =
    Array.isArray(existingBlog?.content)
      ? existingBlog.content
      : [];

  const document = {
    _id: getBlogDocumentId(blog),
    _type: "blog",

    blogId: blog.id,

    title: blog.title,

    slug: {
      _type: "slug",
      current: blog.slug,
    },

    excerpt: blog.excerpt,

    category: {
      _type: "reference",
      _ref: categoryId,
    },

    author: {
      _type: "reference",
      _ref: AUTHOR_ID,
    },

    publishedAt: `${blog.publishedAt}T09:00:00.000Z`,

    readingTime: getReadingTimeNumber(
      blog.readingTime,
    ),

    featured: blog.featured,

    tags: splitList(blog.tags),

    seoTitle: blog.seoTitle,

    seoDescription: blog.seoDescription,

    seoKeywords: splitList(
      blog.seoKeywords,
    ),

    /*
     * Existing manually pasted Sanity content ko
     * overwrite nahi kiya jayega.
     */
    content: existingContent,

    ...(imageAssetId
      ? {
          mainImage: {
            _type: "image",

            asset: {
              _type: "reference",
              _ref: imageAssetId,
            },

            alt: blog.title,

            caption: blog.title,
          },
        }
      : {}),
  };

  /*
   * Same slug wala document agar kisi random ID
   * se already exist karta hai to pehle usko remove
   * karenge, lekin target deterministic document ko nahi.
   */
  if (
    existingBlog?._id &&
    existingBlog._id !== document._id
  ) {
    await client.delete(existingBlog._id);

    console.log(
      `  ↳ Removed duplicate document: ${existingBlog._id}`,
    );
  }

  await client.createOrReplace(document);

  console.log(
    `✓ Imported ${blog.id}/040: ${blog.title}`,
  );
}

async function removeTestBlog(): Promise<void> {
  const testBlogs = await client.fetch<
    Array<{
      _id: string;
      title?: string;
      slug?: string;
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
        _id,
        title,
        "slug": slug.current
      }
    `,
  );

  for (const testBlog of testBlogs) {
    await client.delete(testBlog._id);

    console.log(
      `✓ Removed test blog: ${
        testBlog.title || testBlog._id
      }`,
    );
  }
}

async function runImport(): Promise<void> {
  console.log("");
  console.log(
    "Steelbuild Sanity Blog Import Started",
  );
  console.log(
    `Total blog records: ${blogData.length}`,
  );
  console.log("");

  if (blogData.length !== 40) {
    console.warn(
      `⚠ Expected 40 blogs, but found ${blogData.length}.`,
    );
  }

  await ensureAuthor();

  const categoryMap =
    await ensureCategories();

  for (const blog of blogData) {
    try {
      await importBlog(blog, categoryMap);
    } catch (error) {
      console.error("");
      console.error(
        `✗ Import failed for Blog ${blog.id}: ${blog.title}`,
      );
      console.error(error);
      console.error("");

      throw error;
    }
  }

  await removeTestBlog();

  console.log("");
  console.log(
    `✓ Import completed successfully.`,
  );
  console.log(
    `✓ ${blogData.length} Steelbuild blogs processed.`,
  );
  console.log(
    "✓ Existing article content was preserved.",
  );
  console.log(
    "✓ Test Blogs document was removed.",
  );
  console.log("");
}

runImport().catch((error: unknown) => {
  console.error(
    "Steelbuild blog import failed:",
    error,
  );

  process.exit(1);
});