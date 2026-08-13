import Hero from "@/components/hero/Hero";

import TrustSection from "@/components/about/TrustSection";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import Industries from "@/components/industries/Industries";
import WhySteelbuild from "@/components/why/WhySteelbuild";
import ManufacturingSection from "@/components/manufacturing/ManufacturingSection";
import ClientsSection from "@/components/clients/ClientsSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import CTASection from "@/components/cta/CTASection";

import { HERO_SLIDES } from "@/data/hero-slides";

import { sanityFetch } from "@/sanity/lib/live";
import { HERO_SLIDES_QUERY } from "@/sanity/lib/heroQueries";

import type { SanityHeroSlide } from "@/types/sanityHeroSlide";
import type { HeroSlide } from "@/components/hero/HeroSlider";

function convertSanityHeroSlides(
  slides: SanityHeroSlide[],
): HeroSlide[] {
  return slides
    .filter((slide) => {
      return Boolean(
        slide.image?.asset?.url &&
          slide.title &&
          slide.description,
      );
    })
    .map((slide) => ({
      id: slide._id,

      image:
        slide.image?.asset?.url ?? "",

      eyebrow:
        slide.eyebrow ?? "",

      title:
        slide.title,

      description:
        slide.description,

      primaryButtonText:
        slide.primaryButtonText ||
        "Explore Our Projects",

      primaryButtonLink:
        slide.primaryButtonLink ||
        "/projects",

      secondaryButtonText:
        slide.secondaryButtonText ||
        "Talk to Our Experts",

      secondaryButtonLink:
        slide.secondaryButtonLink ||
        "/contact",
    }));
}

export default async function HomePage() {
  let heroSlides: HeroSlide[] =
    HERO_SLIDES;

  try {
    const { data } =
      await sanityFetch({
        query: HERO_SLIDES_QUERY,
      });

    const sanitySlides =
      (data ?? []) as SanityHeroSlide[];

    const convertedSlides =
      convertSanityHeroSlides(
        sanitySlides,
      );

    /*
     * Sanity me kam se kam ek valid
     * published hero slide ho tabhi
     * Sanity data use hoga.
     *
     * Agar Sanity empty/down/error ho,
     * local HERO_SLIDES fallback rahenge.
     */
    if (convertedSlides.length > 0) {
      heroSlides =
        convertedSlides;
    }
  } catch (error) {
    console.error(
      "Failed to fetch homepage hero slides from Sanity:",
      error,
    );

    /*
     * Existing local slides automatically
     * fallback ke roop me use honge.
     */
  }

  return (
    <>
      <Hero slides={heroSlides} />

      <TrustSection />

      <FeaturedProjects />

      <Industries />

      <WhySteelbuild />

      <ManufacturingSection />

      <ClientsSection />

      <TestimonialsSection />

      <CTASection />
    </>
  );
}