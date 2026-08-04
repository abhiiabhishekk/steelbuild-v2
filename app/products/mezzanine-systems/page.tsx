import MezzanineHero from "@/components/mezzanine-systems-page/MezzanineHero";
import MezzanineOverview from "@/components/mezzanine-systems-page/MezzanineOverview";
import MezzanineAdvantages from "@/components/mezzanine-systems-page/MezzanineAdvantages";
import MezzanineComponents from "@/components/mezzanine-systems-page/MezzanineComponents";
import MezzanineApplications from "@/components/mezzanine-systems-page/MezzanineApplications";
import MezzanineProcess from "@/components/mezzanine-systems-page/MezzanineProcess";
import MezzanineCTA from "@/components/mezzanine-systems-page/MezzanineCTA";

export default function MezzanineSystemsPage() {
  return (
    <main>
      <MezzanineHero />
      <MezzanineOverview />
      <MezzanineAdvantages />
      <MezzanineComponents />
      <MezzanineApplications />
      <MezzanineProcess />
      <MezzanineCTA />
    </main>
  );
}