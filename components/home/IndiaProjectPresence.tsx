"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Factory,
  MapPinned,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const projectLocations = [
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    region: "Corporate & Project Operations",
    top: "28%",
    left: "38%",
  },
  {
    id: "sonipat",
    city: "Sonipat",
    region: "Manufacturing & Project Cluster",
    top: "24%",
    left: "39%",
  },
  {
    id: "jhajjar",
    city: "Jhajjar",
    region: "Industrial Project Location",
    top: "29%",
    left: "35%",
  },
  {
    id: "bawal",
    city: "Bawal",
    region: "Industrial Project Location",
    top: "33%",
    left: "35%",
  },
  {
    id: "tauru",
    city: "Tauru",
    region: "Completed Industrial Project",
    top: "31%",
    left: "38%",
  },
  {
    id: "lucknow",
    city: "Lucknow",
    region: "Large-Scale Industrial Project",
    top: "38%",
    left: "52%",
  },
  {
    id: "kanpur",
    city: "Kanpur",
    region: "Industrial Project Location",
    top: "41%",
    left: "49%",
  },
  {
    id: "patna",
    city: "Patna",
    region: "Industrial Project Cluster",
    top: "43%",
    left: "66%",
  },
];

const capabilities = [
  {
    icon: Building2,
    title: "Industrial Projects",
    description:
      "Pre-Engineered Buildings delivered for manufacturing, warehousing and infrastructure applications.",
  },
  {
    icon: Factory,
    title: "Manufacturing Support",
    description:
      "Coordinated production capability supporting projects across multiple regions.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled Execution",
    description:
      "Engineering, supply and erection managed through defined quality and project-control systems.",
  },
];

export default function IndiaProjectPresence() {
  return (
    <section className="relative overflow-hidden bg-primary-blue py-24 text-white lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#102f55_0%,#1b3f68_48%,#0b2949_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full bg-primary-red/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-white/10 blur-[120px]" />

      <Container>
        <div className="relative z-10 grid gap-16 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.68 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-red/30 bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
              <MapPinned size={16} />
              Project Presence
            </span>

            <h2 className="mt-7 max-w-2xl text-4xl font-black leading-[1.04] tracking-[-0.045em] text-white md:text-5xl lg:text-[58px]">
              Engineering Projects
              <span className="block">
                Across India&apos;s
              </span>
              <span className="block text-primary-red">
                Industrial Landscape.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-white/70">
              Steelbuild supports industrial development through coordinated
              engineering, manufacturing, supply and project execution across
              strategic locations in India.
            </p>

            <div className="mt-10 space-y-4">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.48,
                      delay: index * 0.07,
                    }}
                    className="group rounded-[24px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/35 hover:bg-white/[0.1]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium leading-7 text-white/58">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <Link
              href="/projects"
              className="group mt-9 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_20px_48px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Explore Our Projects

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* Interactive Map */}

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.72 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] border border-white/12 bg-white/[0.06] p-5 shadow-[0_36px_100px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_45%,rgba(194,17,25,0.08)_100%)]" />

              <div className="relative z-10 flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-red">
                    Steelbuild Project Network
                  </p>

                  <h3 className="mt-2 text-2xl font-black text-white md:text-3xl">
                    Selected Project Locations
                  </h3>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.08] text-primary-red sm:flex">
                  <MapPinned size={23} />
                </div>
              </div>

              <div className="relative z-10 mx-auto mt-8 aspect-[4/5] max-h-[680px] w-full max-w-[560px]">
                {/* India Map */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-full w-full opacity-90">
                    <Image
                      src="/images/maps/india-map.svg"
                      alt="India map showing selected Steelbuild project locations"
                      fill
                      sizes="(max-width: 1280px) 100vw, 48vw"
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Location Markers */}

                {projectLocations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.25 + index * 0.08,
                    }}
                    className="group absolute z-20 -translate-x-1/2 -translate-y-1/2"
                    style={{
                      top: location.top,
                      left: location.left,
                    }}
                  >
                    <button
                      type="button"
                      aria-label={`${location.city}: ${location.region}`}
                      className="relative flex h-8 w-8 items-center justify-center"
                    >
                      <span className="absolute h-8 w-8 animate-ping rounded-full bg-primary-red/30" />

                      <span className="relative h-4 w-4 rounded-full border-[3px] border-white bg-primary-red shadow-[0_0_20px_rgba(194,17,25,0.9)] transition-transform duration-300 group-hover:scale-125" />
                    </button>

                    {/* Tooltip */}

                    <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-[190px] -translate-x-1/2 translate-y-2 rounded-2xl border border-white/15 bg-[#071f3b]/96 px-4 py-3 opacity-0 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm font-black text-white">
                        {location.city}
                      </p>

                      <p className="mt-1 text-xs font-medium leading-5 text-white/55">
                        {location.region}
                      </p>

                      <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-white/15 bg-[#071f3b]" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Note */}

              <div className="relative z-10 mt-6 flex items-start gap-3 rounded-[20px] border border-white/10 bg-white/[0.06] px-5 py-4">
                <BadgeCheck
                  size={19}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-xs font-medium leading-6 text-white/55">
                  The map highlights selected publicly showcased Steelbuild
                  project locations and does not represent the complete project
                  portfolio.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}