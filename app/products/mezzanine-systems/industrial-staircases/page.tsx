import IndustrialStaircasesHero from "@/components/industrial-staircases-page/IndustrialStaircasesHero";
import IndustrialStaircasesOverview from "@/components/industrial-staircases-page/IndustrialStaircasesOverview";
import IndustrialStaircasesAdvantages from "@/components/industrial-staircases-page/IndustrialStaircasesAdvantages";
import IndustrialStaircasesComponents from "@/components/industrial-staircases-page/IndustrialStaircasesComponents";
import IndustrialStaircasesApplications from "@/components/industrial-staircases-page/IndustrialStaircasesApplications";
import IndustrialStaircasesProcess from "@/components/industrial-staircases-page/IndustrialStaircasesProcess";
import IndustrialStaircasesCTA from "@/components/industrial-staircases-page/IndustrialStaircasesCTA";

export default function IndustrialStaircasesPage() {
  return (
    <main>
      <IndustrialStaircasesHero />
      <IndustrialStaircasesOverview />
      <IndustrialStaircasesAdvantages />
      <IndustrialStaircasesComponents />
      <IndustrialStaircasesApplications />
      <IndustrialStaircasesProcess />
      <IndustrialStaircasesCTA />
    </main>
  );
}