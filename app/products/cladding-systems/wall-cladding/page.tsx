import WallCladdingHero from "@/components/wall-cladding-page/WallCladdingHero";
import WallCladdingOverview from "@/components/wall-cladding-page/WallCladdingOverview";
import WallCladdingAdvantages from "@/components/wall-cladding-page/WallCladdingAdvantages";
import WallCladdingComponents from "@/components/wall-cladding-page/WallCladdingComponents";
import WallCladdingApplications from "@/components/wall-cladding-page/WallCladdingApplications";
import WallCladdingProcess from "@/components/wall-cladding-page/WallCladdingProcess";
import WallCladdingManufacturing from "@/components/wall-cladding-page/WallCladdingManufacturing";
import WallCladdingCTA from "@/components/wall-cladding-page/WallCladdingCTA";

export default function WallCladdingPage() {
  return (
    <main>
      <WallCladdingHero />
      <WallCladdingOverview />
      <WallCladdingAdvantages />
      <WallCladdingComponents />
      <WallCladdingApplications />
      <WallCladdingProcess />
      <WallCladdingManufacturing />
      <WallCladdingCTA />
    </main>
  );
}