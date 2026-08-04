import type {
  Metadata,
} from "next";

import CareersHero from "@/components/careers-page/CareersHero";
import WhyWorkWithUs from "@/components/careers-page/WhyWorkWithUs";
import CareersApplicationSection from "@/components/careers-page/CareersApplicationSection";
import CareersFAQ from "@/components/careers-page/CareersFAQ";
import CareersCTA from "@/components/careers-page/CareersCTA";

import {
  sanityFetch,
} from "@/sanity/lib/fetch";

import {
  JOB_OPENINGS_QUERY,
} from "@/sanity/lib/jobOpeningQueries";

import type {
  SanityJobOpening,
} from "@/types/sanityJobOpening";

export const metadata:
  Metadata = {
  title:
    "Careers at Steelbuild Infra Projects | PEB Jobs",

  description:
    "Explore career opportunities at Steelbuild Infra Projects Limited across PEB engineering, detailing, manufacturing, quality, project execution, sales and corporate functions.",

  alternates: {
    canonical: "/careers",
  },
};

export default async function CareersPage() {
  let jobs:
    SanityJobOpening[] = [];

  try {
    jobs =
      await sanityFetch<
        SanityJobOpening[]
      >({
        query:
          JOB_OPENINGS_QUERY,

        revalidate: 60,

        tags: [
          "job-openings",
        ],
      });
  } catch (error) {
    console.error(
      "Failed to fetch job openings:",
      error,
    );
  }

  return (
    <>
      <CareersHero />

      <WhyWorkWithUs />

      <CareersApplicationSection
        jobs={jobs}
      />

      <CareersFAQ />

      <CareersCTA />
    </>
  );
}