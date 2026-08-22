import type { Metadata } from "next";

import PEBHero from "@/components/pre-engineered-buildings-page/PEBHero";
import PEBOverview from "@/components/pre-engineered-buildings-page/PEBOverview";
import PEBFeatures from "@/components/pre-engineered-buildings-page/PEBFeatures";
import PEBApplications from "@/components/pre-engineered-buildings-page/PEBApplications";
import PEBProcess from "@/components/pre-engineered-buildings-page/PEBProcess";
import PEBCTA from "@/components/pre-engineered-buildings-page/PEBCTA";
import PEBStructuralSystems from "@/components/pre-engineered-buildings-page/PEBStructuralSystems";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/pre-engineered-buildings`;

/* =========================================================
   PRE-ENGINEERED BUILDINGS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "PEB Company & Pre-Engineered Building Manufacturer in India | Steelbuild",
  },

  description:
    "Steelbuild Infra Projects Limited is a Pre-Engineered Building company in India delivering PEB engineering, manufacturing and construction solutions for warehouses, factories, industrial sheds, logistics facilities and large-scale steel infrastructure projects.",

  alternates: {
    canonical:
      "/products/pre-engineered-buildings",
  },

  openGraph: {
    type: "website",

    locale:
      "en_IN",

    url:
      pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "PEB Company & Pre-Engineered Building Manufacturer in India | Steelbuild",

    description:
      "Explore Steelbuild's engineered Pre-Engineered Building solutions for warehouses, factories, industrial sheds, logistics facilities and manufacturing infrastructure across India.",

    images: [
      {
        url:
          "/images/products/pre-engineered-building.jpg",

        width:
          1200,

        height:
          630,

        alt:
          "Steelbuild Infra Projects Pre-Engineered Building and PEB Solutions in India",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "PEB Company & Pre-Engineered Building Manufacturer in India | Steelbuild",

    description:
      "PEB engineering, manufacturing and construction solutions for warehouses, factories, industrial buildings and infrastructure projects across India.",

    images: [
      "/images/products/pre-engineered-building.jpg",
    ],
  },

  robots: {
    index:
      true,

    follow:
      true,

    googleBot: {
      index:
        true,

      follow:
        true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },
  },
};

/* =========================================================
   PRE-ENGINEERED BUILDINGS PAGE
========================================================= */

export default function PreEngineeredBuildingsPage() {
  /* =======================================================
     WEB PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type":
      "WebPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "PEB Company and Pre-Engineered Building Manufacturer in India",

    headline:
      "Pre-Engineered Building Solutions for Industrial Infrastructure",

    description:
      "Steelbuild Infra Projects Limited provides Pre-Engineered Building engineering, manufacturing and construction solutions for warehouses, factories, industrial sheds, logistics facilities and manufacturing infrastructure across India.",

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
        `${siteUrl}/images/products/pre-engineered-building.jpg`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     SERVICE SCHEMA
  ======================================================= */

  const serviceSchema = {
    "@type":
      "Service",

    "@id":
      `${pageUrl}/#service`,

    name:
      "Pre-Engineered Building Solutions",

    alternateName: [
      "PEB Solutions",
      "Pre-Engineered Steel Buildings",
      "PEB Buildings",
      "PEB Engineering Solutions",
      "PEB Manufacturing Solutions",
      "Industrial Steel Building Solutions",
    ],

    serviceType:
      "Pre-Engineered Building Engineering, Manufacturing, Fabrication and Project Execution",

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
      "Engineering, manufacturing, fabrication and project execution solutions for Pre-Engineered Buildings used in warehouses, factories, industrial sheds, logistics facilities, manufacturing plants and large-scale steel infrastructure projects.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing, Logistics, Commercial and Infrastructure Businesses",
    },

    knowsAbout: [
      "Pre-Engineered Buildings",
      "PEB Buildings",
      "Pre-Engineered Steel Buildings",
      "PEB Engineering",
      "PEB Manufacturing",
      "PEB Fabrication",
      "PEB Construction",
      "PEB Building Solutions",
      "Steel Buildings",
      "Industrial Steel Buildings",
      "Steel Structures",
      "Industrial Sheds",
      "Warehouse Buildings",
      "Factory Buildings",
      "Logistics Facilities",
      "Industrial Infrastructure",
      "Turnkey PEB Projects",
    ],
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
          "Pre-Engineered Buildings",

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

      <PEBHero />

      <PEBOverview />

      <PEBFeatures />

      <PEBStructuralSystems />

      <PEBApplications />

      <PEBProcess />

      <PEBCTA />
    </>
  );
}