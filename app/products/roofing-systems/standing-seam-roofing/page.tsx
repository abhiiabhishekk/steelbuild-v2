import type { Metadata } from "next";

import StandingSeamRoofingHero from "@/components/standing-seam-roofing-page/StandingSeamRoofingHero";
import StandingSeamRoofingOverview from "@/components/standing-seam-roofing-page/StandingSeamRoofingOverview";
import StandingSeamRoofingAdvantages from "@/components/standing-seam-roofing-page/StandingSeamRoofingAdvantages";
import StandingSeamRoofingComponents from "@/components/standing-seam-roofing-page/StandingSeamRoofingComponents";
import StandingSeamRoofingApplications from "@/components/standing-seam-roofing-page/StandingSeamRoofingApplications";
import StandingSeamRoofingProcess from "@/components/standing-seam-roofing-page/StandingSeamRoofingProcess";
import StandingSeamRoofingCTA from "@/components/standing-seam-roofing-page/StandingSeamRoofingCTA";
import StandingSeamRoofingManufacturing from "@/components/standing-seam-roofing-page/StandingSeamRoofingManufacturing";
import StandingSeamRoofingProfiles from "@/components/standing-seam-roofing-page/StandingSeamRoofingProfiles";
import StandingSeamRoofingCompatibleAccessories from "@/components/standing-seam-roofing-page/StandingSeamRoofingCompatibleAccessories";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/products/roofing-systems/standing-seam-roofing`;

/* =========================================================
   STANDING SEAM ROOFING PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Standing Seam Roofing Manufacturer in India | Steelbuild Infra Projects",
  },

  description:
    "Steelbuild Infra Projects Limited delivers engineered standing seam roofing systems for Pre-Engineered Buildings, factories, warehouses, industrial facilities and large-span steel buildings across India.",

  alternates: {
    canonical:
      "/products/roofing-systems/standing-seam-roofing",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Standing Seam Roofing Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Explore engineered standing seam metal roofing systems for PEB buildings, factories, warehouses, industrial facilities and large-span steel structures across India.",

    images: [
      {
        url:
          "/images/products/standing-seam-roofing.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Standing Seam Roofing Systems in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Standing Seam Roofing Manufacturer in India | Steelbuild Infra Projects",

    description:
      "Engineered standing seam metal roofing systems for PEB buildings, factories, warehouses and industrial facilities across India.",

    images: [
      "/images/products/standing-seam-roofing.jpg",
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
   STANDING SEAM ROOFING PAGE
========================================================= */

export default function StandingSeamRoofingPage() {
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
      "Standing Seam Roofing Manufacturer in India",

    headline:
      "Engineered Standing Seam Metal Roofing Systems",

    description:
      "Steelbuild Infra Projects Limited provides engineered standing seam roofing systems for Pre-Engineered Buildings, factories, warehouses, industrial facilities and large-span steel buildings across India.",

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
        `${siteUrl}/images/products/standing-seam-roofing.jpg`,
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
      "Standing Seam Roofing Systems",

    alternateName: [
      "Standing Seam Metal Roofing",
      "Standing Seam Roof Systems",
      "Industrial Standing Seam Roofing",
      "PEB Standing Seam Roofing",
      "Clip-Lock Roofing Systems",
    ],

    serviceType:
      "Standing Seam Roofing Engineering, Manufacturing and Project Execution",

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
      "Engineering, manufacturing and project execution solutions for standing seam metal roofing systems used in Pre-Engineered Buildings, factories, warehouses, industrial facilities and large-span steel structures.",

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
          "Standing Seam Roofing",

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
        <StandingSeamRoofingHero />

        <StandingSeamRoofingOverview />

        <StandingSeamRoofingAdvantages />

        <StandingSeamRoofingComponents />

        <StandingSeamRoofingApplications />

        <StandingSeamRoofingProcess />

        <StandingSeamRoofingManufacturing />

        <StandingSeamRoofingProfiles />

        <StandingSeamRoofingCompatibleAccessories />

        <StandingSeamRoofingCTA />
      </main>
    </>
  );
}