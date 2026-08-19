import type { Metadata } from "next";

import RoofingSheetsHero from "@/components/roofing-sheets-page/RoofingSheetsHero";
import RoofingSheetsAdvantages from "@/components/roofing-sheets-page/RoofingSheetsAdvantages";
import RoofingSheetsOverview from "@/components/roofing-sheets-page/RoofingSheetsOverview";
import RoofingSheetsComponents from "@/components/roofing-sheets-page/RoofingSheetsComponents";
import RoofingSheetsApplications from "@/components/roofing-sheets-page/RoofingSheetsApplications";
import RoofingSheetsProcess from "@/components/roofing-sheets-page/RoofingSheetsProcess";
import RoofingSheetsManufacturing from "@/components/roofing-sheets-page/RoofingSheetsManufacturing";
import RoofingSheetsProfiles from "@/components/roofing-sheets-page/RoofingSheetsProfiles";
import RoofingSheetsCompatibleAccessories from "@/components/roofing-sheets-page/RoofingSheetsCompatibleAccessories";
import RoofingSheetsCTA from "@/components/roofing-sheets-page/RoofingSheetsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/roofing-systems/roofing-sheets`;

/* =========================================================
   ROOFING SHEETS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Roofing Sheets Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial roofing sheets for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

  alternates: {
    canonical:
      "/products/roofing-systems/roofing-sheets",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Roofing Sheets Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered roofing sheet solutions for PEB buildings, factories, warehouses, manufacturing facilities and industrial steel infrastructure projects across India.",

    images: [
      {
        url:
          "/images/products/roofing-sheets.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Roofing Sheets for PEB and Steel Buildings in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Roofing Sheets Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered industrial roofing sheets for PEB buildings, factories, warehouses and manufacturing facilities across India.",

    images: [
      "/images/products/roofing-sheets.jpg",
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
   ROOFING SHEETS PAGE
========================================================= */

export default function RoofingSheetsPage() {
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
      "Industrial Roofing Sheets Manufacturer in India",

    headline:
      "Engineered Roofing Sheets for PEB and Industrial Steel Buildings",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial roofing sheet solutions for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

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
        `${siteUrl}/images/products/roofing-sheets.jpg`,
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
      "Industrial Roofing Sheet Solutions",

    alternateName: [
      "Roofing Sheets",
      "Industrial Roofing Sheets",
      "PEB Roofing Sheets",
      "Steel Roofing Sheets",
      "Metal Roofing Sheets",
      "Factory Roofing Sheets",
      "Warehouse Roofing Sheets",
    ],

    serviceType:
      "Industrial Roofing Sheet Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for industrial roofing sheets used in Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects.",

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
          "Roofing Systems",

        item:
          `${siteUrl}/products/roofing-systems`,
      },

      {
        "@type":
          "ListItem",

        position: 4,

        name:
          "Roofing Sheets",

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
        <RoofingSheetsHero />

        <RoofingSheetsOverview />

        <RoofingSheetsAdvantages />

        <RoofingSheetsComponents />

        <RoofingSheetsApplications />

        <RoofingSheetsProcess />

        <RoofingSheetsManufacturing />

        <RoofingSheetsProfiles />

        <RoofingSheetsCompatibleAccessories />

        <RoofingSheetsCTA />
      </main>
    </>
  );
}