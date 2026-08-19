import type { Metadata } from "next";

import BrochureHero from "@/components/company-brochure-page/BrochureHero";
import BrochurePreview from "@/components/company-brochure-page/BrochurePreview";
import BrochureHighlights from "@/components/company-brochure-page/BrochureHighlights";
import BrochureCTA from "@/components/company-brochure-page/BrochureCTA";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/about/company-brochure`;

/* =========================================================
   COMPANY BROCHURE PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Company Brochure | Steelbuild Infra Projects Limited",
  },

  description:
    "View and download the Steelbuild Infra Projects Limited company brochure covering Pre-Engineered Building solutions, manufacturing capabilities, projects, industries, engineering expertise and industrial infrastructure solutions.",

  alternates: {
    canonical:
      "/about/company-brochure",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Company Brochure | Steelbuild Infra Projects Limited",

    description:
      "Explore Steelbuild Infra Projects Limited's company profile, PEB solutions, manufacturing capabilities, projects, industries and engineering expertise.",

    images: [
      {
        url:
          "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited Company Brochure",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Company Brochure | Steelbuild Infra Projects Limited",

    description:
      "Explore Steelbuild Infra Projects Limited's company profile, Pre-Engineered Building solutions, manufacturing capabilities and projects.",

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
   COMPANY BROCHURE PAGE
========================================================= */

export default function CompanyBrochurePage() {
  /* =======================================================
     ABOUT PAGE SCHEMA
  ======================================================= */

  const webPageSchema = {
    "@type":
      "AboutPage",

    "@id":
      `${pageUrl}/#webpage`,

    url:
      pageUrl,

    name:
      "Company Brochure of Steelbuild Infra Projects Limited",

    headline:
      "Steelbuild Infra Projects Limited Company Brochure",

    description:
      "View and download the Steelbuild Infra Projects Limited company brochure covering Pre-Engineered Building solutions, manufacturing capabilities, industrial projects, industries served and engineering expertise.",

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
          "Company Brochure",

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

      <BrochureHero />

      <BrochurePreview />

      <BrochureHighlights />

      <BrochureCTA />
    </>
  );
}