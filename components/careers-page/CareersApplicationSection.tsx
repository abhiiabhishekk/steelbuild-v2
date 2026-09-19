"use client";

import {
  useEffect,
  useState,
} from "react";

import CurrentOpenings from "@/components/careers-page/CurrentOpenings";
import LifeAtSteelbuild from "@/components/careers-page/LifeAtSteelbuild";
import HiringProcess from "@/components/careers-page/HiringProcess";
import SubmitResume from "@/components/careers-page/SubmitResume";

import type {
  SanityJobOpening,
} from "@/types/sanityJobOpening";

type CareersApplicationSectionProps = {
  jobs: SanityJobOpening[];
};

export default function CareersApplicationSection({
  jobs,
}: CareersApplicationSectionProps) {
  const [
    selectedOpening,
    setSelectedOpening,
  ] = useState<SanityJobOpening | null>(
    null,
  );

  /* =========================================================
     HASH NAVIGATION
  ========================================================= */

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;

      if (!hash) {
        return;
      }

      /*
       * Protect against malformed URLs such as:
       * #open-positions#open-positions
       *
       * Only use the first hash value.
       */
      const targetId = hash
        .replace(/^#/, "")
        .split("#")[0];

      if (!targetId) {
        return;
      }

      const target =
        document.getElementById(
          targetId,
        );

      if (!target) {
        return;
      }

      window.setTimeout(() => {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    };

    scrollToHash();

    window.addEventListener(
      "hashchange",
      scrollToHash,
    );

    return () => {
      window.removeEventListener(
        "hashchange",
        scrollToHash,
      );
    };
  }, []);

  /* =========================================================
     RESUME FORM SCROLL
  ========================================================= */

  function scrollToResumeForm() {
    window.setTimeout(() => {
      document
        .getElementById(
          "submit-resume",
        )
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  }

  function handleApply(
    job: SanityJobOpening,
  ) {
    setSelectedOpening(job);
    scrollToResumeForm();
  }

  function handleGeneralApplication() {
    setSelectedOpening(null);
    scrollToResumeForm();
  }

  function handleClearSelection() {
    setSelectedOpening(null);
  }

  return (
    <>
      <CurrentOpenings
        jobs={jobs}
        onApply={handleApply}
        onGeneralApply={
          handleGeneralApplication
        }
      />

      <LifeAtSteelbuild />

      <HiringProcess />

      <SubmitResume
        selectedOpening={
          selectedOpening
        }
        onClearSelectedOpening={
          handleClearSelection
        }
      />
    </>
  );
}