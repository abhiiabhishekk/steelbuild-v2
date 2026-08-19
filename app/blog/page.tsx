import type { Metadata } from "next";
import { Suspense } from "react";

import BlogHero from "@/components/blog-page/BlogHero";
import BlogGrid from "@/components/blog-page/BlogGrid";
import JsonLd from "@/components/seo/JsonLd";

import { sanityFetch } from "@/sanity/lib/fetch";
import { BLOGS_QUERY } from "@/sanity/lib/queries";

import type { SanityBlogListItem } from "@/types/sanityBlog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/blog`;

/* =========================================================
   BLOG PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "PEB & Industrial Building Blog | Steelbuild Infra Projects",
  },

  description:
    "Explore insights from Steelbuild Infra Projects Limited on Pre-Engineered Buildings, industrial construction, warehouses, factories, structural steel, roofing, cladding, manufacturing and project engineering.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: pageUrl,
    siteName: "Steelbuild Infra Projects Limited",

    title:
      "PEB & Industrial Building Blog | Steelbuild Infra Projects",

    description:
      "Read insights on Pre-Engineered Buildings, industrial steel structures, warehouses, factories, roofing, cladding, manufacturing and engineering.",

    images: [
      {
        url: "/images/blog/blog-hero.jpg",
        width: 1200,
        height: 630,
        alt:
          "Steelbuild Infra Projects PEB and Industrial Building Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "PEB & Industrial Building Blog | Steelbuild Infra Projects",

    description:
      "Explore Steelbuild insights on PEB, industrial buildings, structural steel, roofing, cladding and manufacturing.",

    images: ["/images/blog/blog-hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* =========================================================
   BLOG DATA
========================================================= */

async function getBlogs(): Promise<SanityBlogListItem[]> {
  return sanityFetch<SanityBlogListItem[]>({
    query: BLOGS_QUERY,
    revalidate: 0,
  });
}

/* =========================================================
   BLOG GRID
========================================================= */

async function SanityBlogGrid() {
  const blogs = await getBlogs();

  return <BlogGrid blogs={blogs} />;
}

/* =========================================================
   BLOG PAGE
========================================================= */

export default async function BlogPage() {
  const blogs = await getBlogs();

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",

    "@id": `${pageUrl}/#breadcrumb`,

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },

      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: pageUrl,
      },
    ],
  };

  /* =======================================================
     BLOG LIST SCHEMA
  ======================================================= */

  const blogListSchema = {
    "@type": "ItemList",

    "@id": `${pageUrl}/#blog-list`,

    name:
      "Steelbuild Infra Projects Blog Articles",

    numberOfItems:
      blogs.length,

    itemListElement:
      blogs.map((blog, index) => ({
        "@type": "ListItem",

        position: index + 1,

        item: {
          "@type": "BlogPosting",

          "@id":
            `${siteUrl}/blog/${blog.slug}/#article`,

          url:
            `${siteUrl}/blog/${blog.slug}`,

          name:
            blog.title,

          headline:
            blog.title,
        },
      })),
  };

  /* =======================================================
     BLOG SCHEMA
  ======================================================= */

  const blogSchema = {
    "@type": "Blog",

    "@id": `${pageUrl}/#blog`,

    url: pageUrl,

    name:
      "Steelbuild Infra Projects Blog",

    description:
      "Insights and knowledge from Steelbuild Infra Projects Limited covering Pre-Engineered Buildings, structural steel, industrial construction, warehousing, factories, roofing, cladding and manufacturing.",

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },

    blogPost:
      blogs.map((blog) => ({
        "@id":
          `${siteUrl}/blog/${blog.slug}/#article`,
      })),

    inLanguage: "en-IN",
  };

  /* =======================================================
     COLLECTION PAGE SCHEMA
  ======================================================= */

  const collectionPageSchema = {
    "@type": "CollectionPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name:
      "PEB and Industrial Building Blog",

    headline:
      "Insights on Pre-Engineered Buildings and Industrial Infrastructure",

    description:
      "Explore insights from Steelbuild Infra Projects Limited on Pre-Engineered Buildings, industrial construction, warehouses, factories, structural steel, roofing, cladding and manufacturing.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${pageUrl}/#blog`,
    },

    mainEntity: {
      "@id": `${pageUrl}/#blog-list`,
    },

    publisher: {
      "@id": `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id": `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      url:
        `${siteUrl}/images/blog/blog-hero.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      collectionPageSchema,
      blogSchema,
      blogListSchema,
      breadcrumbSchema,
    ],
  };

  return (
    <>
      {/* ===================================================
          SEO / GEO STRUCTURED DATA
      =================================================== */}

      <JsonLd data={structuredData} />

      {/* ===================================================
          PAGE CONTENT
      =================================================== */}

      <BlogHero />

      <Suspense
        fallback={
          <section className="bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
              <div className="h-[420px] animate-pulse rounded-[30px] bg-gray-100" />
            </div>
          </section>
        }
      >
        <SanityBlogGrid />
      </Suspense>
    </>
  );
}