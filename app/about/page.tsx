import AboutHero from "@/components/about-page/AboutHero";
import CompanyStory from "@/components/about-page/CompanyStory";
import VisionMission from "@/components/about-page/VisionMission";
import AboutStats from "@/components/about-page/AboutStats";
import CertificatesSection from "@/components/about-page/CertificatesSection";
import Leadership from "@/components/about-page/Leadership";
import ManufacturingSection from "@/components/about-page/ManufacturingSection";
import EngineeringTechnology from "@/components/about-page/EngineeringTechnology";
import CoreValues from "@/components/about-page/CoreValues";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import CompanyTimeline from "@/components/about-page/CompanyTimeline";
import QualitySafety from "@/components/about-page/QualitySafety";
import type { Metadata } from "next";
import CorporateVideo from "@/components/common/CorporateVideo";

export const metadata: Metadata = {
  title:
    "About Steelbuild Infra Projects | Leading Pre-Engineered Building Company",
  description:
    "Learn about Steelbuild Infra Projects Limited, one of India's leading Pre-Engineered Building (PEB) companies with advanced manufacturing facilities, experienced leadership and 700+ completed projects.",

  keywords: [
    "About Steelbuild Infra Projects",
    "PEB Company India",
    "Pre Engineered Building Manufacturer",
    "Steel Building Company",
    "Industrial Building Manufacturer",
    "Warehouse Building Company",
    "Steel Structure Company",
    "PEB Manufacturer Haryana",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title:
      "About Steelbuild Infra Projects | Leading PEB Company",
    description:
      "Discover Steelbuild Infra Projects, delivering premium Pre-Engineered Building solutions across India.",

    url: "https://steelbuildinfra.com/about",

    siteName: "Steelbuild Infra Projects",

    images: [
      {
        url: "/images/about/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "About Steelbuild Infra Projects",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About Steelbuild Infra Projects | Leading PEB Company",

    description:
      "Learn more about Steelbuild Infra Projects and our engineering excellence.",

    images: ["/images/about/about-hero.jpg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <CompanyStory />

      <CorporateVideo
  sectionId="about-corporate-video"
  eyebrow="About Steelbuild"
  title="Discover Our Journey, People and Engineering Excellence"
  description="Watch our corporate film to understand Steelbuild's journey, values, manufacturing capabilities and commitment to quality."
  thumbnail="/images/video/corporate-video-thumbnail.jpg"
  youtubeVideoId="u4w_zBIxQCw"
/>

      <CompanyTimeline />

      <CoreValues />

      <VisionMission />

      <AboutStats />

      <Leadership />

      <ManufacturingSection />

      <QualitySafety />

      <EngineeringTechnology />

      <ProcessTimeline />

      <CertificatesSection />
    </>
  );
}