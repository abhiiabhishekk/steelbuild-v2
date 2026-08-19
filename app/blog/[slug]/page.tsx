import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogArticleContent from "@/components/blog-detail/BlogArticleContent";
import BlogAuthorProfile from "@/components/blog-detail/BlogAuthorProfile";
import BlogDetailHero from "@/components/blog-detail/BlogDetailHero";
import BlogNavigation from "@/components/blog-detail/BlogNavigation";
import BlogNewsletter from "@/components/blog-detail/BlogNewsletter";
import BlogReadingProgress from "@/components/blog-detail/BlogReadingProgress";
import RelatedArticles from "@/components/blog-detail/RelatedArticles";
import JsonLd from "@/components/seo/JsonLd";

import { sanityFetch } from "@/sanity/lib/fetch";

import {
  BLOG_BY_SLUG_QUERY,
  BLOG_NAVIGATION_QUERY,
  BLOG_SLUGS_QUERY,
  FALLBACK_RELATED_BLOGS_QUERY,
  RELATED_BLOGS_QUERY,
} from "@/sanity/lib/queries";

import type {
  SanityBlogDetail,
  SanityBlogListItem,
} from "@/types/sanityBlog";

/* =========================================================
   TYPES
========================================================= */

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

type BlogSlugItem = {
  slug: string;
};

type BlogNavigationData = {
  previous: SanityBlogListItem | null;
  next: SanityBlogListItem | null;
};

/* =========================================================
   SITE CONFIG
========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

export const dynamicParams = true;

/* =========================================================
   ABSOLUTE IMAGE URL HELPER
========================================================= */

const getAbsoluteImageUrl = (
  imageUrl?: string,
): string | undefined => {
  if (!imageUrl) {
    return undefined;
  }

  if (
    imageUrl.startsWith("http://") ||
    imageUrl.startsWith("https://")
  ) {
    return imageUrl;
  }

  return `${siteUrl}${imageUrl}`;
};

/* =========================================================
   BLOG FETCHER
========================================================= */

const getBlogBySlug = async (
  slug: string,
): Promise<SanityBlogDetail | null> => {
  return sanityFetch({
    query: BLOG_BY_SLUG_QUERY,

    params: {
      slug,
    },

    revalidate: 0,
  }) as Promise<SanityBlogDetail | null>;
};

/* =========================================================
   STATIC BLOG PARAMS
========================================================= */

export async function generateStaticParams() {
  const blogSlugs = (await sanityFetch({
    query: BLOG_SLUGS_QUERY,
    revalidate: 0,
  })) as BlogSlugItem[];

  return blogSlugs.map((blog) => ({
    slug: blog.slug,
  }));
}

/* =========================================================
   DYNAMIC BLOG SEO METADATA
========================================================= */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog =
    await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: {
        absolute:
          "Article Not Found | Steelbuild Infra Projects",
      },

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath =
    `/blog/${blog.slug}`;

  const canonicalUrl =
    `${siteUrl}${canonicalPath}`;

  const title =
    blog.seoTitle ||
    `${blog.title} | Steelbuild Infra Projects`;

  const description =
    blog.seoDescription ||
    blog.excerpt ||
    "Read insights on Pre-Engineered Buildings, industrial construction, structural steel and engineering from Steelbuild Infra Projects Limited.";

  const authorName =
    blog.author?.name ||
    "Steelbuild Editorial Team";

  const imageUrl =
    getAbsoluteImageUrl(
      blog.thumbnail?.asset?.url,
    );

  const imageWidth =
    blog.thumbnail?.asset?.metadata
      ?.dimensions?.width ??
    1200;

  const imageHeight =
    blog.thumbnail?.asset?.metadata
      ?.dimensions?.height ??
    630;

  const imageAlt =
    blog.thumbnail?.alt?.trim() ||
    blog.title;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical:
        canonicalPath,
    },

    openGraph: {
      type: "article",

      locale: "en_IN",

      url:
        canonicalUrl,

      siteName:
        "Steelbuild Infra Projects Limited",

      title,

      description,

      publishedTime:
        blog.publishedAt ||
        undefined,

      modifiedTime:
        blog.updatedAt ||
        blog.publishedAt ||
        undefined,

      authors: [
        authorName,
      ],

      tags:
        blog.tags ??
        [],

      images:
        imageUrl
          ? [
              {
                url:
                  imageUrl,

                width:
                  imageWidth,

                height:
                  imageHeight,

                alt:
                  imageAlt,
              },
            ]
          : undefined,
    },

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images:
        imageUrl
          ? [imageUrl]
          : undefined,
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,

        "max-image-preview":
          "large",

        "max-snippet":
          -1,

        "max-video-preview":
          -1,
      },
    },
  };
}

/* =========================================================
   BLOG DETAIL PAGE
========================================================= */

export default async function BlogDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog =
    await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  /* =======================================================
     PARALLEL SANITY REQUESTS
  ======================================================= */

  const navigationPromise =
    blog.publishedAt
      ? sanityFetch({
          query:
            BLOG_NAVIGATION_QUERY,

          params: {
            publishedAt:
              blog.publishedAt,
          },

          revalidate: 0,
        })
      : Promise.resolve({
          previous: null,
          next: null,
        });

  const relatedPromise =
    blog.categoryId
      ? sanityFetch({
          query:
            RELATED_BLOGS_QUERY,

          params: {
            slug:
              blog.slug,

            categoryId:
              blog.categoryId,
          },

          revalidate: 0,
        })
      : Promise.resolve([]);

  const fallbackPromise =
    blog.categoryId
      ? sanityFetch({
          query:
            FALLBACK_RELATED_BLOGS_QUERY,

          params: {
            slug:
              blog.slug,

            categoryId:
              blog.categoryId,
          },

          revalidate: 0,
        })
      : Promise.resolve([]);

  const [
    navigationResult,
    relatedResult,
    fallbackResult,
  ] = await Promise.all([
    navigationPromise,
    relatedPromise,
    fallbackPromise,
  ]);

  const navigation =
    navigationResult as BlogNavigationData;

  const categoryRelated =
    relatedResult as SanityBlogListItem[];

  const fallbackRelated =
    fallbackResult as SanityBlogListItem[];

  /* =======================================================
     RELATED ARTICLES
  ======================================================= */

  const relatedArticles = [
    ...categoryRelated,

    ...fallbackRelated.filter(
      (fallbackBlog) =>
        !categoryRelated.some(
          (relatedBlog) =>
            relatedBlog._id ===
            fallbackBlog._id,
        ),
    ),
  ].slice(0, 3);

  /* =======================================================
     ARTICLE DATA
  ======================================================= */

  const articleUrl =
    `${siteUrl}/blog/${blog.slug}`;

  const imageUrl =
    getAbsoluteImageUrl(
      blog.thumbnail?.asset?.url,
    );

  const authorName =
    blog.author?.name ||
    "Steelbuild Editorial Team";

  const description =
    blog.seoDescription ||
    blog.excerpt ||
    blog.title;

  /* =======================================================
     AUTHOR SCHEMA
  ======================================================= */

  const authorSchema =
    blog.author?.name
      ? {
          "@type":
            "Person",

          name:
            blog.author.name,
        }
      : {
          "@type":
            "Organization",

          name:
            "Steelbuild Editorial Team",

          url:
            siteUrl,
        };

  /* =======================================================
     BLOG POSTING SCHEMA
  ======================================================= */

  const articleSchema = {
    "@type":
      "BlogPosting",

    "@id":
      `${articleUrl}/#article`,

    url:
      articleUrl,

    headline:
      blog.title,

    description,

    image:
      imageUrl
        ? [
            imageUrl,
          ]
        : undefined,

    datePublished:
      blog.publishedAt ||
      undefined,

    dateModified:
      blog.updatedAt ||
      blog.publishedAt ||
      undefined,

    mainEntityOfPage: {
      "@id":
        `${articleUrl}/#webpage`,
    },

    author:
      authorSchema,

    publisher: {
      "@id":
        `${siteUrl}/#organization`,
    },

    articleSection:
      blog.category ||
      undefined,

    keywords:
      blog.tags?.length
        ? blog.tags.join(", ")
        : undefined,

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type":
      "WebPage",

    "@id":
      `${articleUrl}/#webpage`,

    url:
      articleUrl,

    name:
      blog.title,

    headline:
      blog.title,

    description,

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${articleUrl}/#article`,
    },

    mainEntity: {
      "@id":
        `${articleUrl}/#article`,
    },

    publisher: {
      "@id":
        `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id":
        `${articleUrl}/#breadcrumb`,
    },

    primaryImageOfPage:
      imageUrl
        ? {
            "@type":
              "ImageObject",

            url:
              imageUrl,
          }
        : undefined,

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@type":
      "BreadcrumbList",

    "@id":
      `${articleUrl}/#breadcrumb`,

    itemListElement: [
      {
        "@type":
          "ListItem",

        position: 1,

        name:
          "Home",

        item:
          siteUrl,
      },

      {
        "@type":
          "ListItem",

        position: 2,

        name:
          "Blog",

        item:
          `${siteUrl}/blog`,
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name:
          blog.title,

        item:
          articleUrl,
      },
    ],
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context":
      "https://schema.org",

    "@graph": [
      webPageSchema,
      articleSchema,
      breadcrumbSchema,
    ],
  };

  return (
    <>
      {/* ===================================================
          READING PROGRESS
      =================================================== */}

      <BlogReadingProgress />

      {/* ===================================================
          SEO / GEO STRUCTURED DATA
      =================================================== */}

      <JsonLd
        data={structuredData}
      />

      {/* ===================================================
          BLOG CONTENT
      =================================================== */}

      <BlogDetailHero
        blog={blog}
      />

      <BlogArticleContent
        blog={blog}
      />

      <BlogNavigation
        previous={
          navigation.previous
        }
        next={
          navigation.next
        }
      />

      <BlogAuthorProfile />

      <RelatedArticles
        articles={
          relatedArticles
        }
      />

      <BlogNewsletter />
    </>
  );
}