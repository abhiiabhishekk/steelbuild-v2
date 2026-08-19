import type { Metadata } from "next";

import CladdingHero from "@/components/cladding-systems-page/CladdingHero";
import CladdingOverview from "@/components/cladding-systems-page/CladdingOverview";
import CladdingAdvantages from "@/components/cladding-systems-page/CladdingAdvantages";
import CladdingTypes from "@/components/cladding-systems-page/CladdingTypes";
import CladdingApplications from "@/components/cladding-systems-page/CladdingApplications";
import CladdingProcess from "@/components/cladding-systems-page/CladdingProcess";
import CladdingCTA from "@/components/cladding-systems-page/CladdingCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/cladding-systems`;

/* =========================================================
   CLADDING SYSTEMS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Cladding Systems Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial cladding systems for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

  alternates: {
    canonical:
      "/products/cladding-systems",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Cladding Systems Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered wall and industrial cladding solutions for PEB buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

    images: [
      {
        url:
          "/images/products/cladding.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Cladding Systems for PEB and Steel Buildings in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Cladding Systems Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered industrial wall and cladding systems for PEB buildings, factories, warehouses and manufacturing facilities across India.",

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
   CLADDING SYSTEMS PAGE
========================================================= */

export default function CladdingSystemsPage() {
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
      "Industrial Cladding Systems Manufacturer in India",

    headline:
      "Engineered Cladding Systems for PEB and Industrial Steel Buildings",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial cladding systems for Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects across India.",

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
      "Industrial Cladding Systems",

    alternateName: [
      "Wall Cladding Systems",
      "PEB Cladding Systems",
      "Industrial Wall Cladding",
      "Steel Building Cladding",
      "Factory Cladding Systems",
      "Warehouse Cladding Systems",
      "Metal Cladding Systems",
    ],

    serviceType:
      "Industrial Cladding System Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for industrial cladding systems used in Pre-Engineered Buildings, factories, warehouses, manufacturing facilities and steel infrastructure projects.",

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
          pageUrl,
      },
    ],
  };

  /* =======================================================
     COMBINED SEO / GEO STRUCTURED DATA
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
        <CladdingHero />

        <CladdingOverview />

        <CladdingAdvantages />

        <CladdingTypes />

        <CladdingApplications />

        <CladdingProcess />

        <CladdingCTA />
      </main>
    </>
  );
}