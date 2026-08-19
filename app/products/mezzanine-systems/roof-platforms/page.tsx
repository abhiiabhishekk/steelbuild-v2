import type { Metadata } from "next";

import RoofPlatformsHero from "@/components/roof-platforms-page/RoofPlatformsHero";
import RoofPlatformsOverview from "@/components/roof-platforms-page/RoofPlatformsOverview";
import RoofPlatformsAdvantages from "@/components/roof-platforms-page/RoofPlatformsAdvantages";
import RoofPlatformsComponents from "@/components/roof-platforms-page/RoofPlatformsComponents";
import RoofPlatformsApplications from "@/components/roof-platforms-page/RoofPlatformsApplications";
import RoofPlatformsProcess from "@/components/roof-platforms-page/RoofPlatformsProcess";
import RoofPlatformsCTA from "@/components/roof-platforms-page/RoofPlatformsCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/mezzanine-systems/roof-platforms`;

/* =========================================================
   ROOF PLATFORMS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Roof Platforms Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial roof platforms and elevated steel access systems for factories, warehouses, plants, maintenance areas and rooftop equipment applications across India.",

  alternates: {
    canonical:
      "/products/mezzanine-systems/roof-platforms",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Roof Platforms Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered steel roof platforms and elevated access systems for factories, warehouses, industrial plants, maintenance areas and rooftop equipment applications across India.",

    images: [
      {
        url:
          "/images/products/mezzanine-floor.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Roof Platform and Steel Access Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Roof Platforms Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered steel roof platforms and elevated access systems for factories, warehouses, plants and rooftop equipment applications across India.",

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
   ROOF PLATFORMS PAGE
========================================================= */

export default function RoofPlatformsPage() {
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
      "Industrial Roof Platforms Manufacturer in India",

    headline:
      "Engineered Industrial Roof Platform and Access Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial roof platforms and elevated steel access systems for factories, warehouses, industrial plants, maintenance areas and rooftop equipment applications across India.",

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
      "Industrial Roof Platform Systems",

    alternateName: [
      "Roof Platforms",
      "Steel Roof Platforms",
      "Industrial Access Platforms",
      "Rooftop Equipment Platforms",
      "Maintenance Platforms",
    ],

    serviceType:
      "Industrial Roof Platform Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for steel roof platforms and elevated access systems used in factories, warehouses, industrial plants, maintenance areas and rooftop equipment applications.",

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing, Maintenance and Infrastructure Businesses",
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
          "Roof Platforms",

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
        <RoofPlatformsHero />

        <RoofPlatformsOverview />

        <RoofPlatformsAdvantages />

        <RoofPlatformsComponents />

        <RoofPlatformsApplications />

        <RoofPlatformsProcess />

        <RoofPlatformsCTA />
      </main>
    </>
  );
}