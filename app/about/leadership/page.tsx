import type {
  Metadata,
} from "next";

import LeadershipHero from "@/components/leadership-page/LeadershipHero";
import LeadershipSection from "@/components/team-page/LeadershipSection";
import DirectorsMessageSection from "@/components/directors-message/DirectorsMessageSection";
import LeadershipHashScroll from "@/components/leadership-page/LeadershipHashScroll";

import {
  sanityFetch,
} from "@/sanity/lib/fetch";

import {
  LEADERSHIP_MEMBERS_QUERY,
} from "@/sanity/lib/leadershipQueries";

import type {
  SanityLeadershipMember,
} from "@/types/sanityLeadershipMember";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/about/leadership`;

/* =========================================================
   LEADERSHIP PAGE SEO METADATA
========================================================= */

export const metadata:
  Metadata = {
  title: {
    absolute:
      "Leadership | Steelbuild Infra Projects Limited",
  },

  description:
    "Meet the leadership of Steelbuild Infra Projects Limited and discover the experience, vision, strategic direction and leadership principles guiding PEB engineering, manufacturing and industrial project execution across India.",

  alternates: {
    canonical:
      "/about/leadership",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Leadership | Steelbuild Infra Projects Limited",

    description:
      "Meet the leaders guiding Steelbuild Infra Projects Limited across Pre-Engineered Building engineering, manufacturing, quality, growth and industrial project execution.",

    images: [
      {
        url:
          "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Leadership of Steelbuild Infra Projects Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Leadership | Steelbuild Infra Projects Limited",

    description:
      "Meet the leadership team guiding Steelbuild Infra Projects Limited across engineering, manufacturing and industrial growth.",

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

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

/* =========================================================
   LEADERSHIP PAGE
========================================================= */

export default async function LeadershipPage() {
  let leaders:
    SanityLeadershipMember[] = [];

  try {
    leaders =
      await sanityFetch<
        SanityLeadershipMember[]
      >({
        query:
          LEADERSHIP_MEMBERS_QUERY,

        revalidate: 60,

        tags: [
          "leadership-members",
        ],
      });
  } catch (error) {
    console.error(
      "Failed to fetch leadership members from Sanity:",
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
      "Leadership of Steelbuild Infra Projects Limited",

    headline:
      "Leadership Team and Directors of Steelbuild Infra Projects Limited",

    description:
      "Meet the leadership of Steelbuild Infra Projects Limited and discover the experience, vision, strategic direction and leadership principles guiding Pre-Engineered Building engineering, manufacturing and industrial project execution across India.",

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
          "Leadership",

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

      <LeadershipHashScroll />

      <LeadershipHero />

      <LeadershipSection
        leaders={leaders}
      />

      <DirectorsMessageSection
        leaders={leaders}
      />
    </>
  );
}