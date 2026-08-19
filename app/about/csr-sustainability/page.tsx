import type { Metadata } from "next";

import CSRHero from "@/components/csr-page/CSRHero";
import SustainabilityCommitment from "@/components/csr-page/SustainabilityCommitment";
import ESGHighlights from "@/components/csr-page/ESGHighlights";
import CommunityImpact from "@/components/csr-page/CommunityImpact";
import CSRCTA from "@/components/csr-page/CSRCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/about/csr-sustainability`;

/* =========================================================
   CSR & SUSTAINABILITY PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "CSR & Sustainability | Steelbuild Infra Projects Limited",
  },

  description:
    "Explore Steelbuild Infra Projects Limited's approach to environmental responsibility, sustainable manufacturing, employee welfare, ESG priorities and community development across India.",

  alternates: {
    canonical:
      "/about/csr-sustainability",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "CSR & Sustainability | Steelbuild Infra Projects Limited",

    description:
      "Discover Steelbuild Infra Projects Limited's commitment to environmental responsibility, sustainable manufacturing, employee welfare, ESG priorities and community development.",

    images: [
      {
        url:
          "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited CSR and Sustainability Initiatives",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "CSR & Sustainability | Steelbuild Infra Projects Limited",

    description:
      "Explore Steelbuild Infra Projects Limited's sustainability, ESG, employee welfare and community development initiatives.",

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
   CSR & SUSTAINABILITY PAGE
========================================================= */

export default function CSRSustainabilityPage() {
  /* =======================================================
     ABOUT PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "AboutPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "CSR and Sustainability at Steelbuild Infra Projects Limited",

    headline:
      "Corporate Social Responsibility and Sustainability",

    description:
      "Steelbuild Infra Projects Limited focuses on environmental responsibility, sustainable manufacturing, employee welfare, ESG priorities and community development as part of its long-term commitment to responsible industrial growth.",

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
          "CSR & Sustainability",

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

      <CSRHero />

      <SustainabilityCommitment />

      <ESGHighlights />

      <CommunityImpact />

      <CSRCTA />
    </>
  );
}