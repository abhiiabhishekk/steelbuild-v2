import StandingSeamRoofingHero from "@/components/standing-seam-roofing-page/StandingSeamRoofingHero";
import StandingSeamRoofingOverview from "@/components/standing-seam-roofing-page/StandingSeamRoofingOverview";
import StandingSeamRoofingAdvantages from "@/components/standing-seam-roofing-page/StandingSeamRoofingAdvantages";
import StandingSeamRoofingComponents from "@/components/standing-seam-roofing-page/StandingSeamRoofingComponents";
import StandingSeamRoofingApplications from "@/components/standing-seam-roofing-page/StandingSeamRoofingApplications";
import StandingSeamRoofingProcess from "@/components/standing-seam-roofing-page/StandingSeamRoofingProcess";
import StandingSeamRoofingCTA from "@/components/standing-seam-roofing-page/StandingSeamRoofingCTA";
import StandingSeamRoofingManufacturing from "@/components/standing-seam-roofing-page/StandingSeamRoofingManufacturing";
import StandingSeamRoofingProfiles from "@/components/standing-seam-roofing-page/StandingSeamRoofingProfiles";
import StandingSeamRoofingCompatibleAccessories from "@/components/standing-seam-roofing-page/StandingSeamRoofingCompatibleAccessories";

export default function StandingSeamRoofingPage() {
  return (
    <main>
      <StandingSeamRoofingHero />
      <StandingSeamRoofingOverview />
      <StandingSeamRoofingAdvantages />
      <StandingSeamRoofingComponents />
      <StandingSeamRoofingApplications />
      <StandingSeamRoofingProcess />
      <StandingSeamRoofingManufacturing />
      <StandingSeamRoofingProfiles />
      <StandingSeamRoofingCompatibleAccessories />
      <StandingSeamRoofingCTA />
    </main>
  );
}