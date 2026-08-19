"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  MapPin,
  Ruler,
  Weight,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { projects } from "@/data/projects";

type FeaturedProjectsProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  maxProjects?: number;
  showViewAllButton?: boolean;
};

const AUTO_PLAY_DURATION = 7000;

export default function FeaturedProjects({
  eyebrow = "Featured PEB Projects",
  title = "Pre-Engineered Buildings Built to Perform. Engineered to Last.",
  description = "Explore selected Pre-Engineered Building, warehouse, factory and structural steel projects delivered by Steelbuild Infra Projects Limited across India through precision engineering, advanced manufacturing and dependable project execution.",
  maxProjects = 6,
  showViewAllButton = true,
}: FeaturedProjectsProps) {
  const prefersReducedMotion = useReducedMotion();

  const featuredProjects = useMemo(
    () =>
      projects
        .filter(
          (project) =>
            project.featured &&
            project.image,
        )
        .slice(0, maxProjects),
    [maxProjects],
  );

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [isPaused, setIsPaused] =
    useState(false);

  const [autoPlayKey, setAutoPlayKey] =
    useState(0);

  const sectionRef =
    useRef<HTMLElement | null>(null);

  const activeProject =
    featuredProjects[activeIndex];

  const changeProject = useCallback(
    (nextIndex: number) => {
      setActiveIndex(nextIndex);

      setAutoPlayKey(
        (current) => current + 1,
      );
    },
    [],
  );

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === 0
        ? featuredProjects.length - 1
        : current - 1,
    );

    setAutoPlayKey(
      (current) => current + 1,
    );
  }, [featuredProjects.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === featuredProjects.length - 1
        ? 0
        : current + 1,
    );

    setAutoPlayKey(
      (current) => current + 1,
    );
  }, [featuredProjects.length]);

  /*
   * Auto-play
   */

  useEffect(() => {
    if (
      isPaused ||
      prefersReducedMotion ||
      featuredProjects.length <= 1
    ) {
      return;
    }

    const timer = window.setTimeout(
      () => {
        showNext();
      },
      AUTO_PLAY_DURATION,
    );

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    activeIndex,
    autoPlayKey,
    featuredProjects.length,
    isPaused,
    prefersReducedMotion,
    showNext,
  ]);

  /*
   * Keyboard navigation
   */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (!sectionRef.current) {
        return;
      }

      const rect =
        sectionRef.current.getBoundingClientRect();

      const sectionVisible =
        rect.top <
          window.innerHeight &&
        rect.bottom > 0;

      if (!sectionVisible) {
        return;
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [showNext, showPrevious]);

  /*
   * Reset active project when
   * project collection changes.
   */

  useEffect(() => {
    if (
      activeIndex >=
      featuredProjects.length
    ) {
      setActiveIndex(0);
    }
  }, [
    activeIndex,
    featuredProjects.length,
  ]);

  /*
   * Preload adjacent project images.
   */

  useEffect(() => {
    if (
      featuredProjects.length <= 1
    ) {
      return;
    }

    const previousIndex =
      activeIndex === 0
        ? featuredProjects.length - 1
        : activeIndex - 1;

    const nextIndex =
      activeIndex ===
      featuredProjects.length - 1
        ? 0
        : activeIndex + 1;

    const imagesToPreload = [
      featuredProjects[previousIndex]
        ?.image,
      featuredProjects[nextIndex]?.image,
    ].filter(Boolean) as string[];

    imagesToPreload.forEach((src) => {
      const preloadImage =
        new window.Image();

      preloadImage.src = src;
    });
  }, [
    activeIndex,
    featuredProjects,
  ]);

  if (
    !activeProject ||
    featuredProjects.length === 0
  ) {
    return null;
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-projects-heading"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 32,
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
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.34em] text-primary-red">
            {eyebrow}
          </span>

          <h2
            id="featured-projects-heading"
            className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[60px]"
          >
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            {description}
          </p>
        </motion.div>

        {/* Main Featured Project */}

        <motion.div
          initial={{
            opacity: 0,
            y: 42,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.72,
          }}
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
          onFocusCapture={() =>
            setIsPaused(true)
          }
          onBlurCapture={() =>
            setIsPaused(false)
          }
          className="relative z-10 mt-16"
        >
          <motion.article
            drag={
              featuredProjects.length > 1
                ? "x"
                : false
            }
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x > 80) {
                showPrevious();
              }

              if (info.offset.x < -80) {
                showNext();
              }
            }}
            aria-label={`${activeProject.name} featured Pre-Engineered Building project`}
            className="group relative isolate min-h-[560px] cursor-grab overflow-hidden rounded-[38px] border border-gray-200 bg-primary-blue shadow-[0_35px_100px_rgba(27,63,104,0.18)] active:cursor-grabbing md:min-h-[650px] lg:min-h-[700px]"
          >
            {/* Project Image */}

            <AnimatePresence mode="sync">
              <motion.div
                key={activeProject.id}
                initial={
                  prefersReducedMotion
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                        x: 35,
                        scale: 1.02,
                      }
                }
                animate={
                  prefersReducedMotion
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 1,
                        x: 0,
                        scale: 1.06,
                      }
                }
                exit={
                  prefersReducedMotion
                    ? {
                        opacity: 0,
                      }
                    : {
                        opacity: 0,
                        x: -35,
                        scale: 1.02,
                      }
                }
                transition={{
                  opacity: {
                    duration: 0.45,
                  },

                  x: {
                    duration: 0.55,
                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  },

                  scale: {
                    duration:
                      AUTO_PLAY_DURATION /
                      1000,

                    ease: "linear",
                  },
                }}
                className="absolute inset-0"
              >
                <Image
                  src={activeProject.image}
                  alt={`${activeProject.name} ${activeProject.category} project in ${activeProject.location} by Steelbuild Infra Projects Limited`}
                  fill
                  priority
                  fetchPriority="high"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Image Overlays */}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#06172c]/88 via-[#06172c]/18 to-[#06172c]/5" />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071a31]/40 via-transparent to-transparent" />

            <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/5" />

            {/* Subtle Texture */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,white_0.7px,transparent_0.8px)] bg-[size:4px_4px] opacity-[0.025] mix-blend-soft-light" />

            {/* Top Information */}

            <div className="absolute left-5 right-5 top-5 z-20 flex items-start justify-between gap-4 md:left-8 md:right-8 md:top-8">
              <span className="inline-flex rounded-full border border-white/25 bg-white/15 px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.25em] text-white shadow-lg backdrop-blur-xl">
                {activeProject.category}
              </span>

              <div className="flex items-center gap-3">
                <div className="hidden min-w-[120px] overflow-hidden rounded-full border border-white/20 bg-black/15 backdrop-blur-lg sm:block">
                  <div className="flex items-center justify-center px-4 py-2">
                    <span className="text-xs font-black tracking-[0.18em] text-white">
                      {String(
                        activeIndex + 1,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>

                    <span className="mx-2 text-xs text-white/35">
                      /
                    </span>

                    <span className="text-xs font-black tracking-[0.18em] text-white">
                      {String(
                        featuredProjects.length,
                      ).padStart(
                        2,
                        "0",
                      )}
                    </span>
                  </div>

                  <div className="h-[3px] w-full bg-white/15">
                    <motion.div
                      key={`progress-${activeIndex}-${autoPlayKey}`}
                      initial={{
                        width: "0%",
                      }}
                      animate={{
                        width:
                          isPaused ||
                          prefersReducedMotion
                            ? "0%"
                            : "100%",
                      }}
                      transition={{
                        duration:
                          AUTO_PLAY_DURATION /
                          1000,

                        ease: "linear",
                      }}
                      className="h-full bg-primary-red"
                    />
                  </div>
                </div>

                <Link
                  href={`/projects/${activeProject.slug}`}
                  aria-label={`View complete project details for ${activeProject.name}`}
                  title={`View ${activeProject.name}`}
                  className="group/link flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/15 !text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white hover:!text-primary-blue hover:shadow-xl"
                >
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/link:rotate-12"
                  />
                </Link>
              </div>
            </div>

            {/* Project Content */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProject.id}-content`}
                initial={
                  prefersReducedMotion
                    ? {
                        opacity: 1,
                      }
                    : {
                        opacity: 0,
                        y: 30,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                }}
                className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-9 lg:p-12"
              >
                <div className="max-w-4xl">
                  <p className="text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
                    Steelbuild PEB Project
                  </p>

                  <h3 className="mt-4 max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.05em] text-white md:text-5xl lg:text-[68px]">
                    {activeProject.name}
                  </h3>

                  <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
                    <div className="inline-flex items-center gap-2.5 text-sm font-bold text-white/90">
                      <MapPin
                        size={18}
                        aria-hidden="true"
                        className="text-primary-red"
                      />

                      <span>
                        {
                          activeProject.location
                        }
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2.5 text-sm font-bold text-white/90">
                      <Ruler
                        size={18}
                        aria-hidden="true"
                        className="text-primary-red"
                      />

                      <span>
                        {
                          activeProject.area
                        }
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2.5 text-sm font-bold text-white/90">
                      <Weight
                        size={18}
                        aria-hidden="true"
                        className="text-primary-red"
                      />

                      <span>
                        {
                          activeProject.tonnage
                        }
                      </span>
                    </div>

                    <div className="inline-flex items-center gap-2.5 text-sm font-bold text-white/90">
                      <Building2
                        size={18}
                        aria-hidden="true"
                        className="text-primary-red"
                      />

                      <span>
                        {
                          activeProject.category
                        }
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/projects/${activeProject.slug}`}
                    aria-label={`View ${activeProject.name} project details`}
                    className="group/button mt-8 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 font-black !text-primary-blue shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:!text-white hover:shadow-[0_24px_58px_rgba(194,17,25,0.35)]"
                  >
                    View Project

                    <ArrowUpRight
                      size={20}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                    />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}

            {featuredProjects.length >
              1 && (
              <div className="absolute bottom-6 right-6 z-30 hidden items-center gap-3 md:flex lg:bottom-10 lg:right-10">
                <button
                  type="button"
                  onClick={
                    showPrevious
                  }
                  aria-label="Previous featured PEB project"
                  className="group/arrow flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/25 bg-white/15 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-primary-blue hover:shadow-xl"
                >
                  <ArrowLeft
                    size={21}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/arrow:-translate-x-1"
                  />
                </button>

                <button
                  type="button"
                  onClick={
                    showNext
                  }
                  aria-label="Next featured PEB project"
                  className="group/arrow flex h-[52px] w-[52px] items-center justify-center rounded-full bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.3)] transition-all duration-300 hover:scale-110 hover:bg-white hover:text-primary-blue hover:shadow-xl"
                >
                  <ArrowRight
                    size={21}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover/arrow:translate-x-1"
                  />
                </button>
              </div>
            )}
          </motion.article>

          {/* Number Navigation */}

          {featuredProjects.length > 1 && (
            <div className="mt-7 flex items-center justify-between gap-5">
              <div className="flex flex-wrap items-center gap-3">
                {featuredProjects.map(
                  (
                    project,
                    index,
                  ) => {
                    const active =
                      index ===
                      activeIndex;

                    return (
                      <button
                        key={
                          project.id
                        }
                        type="button"
                        onClick={() =>
                          changeProject(
                            index,
                          )
                        }
                        aria-label={`Show featured project ${index + 1}: ${project.name}`}
                        aria-current={
                          active
                            ? "true"
                            : undefined
                        }
                        className={`group/number relative flex h-12 min-w-12 items-center justify-center rounded-full border px-4 text-xs font-black transition-all duration-300 ${
                          active
                            ? "border-primary-red bg-primary-red text-white shadow-[0_12px_30px_rgba(194,17,25,0.22)]"
                            : "border-gray-200 bg-white text-primary-blue hover:border-primary-red/30 hover:text-primary-red"
                        }`}
                      >
                        {String(
                          index + 1,
                        ).padStart(
                          2,
                          "0",
                        )}

                        <span
                          className={`absolute -bottom-2 left-1/2 h-[2px] -translate-x-1/2 bg-primary-red transition-all duration-300 ${
                            active
                              ? "w-8 opacity-100"
                              : "w-0 opacity-0 group-hover/number:w-5 group-hover/number:opacity-100"
                          }`}
                        />
                      </button>
                    );
                  },
                )}
              </div>

              <div className="hidden items-center gap-3 text-xs font-black uppercase tracking-[0.18em] text-gray-400 sm:flex">
                <span>
                  Swipe Projects
                </span>

                <ArrowRight
                  size={15}
                  aria-hidden="true"
                />
              </div>
            </div>
          )}
        </motion.div>

        {/* Project Selection Cards */}

        {featuredProjects.length > 1 && (
          <div className="relative z-10 mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map(
              (project, index) => {
                const selected =
                  index === activeIndex;

                return (
                  <motion.article
                    key={project.id}
                    initial={{
                      opacity: 0,
                      y: 28,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.06,
                    }}
                    className={`group/card relative grid min-h-[210px] overflow-hidden rounded-[28px] border bg-white transition-all duration-500 sm:grid-cols-[180px_minmax(0,1fr)] ${
                      selected
                        ? "scale-[1.015] border-primary-red/60 shadow-[0_28px_80px_rgba(194,17,25,0.16)]"
                        : "border-gray-200 shadow-[0_16px_50px_rgba(27,63,104,0.07)] hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.14)]"
                    }`}
                  >
                    {/* Active Accent */}

                    <span
                      className={`absolute left-0 top-0 z-30 h-full w-[4px] bg-primary-red transition-transform duration-500 ${
                        selected
                          ? "scale-y-100"
                          : "scale-y-0 group-hover/card:scale-y-100"
                      }`}
                    />

                    {/* Image */}

                    <button
                      type="button"
                      onClick={() =>
                        changeProject(
                          index,
                        )
                      }
                      aria-label={`Show ${project.name} in featured project slider`}
                      className="relative min-h-[190px] min-w-0 overflow-hidden bg-primary-blue text-left"
                    >
                      <Image
                        src={
                          project.image
                        }
                        alt={`${project.name} ${project.category} project in ${project.location}`}
                        fill
                        sizes="(max-width: 640px) 100vw, 200px"
                        className="object-cover transition-all duration-700 group-hover/card:scale-[1.08] group-hover/card:brightness-110 group-hover/card:saturate-[1.08]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/55 via-transparent to-transparent" />

                      <span className="absolute left-3 top-3 inline-flex max-w-[calc(100%-24px)] items-center rounded-full border border-white/25 bg-black/35 px-3 py-2 text-[9px] font-black uppercase leading-none tracking-[0.12em] text-white shadow-lg backdrop-blur-md">
                        {
                          project.category
                        }
                      </span>
                    </button>

                    {/* Content */}

                    <div className="flex min-w-0 flex-col p-5">
                      <div className="min-h-[54px]">
                        <h3 className="line-clamp-2 text-xl font-black leading-[1.3] text-primary-blue">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="transition-colors duration-300 hover:!text-primary-red"
                          >
                            {
                              project.name
                            }
                          </Link>
                        </h3>
                      </div>

                      <div className="mt-3 min-h-[48px]">
                        <p className="line-clamp-2 text-sm font-semibold leading-6 text-gray-500">
                          {
                            project.location
                          }
                        </p>
                      </div>

                      <div className="mt-auto space-y-2 pt-4">
                        <div className="flex items-center gap-2 text-xs font-black text-primary-blue">
                          <Ruler
                            size={15}
                            aria-hidden="true"
                            className="shrink-0 text-primary-red"
                          />

                          {
                            project.area
                          }
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2 text-xs font-black text-primary-blue">
                            <Weight
                              size={
                                15
                              }
                              aria-hidden="true"
                              className="shrink-0 text-primary-red"
                            />

                            {
                              project.tonnage
                            }
                          </div>

                          <Link
                            href={`/projects/${project.slug}`}
                            aria-label={`View complete project details for ${project.name}`}
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                              selected
                                ? "bg-primary-red !text-white"
                                : "bg-primary-blue/5 !text-primary-red group-hover/card:bg-primary-red group-hover/card:!text-white"
                            }`}
                          >
                            <ArrowUpRight
                              size={
                                16
                              }
                              aria-hidden="true"
                              className="transition-transform duration-300 group-hover/card:rotate-12"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              },
            )}
          </div>
        )}

        {/* All Projects Button */}

        {showViewAllButton && (
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="relative z-10 mt-12 flex justify-center"
          >
            <Link
              href="/projects"
              aria-label="Explore all Pre-Engineered Building and structural steel projects by Steelbuild Infra Projects Limited"
              className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_45px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red hover:bg-primary-red hover:!text-white hover:shadow-[0_22px_55px_rgba(194,17,25,0.22)]"
            >
              Explore All PEB Projects

              <ArrowUpRight
                size={20}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        )}
      </Container>
    </section>
  );
}