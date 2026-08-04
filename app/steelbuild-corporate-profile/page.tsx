import type { Metadata } from "next";

import CorporateVideo from "@/components/common/CorporateVideo";
import CorporateProfileBrochure from "@/components/steelbuild-corporate-profile-page/CorporateProfileBrochure";
import CorporateProfileCTA from "@/components/steelbuild-corporate-profile-page/CorporateProfileCTA";
import CorporateProfileHero from "@/components/steelbuild-corporate-profile-page/CorporateProfileHero";
import CorporateProfileOverview from "@/components/steelbuild-corporate-profile-page/CorporateProfileOverview";

export const metadata: Metadata = {
  title:
    "Steelbuild Corporate Profile | Steelbuild Infra Projects Limited",
  description:
    "Watch the Steelbuild Infra Projects Limited corporate film and explore our official company brochure, engineering expertise, manufacturing capabilities and project experience.",
  alternates: {
    canonical: "/steelbuild-corporate-profile",
  },
};

export default function SteelbuildCorporateProfilePage() {
  return (
    <main>
      <CorporateProfileHero />

      <CorporateVideo
  eyebrow="Corporate Film"
  title="Discover Steelbuild Infra Projects Limited"
  description="Watch our corporate film to explore Steelbuild's organization, engineering expertise, manufacturing infrastructure, project capabilities and commitment to delivering dependable industrial building solutions."
  thumbnail="/images/video/corporate-video-thumbnail.jpg"
  youtubeVideoId="u4w_zBIxQCw"
  sectionId="corporate-video"
/>

      <CorporateProfileOverview />

      <CorporateProfileBrochure />

      <CorporateProfileCTA />
    </main>
  );
}