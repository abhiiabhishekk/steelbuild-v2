import RoofPlatformsHero from "@/components/roof-platforms-page/RoofPlatformsHero";
import RoofPlatformsOverview from "@/components/roof-platforms-page/RoofPlatformsOverview";
import RoofPlatformsAdvantages from "@/components/roof-platforms-page/RoofPlatformsAdvantages";
import RoofPlatformsComponents from "@/components/roof-platforms-page/RoofPlatformsComponents";
import RoofPlatformsApplications from "@/components/roof-platforms-page/RoofPlatformsApplications";
import RoofPlatformsProcess from "@/components/roof-platforms-page/RoofPlatformsProcess";
import RoofPlatformsCTA from "@/components/roof-platforms-page/RoofPlatformsCTA";

export default function RoofPlatformsPage() {
  return (
    <main>
      <RoofPlatformsHero />
      <RoofPlatformsOverview />
      <RoofPlatformsAdvantages />
      <RoofPlatformsComponents />
      <RoofPlatformsApplications />
      <RoofPlatformsProcess />
      <RoofPlatformsCTA />
    </main>
  );
}