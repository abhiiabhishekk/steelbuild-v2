import type { Metadata } from "next";

import CorporateVideo from "@/components/common/CorporateVideo";
import CorporateProfileBrochure from "@/components/steelbuild-corporate-profile-page/CorporateProfileBrochure";
import CorporateProfileCTA from "@/components/steelbuild-corporate-profile-page/CorporateProfileCTA";
import CorporateProfileHero from "@/components/steelbuild-corporate-profile-page/CorporateProfileHero";
import CorporateProfileOverview from "@/components/steelbuild-corporate-profile-page/CorporateProfileOverview";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/steelbuild-corporate-profile`;

const youtubeVideoId =
  "u4w_zBIxQCw";

const youtubeUrl =
  `https://www.youtube.com/watch?v=${youtubeVideoId}`;

/* =========================================================
   CORPORATE PROFILE PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Steelbuild Corporate Profile | Steelbuild Infra Projects Limited",
  },

  description:
    "Explore the Steelbuild Infra Projects Limited corporate profile, watch our corporate film and discover our Pre-Engineered Building expertise, manufacturing capabilities, industrial projects and official company brochure.",

  alternates: {
    canonical:
      "/steelbuild-corporate-profile",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Steelbuild Corporate Profile | Steelbuild Infra Projects Limited",

    description:
      "Watch the Steelbuild corporate film and explore our engineering expertise, manufacturing infrastructure, industrial project capabilities and official company brochure.",

    images: [
      {
        url:
          "/images/video/corporate-video-thumbnail.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited Corporate Profile and Corporate Film",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Steelbuild Corporate Profile | Steelbuild Infra Projects Limited",

    description:
      "Explore Steelbuild's corporate film, PEB engineering expertise, manufacturing capabilities, projects and company brochure.",

    images: [
      "/images/video/corporate-video-thumbnail.jpg",
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
   CORPORATE PROFILE PAGE
========================================================= */

export default function SteelbuildCorporateProfilePage() {
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
      "Steelbuild Infra Projects Limited Corporate Profile",

    headline:
      "Steelbuild Corporate Profile, Corporate Film and Company Brochure",

    description:
      "Explore the Steelbuild Infra Projects Limited corporate profile, corporate film, Pre-Engineered Building expertise, manufacturing capabilities, industrial project experience and official company brochure.",

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
        `${siteUrl}/images/video/corporate-video-thumbnail.jpg`,
    },

    inLanguage:
      "en-IN",
  };

  /* =======================================================
     VIDEO SCHEMA
  ======================================================= */

  const videoSchema = {
    "@type": "VideoObject",

    "@id":
      `${pageUrl}/#corporate-video`,

    name:
      "Steelbuild Infra Projects Limited Corporate Film",

    description:
      "Watch the Steelbuild Infra Projects Limited corporate film to explore the organization, Pre-Engineered Building engineering expertise, manufacturing infrastructure, project capabilities and commitment to dependable industrial building solutions.",

    thumbnailUrl: [
      `${siteUrl}/images/video/corporate-video-thumbnail.jpg`,
    ],

    embedUrl:
      `https://www.youtube.com/embed/${youtubeVideoId}`,

    contentUrl:
      youtubeUrl,

    publisher: {
      "@id":
        `${siteUrl}/#organization`,
    },

    inLanguage:
      "en-IN",

    isPartOf: {
      "@id":
        `${pageUrl}/#webpage`,
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
          "Corporate Profile",

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
      videoSchema,
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

      <main>
        <CorporateProfileHero />

        <CorporateVideo
          eyebrow="Corporate Film"
          title="Discover Steelbuild Infra Projects Limited"
          description="Watch our corporate film to explore Steelbuild's organization, engineering expertise, manufacturing infrastructure, project capabilities and commitment to delivering dependable industrial building solutions."
          thumbnail="/images/video/corporate-video-thumbnail.jpg"
          youtubeVideoId="u4w_zBIxQCw"
          sectionId="corporate-video"
        />

        <CorporateProfileOverview />

        <CorporateProfileBrochure />

        <CorporateProfileCTA />
      </main>
    </>
  );
}