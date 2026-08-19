import type { Metadata } from "next";

import WarehouseHero from "@/components/warehouse-buildings-page/WarehouseHero";
import WarehouseOverview from "@/components/warehouse-buildings-page/WarehouseOverview";
import WarehouseAdvantages from "@/components/warehouse-buildings-page/WarehouseAdvantages";
import WarehouseSystems from "@/components/warehouse-buildings-page/WarehouseSystems";
import WarehouseApplications from "@/components/warehouse-buildings-page/WarehouseApplications";
import WarehouseProcess from "@/components/warehouse-buildings-page/WarehouseProcess";
import WarehouseCTA from "@/components/warehouse-buildings-page/WarehouseCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/products/warehouse-buildings`;

/* =========================================================
   WAREHOUSE BUILDINGS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Warehouse Building Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered warehouse buildings and PEB warehouse solutions for logistics, e-commerce, distribution, industrial storage and large-scale warehousing projects across India.",

  alternates: {
    canonical: "/products/warehouse-buildings",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName: "Steelbuild Infra Projects Limited",

    title:
      "Warehouse Building Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered warehouse and PEB building solutions for logistics, e-commerce, distribution centers, industrial storage and warehousing infrastructure across India.",

    images: [
      {
        url: "/images/products/warehouse.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Warehouse Building and PEB Warehouse Solutions in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Warehouse Building Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered warehouse buildings and PEB warehouse solutions for logistics, distribution, e-commerce and industrial storage projects across India.",

    images: ["/images/products/warehouse.jpg"],
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
   WAREHOUSE BUILDINGS PAGE
========================================================= */

export default function WarehouseBuildingsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "WebPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name: "Warehouse Building Manufacturer in India",

    headline:
      "Engineered Warehouse and PEB Building Solutions",

    description:
      "Steelbuild Infra Projects Limited provides engineered warehouse buildings and Pre-Engineered Building solutions for logistics, e-commerce, distribution, industrial storage and large-scale warehousing projects across India.",

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

      url: `${siteUrl}/images/products/warehouse.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type": "Service",

    "@id": `${pageUrl}/#service`,

    name: "Warehouse Building Solutions",

    alternateName: [
      "PEB Warehouse Buildings",
      "Steel Warehouse Buildings",
      "Industrial Warehouses",
      "Logistics Warehouses",
      "Warehouse Sheds",
    ],

    serviceType:
      "Warehouse Building Engineering, Manufacturing and Project Execution",

    url: pageUrl,

    provider: {
      "@id": `${siteUrl}/#organization`,
    },

    areaServed: {
      "@type": "Country",

      name: "India",
    },

    description:
      "Engineering, manufacturing and project execution solutions for warehouse buildings used in logistics, e-commerce, distribution centers, industrial storage and warehousing infrastructure projects.",

    audience: {
      "@type": "BusinessAudience",

      audienceType:
        "Warehousing, Logistics, E-Commerce, Distribution and Industrial Businesses",
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

        name: "Warehouse Buildings",

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
        <WarehouseHero />

        <WarehouseOverview />

        <WarehouseAdvantages />

        <WarehouseSystems />

        <WarehouseApplications />

        <WarehouseProcess />

        <WarehouseCTA />
      </main>
    </>
  );
}