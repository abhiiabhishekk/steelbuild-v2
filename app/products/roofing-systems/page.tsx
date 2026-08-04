import RoofingHero from "@/components/roofing-systems-page/RoofingHero";
import RoofingOverview from "@/components/roofing-systems-page/RoofingOverview";
import RoofingAdvantages from "@/components/roofing-systems-page/RoofingAdvantages";
import RoofingTypes from "@/components/roofing-systems-page/RoofingTypes";
import RoofingApplications from "@/components/roofing-systems-page/RoofingApplications"
import RoofingProcess from "@/components/roofing-systems-page/RoofingProcess";
import RoofingCTA from "@/components/roofing-systems-page/RoofingCTA";

export default function RoofingSystemsPage() {
  return (
    <main>
      <RoofingHero />
      <RoofingOverview />
      <RoofingAdvantages />
      <RoofingTypes />
      <RoofingApplications />
      <RoofingProcess />
      <RoofingCTA />
    </main>
  );
}