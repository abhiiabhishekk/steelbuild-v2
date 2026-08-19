import type { Metadata } from "next";

import WallCladdingHero from "@/components/wall-cladding-page/WallCladdingHero";
import WallCladdingOverview from "@/components/wall-cladding-page/WallCladdingOverview";
import WallCladdingAdvantages from "@/components/wall-cladding-page/WallCladdingAdvantages";
import WallCladdingComponents from "@/components/wall-cladding-page/WallCladdingComponents";
import WallCladdingApplications from "@/components/wall-cladding-page/WallCladdingApplications";
import WallCladdingProcess from "@/components/wall-cladding-page/WallCladdingProcess";
import WallCladdingManufacturing from "@/components/wall-cladding-page/WallCladdingManufacturing";
import WallCladdingCTA from "@/components/wall-cladding-page/WallCladdingCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/cladding-systems/wall-cladding`;

/* =========================================================
   WALL CLADDING PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Wall Cladding Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial wall cladding systems for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

  alternates: {
    canonical:
      "/products/cladding-systems/wall-cladding",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Wall Cladding Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered industrial wall cladding systems for PEB buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

    images: [
      {
        url:
          "/images/products/cladding.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Wall Cladding Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Wall Cladding Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered wall cladding systems for PEB buildings, factories, warehouses and manufacturing facilities across India.",

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
   WALL CLADDING PAGE
========================================================= */

export default function WallCladdingPage() {
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
      "Industrial Wall Cladding Manufacturer in India",

    headline:
      "Engineered Wall Cladding Systems for PEB and Industrial Steel Buildings",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial wall cladding systems for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

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
      "Industrial Wall Cladding Systems",

    alternateName: [
      "Wall Cladding Systems",
      "Industrial Wall Cladding",
      "PEB Wall Cladding",
      "Steel Wall Cladding",
      "Factory Wall Cladding",
      "Warehouse Wall Cladding",
      "Metal Wall Cladding",
    ],

    serviceType:
      "Industrial Wall Cladding Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for industrial wall cladding systems used in Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects.",

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
          "Wall Cladding",

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
        <WallCladdingHero />

        <WallCladdingOverview />

        <WallCladdingAdvantages />

        <WallCladdingComponents />

        <WallCladdingApplications />

        <WallCladdingProcess />

        <WallCladdingManufacturing />

        <WallCladdingCTA />
      </main>
    </>
  );
}