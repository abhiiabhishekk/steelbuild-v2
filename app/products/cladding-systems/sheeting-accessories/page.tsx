import SheetingAccessoriesHero from "@/components/sheeting-accessories-page/SheetingAccessoriesHero";
import SheetingAccessoriesOverview from "@/components/sheeting-accessories-page/SheetingAccessoriesOverview";
import SheetingAccessoriesAdvantages from "@/components/sheeting-accessories-page/SheetingAccessoriesAdvantages";
import SheetingAccessoriesComponents from "@/components/sheeting-accessories-page/SheetingAccessoriesComponents";
import SheetingAccessoriesApplications from "@/components/sheeting-accessories-page/SheetingAccessoriesApplications";
import SheetingAccessoriesProcess from "@/components/sheeting-accessories-page/SheetingAccessoriesProcess";
import SheetingAccessoriesManufacturing from "@/components/sheeting-accessories-page/SheetingAccessoriesManufacturing";
import SheetingAccessoriesCTA from "@/components/sheeting-accessories-page/SheetingAccessoriesCTA";

export default function SheetingAccessoriesPage() {
  return (
    <main>
  <SheetingAccessoriesHero />
  <SheetingAccessoriesOverview />
    <SheetingAccessoriesAdvantages />
<SheetingAccessoriesComponents />
<SheetingAccessoriesApplications />
<SheetingAccessoriesProcess />
<SheetingAccessoriesManufacturing />
<SheetingAccessoriesCTA />
</main>
  );
}