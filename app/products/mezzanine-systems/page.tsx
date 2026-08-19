import type { Metadata } from "next";

import MezzanineHero from "@/components/mezzanine-systems-page/MezzanineHero";
import MezzanineOverview from "@/components/mezzanine-systems-page/MezzanineOverview";
import MezzanineAdvantages from "@/components/mezzanine-systems-page/MezzanineAdvantages";
import MezzanineComponents from "@/components/mezzanine-systems-page/MezzanineComponents";
import MezzanineApplications from "@/components/mezzanine-systems-page/MezzanineApplications";
import MezzanineProcess from "@/components/mezzanine-systems-page/MezzanineProcess";
import MezzanineCTA from "@/components/mezzanine-systems-page/MezzanineCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/products/mezzanine-systems`;

/* =========================================================
   MEZZANINE SYSTEMS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Mezzanine Floor Systems Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered steel mezzanine floor systems for warehouses, factories, industrial facilities, storage areas and space optimization projects across India.",

  alternates: {
    canonical: "/products/mezzanine-systems",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Mezzanine Floor Systems Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered steel mezzanine systems for warehouses, factories, industrial facilities, storage applications and efficient space optimization across India.",

    images: [
      {
        url: "/images/products/mezzanine-floor.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Steel Mezzanine Floor Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Mezzanine Floor Systems Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered steel mezzanine floor systems for warehouses, factories, industrial facilities and storage applications across India.",

    images: ["/images/products/mezzanine-floor.jpg"],
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
   MEZZANINE SYSTEMS PAGE
========================================================= */

export default function MezzanineSystemsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: "Mezzanine Floor Systems Manufacturer in India",

    headline:
      "Engineered Steel Mezzanine Floor Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered steel mezzanine floor systems for warehouses, factories, industrial facilities, storage areas and space optimization applications across India.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${pageUrl}/#service`,
    },

    breadcrumb: {
      "@id": `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",

      url: `${siteUrl}/images/products/mezzanine-floor.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}/#service`,

    name: "Mezzanine Floor Systems",

    alternateName: [
      "Steel Mezzanine Floors",
      "Industrial Mezzanine Systems",
      "Warehouse Mezzanine Floors",
      "Factory Mezzanine Floors",
      "Structural Mezzanine Systems",
    ],

    serviceType:
      "Mezzanine Floor Engineering, Manufacturing and Project Execution",

    url: pageUrl,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for steel mezzanine systems used in warehouses, factories, industrial facilities, storage areas and space optimization projects.",

    audience: {
      "@type": "BusinessAudience",

      audienceType:
        "Warehousing, Manufacturing, Industrial, Storage and Logistics Businesses",
    },
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",

    "@id": `${pageUrl}/#breadcrumb`,

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: siteUrl,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Products",

        item: `${siteUrl}/products`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: "Mezzanine Systems",

        item: pageUrl,
      },
    ],
  };

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
    "@context": "https://schema.org",

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
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      {/* ===================================================
          PAGE CONTENT
      =================================================== */}

      <main>
        <MezzanineHero />

        <MezzanineOverview />

        <MezzanineAdvantages />

        <MezzanineComponents />

        <MezzanineApplications />

        <MezzanineProcess />

        <MezzanineCTA />
      </main>
    </>
  );
}