import type {
  Metadata,
} from "next";

import LeadershipHero from "@/components/leadership-page/LeadershipHero";

import LeadershipSection from "@/components/team-page/LeadershipSection";

import DirectorsMessageSection from "@/components/directors-message/DirectorsMessageSection";

import LeadershipHashScroll from "@/components/leadership-page/LeadershipHashScroll";

import {
  sanityFetch,
} from "@/sanity/lib/fetch";

import {
  LEADERSHIP_MEMBERS_QUERY,
} from "@/sanity/lib/leadershipQueries";

import type {
  SanityLeadershipMember,
} from "@/types/sanityLeadershipMember";

export const metadata:
  Metadata = {
  title:
    "Leadership | Steelbuild Infra Projects Limited",

  description:
    "Meet the leadership of Steelbuild Infra Projects Limited and read the Directors' messages, leadership principles and strategic direction guiding the organization.",

  alternates: {
    canonical:
      "/about/leadership",
  },
};

export default async function LeadershipPage() {
  let leaders:
    SanityLeadershipMember[] = [];

  try {
    leaders =
      await sanityFetch<
        SanityLeadershipMember[]
      >({
        query:
          LEADERSHIP_MEMBERS_QUERY,

        revalidate: 60,

        tags: [
          "leadership-members",
        ],
      });
  } catch (error) {
    console.error(
      "Failed to fetch leadership members from Sanity:",
      error,
    );
  }

  return (
    <>
      <LeadershipHashScroll />

      <LeadershipHero />

      <LeadershipSection
        leaders={leaders}
      />

      <DirectorsMessageSection
        leaders={leaders}
      />
    </>
  );
}