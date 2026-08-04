import ColdStorageHero from "@/components/cold-storage-buildings-page/ColdStorageHero";
import ColdStorageOverview from "@/components/cold-storage-buildings-page/ColdStorageOverview";
import ColdStorageAdvantages from "@/components/cold-storage-buildings-page/ColdStorageAdvantages";
import ColdStorageSystems from "@/components/cold-storage-buildings-page/ColdStorageSystems";
import ColdStorageApplications from "@/components/cold-storage-buildings-page/ColdStorageApplications";
import ColdStorageProcess from "@/components/cold-storage-buildings-page/ColdStorageProcess";
import ColdStorageCTA from "@/components/cold-storage-buildings-page/ColdStorageCTA";

export default function ColdStorageBuildingsPage() {
  return (
    <main>
      <ColdStorageHero />
      <ColdStorageOverview />
      <ColdStorageAdvantages />
      <ColdStorageSystems />
      <ColdStorageApplications />
      <ColdStorageProcess />
      <ColdStorageCTA />
    </main>
  );
}