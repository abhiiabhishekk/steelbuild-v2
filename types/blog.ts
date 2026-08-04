import type {
  PortableTextBlock,
} from "@portabletext/types";

/*
 * =========================================================
 * STATIC BLOG TYPES
 * Used by data/blogs.ts and older static blog components.
 * =========================================================
 */

export type BlogCategory =
  | "PEB Knowledge"
  | "Industry Insights"
  | "Construction & Engineering"
  | "Industrial Buildings"
  | "Panels & Insulation"
  | "Roofing & Cladding"
  | "Manufacturing";

export type Blog = {
  id: string;
  folder: string;

  slug: string;
  title: string;
  excerpt: string;

  /*
   * Static HTML/text content.
   * Empty string may be used for blogs whose detailed
   * content has not yet been migrated.
   */
  content: string;

  category: BlogCategory;

  author: string;

  publishedAt: string;
  readingTime: string;

  thumbnail: string;

  featured: boolean;

  tags: string[];

  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
};

/*
 * =========================================================
 * SANITY IMAGE
 * =========================================================
 */

export type SanityImage = {
  _type?: "image";

  asset?: {
    _id?: string;
    url?: string;

    metadata?: {
      dimensions?: {
        width?: number;
        height?: number;
        aspectRatio?: number;
      };
    };
  };

  alt?: string;
  caption?: string;
};

/*
 * =========================================================
 * SANITY AUTHOR
 * =========================================================
 */

export type SanityAuthor = {
  _id?: string;

  name: string;
  slug?: string;

  designation?: string;
  bio?: string;

  image?: SanityImage;

  linkedinUrl?: string;
};

/*
 * =========================================================
 * SANITY CATEGORY
 * =========================================================
 */

export type SanityCategory = {
  _id?: string;

  title: string;
  slug?: string;

  description?: string;
};

/*
 * =========================================================
 * FAQ
 * =========================================================
 */

export type SanityFaq = {
  _key?: string;

  question: string;

  answer?: PortableTextBlock[];
};

/*
 * =========================================================
 * ARTICLE IMAGE
 * =========================================================
 */

export type SanityArticleImage =
  SanityImage & {
    _type: "articleImage";
  };

/*
 * =========================================================
 * ARTICLE TABLE
 * =========================================================
 */

export type SanityArticleTable = {
  _type: "articleTable";
  _key?: string;

  title?: string;
  caption?: string;

  columns?: Array<{
    _key?: string;
    heading?: string;
  }>;

  rows?: Array<{
    _key?: string;
    cells?: string[];
  }>;
};

/*
 * =========================================================
 * ARTICLE CALLOUT
 * =========================================================
 */

export type SanityArticleCallout = {
  _type: "articleCallout";
  _key?: string;

  title?: string;

  content?: PortableTextBlock[];

  tone?:
    | "info"
    | "success"
    | "warning"
    | "important";
};

/*
 * =========================================================
 * ARTICLE CTA
 * =========================================================
 */

export type SanityArticleCta = {
  _type: "articleCta";
  _key?: string;

  heading?: string;
  description?: string;

  buttonText?: string;
  buttonUrl?: string;
};

/*
 * =========================================================
 * DIVIDER
 * =========================================================
 */

export type SanityDivider = {
  _type: "divider";
  _key?: string;
};

/*
 * =========================================================
 * FAQ BLOCK
 * =========================================================
 */

export type SanityFaqBlock = {
  _type: "faq";
  _key?: string;

  heading?: string;

  items?: SanityFaq[];
};

/*
 * =========================================================
 * SANITY PORTABLE CONTENT UNION
 * =========================================================
 */

export type SanityContentBlock =
  | PortableTextBlock
  | SanityArticleImage
  | SanityArticleTable
  | SanityArticleCallout
  | SanityArticleCta
  | SanityDivider
  | SanityFaqBlock;

/*
 * =========================================================
 * SANITY BLOG LIST ITEM
 * =========================================================
 */

export interface SanityBlogListItem {
  _id: string;

  /*
   * Optional legacy ID used by some older components.
   */
  id?: string;

  slug: string;
  title: string;

  excerpt?: string;
  category?: string;

  author?: {
    name?: string;
  };

  publishedAt?: string;
  readingTime?: string;

  thumbnail?: SanityImage;

  featured?: boolean;

  tags?: string[];
}

/*
 * =========================================================
 * SANITY BLOG DETAIL
 * =========================================================
 */

export interface SanityBlogDetail
  extends SanityBlogListItem {
  content?: SanityContentBlock[];

  author?: SanityAuthor;

  category?: string;

  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];

  updatedAt?: string;

  views?: number;
}