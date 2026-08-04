import RidgeVentilatorsHero from "@/components/ridge-ventilators-page/RidgeVentilatorsHero";
import RidgeVentilatorsOverview from "@/components/ridge-ventilators-page/RidgeVentilatorsOverview";
import RidgeVentilatorsAdvantages from "@/components/ridge-ventilators-page/RidgeVentilatorsAdvantages";
import RidgeVentilatorsComponents from "@/components/ridge-ventilators-page/RidgeVentilatorsComponents";
import RidgeVentilatorsApplications from "@/components/ridge-ventilators-page/RidgeVentilatorsApplications";
import RidgeVentilatorsProcess from "@/components/ridge-ventilators-page/RidgeVentilatorsProcess";
import RidgeVentilatorsManufacturing from "@/components/ridge-ventilators-page/RidgeVentilatorsManufacturing";
import RidgeVentilatorsCTA from "@/components/ridge-ventilators-page/RidgeVentilatorsCTA";

export default function RidgeVentilatorsPage() {
  return (
    <main>
      <RidgeVentilatorsHero />
      <RidgeVentilatorsOverview />
      <RidgeVentilatorsAdvantages />
      <RidgeVentilatorsComponents />
      <RidgeVentilatorsApplications />
      <RidgeVentilatorsProcess />
      <RidgeVentilatorsManufacturing />
      <RidgeVentilatorsCTA />
    </main>
  );
}