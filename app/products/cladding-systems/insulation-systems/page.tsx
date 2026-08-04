import InsulationSystemsHero from "@/components/insulation-systems-page/InsulationSystemsHero";
import InsulationSystemsOverview from "@/components/insulation-systems-page/InsulationSystemsOverview";
import InsulationSystemsAdvantages from "@/components/insulation-systems-page/InsulationSystemsAdvantages";
import InsulationSystemsComponents from "@/components/insulation-systems-page/InsulationSystemsComponents";
import InsulationSystemsApplications from "@/components/insulation-systems-page/InsulationSystemsApplications";
import InsulationSystemsProcess from "@/components/insulation-systems-page/InsulationSystemsProcess";
import InsulationSystemsManufacturing from "@/components/insulation-systems-page/InsulationSystemsManufacturing";
import InsulationSystemsCTA from "@/components/insulation-systems-page/InsulationSystemsCTA";

export default function InsulationSystemsPage() {
  return (
    <main>
      <InsulationSystemsHero />
      <InsulationSystemsOverview />
      <InsulationSystemsAdvantages />
      <InsulationSystemsComponents />
      <InsulationSystemsApplications />
      <InsulationSystemsProcess />
      <InsulationSystemsManufacturing />
      <InsulationSystemsCTA />
    </main>
  );
}