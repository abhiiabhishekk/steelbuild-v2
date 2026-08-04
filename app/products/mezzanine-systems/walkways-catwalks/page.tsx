import WalkwaysCatwalksHero from "@/components/walkways-catwalks-page/WalkwaysCatwalksHero";
import WalkwaysCatwalksOverview from "@/components/walkways-catwalks-page/WalkwaysCatwalksOverview";
import WalkwaysCatwalksApplications from "@/components/walkways-catwalks-page/WalkwaysCatwalksApplications";
import WalkwaysCatwalksProcess from "@/components/walkways-catwalks-page/WalkwaysCatwalksProcess";
import WalkwaysCatwalksCTA from "@/components/walkways-catwalks-page/WalkwaysCatwalksCTA";
import WalkwaysCatwalksAdvantages from "@/components/walkways-catwalks-page/WalkwaysCatwalksAdvantages";
import WalkwaysCatwalksComponents from "@/components/walkways-catwalks-page/WalkwaysCatwalksComponents";

export default function WalkwaysCatwalksPage() {
  return (
    <main>
      <WalkwaysCatwalksHero />
      <WalkwaysCatwalksOverview />
      <WalkwaysCatwalksAdvantages />
      <WalkwaysCatwalksComponents />
      <WalkwaysCatwalksApplications />
      <WalkwaysCatwalksProcess />
      <WalkwaysCatwalksCTA />
    </main>
  );
}