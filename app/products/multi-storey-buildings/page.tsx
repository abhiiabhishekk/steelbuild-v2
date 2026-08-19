import type { Metadata } from "next";

import MultiStoreyHero from "@/components/multi-storey-buildings-page/MultiStoreyHero";
import MultiStoreyOverview from "@/components/multi-storey-buildings-page/MultiStoreyOverview";
import MultiStoreyAdvantages from "@/components/multi-storey-buildings-page/MultiStoreyAdvantages";
import MultiStoreySystems from "@/components/multi-storey-buildings-page/MultiStoreySystems";
import MultiStoreyApplications from "@/components/multi-storey-buildings-page/MultiStoreyApplications";
import MultiStoreyProcess from "@/components/multi-storey-buildings-page/MultiStoreyProcess";
import MultiStoreyCTA from "@/components/multi-storey-buildings-page/MultiStoreyCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/multi-storey-buildings`;

/* =========================================================
   MULTI-STOREY BUILDINGS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Multi-Storey Steel Buildings Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered multi-storey steel buildings for industrial, commercial, office, manufacturing and infrastructure applications across India.",

  alternates: {
    canonical:
      "/products/multi-storey-buildings",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Multi-Storey Steel Buildings Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered multi-level steel building solutions for industrial, commercial, office, manufacturing and infrastructure projects across India.",

    images: [
      {
        url:
          "/images/products/multi-storey-building-v2.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Multi-Storey Steel Building Solutions in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Multi-Storey Steel Buildings Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered multi-storey steel buildings for industrial, commercial, office and manufacturing applications across India.",

    images: [
      "/images/products/multi-storey-building-v2.jpg",
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
   MULTI-STOREY BUILDINGS PAGE
========================================================= */

export default function MultiStoreyBuildingsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Multi-Storey Steel Buildings Manufacturer in India",

    headline:
      "Engineered Multi-Storey Steel Building Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered multi-storey steel building solutions for industrial, commercial, office, manufacturing and infrastructure applications across India.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${pageUrl}/#service`,
    },

    breadcrumb: {
      "@id":
        `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type":
        "ImageObject",

      url:
        `${siteUrl}/images/products/multi-storey-building-v2.jpg`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id":
      `${pageUrl}/#service`,

    name:
      "Multi-Storey Steel Building Solutions",

    alternateName: [
      "Multi-Storey Steel Buildings",
      "Multi-Level Steel Buildings",
      "Steel Frame Multi-Storey Buildings",
      "Industrial Multi-Storey Buildings",
    ],

    serviceType:
      "Multi-Storey Steel Building Engineering, Manufacturing and Project Execution",

    url:
      pageUrl,

    provider: {
      "@id":
        `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type":
        "Country",

      name:
        "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for multi-storey steel buildings used in industrial, commercial, office, manufacturing and infrastructure projects.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Commercial, Manufacturing and Infrastructure Businesses",
    },
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
          "Products",

        item:
          `${siteUrl}/products`,
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name:
          "Multi-Storey Buildings",

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
      serviceSchema,
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

      <MultiStoreyHero />

      <MultiStoreyOverview />

      <MultiStoreyAdvantages />

      <MultiStoreySystems />

      <MultiStoreyApplications />

      <MultiStoreyProcess />

      <MultiStoreyCTA />
    </>
  );
}