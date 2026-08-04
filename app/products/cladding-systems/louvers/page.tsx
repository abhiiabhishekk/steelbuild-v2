import LouversHero from "@/components/louvers-page/LouversHero";
import LouversOverview from "@/components/louvers-page/LouversOverview";
import LouversAdvantages from "@/components/louvers-page/LouversAdvantages";
import LouversComponents from "@/components/louvers-page/LouversComponents";
import LouversApplications from "@/components/louvers-page/LouversApplications";
import LouversProcess from "@/components/louvers-page/LouversProcess";
import LouversManufacturing from "@/components/louvers-page/LouversManufacturing";
import LouversCTA from "@/components/louvers-page/LouversCTA";

export default function LouversPage() {
  return (
    <main>
      <LouversHero />
      <LouversOverview />
      <LouversAdvantages />
      <LouversComponents />
      <LouversApplications />
      <LouversProcess />
      <LouversManufacturing />
      <LouversCTA />
    </main>
  );
}