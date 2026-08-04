import type { Metadata } from "next";

import QualityHero from "@/components/quality-page/QualityHero";
import QualitySafety from "@/components/about-page/QualitySafety";
import CertificatesSection from "@/components/about-page/CertificatesSection";

export const metadata: Metadata = {
  title:
    "Quality & Certifications | Steelbuild Infra Projects Limited",
  description:
    "Discover Steelbuild Infra Projects Limited's commitment to quality, safety standards, certifications and engineering excellence.",
};

export default function QualityPage() {
  return (
    <>
      <QualityHero />
      <QualitySafety />
      <CertificatesSection />
    </>
  );
}