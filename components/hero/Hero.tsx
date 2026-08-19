"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Swiper as SwiperType } from "swiper";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import HeroSlider, {
  type HeroSlide,
} from "./HeroSlider";

import { HERO_SLIDES } from "@/data/hero-slides";

const stats = [
  {
    value: "15+",
    label: "Years Experience",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="8" r="5" />
        <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
      </svg>
    ),
  },
  {
    value: "700+",
    label: "Projects Delivered",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M3 21h18" />
        <path d="M5 21V8l7-5 7 5v13" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 10h.01M12 10h.01M15 10h.01" />
      </svg>
    ),
  },
  {
    value: "50,000 MT",
    label: "Annual Capacity",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <path d="M3 21V9l5 3V9l5 3V7h8v14H3z" />
        <path d="M7 17h2M12 17h2M17 17h2" />
      </svg>
    ),
  },
  {
    value: "Pan India",
    label: "Project Execution",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 0 20" />
        <path d="M12 2a15.3 15.3 0 0 0 0 20" />
      </svg>
    ),
  },
];

type HeroProps = {
  slides?: HeroSlide[];
};

export default function Hero({
  slides = HERO_SLIDES,
}: HeroProps) {
  const safeSlides =
    slides.length > 0
      ? slides
      : HERO_SLIDES;

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [
    swiperInstance,
    setSwiperInstance,
  ] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (
      activeIndex >= safeSlides.length
    ) {
      setActiveIndex(0);
    }
  }, [
    activeIndex,
    safeSlides.length,
  ]);

  const activeSlide =
    safeSlides[activeIndex] ??
    safeSlides[0];

  const handleDotClick = (
    index: number,
  ) => {
    if (!swiperInstance) return;

    if (safeSlides.length > 1) {
      swiperInstance.slideToLoop(index);
    } else {
      swiperInstance.slideTo(index);
    }
  };

  return (
    <section
      className="relative min-h-[760px] overflow-visible text-white lg:h-[86vh] lg:max-h-[920px]"
      aria-labelledby="homepage-primary-heading"
    >
      {/* =====================================================
          PRIMARY SEO H1

          Stable page-level heading.
          Visually hidden so the existing hero design remains
          completely unchanged.
      ====================================================== */}

      <h1
        id="homepage-primary-heading"
        className="sr-only"
      >
        Pre-Engineered Buildings and PEB
        Manufacturer in India - Steelbuild Infra
        Projects Limited
      </h1>

      {/* =====================================================
          BACKGROUND SLIDER
      ====================================================== */}

      <HeroSlider
        slides={safeSlides}
        onSlideChange={setActiveIndex}
        onSwiperReady={setSwiperInstance}
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}

      <div
        className="hero-overlay"
        aria-hidden="true"
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-20 mx-auto flex h-full max-w-[1180px] items-center px-6 pb-36 pt-24 lg:pb-40 lg:pt-20">
        <div className="max-w-[760px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{
                opacity: 0,
                y: 28,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -18,
              }}
              transition={{
                duration: 0.65,
                ease: "easeOut",
              }}
            >
              {/* Eyebrow */}

              {activeSlide.eyebrow && (
                <p className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-primary-red">
                  {activeSlide.eyebrow}
                </p>
              )}

              {/* =================================================
                  SLIDE TITLE

                  H2 intentionally used here.
                  Homepage permanent H1 is defined above.
              ================================================== */}

              <h2 className="max-w-[820px] text-[44px] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[78px]">
                {activeSlide.title}
              </h2>

              {/* Slide Description */}

              <p className="mt-8 max-w-[580px] text-lg leading-8 text-white/90 lg:text-xl">
                {activeSlide.description}
              </p>

              {/* =================================================
                  CTA BUTTONS
              ================================================== */}

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href={
                    activeSlide.primaryButtonLink ||
                    "/projects"
                  }
                  className="group relative inline-flex min-h-[58px] items-center justify-center overflow-hidden rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_45px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(194,17,25,0.4)]"
                >
                  <span
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    aria-hidden="true"
                  />

                  <span className="relative z-10">
                    {activeSlide.primaryButtonText ||
                      "Explore Our Projects"}
                  </span>
                </Link>

                <Link
                  href={
                    activeSlide.secondaryButtonLink ||
                    "/contact"
                  }
                  className="group relative inline-flex min-h-[58px] items-center justify-center overflow-hidden rounded-2xl border border-white/30 bg-[#071a31]/35 px-8 py-4 font-black !text-white shadow-[0_14px_36px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:!bg-white hover:!text-primary-blue hover:shadow-[0_20px_48px_rgba(255,255,255,0.2)]"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:!text-primary-blue">
                    {activeSlide.secondaryButtonText ||
                      "Talk to Our Experts"}
                  </span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* =====================================================
          STATISTICS STRIP
      ====================================================== */}

      <div className="absolute -bottom-14 left-1/2 z-30 hidden w-full max-w-6xl -translate-x-1/2 px-6 lg:block">
        <div className="hero-stats grid grid-cols-4 overflow-hidden rounded-[28px] shadow-2xl">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 border-r border-white/10 px-7 py-5 last:border-r-0"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                {stat.icon}
              </div>

              <div>
                <p className="whitespace-nowrap text-3xl font-black tracking-tight text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-semibold text-white/65">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          SLIDE NUMBER + NAVIGATION
      ====================================================== */}

      <div className="absolute bottom-24 right-10 z-40 hidden items-center gap-5 rounded-full border border-white/15 bg-[#071a31]/40 px-5 py-2.5 shadow-xl backdrop-blur-xl lg:flex">
        {/* Current / Total */}

        <div
          className="flex items-center gap-2"
          aria-label={`Slide ${
            activeIndex + 1
          } of ${safeSlides.length}`}
        >
          <span className="text-sm font-black text-white">
            {String(
              activeIndex + 1,
            ).padStart(2, "0")}
          </span>

          <span
            className="text-sm font-black text-white/35"
            aria-hidden="true"
          >
            /
          </span>

          <span className="text-sm font-black text-white/55">
            {String(
              safeSlides.length,
            ).padStart(2, "0")}
          </span>
        </div>

        {/* Navigation Dots */}

        <div className="flex items-center gap-2">
          {safeSlides.map(
            (slide, index) => {
              const isActive =
                activeIndex === index;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() =>
                    handleDotClick(
                      index,
                    )
                  }
                  aria-label={`Go to slide ${
                    index + 1
                  }: ${slide.title}`}
                  aria-current={
                    isActive
                      ? "true"
                      : undefined
                  }
                  className="flex h-7 items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-2 rounded-full transition-all duration-500 ${
                      isActive
                        ? "w-8 bg-primary-red shadow-[0_0_16px_rgba(194,17,25,0.8)]"
                        : "w-2 bg-white/45 hover:bg-white"
                    }`}
                  />
                </button>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
}