import type { Metadata } from "next";

import TurboVentilatorsHero from "@/components/turbo-ventilators-page/TurboVentilatorsHero";
import TurboVentilatorsOverview from "@/components/turbo-ventilators-page/TurboVentilatorsOverview";
import TurboVentilatorsAdvantages from "@/components/turbo-ventilators-page/TurboVentilatorsAdvantages";
import TurboVentilatorsComponents from "@/components/turbo-ventilators-page/TurboVentilatorsComponents";
import TurboVentilatorsApplications from "@/components/turbo-ventilators-page/TurboVentilatorsApplications";
import TurboVentilatorsProcess from "@/components/turbo-ventilators-page/TurboVentilatorsProcess";
import TurboVentilatorsManufacturing from "@/components/turbo-ventilators-page/TurboVentilatorsManufacturing";
import TurboVentilatorsCTA from "@/components/turbo-ventilators-page/TurboVentilatorsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/roofing-systems/turbo-ventilators`;

/* =========================================================
   TURBO VENTILATORS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Turbo Ventilators Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered turbo ventilators and industrial roof ventilation systems for factories, warehouses, Pre-Engineered Buildings, manufacturing facilities and industrial steel structures across India.",

  alternates: {
    canonical:
      "/products/roofing-systems/turbo-ventilators",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Turbo Ventilators Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered turbo ventilators and industrial roof ventilation systems for factories, warehouses, PEB buildings and manufacturing facilities across India.",

    images: [
      {
        url:
          "/images/products/turbo-ventilators.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Turbo Ventilators and Roof Ventilation Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Turbo Ventilators Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered turbo ventilators and industrial roof ventilation systems for factories, warehouses and PEB buildings across India.",

    images: [
      "/images/products/turbo-ventilators.jpg",
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
   TURBO VENTILATORS PAGE
========================================================= */

export default function TurboVentilatorsPage() {
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
      "Industrial Turbo Ventilators Manufacturer in India",

    headline:
      "Engineered Turbo Ventilators and Industrial Roof Ventilation Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered turbo ventilators and industrial roof ventilation systems for factories, warehouses, Pre-Engineered Buildings, manufacturing facilities and industrial steel structures across India.",

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
        `${siteUrl}/images/products/turbo-ventilators.jpg`,
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
      "Industrial Turbo Ventilation Systems",

    alternateName: [
      "Turbo Ventilators",
      "Industrial Turbo Ventilators",
      "Roof Turbo Ventilators",
      "PEB Turbo Ventilators",
      "Factory Roof Ventilators",
      "Warehouse Roof Ventilators",
    ],

    serviceType:
      "Industrial Turbo Ventilator Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for turbo ventilator systems used in factories, warehouses, Pre-Engineered Buildings, manufacturing facilities and industrial steel structures.",

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
          "Turbo Ventilators",

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
        <TurboVentilatorsHero />

        <TurboVentilatorsOverview />

        <TurboVentilatorsAdvantages />

        <TurboVentilatorsComponents />

        <TurboVentilatorsApplications />

        <TurboVentilatorsProcess />

        <TurboVentilatorsManufacturing />

        <TurboVentilatorsCTA />
      </main>
    </>
  );
}