import StructuralMezzanineHero from "@/components/structural-mezzanine-page/StructuralMezzanineHero";
import StructuralMezzanineOverview from "@/components/structural-mezzanine-page/StructuralMezzanineOverview";
import StructuralMezzanineAdvantages from "@/components/structural-mezzanine-page/StructuralMezzanineAdvantages";
import StructuralMezzanineComponents from "@/components/structural-mezzanine-page/StructuralMezzanineComponents";
import StructuralMezzanineApplications from "@/components/structural-mezzanine-page/StructuralMezzanineApplications";
import StructuralMezzanineCTA from "@/components/structural-mezzanine-page/StructuralMezzanineCTA";
import StructuralMezzanineProcess from "@/components/structural-mezzanine-page/StructuralMezzanineProcess";

export default function StructuralMezzaninePage() {
  return (
    <main>
      <StructuralMezzanineHero />
      <StructuralMezzanineOverview />
      <StructuralMezzanineAdvantages />
      <StructuralMezzanineComponents />
      <StructuralMezzanineApplications />
      <StructuralMezzanineProcess />
      <StructuralMezzanineCTA />
    </main>
  );
}