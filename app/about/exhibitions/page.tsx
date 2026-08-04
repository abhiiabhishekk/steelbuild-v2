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

export const metadata: Metadata = {
  title:
    "Exhibitions | Steelbuild Infra Projects Limited",

  description:
    "Explore Steelbuild Infra Projects Limited's participation in warehousing exhibitions, industrial expos and engineering events across India.",

  alternates: {
    canonical: "/about/exhibitions",
  },
};

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

function convertStaticExhibitions(): SanityExhibition[] {
  return staticExhibitions.map(
    (exhibition, index) => ({
      _id: exhibition.id,

      exhibitionId: `STATIC-${String(
        index + 1,
      ).padStart(3, "0")}`,

      title: exhibition.title,
      slug: exhibition.id,

      status: "completed",

      startDate: `${exhibition.year}-01-01`,
      dateLabel:
        exhibition.date || exhibition.year,

      venue:
        exhibition.location || "Not specified",

      city:
        exhibition.location || "Not specified",

      country: "India",

      hallNumber:
        exhibition.booth
          ?.split("·")[0]
          ?.trim() || undefined,

      stallNumber:
        exhibition.booth
          ?.split("·")[1]
          ?.trim() || undefined,

      shortDescription:
        exhibition.description,

      highlights: [],

      coverImage: exhibition.images[0]
        ? convertStaticImage(
            exhibition.images[0],
            exhibition.title,
            0,
          )
        : undefined,

      gallery: exhibition.images.map(
        (image, imageIndex) =>
          convertStaticImage(
            image,
            exhibition.title,
            imageIndex,
          ),
      ),

      youtubeVideoId:
        exhibition.videoType === "youtube"
          ? exhibition.videoUrl
          : undefined,

      featured:
        exhibition.featured ?? false,

      active: true,

      displayOrder: index + 1,
    }),
  );
}

export default async function ExhibitionsPage() {
  let sanityExhibitions: SanityExhibition[] = [];

  try {
    sanityExhibitions =
      await sanityFetch<SanityExhibition[]>({
        query: EXHIBITIONS_QUERY,
        revalidate: 60,
        tags: ["exhibitions"],
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
        exhibition.status === "upcoming" ||
        exhibition.status === "ongoing",
    );

  const completedExhibitions =
    exhibitions
      .filter(
        (exhibition) =>
          exhibition.status === "completed",
      )
      .sort(
        (first, second) =>
          new Date(second.startDate).getTime() -
          new Date(first.startDate).getTime(),
      );

  return (
    <>
      <ExhibitionsHero />

      <UpcomingEvents
        exhibitions={upcomingExhibitions}
      />

      <PastExhibitions
        exhibitions={completedExhibitions}
      />

      <ExhibitionCTA />
    </>
  );
}