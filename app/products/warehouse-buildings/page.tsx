import WarehouseHero from "@/components/warehouse-buildings-page/WarehouseHero";
import WarehouseOverview from "@/components/warehouse-buildings-page/WarehouseOverview";
import WarehouseAdvantages from "@/components/warehouse-buildings-page/WarehouseAdvantages";
import WarehouseSystems from "@/components/warehouse-buildings-page/WarehouseSystems";
import WarehouseApplications from "@/components/warehouse-buildings-page/WarehouseApplications";
import WarehouseProcess from "@/components/warehouse-buildings-page/WarehouseProcess";
import WarehouseCTA from "@/components/warehouse-buildings-page/WarehouseCTA";

export default function WarehouseBuildingsPage() {
  return (
    <main>
      <WarehouseHero />
      <WarehouseOverview />
      <WarehouseAdvantages />
      <WarehouseSystems />
      <WarehouseApplications />
      <WarehouseProcess />
      <WarehouseCTA />
    </main>
  );
}