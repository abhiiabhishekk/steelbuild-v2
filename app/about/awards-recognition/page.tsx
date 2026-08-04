import type {
  Metadata,
} from "next";

import AwardsHero from "@/components/awards-page/AwardsHero";
import FeaturedAwards from "@/components/awards-page/FeaturedAwards";
import AwardsTimeline from "@/components/awards-page/AwardsTimeline";
import RecognitionGrid from "@/components/awards-page/RecognitionGrid";
import MagazineFeatures from "@/components/awards-page/MagazineFeatures";
import ClientRecognition from "@/components/awards-page/ClientRecognition";
import AwardsCTA from "@/components/awards-page/AwardsCTA";

import {
  sanityFetch,
} from "@/sanity/lib/fetch";

import {
  FEATURED_AWARDS_QUERY,
} from "@/sanity/lib/awardQueries";

import type {
  SanityAward,
} from "@/types/sanityAward";

export const metadata:
  Metadata = {
  title:
    "Awards & Recognition | Steelbuild Infra Projects Limited",

  description:
    "Explore the awards, recognitions, industry appreciation, magazine features and milestones achieved by Steelbuild Infra Projects Limited.",

  alternates: {
    canonical:
      "/about/awards-recognition",
  },
};

export default async function AwardsPage() {
  let awards:
    SanityAward[] = [];

  try {
    awards =
      await sanityFetch<
        SanityAward[]
      >({
        query:
          FEATURED_AWARDS_QUERY,

        revalidate: 60,

        tags: [
          "awards",
        ],
      });
  } catch (error) {
    console.error(
      "Failed to fetch awards from Sanity:",
      error,
    );
  }

  return (
    <>
      <AwardsHero />

      <FeaturedAwards
        awards={awards}
      />

      <AwardsTimeline />

      <RecognitionGrid />

      <MagazineFeatures />

      <ClientRecognition />

      <AwardsCTA />
    </>
  );
}