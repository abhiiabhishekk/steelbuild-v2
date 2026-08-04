import DeckSheetsHero from "@/components/deck-sheets-page/DeckSheetsHero";
import DeckSheetsOverview from "@/components/deck-sheets-page/DeckSheetsOverview";
import DeckSheetsAdvantages from "@/components/deck-sheets-page/DeckSheetsAdvantages";
import DeckSheetsComponents from "@/components/deck-sheets-page/DeckSheetsComponents";
import DeckSheetsApplications from "@/components/deck-sheets-page/DeckSheetsApplications";
import DeckSheetsProcess from "@/components/deck-sheets-page/DeckSheetsProcess";
import DeckSheetsManufacturing from "@/components/deck-sheets-page/DeckSheetsManufacturing";
import DeckSheetsCTA from "@/components/deck-sheets-page/DeckSheetsCTA";

export default function DeckSheetsPage() {
  return (
    <main>
      <DeckSheetsHero />
      <DeckSheetsOverview />
      <DeckSheetsAdvantages />
      <DeckSheetsComponents />
      <DeckSheetsApplications />
      <DeckSheetsProcess />
      <DeckSheetsManufacturing />
      <DeckSheetsCTA />
    </main>
  );
}