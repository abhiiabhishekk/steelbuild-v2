import type { Metadata } from "next";

import ExhibitionsHero from "@/components/exhibitions-page/ExhibitionsHero";
import UpcomingEvents from "@/components/exhibitions-page/UpcomingEvents";
import PastExhibitions from "@/components/exhibitions-page/PastExhibitions";
import ExhibitionCTA from "@/components/exhibitions-page/ExhibitionCTA";

import { exhibitions as staticExhibitions } from "@/components/exhibitions-page/exhibitionData";

import { sanityFetch } from "@/sanity/lib/fetch";
import { EXHIBITIONS_QUERY } from "@/sanity/lib/exhibitionQueries";

import type {
  SanityExhibition,
  SanityExhibitionImage,
} from "@/types/sanityExhibition";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

const pageUrl =
  `${siteUrl}/about/exhibitions`;

/* =========================================================
   EXHIBITIONS PAGE SEO METADATA
========================================================= */

export const metadata: Metadata = {
  title: {
    absolute:
      "Exhibitions & Industry Events | Steelbuild Infra Projects Limited",
  },

  description:
    "Explore Steelbuild Infra Projects Limited's participation in warehousing exhibitions, industrial expos, engineering events and infrastructure trade shows across India.",

  alternates: {
    canonical: "/about/exhibitions",
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: pageUrl,

    siteName:
      "Steelbuild Infra Projects Limited",

    title:
      "Exhibitions & Industry Events | Steelbuild Infra Projects Limited",

    description:
      "Discover Steelbuild Infra Projects Limited at warehousing exhibitions, industrial expos, engineering events and infrastructure trade shows across India.",

    images: [
      {
        url:
          "/images/about/about-hero.jpg",

        width: 1200,

        height: 630,

        alt:
          "Steelbuild Infra Projects Limited Exhibitions and Industry Events",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Exhibitions & Industry Events | Steelbuild Infra Projects Limited",

    description:
      "Explore Steelbuild Infra Projects Limited's participation in industrial exhibitions, warehousing expos and engineering events across India.",

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
   STATIC EXHIBITION IMAGE CONVERTER
========================================================= */

function convertStaticImage(
  imageUrl: string,
  title: string,
  index: number,
): SanityExhibitionImage {
  return {
    _key: `${title}-${index}`,
    url: imageUrl,
    alt: `${title} exhibition photo ${index + 1}`,
  };
}

/* =========================================================
   STATIC EXHIBITIONS CONVERTER
========================================================= */

function convertStaticExhibitions(): SanityExhibition[] {
  return staticExhibitions.map(
    (exhibition, index) => ({
      _id: exhibition.id,

      exhibitionId:
        `STATIC-${String(index + 1).padStart(3, "0")}`,

      title: exhibition.title,

      slug: exhibition.id,

      status: "completed",

      startDate:
        `${exhibition.year}-01-01`,

      dateLabel:
        exhibition.date ||
        exhibition.year,

      venue:
        exhibition.location ||
        "Not specified",

      city:
        exhibition.location ||
        "Not specified",

      country: "India",

      hallNumber:
        exhibition.booth
          ?.split("·")[0]
          ?.trim() ||
        undefined,

      stallNumber:
        exhibition.booth
          ?.split("·")[1]
          ?.trim() ||
        undefined,

      shortDescription:
        exhibition.description,

      highlights: [],

      coverImage:
        exhibition.images[0]
          ? convertStaticImage(
              exhibition.images[0],
              exhibition.title,
              0,
            )
          : undefined,

      gallery:
        exhibition.images.map(
          (image, imageIndex) =>
            convertStaticImage(
              image,
              exhibition.title,
              imageIndex,
            ),
        ),

      youtubeVideoId:
        exhibition.videoType ===
        "youtube"
          ? exhibition.videoUrl
          : undefined,

      featured:
        exhibition.featured ??
        false,

      active: true,

      displayOrder:
        index + 1,
    }),
  );
}

/* =========================================================
   EXHIBITIONS PAGE
========================================================= */

export default async function ExhibitionsPage() {
  let sanityExhibitions:
    SanityExhibition[] = [];

  try {
    sanityExhibitions =
      await sanityFetch<
        SanityExhibition[]
      >({
        query:
          EXHIBITIONS_QUERY,

        revalidate: 60,

        tags: [
          "exhibitions",
        ],
      });
  } catch (error) {
    console.error(
      "Failed to fetch exhibitions from Sanity:",
      error,
    );
  }

  const exhibitions =
    sanityExhibitions.length > 0
      ? sanityExhibitions
      : convertStaticExhibitions();

  const upcomingExhibitions =
    exhibitions.filter(
      (exhibition) =>
        exhibition.status ===
          "upcoming" ||
        exhibition.status ===
          "ongoing",
    );

  const completedExhibitions =
    exhibitions
      .filter(
        (exhibition) =>
          exhibition.status ===
          "completed",
      )
      .sort(
        (first, second) =>
          new Date(
            second.startDate,
          ).getTime() -
          new Date(
            first.startDate,
          ).getTime(),
      );

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
      "Exhibitions and Industry Events of Steelbuild Infra Projects Limited",

    headline:
      "Exhibitions, Industrial Expos and Industry Events",

    description:
      "Explore Steelbuild Infra Projects Limited's participation in warehousing exhibitions, industrial expos, engineering events and infrastructure trade shows across India.",

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
          "Exhibitions",

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

      <ExhibitionsHero />

      <UpcomingEvents
        exhibitions={
          upcomingExhibitions
        }
      />

      <PastExhibitions
        exhibitions={
          completedExhibitions
        }
      />

      <ExhibitionCTA />
    </>
  );
}