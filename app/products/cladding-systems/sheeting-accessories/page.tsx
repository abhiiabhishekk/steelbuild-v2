import type { Metadata } from "next";

import SheetingAccessoriesHero from "@/components/sheeting-accessories-page/SheetingAccessoriesHero";
import SheetingAccessoriesOverview from "@/components/sheeting-accessories-page/SheetingAccessoriesOverview";
import SheetingAccessoriesAdvantages from "@/components/sheeting-accessories-page/SheetingAccessoriesAdvantages";
import SheetingAccessoriesComponents from "@/components/sheeting-accessories-page/SheetingAccessoriesComponents";
import SheetingAccessoriesApplications from "@/components/sheeting-accessories-page/SheetingAccessoriesApplications";
import SheetingAccessoriesProcess from "@/components/sheeting-accessories-page/SheetingAccessoriesProcess";
import SheetingAccessoriesManufacturing from "@/components/sheeting-accessories-page/SheetingAccessoriesManufacturing";
import SheetingAccessoriesCTA from "@/components/sheeting-accessories-page/SheetingAccessoriesCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/cladding-systems/sheeting-accessories`;

/* =========================================================
   SHEETING ACCESSORIES PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Sheeting Accessories in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited provides engineered sheeting accessories for Pre-Engineered Buildings, roofing and cladding systems, factories, warehouses and industrial steel structures across India.",

  alternates: {
    canonical:
      "/products/cladding-systems/sheeting-accessories",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Sheeting Accessories in India | Steelbuild Infra Projects",

    description:
      "Explore engineered roofing and cladding sheeting accessories for PEB buildings, factories, warehouses and industrial steel structures across India.",

    images: [
      {
        url:
          "/images/products/cladding.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Sheeting Accessories for Roofing and Cladding Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Sheeting Accessories in India | Steelbuild Infra Projects",

    description:
      "Engineered sheeting accessories for roofing, cladding, PEB buildings, factories and warehouses across India.",

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
   SHEETING ACCESSORIES PAGE
========================================================= */

export default function SheetingAccessoriesPage() {
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
      "Industrial Sheeting Accessories in India",

    headline:
      "Engineered Sheeting Accessories for Roofing and Cladding Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered sheeting accessories for Pre-Engineered Buildings, roofing and cladding systems, factories, warehouses and industrial steel structures across India.",

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
      "Industrial Sheeting Accessories",

    alternateName: [
      "Roofing Accessories",
      "Cladding Accessories",
      "PEB Sheeting Accessories",
      "Roof Flashings",
      "Cladding Flashings",
      "Roofing Trim Accessories",
      "Industrial Sheeting Components",
    ],

    serviceType:
      "Roofing and Cladding Sheeting Accessory Solutions",

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
      "Engineering and project solutions for sheeting accessories used in Pre-Engineered Buildings, roofing systems, wall cladding systems, factories, warehouses and industrial steel structures.",

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
          "Sheeting Accessories",

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
        <SheetingAccessoriesHero />

        <SheetingAccessoriesOverview />

        <SheetingAccessoriesAdvantages />

        <SheetingAccessoriesComponents />

        <SheetingAccessoriesApplications />

        <SheetingAccessoriesProcess />

        <SheetingAccessoriesManufacturing />

        <SheetingAccessoriesCTA />
      </main>
    </>
  );
}