"use client";

import Image from "next/image";

import {
  useEffect,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  Award,
  BadgeCheck,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Expand,
  Trophy,
  X,
} from "lucide-react";

import Container from "@/components/layout/Container";

import type {
  SanityAward,
} from "@/types/sanityAward";

type FeaturedAwardsProps = {
  awards: SanityAward[];
};

const fallbackAwards: SanityAward[] = [
  {
    _id:
      "outlook-business-award",

    awardId: "STATIC-001",

    title:
      "Emerging Company in Pre-Engineered Building Solutions",

    slug:
      "outlook-business-award",

    organization:
      "Outlook Business",

    eventName:
      "Builders Excellence Awards",

    awardDate:
      "2025-01-01",

    yearLabel: "2025",

    category:
      "Business Excellence",

    shortDescription:
      "Steelbuild Infra Projects Limited was recognized for its growing contribution, engineering capability and commitment to delivering dependable Pre-Engineered Building solutions.",

    highlights: [],

    mainImage: {
      url:
        "/images/awards/outlook-business-award-2025.jpg",

      alt:
        "Emerging Company in Pre-Engineered Building Solutions award presented to Steelbuild Infra Projects Limited",

      caption:
        "Builders Excellence Awards Ceremony",
    },

    gallery: [],

    featured: true,
    active: true,
    displayOrder: 1,
  },

  {
    _id:
      "brand-vista-award",

    awardId: "STATIC-002",

    title:
      "India's Iconic Sustainable Leaders",

    slug:
      "brand-vista-award",

    organization:
      "Brand Vista",

    eventName:
      "Where Visionaries Shape Tomorrow",

    awardDate:
      "2025-01-01",

    yearLabel: "2025",

    category:
      "Sustainability Recognition",

    shortDescription:
      "The recognition reflects Steelbuild's commitment to responsible growth, sustainable practices, industrial progress and long-term value creation.",

    highlights: [],

    mainImage: {
      url:
        "/images/awards/brand-vista-award-2025.jpg",

      alt:
        "India's Iconic Sustainable Leaders recognition presented to Steelbuild Infra Projects Limited",

      caption:
        "India's Iconic Sustainable Leaders Award Ceremony",
    },

    gallery: [],

    featured: true,
    active: true,
    displayOrder: 2,
  },

  {
    _id:
      "vst-coreb-award",

    awardId: "STATIC-003",

    title:
      "Supplier Excellence Award",

    slug:
      "vst-coreb-award",

    organization:
      "VST coreB",

    eventName:
      "Supplier Excellence Awards",

    awardDate:
      "2026-01-01",

    yearLabel: "2026",

    category:
      "Supplier Excellence",

    shortDescription:
      "Steelbuild Infra Projects Limited was recognized for supplier excellence, dependable coordination, quality performance and commitment to project requirements.",

    highlights: [],

    mainImage: {
      url:
        "/images/awards/vst-coreb-award-2026.jpg",

      alt:
        "Supplier Excellence Award presented to Steelbuild Infra Projects Limited",

      caption:
        "VST coreB Supplier Excellence Awards",
    },

    gallery: [],

    featured: true,
    active: true,
    displayOrder: 3,
  },
];

export default function FeaturedAwards({
  awards,
}: FeaturedAwardsProps) {
  const displayedAwards =
    awards.length > 0
      ? awards
      : fallbackAwards;

  const [
    activeAwardIndex,
    setActiveAwardIndex,
  ] = useState<number | null>(
    null,
  );

  const [
    activeImageIndex,
    setActiveImageIndex,
  ] = useState(0);

  const closeLightbox = () => {
    setActiveAwardIndex(null);
    setActiveImageIndex(0);
  };

  function getAwardImages(
    award: SanityAward,
  ) {
    return [
      award.mainImage,
      award.certificateImage,
      ...award.gallery,
    ].filter(
      (
        image,
      ): image is NonNullable<
        typeof image
      > => Boolean(image?.url),
    );
  }

  function openAward(
    awardIndex: number,
  ) {
    setActiveAwardIndex(
      awardIndex,
    );

    setActiveImageIndex(0);
  }

  function showPreviousAward() {
    setActiveAwardIndex(
      (current) => {
        if (current === null) {
          return null;
        }

        return current === 0
          ? displayedAwards.length - 1
          : current - 1;
      },
    );

    setActiveImageIndex(0);
  }

  function showNextAward() {
    setActiveAwardIndex(
      (current) => {
        if (current === null) {
          return null;
        }

        return current ===
          displayedAwards.length - 1
          ? 0
          : current + 1;
      },
    );

    setActiveImageIndex(0);
  }

  useEffect(() => {
    if (
      activeAwardIndex === null
    ) {
      document.body.style.overflow =
        "";

      return;
    }

    document.body.style.overflow =
      "hidden";

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === "Escape"
      ) {
        closeLightbox();
      }

      if (
        event.key === "ArrowLeft"
      ) {
        showPreviousAward();
      }

      if (
        event.key === "ArrowRight"
      ) {
        showNextAward();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      document.body.style.overflow =
        "";

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    activeAwardIndex,
    displayedAwards.length,
  ]);

  const activeAward =
    activeAwardIndex !== null
      ? displayedAwards[
          activeAwardIndex
        ]
      : null;

  const activeAwardImages =
    activeAward
      ? getAwardImages(
          activeAward,
        )
      : [];

  const activeImage =
    activeAwardImages[
      activeImageIndex
    ];

  return (
    <>
      <section
        id="featured-awards"
        className="relative scroll-mt-32 overflow-hidden bg-white py-24 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.65,
            }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
              <Trophy size={15} />

              Featured Awards
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Recognition That Celebrates Our Progress
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
              These recognitions reflect Steelbuild&apos;s commitment to
              engineering excellence, sustainable growth, supplier performance
              and dependable project delivery.
            </p>
          </motion.div>

          <div className="relative z-10 mt-16 space-y-9">
            {displayedAwards.map(
              (award, index) => (
                <motion.article
                  key={award._id}
                  id={award.slug}
                  initial={{
                    opacity: 0,
                    y: 34,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-70px",
                  }}
                  transition={{
                    duration: 0.65,
                    delay:
                      index * 0.06,
                  }}
                  className="group overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_24px_80px_rgba(27,63,104,0.1)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-red/25 hover:shadow-[0_36px_100px_rgba(27,63,104,0.16)]"
                >
                  <div className="grid items-stretch lg:grid-cols-[55%_45%]">
                    <button
                      type="button"
                      onClick={() =>
                        openAward(
                          index,
                        )
                      }
                      className="group/image relative min-h-[330px] overflow-hidden bg-[#edf2f7] text-left lg:min-h-[430px]"
                      aria-label={`Open ${award.title} image`}
                    >
                      <Image
                        src={
                          award.mainImage
                            .url
                        }
                        alt={
                          award.mainImage
                            .alt ||
                          `${award.title} awarded to Steelbuild Infra Projects Limited`
                        }
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        placeholder={
                          award.mainImage
                            .lqip
                            ? "blur"
                            : "empty"
                        }
                        blurDataURL={
                          award.mainImage
                            .lqip
                        }
                        className="object-cover object-center transition-transform duration-700 group-hover/image:scale-[1.04]"
                        priority={
                          index === 0
                        }
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/45 via-transparent to-transparent" />

                      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-primary-red px-4 py-2 text-xs font-black text-white shadow-lg">
                        <CalendarDays
                          size={15}
                        />

                        {
                          award.yearLabel
                        }
                      </div>

                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-white/75">
                            Award Ceremony
                          </p>

                          <p className="mt-1 text-sm font-black text-white">
                            {award
                              .mainImage
                              .caption ||
                              award.eventName ||
                              award.title}
                          </p>
                        </div>

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-black/25 text-white backdrop-blur-md transition-all duration-300 group-hover/image:bg-primary-red">
                          <Expand
                            size={20}
                          />
                        </span>
                      </div>
                    </button>

                    <div className="relative isolate flex flex-col justify-center overflow-hidden p-8 md:p-10 lg:p-11">
                      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-blue/[0.055] blur-3xl" />

                      <div className="relative z-10">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[18px] bg-primary-red/10 text-primary-red">
                          <Award
                            size={27}
                          />
                        </div>

                        <p className="mt-6 text-[11px] font-black uppercase tracking-[0.24em] text-primary-red">
                          {
                            award.organization
                          }
                        </p>

                        <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-[38px]">
                          {award.title}
                        </h3>

                        {award.eventName && (
                          <p className="mt-3 text-base font-black text-primary-red">
                            {
                              award.eventName
                            }
                          </p>
                        )}

                        <p className="mt-6 text-base font-medium leading-8 text-gray-600">
                          {
                            award.shortDescription
                          }
                        </p>

                        {award
                          .highlights
                          .length > 0 && (
                          <div className="mt-6 flex flex-wrap gap-2">
                            {award.highlights.map(
                              (
                                highlight,
                              ) => (
                                <span
                                  key={
                                    highlight
                                  }
                                  className="rounded-full border border-primary-blue/10 bg-primary-blue/[0.035] px-3 py-2 text-xs font-black text-primary-blue"
                                >
                                  {
                                    highlight
                                  }
                                </span>
                              ),
                            )}
                          </div>
                        )}

                        <div className="mt-8 flex items-center gap-3 border-t border-gray-200 pt-6">
                          <BadgeCheck
                            size={20}
                            className="shrink-0 text-primary-red"
                          />

                          <span className="text-sm font-black leading-6 text-primary-blue">
                            Awarded to Steelbuild Infra Projects Limited
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {activeAward &&
          activeImage && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Award image viewer"
              className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#07182d]/95 p-4 backdrop-blur-md md:p-8"
              onClick={
                closeLightbox
              }
            >
              <button
                type="button"
                onClick={
                  closeLightbox
                }
                aria-label="Close image viewer"
                className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-primary-red"
              >
                <X size={24} />
              </button>

              <button
                type="button"
                onClick={(
                  event,
                ) => {
                  event.stopPropagation();
                  showPreviousAward();
                }}
                aria-label="Previous award"
                className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-primary-red md:left-8"
              >
                <ChevronLeft
                  size={25}
                />
              </button>

              <button
                type="button"
                onClick={(
                  event,
                ) => {
                  event.stopPropagation();
                  showNextAward();
                }}
                aria-label="Next award"
                className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-primary-red md:right-8"
              >
                <ChevronRight
                  size={25}
                />
              </button>

              <motion.div
                key={`${activeAward._id}-${activeImageIndex}`}
                initial={{
                  opacity: 0,
                  scale: 0.94,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.25,
                }}
                onClick={(
                  event,
                ) =>
                  event.stopPropagation()
                }
                className="relative flex h-[82vh] w-full max-w-6xl flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#0b223d] shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
              >
                <div className="relative flex-1">
                  <Image
                    src={
                      activeImage.url
                    }
                    alt={
                      activeImage.alt ||
                      activeAward.title
                    }
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority
                  />
                </div>

                <div className="border-t border-white/10 bg-[#0b223d] px-6 py-5 text-center md:px-10">
                  <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
                    {
                      activeAward.organization
                    }{" "}
                    ·{" "}
                    {
                      activeAward.yearLabel
                    }
                  </p>

                  <h3 className="mt-2 text-xl font-black text-white md:text-2xl">
                    {
                      activeAward.title
                    }
                  </h3>

                  {activeImage.caption && (
                    <p className="mx-auto mt-2 max-w-3xl text-sm font-medium text-white/60">
                      {
                        activeImage.caption
                      }
                    </p>
                  )}

                  {activeAwardImages.length >
                    1 && (
                    <div className="mt-4 flex justify-center gap-2">
                      {activeAwardImages.map(
                        (
                          image,
                          imageIndex,
                        ) => (
                          <button
                            key={
                              image._key ||
                              image.url
                            }
                            type="button"
                            onClick={() =>
                              setActiveImageIndex(
                                imageIndex,
                              )
                            }
                            aria-label={`View award image ${
                              imageIndex +
                              1
                            }`}
                            className={`h-2.5 w-2.5 rounded-full transition ${
                              imageIndex ===
                              activeImageIndex
                                ? "bg-primary-red"
                                : "bg-white/30 hover:bg-white/60"
                            }`}
                          />
                        ),
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </>
  );
}