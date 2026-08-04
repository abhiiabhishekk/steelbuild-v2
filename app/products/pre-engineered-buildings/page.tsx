import type { Metadata } from "next";

import PEBHero from "@/components/pre-engineered-buildings-page/PEBHero";
import PEBOverview from "@/components/pre-engineered-buildings-page/PEBOverview";
import PEBFeatures from "@/components/pre-engineered-buildings-page/PEBFeatures";
import PEBApplications from "@/components/pre-engineered-buildings-page/PEBApplications";
import PEBProcess from "@/components/pre-engineered-buildings-page/PEBProcess";
import PEBCTA from "@/components/pre-engineered-buildings-page/PEBCTA";
import PEBStructuralSystems from "@/components/pre-engineered-buildings-page/PEBStructuralSystems";

export const metadata: Metadata = {
  title:
    "Pre-Engineered Buildings Manufacturer in India | Steelbuild Infra Projects",
  description:
    "Explore high-performance Pre-Engineered Building solutions from Steelbuild Infra Projects Limited for factories, warehouses, logistics facilities and industrial infrastructure projects.",

  keywords: [
    "Pre-Engineered Buildings",
    "PEB Manufacturer India",
    "Pre Engineered Building Company",
    "Industrial Steel Buildings",
    "Warehouse Building Manufacturer",
    "Factory Building Manufacturer",
    "PEB Structure",
    "Steel Building Solutions",
  ],

  alternates: {
    canonical: "/products/pre-engineered-buildings",
  },

  openGraph: {
    title:
      "Pre-Engineered Buildings | Steelbuild Infra Projects Limited",
    description:
      "Engineered Pre-Engineered Building solutions for industrial, warehousing, manufacturing and infrastructure applications.",

    url: "https://steelbuildinfra.com/products/pre-engineered-buildings",
    siteName: "Steelbuild Infra Projects Limited",
    type: "website",
  },
};

export default function PreEngineeredBuildingsPage() {
  return (
    <>
      <PEBHero />
      <PEBOverview />
      <PEBFeatures />
      <PEBStructuralSystems />
      <PEBApplications />
      <PEBProcess />
      <PEBCTA />
    </>
  );
}