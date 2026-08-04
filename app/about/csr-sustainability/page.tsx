import type { Metadata } from "next";

import CSRHero from "@/components/csr-page/CSRHero";
import SustainabilityCommitment from "@/components/csr-page/SustainabilityCommitment";
import ESGHighlights from "@/components/csr-page/ESGHighlights";
import CommunityImpact from "@/components/csr-page/CommunityImpact";
import CSRCTA from "@/components/csr-page/CSRCTA";

export const metadata: Metadata = {
  title: "CSR & Sustainability | Steelbuild Infra Projects Limited",
  description:
    "Explore Steelbuild Infra Projects Limited's approach to environmental responsibility, sustainable manufacturing, employee welfare and community development.",
  alternates: {
    canonical: "/about/csr-sustainability",
  },
};

export default function CSRSustainabilityPage() {
  return (
    <>
      <CSRHero />

      <SustainabilityCommitment />
      
      <ESGHighlights />

      <CommunityImpact />

      <CSRCTA />
    </>
  );
}