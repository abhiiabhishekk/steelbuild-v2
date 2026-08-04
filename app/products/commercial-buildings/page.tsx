import CommercialHero from "@/components/commercial-buildings-page/CommercialHero";
import CommercialOverview from "@/components/commercial-buildings-page/CommercialOverview";
import CommercialAdvantages from "@/components/commercial-buildings-page/CommercialAdvantages";
import CommercialSystems from "@/components/commercial-buildings-page/CommercialSystems";
import CommercialApplications from "@/components/commercial-buildings-page/CommercialApplications";
import CommercialProcess from "@/components/commercial-buildings-page/CommercialProcess";
import CommercialCTA from "@/components/commercial-buildings-page/CommercialCTA";

export default function CommercialBuildingsPage() {
  return (
    <main>
      <CommercialHero />
      <CommercialOverview />
      <CommercialAdvantages />
      <CommercialSystems />
      <CommercialApplications />
      <CommercialProcess />
      <CommercialCTA />
    </main>
  );
}