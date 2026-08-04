import IndustrialShedsHero from "@/components/industrial-sheds-page/IndustrialShedsHero";
import IndustrialShedsOverview from "@/components/industrial-sheds-page/IndustrialShedsOverview";
import IndustrialShedsAdvantages from "@/components/industrial-sheds-page/IndustrialShedsAdvantages";
import IndustrialShedsSystems from "@/components/industrial-sheds-page/IndustrialShedsSystems";
import IndustrialShedsApplications from "@/components/industrial-sheds-page/IndustrialShedsApplications";
import IndustrialShedsProcess from "@/components/industrial-sheds-page/IndustrialShedsProcess";
import IndustrialShedsCTA from "@/components/industrial-sheds-page/IndustrialShedsCTA";

export default function IndustrialShedsPage() {
  return (
    <main>
      <IndustrialShedsHero />
      <IndustrialShedsOverview />
      <IndustrialShedsAdvantages />
      <IndustrialShedsSystems />
      <IndustrialShedsApplications />
      <IndustrialShedsProcess />
      <IndustrialShedsCTA />
    </main>
  );
}