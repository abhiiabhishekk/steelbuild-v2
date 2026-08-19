import type { Metadata } from "next";

import RidgeVentilatorsHero from "@/components/ridge-ventilators-page/RidgeVentilatorsHero";
import RidgeVentilatorsOverview from "@/components/ridge-ventilators-page/RidgeVentilatorsOverview";
import RidgeVentilatorsAdvantages from "@/components/ridge-ventilators-page/RidgeVentilatorsAdvantages";
import RidgeVentilatorsComponents from "@/components/ridge-ventilators-page/RidgeVentilatorsComponents";
import RidgeVentilatorsApplications from "@/components/ridge-ventilators-page/RidgeVentilatorsApplications";
import RidgeVentilatorsProcess from "@/components/ridge-ventilators-page/RidgeVentilatorsProcess";
import RidgeVentilatorsManufacturing from "@/components/ridge-ventilators-page/RidgeVentilatorsManufacturing";
import RidgeVentilatorsCTA from "@/components/ridge-ventilators-page/RidgeVentilatorsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/roofing-systems/ridge-ventilators`;

/* =========================================================
   RIDGE VENTILATORS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Ridge Ventilators Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered ridge ventilators and natural ventilation systems for factories, warehouses, Pre-Engineered Buildings, manufacturing facilities and industrial steel structures across India.",

  alternates: {
    canonical:
      "/products/roofing-systems/ridge-ventilators",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Ridge Ventilators Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered ridge ventilators and natural ventilation systems for factories, warehouses, PEB buildings, manufacturing facilities and industrial steel structures across India.",

    images: [
      {
        url:
          "/images/products/ridge-ventilators.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Ridge Ventilators and Natural Ventilation Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Ridge Ventilators Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered ridge ventilators and natural ventilation systems for factories, warehouses and PEB buildings across India.",

    images: [
      "/images/products/ridge-ventilators.jpg",
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
   RIDGE VENTILATORS PAGE
========================================================= */

export default function RidgeVentilatorsPage() {
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
      "Industrial Ridge Ventilators Manufacturer in India",

    headline:
      "Engineered Ridge Ventilators and Natural Ventilation Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered ridge ventilators and natural ventilation systems for factories, warehouses, Pre-Engineered Buildings, manufacturing facilities and industrial steel structures across India.",

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
        `${siteUrl}/images/products/ridge-ventilators.jpg`,
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
      "Industrial Ridge Ventilation Systems",

    alternateName: [
      "Ridge Ventilators",
      "Industrial Ridge Ventilators",
      "Natural Ridge Ventilation",
      "PEB Ridge Ventilators",
      "Factory Ridge Ventilators",
      "Warehouse Ridge Ventilators",
    ],

    serviceType:
      "Industrial Ridge Ventilator Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for ridge ventilation systems used in factories, warehouses, Pre-Engineered Buildings, manufacturing facilities and industrial steel structures.",

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
          "Ridge Ventilators",

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
        <RidgeVentilatorsHero />

        <RidgeVentilatorsOverview />

        <RidgeVentilatorsAdvantages />

        <RidgeVentilatorsComponents />

        <RidgeVentilatorsApplications />

        <RidgeVentilatorsProcess />

        <RidgeVentilatorsManufacturing />

        <RidgeVentilatorsCTA />
      </main>
    </>
  );
}