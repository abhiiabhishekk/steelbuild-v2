import Hero from "@/components/hero/Hero";
import TrustSection from "@/components/about/TrustSection";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Industries from "@/components/industries/Industries";
import WhySteelbuild from "@/components/why/WhySteelbuild";
import ManufacturingSection from "@/components/manufacturing/ManufacturingSection";
import ProcessTimeline from "@/components/process/ProcessTimeline";
import ClientsSection from "@/components/clients/ClientsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import CTASection from "@/components/cta/CTASection";
// import IndiaProjectPresence from "@/components/project-presence/IndiaProjectPresence";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <FeaturedProjects />
      <Industries />
      <WhySteelbuild />
      <ManufacturingSection />
      {/* <IndiaProjectPresence /> */}
            <ClientsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}