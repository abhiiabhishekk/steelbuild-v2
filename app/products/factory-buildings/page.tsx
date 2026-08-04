import FactoryHero from "@/components/factory-buildings-page/FactoryHero";
import FactoryOverview from "@/components/factory-buildings-page/FactoryOverview";
import FactoryAdvantages from "@/components/factory-buildings-page/FactoryAdvantages";
import FactorySystems from "@/components/factory-buildings-page/FactorySystems";
import FactoryApplications from "@/components/factory-buildings-page/FactoryApplications";
import FactoryProcess from "@/components/factory-buildings-page/FactoryProcess";
import FactoryCTA from "@/components/factory-buildings-page/FactoryCTA";

export default function FactoryBuildingsPage() {
  return (
    <main>
      <FactoryHero />
      <FactoryOverview />
      <FactoryAdvantages />
      <FactorySystems />
      <FactoryApplications />
      <FactoryProcess />
      <FactoryCTA />
    </main>
  );
}