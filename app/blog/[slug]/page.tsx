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

const SITE_URL = "https://steelbuildinfra.com";

export const dynamicParams = true;

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

  return `${SITE_URL}${imageUrl}`;
};

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

export async function generateStaticParams() {
  const blogSlugs = (await sanityFetch({
    query: BLOG_SLUGS_QUERY,
    revalidate: 0,
  })) as BlogSlugItem[];

  return blogSlugs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title:
        "Article Not Found | Steelbuild Infra Projects",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalPath = `/blog/${blog.slug}`;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  const title = blog.seoTitle || blog.title;

  const description =
    blog.seoDescription ||
    blog.excerpt ||
    "Read the latest insights from Steelbuild Infra Projects Limited.";

  const authorName =
    blog.author?.name ||
    "Steelbuild Editorial Team";

  const imageUrl = getAbsoluteImageUrl(
    blog.thumbnail?.asset?.url,
  );

  return {
    title,
    description,

    keywords:
      blog.seoKeywords?.length
        ? blog.seoKeywords
        : blog.tags,

    alternates: {
      canonical: canonicalPath,
    },

    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName:
        "Steelbuild Infra Projects Limited",
      type: "article",
      locale: "en_IN",

      publishedTime:
        blog.publishedAt || undefined,

      modifiedTime:
        blog.updatedAt ||
        blog.publishedAt ||
        undefined,

      authors: [authorName],

      tags: blog.tags ?? [],

      images: imageUrl
        ? [
            {
              url: imageUrl,
              width:
                blog.thumbnail?.asset?.metadata
                  ?.dimensions?.width ?? 1110,
              height:
                blog.thumbnail?.asset?.metadata
                  ?.dimensions?.height ?? 594,
              alt:
                blog.thumbnail?.alt?.trim() ||
                blog.title,
            },
          ]
        : undefined,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogDetailPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const navigationPromise = blog.publishedAt
    ? sanityFetch({
        query: BLOG_NAVIGATION_QUERY,
        params: {
          publishedAt: blog.publishedAt,
        },
        revalidate: 0,
      })
    : Promise.resolve({
        previous: null,
        next: null,
      });

  const relatedPromise = blog.categoryId
    ? sanityFetch({
        query: RELATED_BLOGS_QUERY,
        params: {
          slug: blog.slug,
          categoryId: blog.categoryId,
        },
        revalidate: 0,
      })
    : Promise.resolve([]);

  const fallbackPromise = blog.categoryId
    ? sanityFetch({
        query: FALLBACK_RELATED_BLOGS_QUERY,
        params: {
          slug: blog.slug,
          categoryId: blog.categoryId,
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

  const relatedArticles = [
    ...categoryRelated,

    ...fallbackRelated.filter(
      (fallbackBlog) =>
        !categoryRelated.some(
          (relatedBlog) =>
            relatedBlog._id === fallbackBlog._id,
        ),
    ),
  ].slice(0, 3);

  const articleUrl =
    `${SITE_URL}/blog/${blog.slug}`;

  const imageUrl = getAbsoluteImageUrl(
    blog.thumbnail?.asset?.url,
  );

  const authorName =
    blog.author?.name ||
    "Steelbuild Editorial Team";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: blog.title,

    description:
      blog.seoDescription ||
      blog.excerpt ||
      blog.title,

    ...(imageUrl
      ? {
          image: [imageUrl],
        }
      : {}),

    datePublished:
      blog.publishedAt || undefined,

    dateModified:
      blog.updatedAt ||
      blog.publishedAt ||
      undefined,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    author: {
      "@type": "Organization",
      name: authorName,
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name:
        "Steelbuild Infra Projects Limited",
      url: SITE_URL,

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo/logo.png`,
      },
    },

    articleSection:
      blog.category || undefined,

    keywords:
      blog.tags?.join(", ") || undefined,

    url: articleUrl,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: articleUrl,
      },
    ],
  };

  return (
    <>
      <BlogReadingProgress />

      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <BlogDetailHero blog={blog} />

      <BlogArticleContent blog={blog} />

      <BlogNavigation
        previous={navigation.previous}
        next={navigation.next}
      />

      <BlogAuthorProfile />

      <RelatedArticles
        articles={relatedArticles}
      />

      <BlogNewsletter />
    </>
  );
}