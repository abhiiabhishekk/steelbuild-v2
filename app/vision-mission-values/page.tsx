import type { Metadata } from "next";

import AboutHero from "@/components/about-page/AboutHero";
import CoreValues from "@/components/about-page/CoreValues";
import VisionMission from "@/components/about-page/VisionMission";

export const metadata: Metadata = {
  title:
    "Vision, Mission & Values | Steelbuild Infra Projects Limited",

  description:
    "Learn about the vision, mission and core values that guide Steelbuild Infra Projects Limited in delivering world-class Pre-Engineered Building solutions.",
};

export default function VisionMissionValuesPage() {
  return (
    <>
      <AboutHero />

      <VisionMission />

      <CoreValues />
    </>
  );
}