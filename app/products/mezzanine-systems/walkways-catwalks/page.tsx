import type { Metadata } from "next";

import WalkwaysCatwalksHero from "@/components/walkways-catwalks-page/WalkwaysCatwalksHero";
import WalkwaysCatwalksOverview from "@/components/walkways-catwalks-page/WalkwaysCatwalksOverview";
import WalkwaysCatwalksApplications from "@/components/walkways-catwalks-page/WalkwaysCatwalksApplications";
import WalkwaysCatwalksProcess from "@/components/walkways-catwalks-page/WalkwaysCatwalksProcess";
import WalkwaysCatwalksCTA from "@/components/walkways-catwalks-page/WalkwaysCatwalksCTA";
import WalkwaysCatwalksAdvantages from "@/components/walkways-catwalks-page/WalkwaysCatwalksAdvantages";
import WalkwaysCatwalksComponents from "@/components/walkways-catwalks-page/WalkwaysCatwalksComponents";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/mezzanine-systems/walkways-catwalks`;

/* =========================================================
   WALKWAYS & CATWALKS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Industrial Walkways & Catwalks Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered industrial walkways, steel catwalks and elevated access systems for factories, warehouses, plants, mezzanine structures and maintenance applications across India.",

  alternates: {
    canonical:
      "/products/mezzanine-systems/walkways-catwalks",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Industrial Walkways & Catwalks Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered industrial walkways, steel catwalks and elevated access systems for factories, warehouses, plants, mezzanine structures and maintenance applications across India.",

    images: [
      {
        url:
          "/images/products/mezzanine-floor.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Industrial Walkways and Steel Catwalk Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Industrial Walkways & Catwalks Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered industrial walkways, steel catwalks and elevated access systems for factories, warehouses and industrial facilities across India.",

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
   WALKWAYS & CATWALKS PAGE
========================================================= */

export default function WalkwaysCatwalksPage() {
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
      "Industrial Walkways and Catwalks Manufacturer in India",

    headline:
      "Engineered Industrial Walkway and Steel Catwalk Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered industrial walkways, steel catwalks and elevated access systems for factories, warehouses, industrial plants, mezzanine structures and maintenance applications across India.",

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
      "Industrial Walkway and Catwalk Systems",

    alternateName: [
      "Industrial Walkways",
      "Steel Catwalks",
      "Factory Walkways",
      "Warehouse Catwalks",
      "Maintenance Walkways",
      "Elevated Access Platforms",
    ],

    serviceType:
      "Industrial Walkway and Catwalk Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for industrial walkways and steel catwalk systems used in factories, warehouses, industrial plants, mezzanine structures and maintenance areas.",

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
          "Walkways & Catwalks",

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
        <WalkwaysCatwalksHero />

        <WalkwaysCatwalksOverview />

        <WalkwaysCatwalksAdvantages />

        <WalkwaysCatwalksComponents />

        <WalkwaysCatwalksApplications />

        <WalkwaysCatwalksProcess />

        <WalkwaysCatwalksCTA />
      </main>
    </>
  );
}