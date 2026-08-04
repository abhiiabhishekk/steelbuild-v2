import type { Metadata } from "next";

import BrochureHero from "@/components/company-brochure-page/BrochureHero";
import BrochurePreview from "@/components/company-brochure-page/BrochurePreview";
import BrochureHighlights from "@/components/company-brochure-page/BrochureHighlights";
import BrochureCTA from "@/components/company-brochure-page/BrochureCTA";

export const metadata: Metadata = {
  title: "Company Brochure | Steelbuild Infra Projects Limited",
  description:
    "View and download the Steelbuild Infra Projects Limited company brochure covering Pre-Engineered Building solutions, manufacturing capabilities, projects, industries and engineering expertise.",

  alternates: {
    canonical: "/about/company-brochure",
  },

  openGraph: {
    title: "Company Brochure | Steelbuild Infra Projects Limited",
    description:
      "Explore Steelbuild's company profile, products, manufacturing capabilities, projects and Pre-Engineered Building expertise.",

    url: "https://steelbuildinfra.com/about/company-brochure",
    siteName: "Steelbuild Infra Projects Limited",
    type: "website",
  },
};

export default function CompanyBrochurePage() {
  return (
    <>
      <BrochureHero />
      <BrochurePreview />
      <BrochureHighlights />
      <BrochureCTA />
    </>
  );
}