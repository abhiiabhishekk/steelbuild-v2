import type {
  Metadata,
} from "next";

import AwardsHero from "@/components/awards-page/AwardsHero";
import FeaturedAwards from "@/components/awards-page/FeaturedAwards";
import AwardsTimeline from "@/components/awards-page/AwardsTimeline";
import RecognitionGrid from "@/components/awards-page/RecognitionGrid";
import MagazineFeatures from "@/components/awards-page/MagazineFeatures";
import ClientRecognition from "@/components/awards-page/ClientRecognition";
import AwardsCTA from "@/components/awards-page/AwardsCTA";

import {
  sanityFetch,
} from "@/sanity/lib/fetch";

import {
  FEATURED_AWARDS_QUERY,
} from "@/sanity/lib/awardQueries";

import type {
  SanityAward,
} from "@/types/sanityAward";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/about/awards-recognition`;

/* =========================================================
   AWARDS & RECOGNITION PAGE SEO METADATA
========================================================= */

export const metadata:
  Metadata = {
  title: {
    absolute:
      "Awards & Recognition | Steelbuild Infra Projects Limited",
  },

  description:
    "Explore the awards, recognitions, industry appreciation, magazine features and milestones achieved by Steelbuild Infra Projects Limited across PEB engineering, manufacturing and industrial project execution.",

  alternates: {
    canonical:
      "/about/awards-recognition",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Awards & Recognition | Steelbuild Infra Projects Limited",

    description:
      "Discover the awards, industry recognition, magazine features, client appreciation and milestones achieved by Steelbuild Infra Projects Limited.",

    images: [
      {
        url:
          "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited Awards and Recognition",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Awards & Recognition | Steelbuild Infra Projects Limited",

    description:
      "Explore Steelbuild Infra Projects Limited's awards, industry recognition, magazine features and milestones.",

    images: [
      "/images/about/about-hero.jpg",
    ],
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

/* =========================================================
   AWARDS & RECOGNITION PAGE
========================================================= */

export default async function AwardsPage() {
  let awards:
    SanityAward[] = [];

  try {
    awards =
      await sanityFetch<
        SanityAward[]
      >({
        query:
          FEATURED_AWARDS_QUERY,

        revalidate: 60,

        tags: [
          "awards",
        ],
      });
  } catch (error) {
    console.error(
      "Failed to fetch awards from Sanity:",
      error,
    );
  }

  /* =======================================================
     ABOUT PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type":
      "AboutPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Awards and Recognition of Steelbuild Infra Projects Limited",

    headline:
      "Awards, Recognition and Industry Appreciation",

    description:
      "Explore the awards, recognitions, industry appreciation, magazine features and milestones achieved by Steelbuild Infra Projects Limited across Pre-Engineered Building engineering, manufacturing and industrial project execution.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${siteUrl}/#organization`,
    },

    mainEntity: {
      "@id":
        `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id":
        `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type":
        "ImageObject",

      url:
        `${siteUrl}/images/about/about-hero.jpg`,
    },

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
      `${pageUrl}/#breadcrumb`,

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
          "About",

        item:
          `${siteUrl}/about`,
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name:
          "Awards & Recognition",

        item:
          pageUrl,
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
      breadcrumbSchema,
    ],
  };

  return (
    <>
      {/* ===================================================
          SEO / GEO STRUCTURED DATA
      =================================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              structuredData,
            ).replace(
              /</g,
              "\\u003c",
            ),
        }}
      />

      {/* ===================================================
          PAGE CONTENT
      =================================================== */}

      <AwardsHero />

      <FeaturedAwards
        awards={awards}
      />

      <AwardsTimeline />

      <RecognitionGrid />

      <MagazineFeatures />

      <ClientRecognition />

      <AwardsCTA />
    </>
  );
}