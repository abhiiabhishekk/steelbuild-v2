import type { Metadata } from "next";

import TeamHero from "@/components/team-page/TeamHero";
import TeamDirectory from "@/components/team-page/TeamDirectory";
import JoinTeamCTA from "@/components/team-page/JoinTeamCTA";

import { sanityFetch } from "@/sanity/lib/fetch";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/teamMemberQueries";

import type { SanityTeamMember } from "@/types/sanityTeamMember";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/about/team`;

/* =========================================================
   TEAM PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Team Members | Steelbuild Infra Projects Limited",
  },

  description:
    "Meet the professionals supporting engineering, manufacturing, project execution, quality, sales, design and corporate operations at Steelbuild Infra Projects Limited.",

  alternates: {
    canonical: "/about/team",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Team Members | Steelbuild Infra Projects Limited",

    description:
      "Meet the professionals behind Steelbuild Infra Projects Limited across engineering, manufacturing, projects, quality, sales, design and corporate operations.",

    images: [
      {
        url:
          "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Team Members of Steelbuild Infra Projects Limited",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Team Members | Steelbuild Infra Projects Limited",

    description:
      "Meet the professionals supporting engineering, manufacturing, projects, quality, sales and corporate operations at Steelbuild Infra Projects Limited.",

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
   TEAM PAGE
========================================================= */

export default async function TeamPage() {
  let members: SanityTeamMember[] = [];

  try {
    members =
      await sanityFetch<
        SanityTeamMember[]
      >({
        query:
          TEAM_MEMBERS_QUERY,

        revalidate: 60,

        tags: [
          "team-members",
        ],
      });
  } catch (error) {
    console.error(
      "Failed to fetch team members from Sanity:",
      error,
    );
  }

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
      "Team Members of Steelbuild Infra Projects Limited",

    headline:
      "Meet the Steelbuild Team",

    description:
      "Meet the professionals supporting Steelbuild Infra Projects Limited across engineering, manufacturing, project execution, quality, sales, design and corporate operations.",

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
          "Team Members",

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

      <TeamHero />

      <TeamDirectory
        members={members}
      />

      <JoinTeamCTA />
    </>
  );
}