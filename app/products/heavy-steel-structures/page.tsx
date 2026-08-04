import HeavySteelHero from "@/components/heavy-steel-structures-page/HeavySteelHero";
import HeavySteelOverview from "@/components/heavy-steel-structures-page/HeavySteelOverview";
import HeavySteelAdvantages from "@/components/heavy-steel-structures-page/HeavySteelAdvantages";
import HeavySteelSystems from "@/components/heavy-steel-structures-page/HeavySteelSystems";
import HeavySteelApplications from "@/components/heavy-steel-structures-page/HeavySteelApplications";
import HeavySteelProcess from "@/components/heavy-steel-structures-page/HeavySteelProcess";
import HeavySteelCTA from "@/components/heavy-steel-structures-page/HeavySteelCTA";

export default function HeavySteelStructuresPage() {
  return (
    <main>
      <HeavySteelHero />
      <HeavySteelOverview />
      <HeavySteelAdvantages />
      <HeavySteelSystems />
      <HeavySteelApplications />
      <HeavySteelProcess />
      <HeavySteelCTA />
    </main>
  );
}