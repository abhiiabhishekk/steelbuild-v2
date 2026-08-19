import type { Metadata } from "next";

import PolycarbonateSheetsHero from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsHero";
import PolycarbonateSheetsOverview from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsOverview";
import PolycarbonateSheetsAdvantages from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsAdvantages";
import PolycarbonateSheetsComponents from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsComponents";
import PolycarbonateSheetsApplications from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsApplications";
import PolycarbonateSheetsProcess from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsProcess";
import PolycarbonateSheetsManufacturing from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsManufacturing";
import PolycarbonateSheetsCTA from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/cladding-systems/polycarbonate-sheets`;

/* =========================================================
   POLYCARBONATE SHEETS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Polycarbonate Sheets for Industrial Buildings in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited provides engineered polycarbonate sheet solutions for natural daylighting in Pre-Engineered Buildings, factories, warehouses, industrial facilities and steel infrastructure projects across India.",

  alternates: {
    canonical:
      "/products/cladding-systems/polycarbonate-sheets",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Polycarbonate Sheets for Industrial Buildings in India | Steelbuild Infra Projects",

    description:
      "Explore engineered polycarbonate sheet and daylighting solutions for PEB buildings, factories, warehouses and industrial steel structures across India.",

    images: [
      {
        url:
          "/images/products/cladding.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Polycarbonate Sheet and Industrial Daylighting Solutions in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Polycarbonate Sheets for Industrial Buildings in India | Steelbuild Infra Projects",

    description:
      "Engineered polycarbonate sheet and daylighting solutions for PEB buildings, factories, warehouses and industrial facilities across India.",

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
   POLYCARBONATE SHEETS PAGE
========================================================= */

export default function PolycarbonateSheetsPage() {
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
      "Polycarbonate Sheets for Industrial Buildings in India",

    headline:
      "Engineered Polycarbonate Sheet and Industrial Daylighting Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered polycarbonate sheet solutions for natural daylighting in Pre-Engineered Buildings, factories, warehouses, industrial facilities and steel infrastructure projects across India.",

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
      "Industrial Polycarbonate Sheet Solutions",

    alternateName: [
      "Polycarbonate Sheets",
      "Industrial Polycarbonate Sheets",
      "PEB Polycarbonate Sheets",
      "Daylighting Sheets",
      "Rooflight Sheets",
      "Skylight Sheets",
      "Industrial Daylighting Systems",
    ],

    serviceType:
      "Industrial Polycarbonate Sheet and Daylighting Solutions",

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
      "Engineering and project solutions for polycarbonate sheets and daylighting systems used in Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and industrial steel structures.",

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
          "Polycarbonate Sheets",

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
        <PolycarbonateSheetsHero />

        <PolycarbonateSheetsOverview />

        <PolycarbonateSheetsAdvantages />

        <PolycarbonateSheetsComponents />

        <PolycarbonateSheetsApplications />

        <PolycarbonateSheetsProcess />

        <PolycarbonateSheetsManufacturing />

        <PolycarbonateSheetsCTA />
      </main>
    </>
  );
}