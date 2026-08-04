import CladdingHero from "@/components/cladding-systems-page/CladdingHero";
import CladdingOverview from "@/components/cladding-systems-page/CladdingOverview";
import CladdingAdvantages from "@/components/cladding-systems-page/CladdingAdvantages";
import CladdingTypes from "@/components/cladding-systems-page/CladdingTypes";
import CladdingApplications from "@/components/cladding-systems-page/CladdingApplications";
import CladdingProcess from "@/components/cladding-systems-page/CladdingProcess";
import CladdingCTA from "@/components/cladding-systems-page/CladdingCTA";

export default function CladdingSystemsPage() {
  return (
    <main>
      <CladdingHero />
      <CladdingOverview />
      <CladdingAdvantages />
      <CladdingTypes />
      <CladdingApplications />
      <CladdingProcess />
      <CladdingCTA />
    </main>
  );
}