import TurboVentilatorsHero from "@/components/turbo-ventilators-page/TurboVentilatorsHero";
import TurboVentilatorsOverview from "@/components/turbo-ventilators-page/TurboVentilatorsOverview";
import TurboVentilatorsAdvantages from "@/components/turbo-ventilators-page/TurboVentilatorsAdvantages";
import TurboVentilatorsComponents from "@/components/turbo-ventilators-page/TurboVentilatorsComponents";
import TurboVentilatorsApplications from "@/components/turbo-ventilators-page/TurboVentilatorsApplications";
import TurboVentilatorsProcess from "@/components/turbo-ventilators-page/TurboVentilatorsProcess";
import TurboVentilatorsManufacturing from "@/components/turbo-ventilators-page/TurboVentilatorsManufacturing";
import TurboVentilatorsCTA from "@/components/turbo-ventilators-page/TurboVentilatorsCTA";

export default function TurboVentilatorsPage() {
  return (
    <main>
      <TurboVentilatorsHero />
      <TurboVentilatorsOverview />
      <TurboVentilatorsAdvantages />
      <TurboVentilatorsComponents />
      <TurboVentilatorsApplications />
      <TurboVentilatorsProcess />
      <TurboVentilatorsManufacturing />
      <TurboVentilatorsCTA />
    </main>
  );
}