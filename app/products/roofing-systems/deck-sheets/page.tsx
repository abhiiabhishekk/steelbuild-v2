import type { Metadata } from "next";

import DeckSheetsHero from "@/components/deck-sheets-page/DeckSheetsHero";
import DeckSheetsOverview from "@/components/deck-sheets-page/DeckSheetsOverview";
import DeckSheetsAdvantages from "@/components/deck-sheets-page/DeckSheetsAdvantages";
import DeckSheetsComponents from "@/components/deck-sheets-page/DeckSheetsComponents";
import DeckSheetsApplications from "@/components/deck-sheets-page/DeckSheetsApplications";
import DeckSheetsProcess from "@/components/deck-sheets-page/DeckSheetsProcess";
import DeckSheetsManufacturing from "@/components/deck-sheets-page/DeckSheetsManufacturing";
import DeckSheetsCTA from "@/components/deck-sheets-page/DeckSheetsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/roofing-systems/deck-sheets`;

/* =========================================================
   DECK SHEETS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Deck Sheets Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered deck sheets and steel decking systems for industrial buildings, multi-storey structures, mezzanine floors, warehouses and composite floor applications across India.",

  alternates: {
    canonical:
      "/products/roofing-systems/deck-sheets",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Deck Sheets Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered deck sheets and steel decking systems for industrial buildings, multi-storey structures, mezzanine floors, warehouses and composite floor applications across India.",

    images: [
      {
        url:
          "/images/products/deck-sheets.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Deck Sheets and Steel Decking Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Deck Sheets Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered deck sheets and steel decking systems for industrial buildings, multi-storey structures and composite floor applications across India.",

    images: [
      "/images/products/deck-sheets.jpg",
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
   DECK SHEETS PAGE
========================================================= */

export default function DeckSheetsPage() {
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
      "Deck Sheets Manufacturer in India",

    headline:
      "Engineered Steel Deck Sheets for Industrial and Composite Floor Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered deck sheets and steel decking systems for industrial buildings, multi-storey structures, mezzanine floors, warehouses and composite floor applications across India.",

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
        `${siteUrl}/images/products/deck-sheets.jpg`,
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
      "Steel Deck Sheet Systems",

    alternateName: [
      "Deck Sheets",
      "Steel Decking Sheets",
      "Metal Deck Sheets",
      "Floor Deck Sheets",
      "Composite Deck Sheets",
      "Industrial Decking Systems",
    ],

    serviceType:
      "Deck Sheet Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for steel deck sheets used in industrial buildings, multi-storey structures, mezzanine floors, warehouses and composite floor systems.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Commercial, Manufacturing, Warehousing and Infrastructure Businesses",
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
          "Roofing Systems",

        item:
          `${siteUrl}/products/roofing-systems`,
      },

      {
        "@type":
          "ListItem",

        position: 4,

        name:
          "Deck Sheets",

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
        <DeckSheetsHero />

        <DeckSheetsOverview />

        <DeckSheetsAdvantages />

        <DeckSheetsComponents />

        <DeckSheetsApplications />

        <DeckSheetsProcess />

        <DeckSheetsManufacturing />

        <DeckSheetsCTA />
      </main>
    </>
  );
}