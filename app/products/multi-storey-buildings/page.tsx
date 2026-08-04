import type { Metadata } from "next";

import MultiStoreyHero from "@/components/multi-storey-buildings-page/MultiStoreyHero";
import MultiStoreyOverview from "@/components/multi-storey-buildings-page/MultiStoreyOverview";
import MultiStoreyAdvantages from "@/components/multi-storey-buildings-page/MultiStoreyAdvantages";
import MultiStoreySystems from "@/components/multi-storey-buildings-page/MultiStoreySystems";
import MultiStoreyApplications from "@/components/multi-storey-buildings-page/MultiStoreyApplications";
import MultiStoreyProcess from "@/components/multi-storey-buildings-page/MultiStoreyProcess";
import MultiStoreyCTA from "@/components/multi-storey-buildings-page/MultiStoreyCTA";

export const metadata: Metadata = {
  title:
    "Multi-Storey Steel Buildings Manufacturer in India | Steelbuild Infra Projects",
  description:
    "Explore engineered multi-storey steel building solutions from Steelbuild Infra Projects Limited for industrial, commercial, office and manufacturing applications.",

  keywords: [
    "Multi Storey Steel Buildings",
    "Multi Storey Building Manufacturer India",
    "Steel Structure Building",
    "Industrial Multi Storey Building",
    "Commercial Steel Building",
    "Steel Frame Buildings",
    "Multi Level Industrial Building",
    "Steel Building Company India",
  ],

  alternates: {
    canonical: "/products/multi-storey-buildings",
  },

  openGraph: {
    title:
      "Multi-Storey Steel Buildings | Steelbuild Infra Projects Limited",
    description:
      "Engineered multi-level steel buildings for industrial, commercial and infrastructure applications.",

    url: "https://steelbuildinfra.com/products/multi-storey-buildings",
    siteName: "Steelbuild Infra Projects Limited",
    type: "website",
  },
};

export default function MultiStoreyBuildingsPage() {
  return (
    <>
      <MultiStoreyHero />
      <MultiStoreyOverview />
      <MultiStoreyAdvantages />
      <MultiStoreySystems />
      <MultiStoreyApplications />
      <MultiStoreyProcess />
      <MultiStoreyCTA />
    </>
  );
}