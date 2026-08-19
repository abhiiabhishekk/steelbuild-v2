import type { Metadata } from "next";

import AboutHero from "@/components/about-page/AboutHero";
import CompanyStory from "@/components/about-page/CompanyStory";
import VisionMission from "@/components/about-page/VisionMission";
import AboutStats from "@/components/about-page/AboutStats";
import CertificatesSection from "@/components/about-page/CertificatesSection";
import Leadership from "@/components/about-page/Leadership";
import ManufacturingSection from "@/components/about-page/ManufacturingSection";
import EngineeringTechnology from "@/components/about-page/EngineeringTechnology";
import CoreValues from "@/components/about-page/CoreValues";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import CompanyTimeline from "@/components/about-page/CompanyTimeline";
import QualitySafety from "@/components/about-page/QualitySafety";
import CorporateVideo from "@/components/common/CorporateVideo";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl = `${siteUrl}/about`;

/* =========================================================
   ABOUT PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "About Steelbuild Infra Projects | PEB & Steel Engineering",
  },

  description:
    "Learn about Steelbuild Infra Projects Limited, an Indian Pre-Engineered Building and structural steel company delivering engineered industrial buildings, manufacturing and project execution solutions across India.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "About Steelbuild Infra Projects | PEB & Steel Engineering",

    description:
      "Discover Steelbuild Infra Projects Limited, its engineering journey, manufacturing capabilities, leadership, quality systems and Pre-Engineered Building expertise across India.",

    images: [
      {
        url: "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited - Pre-Engineered Building and Structural Steel Engineering Company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About Steelbuild Infra Projects | PEB & Steel Engineering",

    description:
      "Explore Steelbuild Infra Projects Limited, its PEB engineering expertise, manufacturing capabilities, leadership and industrial project execution across India.",

    images: [
      "/images/about/about-hero.jpg",
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
   ABOUT PAGE
========================================================= */

export default function AboutPage() {
  /* =======================================================
     ABOUT PAGE SCHEMA
  ======================================================= */

  const aboutPageSchema = {
    "@context": "https://schema.org",

    "@type": "AboutPage",

    "@id": `${pageUrl}/#webpage`,

    url: pageUrl,

    name:
      "About Steelbuild Infra Projects Limited",

    headline:
      "About Steelbuild Infra Projects Limited",

    description:
      "Steelbuild Infra Projects Limited is a Pre-Engineered Building and structural steel solutions company delivering engineered industrial buildings, manufacturing and project execution solutions across India.",

    isPartOf: {
      "@id": `${siteUrl}/#website`,
    },

    about: {
      "@id": `${siteUrl}/#organization`,
    },

    mainEntity: {
      "@id": `${siteUrl}/#organization`,
    },

    breadcrumb: {
      "@id":
        `${pageUrl}/#breadcrumb`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",

      url:
        `${siteUrl}/images/about/about-hero.jpg`,
    },

    inLanguage: "en-IN",
  };

  /* =======================================================
     BREADCRUMB SCHEMA
  ======================================================= */

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    "@id":
      `${pageUrl}/#breadcrumb`,

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

        name: "About Steelbuild",

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
      aboutPageSchema,
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
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* ===================================================
          ABOUT PAGE CONTENT
      =================================================== */}

      <AboutHero />

      <CompanyStory />

      <CorporateVideo
        sectionId="about-corporate-video"
        eyebrow="About Steelbuild"
        title="Discover Our Journey, People and Engineering Excellence"
        description="Watch our corporate film to understand Steelbuild's journey, values, manufacturing capabilities and commitment to quality."
        thumbnail="/images/video/corporate-video-thumbnail.jpg"
        youtubeVideoId="u4w_zBIxQCw"
      />

      <CompanyTimeline />

      <CoreValues />

      <VisionMission />

      <AboutStats />

      <Leadership />

      <ManufacturingSection />

      <QualitySafety />

      <EngineeringTechnology />

      <ProcessTimeline />

      <CertificatesSection />
    </>
  );
}