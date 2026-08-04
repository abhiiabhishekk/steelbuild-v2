import type { Metadata } from "next";

import TeamHero from "@/components/team-page/TeamHero";
import TeamDirectory from "@/components/team-page/TeamDirectory";
import JoinTeamCTA from "@/components/team-page/JoinTeamCTA";

import { sanityFetch } from "@/sanity/lib/fetch";
import { TEAM_MEMBERS_QUERY } from "@/sanity/lib/teamMemberQueries";

import type { SanityTeamMember } from "@/types/sanityTeamMember";

export const metadata: Metadata = {
  title:
    "Team Members | Steelbuild Infra Projects Limited",

  description:
    "Meet the professionals supporting engineering, manufacturing, projects, quality, sales and corporate operations at Steelbuild Infra Projects Limited.",

  alternates: {
    canonical: "/about/team",
  },
};

export default async function TeamPage() {
  let members: SanityTeamMember[] = [];

  try {
    members = await sanityFetch<
      SanityTeamMember[]
    >({
      query: TEAM_MEMBERS_QUERY,

      revalidate: 60,

      tags: ["team-members"],
    });
  } catch (error) {
    console.error(
      "Failed to fetch team members from Sanity:",
      error,
    );
  }

  return (
    <>
      <TeamHero />

      <TeamDirectory members={members} />

      <JoinTeamCTA />
    </>
  );
}