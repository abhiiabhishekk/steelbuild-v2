import RoofingSheetsHero from "@/components/roofing-sheets-page/RoofingSheetsHero";
import RoofingSheetsAdvantages from "@/components/roofing-sheets-page/RoofingSheetsAdvantages";
import RoofingSheetsOverview from "@/components/roofing-sheets-page/RoofingSheetsOverview";
import RoofingSheetsComponents from "@/components/roofing-sheets-page/RoofingSheetsComponents";
import RoofingSheetsApplications from "@/components/roofing-sheets-page/RoofingSheetsApplications";
import RoofingSheetsProcess from "@/components/roofing-sheets-page/RoofingSheetsProcess";
import RoofingSheetsManufacturing from "@/components/roofing-sheets-page/RoofingSheetsManufacturing";
import RoofingSheetsProfiles from "@/components/roofing-sheets-page/RoofingSheetsProfiles";
import RoofingSheetsCompatibleAccessories from "@/components/roofing-sheets-page/RoofingSheetsCompatibleAccessories";
import RoofingSheetsCTA from "@/components/roofing-sheets-page/RoofingSheetsCTA";

export default function RoofingSheetsPage() {
  return (
    <main>
      <RoofingSheetsHero />
      <RoofingSheetsOverview />
      <RoofingSheetsAdvantages />
      <RoofingSheetsComponents />
      <RoofingSheetsApplications />
      <RoofingSheetsProcess />
      <RoofingSheetsManufacturing />
      <RoofingSheetsProfiles />
      <RoofingSheetsCompatibleAccessories />
      <RoofingSheetsCTA />
    </main>
  );
}