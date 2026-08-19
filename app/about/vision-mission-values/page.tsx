import type { Metadata } from "next";

import VisionMissionHero from "@/components/vision-mission-page/VisionMissionHero";
import VisionMission from "@/components/about-page/VisionMission";
import CoreValues from "@/components/about-page/CoreValues";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/about/vision-mission-values`;

/* =========================================================
   VISION, MISSION & VALUES PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Vision, Mission & Core Values | Steelbuild Infra Projects Limited",
  },

  description:
    "Discover the vision, mission and core values of Steelbuild Infra Projects Limited guiding our Pre-Engineered Building engineering, manufacturing, quality, innovation and project execution across India.",

  alternates: {
    canonical:
      "/about/vision-mission-values",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Vision, Mission & Core Values | Steelbuild Infra Projects Limited",

    description:
      "Explore the vision, mission and values guiding Steelbuild Infra Projects Limited across PEB engineering, manufacturing, quality, innovation and industrial project execution.",

    images: [
      {
        url:
          "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited Vision Mission and Core Values",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Vision, Mission & Core Values | Steelbuild Infra Projects Limited",

    description:
      "Explore the vision, mission and core values guiding Steelbuild Infra Projects Limited across engineering, manufacturing and project execution.",

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
   VISION, MISSION & VALUES PAGE
========================================================= */

export default function VisionMissionValuesPage() {
  /* =======================================================
     ABOUT PAGE / WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "AboutPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Vision, Mission and Core Values of Steelbuild Infra Projects Limited",

    headline:
      "Our Vision, Mission and Core Values",

    description:
      "The vision, mission and core values guiding Steelbuild Infra Projects Limited across Pre-Engineered Building engineering, manufacturing, quality, innovation and industrial project execution across India.",

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
          "Vision, Mission & Values",

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
          __html: JSON.stringify(
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

      <VisionMissionHero />

      <VisionMission />

      <CoreValues />
    </>
  );
}