import type { Metadata } from "next";

import QualityHero from "@/components/quality-page/QualityHero";
import QualitySafety from "@/components/about-page/QualitySafety";
import CertificatesSection from "@/components/about-page/CertificatesSection";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/about/quality-certifications`;

/* =========================================================
   QUALITY & CERTIFICATIONS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Quality & Certifications | Steelbuild Infra Projects Limited",
  },

  description:
    "Discover Steelbuild Infra Projects Limited's quality management systems, safety practices, certifications and engineering standards supporting reliable Pre-Engineered Building manufacturing and project execution across India.",

  alternates: {
    canonical:
      "/about/quality-certifications",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Quality & Certifications | Steelbuild Infra Projects Limited",

    description:
      "Explore Steelbuild Infra Projects Limited's commitment to quality management, safety, certifications, manufacturing standards and dependable PEB project execution.",

    images: [
      {
        url:
          "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited Quality and Certifications",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Quality & Certifications | Steelbuild Infra Projects Limited",

    description:
      "Explore Steelbuild Infra Projects Limited's quality systems, safety practices, certifications and engineering standards.",

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
   QUALITY & CERTIFICATIONS PAGE
========================================================= */

export default function QualityPage() {
  /* =======================================================
     ABOUT PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type": "AboutPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Quality and Certifications of Steelbuild Infra Projects Limited",

    headline:
      "Quality, Safety and Certifications",

    description:
      "Steelbuild Infra Projects Limited maintains quality management systems, safety practices, certifications and engineering standards supporting reliable Pre-Engineered Building manufacturing and project execution across India.",

    isPartOf: {
      "@id":
        `${siteUrl}/#website`,
    },

    about: {
      "@id":
        `${siteUrl}/#organization`,
    },

    mainEntity: {
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
        `${siteUrl}/images/about/about-hero.jpg`,
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
          "About",

        item:
          `${siteUrl}/about`,
      },

      {
        "@type":
          "ListItem",

        position: 3,

        name:
          "Quality & Certifications",

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

      <QualityHero />

      <QualitySafety />

      <CertificatesSection />
    </>
  );
}