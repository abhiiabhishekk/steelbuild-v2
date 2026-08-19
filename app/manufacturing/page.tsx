import type { Metadata } from "next";

import InnerHero from "@/components/common/InnerHero";
import CorporateVideo from "@/components/common/CorporateVideo";

import PlantMachinery from "@/components/manufacturing/PlantMachinery";
import RoofingCladding from "@/components/manufacturing/RoofingCladding";
import AccessoriesSection from "@/components/manufacturing/AccessoriesSection";
import SheetingAccessories from "@/components/manufacturing/SheetingAccessories";
import StandingSeamMachine from "@/components/manufacturing/StandingSeamMachine";
import ManufacturingFacilities from "@/components/manufacturing/ManufacturingFacilities";
import ManufacturingGallery from "@/components/manufacturing/ManufacturingGallery";
import ManufacturingCTA from "@/components/manufacturing/ManufacturingCTA";
import ManufacturingProcess from "@/components/manufacturing/ManufacturingProcess";
import QualitySection from "@/components/manufacturing/QualitySection";
import ManufacturingFAQ from "@/components/manufacturing/ManufacturingFAQ";
import { manufacturingFaqs } from "@/data/manufacturing-faq";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/manufacturing`;

const youtubeVideoId =
  "u4w_zBIxQCw";

/* =========================================================
   MANUFACTURING PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "PEB Manufacturing Facilities in India | Steelbuild Infra Projects",
  },

  description:
    "Explore Steelbuild Infra Projects Limited's advanced PEB manufacturing facilities with precision steel fabrication, modern machinery, roofing and cladding production, quality control and 50,000 MT annual installed capacity.",

  alternates: {
    canonical: "/manufacturing",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "PEB Manufacturing Facilities in India | Steelbuild Infra Projects",

    description:
      "Discover Steelbuild's integrated manufacturing infrastructure for Pre-Engineered Buildings, structural steel fabrication, roofing, cladding and industrial steel components.",

    images: [
      {
        url:
          "/images/banners/manufacturing-banner.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects advanced PEB manufacturing facility",
      },
    ],
  },

  twitter: {
    card:
      "summary_large_image",

    title:
      "PEB Manufacturing Facilities in India | Steelbuild Infra Projects",

    description:
      "Explore Steelbuild's advanced manufacturing facilities for Pre-Engineered Buildings, structural steel, roofing and cladding systems.",

    images: [
      "/images/banners/manufacturing-banner.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

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
   MANUFACTURING PAGE
========================================================= */

export default function ManufacturingPage() {
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
      "PEB Manufacturing Facilities of Steelbuild Infra Projects Limited",

    headline:
      "Advanced Pre-Engineered Building Manufacturing Infrastructure",

    description:
      "Steelbuild Infra Projects Limited operates integrated manufacturing facilities for Pre-Engineered Buildings, structural steel fabrication, roofing, cladding and industrial steel components with advanced machinery and quality control systems.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${pageUrl}/#manufacturing-capabilities`,
    },

    provider: {
      "@id":
        `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id":
        `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type":
        "ImageObject",

      url:
        `${siteUrl}/images/banners/manufacturing-banner.jpg`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     MANUFACTURING CAPABILITIES SCHEMA
  ======================================================= */

  const manufacturingSchema = {
    "@type":
      "Service",

    "@id":
      `${pageUrl}/#manufacturing-capabilities`,

    name:
      "Pre-Engineered Building Manufacturing",

    alternateName: [
      "PEB Manufacturing",
      "Structural Steel Fabrication",
      "Industrial Steel Manufacturing",
      "Roofing and Cladding Manufacturing",
    ],

    serviceType:
      "Pre-Engineered Building and Structural Steel Manufacturing",

    description:
      "Integrated manufacturing capabilities for Pre-Engineered Buildings, structural steel fabrication, roofing and cladding systems, standing seam roofing and industrial steel components.",

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

    audience: {
      "@type":
        "BusinessAudience",

      audienceType:
        "Industrial, Manufacturing, Warehousing, Logistics and Infrastructure Businesses",
    },

    url:
      pageUrl,
  };

  /* =======================================================
     MANUFACTURING LOCATIONS
  ======================================================= */

  const manufacturingLocationsSchema = {
    "@type":
      "ItemList",

    "@id":
      `${pageUrl}/#manufacturing-locations`,

    name:
      "Steelbuild Manufacturing Units",

    numberOfItems:
      3,

    itemListElement: [
      {
        "@type":
          "ListItem",

        position: 1,

        item: {
          "@type":
            "Place",

          name:
            "Steelbuild Manufacturing Unit 1 - Katwal",

          address: {
            "@type":
              "PostalAddress",

            addressLocality:
              "Gohana",

            addressRegion:
              "Haryana",

            addressCountry:
              "IN",
          },
        },
      },

      {
        "@type":
          "ListItem",

        position: 2,

        item: {
          "@type":
            "Place",

          name:
            "Steelbuild Manufacturing Unit 2 - Halalpur",

          address: {
            "@type":
              "PostalAddress",

            addressLocality:
              "Sonipat",

            addressRegion:
              "Haryana",

            addressCountry:
              "IN",
          },
        },
      },

      {
        "@type":
          "ListItem",

        position: 3,

        item: {
          "@type":
            "Place",

          name:
            "Steelbuild Manufacturing Unit 3 - Halalpur",

          address: {
            "@type":
              "PostalAddress",

            addressLocality:
              "Sonipat",

            addressRegion:
              "Haryana",

            addressCountry:
              "IN",
          },
        },
      },
    ],
  };

  /* =======================================================
     VIDEO SCHEMA
  ======================================================= */

  const videoSchema = {
    "@type":
      "VideoObject",

    "@id":
      `${pageUrl}/#corporate-video-schema`,

    name:
      "Steelbuild Infra Projects Limited Corporate Film",

    description:
      "Explore Steelbuild Infra Projects Limited's manufacturing facilities, engineering capabilities and industrial project execution through the corporate film.",

    thumbnailUrl: [
      `${siteUrl}/images/video/corporate-video-thumbnail.jpg`,
    ],

    embedUrl:
      `https://www.youtube.com/embed/${youtubeVideoId}`,

    contentUrl:
      `https://www.youtube.com/watch?v=${youtubeVideoId}`,

    publisher: {
      "@id":
        `${siteUrl}/#organization`,
    },

    isPartOf: {
      "@id":
        `${pageUrl}/#webpage`,
    },

    inLanguage:
      "en-IN",
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
          "Manufacturing",

        item:
          pageUrl,
      },
    ],
  };

  const faqSchema = {
  "@type": "FAQPage",

  "@id":
    `${pageUrl}/#faq`,

  mainEntity:
    manufacturingFaqs.map(
      (faq) => ({
        "@type":
          "Question",

        name:
          faq.question,

        acceptedAnswer: {
          "@type":
            "Answer",

          text:
            faq.answer,
        },
      }),
    ),
};

  /* =======================================================
     COMBINED STRUCTURED DATA
  ======================================================= */

  const structuredData = {
  "@context":
    "https://schema.org",

  "@graph": [
    webPageSchema,
    manufacturingSchema,
    manufacturingLocationsSchema,
    videoSchema,
    breadcrumbSchema,
    faqSchema,
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
          __html:
            JSON.stringify(
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

      <InnerHero
        title="Manufacturing Excellence"
        subtitle="Advanced Manufacturing Infrastructure"
        description="Steelbuild Infra Projects operates integrated manufacturing facilities equipped with advanced machinery, automated production lines, precision fabrication and stringent quality control for premium Pre-Engineered Building solutions."
        image="/images/banners/manufacturing-banner.jpg"
        imageAlt="Steelbuild Infra advanced PEB manufacturing facility"
        imagePosition="center"
        highlights={[
          "50,000 MT Annual Capacity",
          "3 Integrated Manufacturing Units",
          "ISO 9001:2015 Certified Systems",
          "Pan-India Project Delivery",
        ]}
        primaryAction={{
          label:
            "Explore Our Facilities",

          href:
            "#manufacturing-facilities",
        }}
        secondaryAction={{
          label:
            "Watch Corporate Film",

          href:
            "#corporate-video",
        }}
      />

      <CorporateVideo
        sectionId="corporate-video"
        eyebrow="Watch Our Corporate Film"
        title="Experience Steelbuild Through Manufacturing Excellence"
        description="Explore our company, manufacturing facilities, engineering capabilities and project execution through our corporate film."
        thumbnail="/images/video/corporate-video-thumbnail.jpg"
        youtubeVideoId="u4w_zBIxQCw"
      />

      <PlantMachinery />

      <ManufacturingProcess />

      <QualitySection />

      <StandingSeamMachine />

      <RoofingCladding />

      <AccessoriesSection />

      <SheetingAccessories />

      <ManufacturingGallery />

      <ManufacturingFacilities />

      <ManufacturingFAQ />

      <ManufacturingCTA />
    </>
  );
}