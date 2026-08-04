import SandwichPanelsHero from "@/components/sandwich-panels-page/SandwichPanelsHero";
import SandwichPanelsOverview from "@/components/sandwich-panels-page/SandwichPanelsOverview";
import SandwichPanelsAdvantages from "@/components/sandwich-panels-page/SandwichPanelsAdvantages";
import SandwichPanelsComponents from "@/components/sandwich-panels-page/SandwichPanelsComponents";
import SandwichPanelsApplications from "@/components/sandwich-panels-page/SandwichPanelsApplications";
import SandwichPanelsProcess from "@/components/sandwich-panels-page/SandwichPanelsProcess";
import SandwichPanelsManufacturing from "@/components/sandwich-panels-page/SandwichPanelsManufacturing";
import SandwichPanelsCTA from "@/components/sandwich-panels-page/SandwichPanelsCTA";

export default function SandwichPanelsPage() {
  return (
    <main>
      <SandwichPanelsHero />
      <SandwichPanelsOverview />
      <SandwichPanelsAdvantages />
      <SandwichPanelsComponents />
      <SandwichPanelsApplications />
      <SandwichPanelsProcess />
      <SandwichPanelsManufacturing />
      <SandwichPanelsCTA />
    </main>
  );
}