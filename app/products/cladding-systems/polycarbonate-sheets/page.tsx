import PolycarbonateSheetsHero from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsHero";
import PolycarbonateSheetsOverview from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsOverview";
import PolycarbonateSheetsAdvantages from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsAdvantages";
import PolycarbonateSheetsComponents from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsComponents";
import PolycarbonateSheetsApplications from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsApplications";
import PolycarbonateSheetsProcess from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsProcess";
import PolycarbonateSheetsManufacturing from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsManufacturing";
import PolycarbonateSheetsCTA from "@/components/polycarbonate-sheets-page/PolycarbonateSheetsCTA";

export default function PolycarbonateSheetsPage() {
  return (
    <main>
      <PolycarbonateSheetsHero />
      <PolycarbonateSheetsOverview />
      <PolycarbonateSheetsAdvantages />
      <PolycarbonateSheetsComponents />
      <PolycarbonateSheetsApplications />
      <PolycarbonateSheetsProcess />
      <PolycarbonateSheetsManufacturing />
      <PolycarbonateSheetsCTA />
    </main>
  );
}