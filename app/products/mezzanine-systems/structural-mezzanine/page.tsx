import type { Metadata } from "next";

import StructuralMezzanineHero from "@/components/structural-mezzanine-page/StructuralMezzanineHero";
import StructuralMezzanineOverview from "@/components/structural-mezzanine-page/StructuralMezzanineOverview";
import StructuralMezzanineAdvantages from "@/components/structural-mezzanine-page/StructuralMezzanineAdvantages";
import StructuralMezzanineComponents from "@/components/structural-mezzanine-page/StructuralMezzanineComponents";
import StructuralMezzanineApplications from "@/components/structural-mezzanine-page/StructuralMezzanineApplications";
import StructuralMezzanineCTA from "@/components/structural-mezzanine-page/StructuralMezzanineCTA";
import StructuralMezzanineProcess from "@/components/structural-mezzanine-page/StructuralMezzanineProcess";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/mezzanine-systems/structural-mezzanine`;

/* =========================================================
   STRUCTURAL MEZZANINE PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Structural Mezzanine Floor Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered structural mezzanine floors for warehouses, factories, industrial facilities, storage areas and heavy-duty space optimization applications across India.",

  alternates: {
    canonical:
      "/products/mezzanine-systems/structural-mezzanine",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Structural Mezzanine Floor Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered structural mezzanine floor systems for warehouses, factories, industrial facilities, storage areas and heavy-duty space optimization projects across India.",

    images: [
      {
        url:
          "/images/products/mezzanine-floor.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Structural Mezzanine Floor Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Structural Mezzanine Floor Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered structural mezzanine floor systems for warehouses, factories, industrial facilities and heavy-duty storage applications across India.",

    images: [
      "/images/products/mezzanine-floor.jpg",
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
   STRUCTURAL MEZZANINE PAGE
========================================================= */

export default function StructuralMezzaninePage() {
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
      "Structural Mezzanine Floor Manufacturer in India",

    headline:
      "Engineered Structural Mezzanine Floor Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered structural mezzanine floor systems for warehouses, factories, industrial facilities, storage areas and heavy-duty space optimization applications across India.",

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
        `${siteUrl}/images/products/mezzanine-floor.jpg`,
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
      "Structural Mezzanine Floor Systems",

    alternateName: [
      "Structural Mezzanine Floors",
      "Steel Structural Mezzanine",
      "Industrial Structural Mezzanine",
      "Warehouse Structural Mezzanine",
      "Heavy-Duty Mezzanine Floors",
    ],

    serviceType:
      "Structural Mezzanine Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for structural mezzanine floor systems used in warehouses, factories, industrial facilities, storage areas and heavy-duty space optimization projects.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Warehousing, Manufacturing, Industrial, Logistics and Storage Businesses",
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
          "Mezzanine Systems",

        item:
          `${siteUrl}/products/mezzanine-systems`,
      },

      {
        "@type":
          "ListItem",

        position: 4,

        name:
          "Structural Mezzanine",

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
        <StructuralMezzanineHero />

        <StructuralMezzanineOverview />

        <StructuralMezzanineAdvantages />

        <StructuralMezzanineComponents />

        <StructuralMezzanineApplications />

        <StructuralMezzanineProcess />

        <StructuralMezzanineCTA />
      </main>
    </>
  );
}