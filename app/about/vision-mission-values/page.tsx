import type { Metadata } from "next";

import VisionMissionHero from "@/components/vision-mission-page/VisionMissionHero";
import VisionMission from "@/components/about-page/VisionMission";
import CoreValues from "@/components/about-page/CoreValues";

export const metadata: Metadata = {
  title:
    "Vision, Mission & Values | Steelbuild Infra Projects Limited",
  description:
    "Explore the vision, mission and core values guiding Steelbuild Infra Projects Limited across engineering, manufacturing and project delivery.",
};

export default function VisionMissionValuesPage() {
  return (
    <>
      <VisionMissionHero />
      <VisionMission />
      <CoreValues />
    </>
  );
}