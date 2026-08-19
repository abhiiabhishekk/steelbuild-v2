import type { Metadata } from "next";

import LouversHero from "@/components/louvers-page/LouversHero";
import LouversOverview from "@/components/louvers-page/LouversOverview";
import LouversAdvantages from "@/components/louvers-page/LouversAdvantages";
import LouversComponents from "@/components/louvers-page/LouversComponents";
import LouversApplications from "@/components/louvers-page/LouversApplications";
import LouversProcess from "@/components/louvers-page/LouversProcess";
import LouversManufacturing from "@/components/louvers-page/LouversManufacturing";
import LouversCTA from "@/components/louvers-page/LouversCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/cladding-systems/louvers`;

/* =========================================================
   INDUSTRIAL LOUVERS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Louvers Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial louvers and ventilation systems for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and industrial steel structures across India.",

  alternates: {
    canonical:
      "/products/cladding-systems/louvers",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Louvers Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered industrial louvers and ventilation systems for PEB buildings, factories, warehouses, manufacturing facilities and industrial steel structures across India.",

    images: [
      {
        url:
          "/images/products/cladding.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Louvers and Ventilation Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Louvers Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered industrial louvers and ventilation systems for PEB buildings, factories, warehouses and manufacturing facilities across India.",

    images: [
      "/images/products/cladding.jpg",
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
   INDUSTRIAL LOUVERS PAGE
========================================================= */

export default function LouversPage() {
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
      "Industrial Louvers Manufacturer in India",

    headline:
      "Engineered Industrial Louvers and Ventilation Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial louvers and ventilation systems for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and industrial steel structures across India.",

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
        `${siteUrl}/images/products/cladding.jpg`,
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
      "Industrial Louver Systems",

    alternateName: [
      "Industrial Louvers",
      "Ventilation Louvers",
      "PEB Louvers",
      "Factory Louvers",
      "Warehouse Louvers",
      "Wall Louvers",
      "Industrial Ventilation Louvers",
    ],

    serviceType:
      "Industrial Louver Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for industrial louver and ventilation systems used in Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and industrial steel structures.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing, Logistics and Infrastructure Businesses",
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
          "Cladding Systems",

        item:
          `${siteUrl}/products/cladding-systems`,
      },

      {
        "@type":
          "ListItem",

        position: 4,

        name:
          "Louvers",

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

      <main>
        <LouversHero />

        <LouversOverview />

        <LouversAdvantages />

        <LouversComponents />

        <LouversApplications />

        <LouversProcess />

        <LouversManufacturing />

        <LouversCTA />
      </main>
    </>
  );
}