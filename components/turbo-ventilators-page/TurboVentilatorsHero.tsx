"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  PowerOff,
  RefreshCw,
  ThermometerSun,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: RefreshCw,
    title: "Wind Powered",
  },
  {
    icon: Wind,
    title: "Natural Ventilation",
  },
  {
    icon: ThermometerSun,
    title: "Heat Extraction",
  },
  {
    icon: PowerOff,
    title: "Zero Power Consumption",
  },
];

const systemHighlights = [
  {
    number: "01",
    title: "Wind-Driven Rotation",
    text: "Rotates naturally using available wind energy.",
  },
  {
    number: "02",
    title: "Passive Ventilation",
    text: "Continuously removes trapped hot air.",
  },
  {
    number: "03",
    title: "Zero Electricity",
    text: "Operates without motors or electrical power.",
  },
  {
    number: "04",
    title: "Industrial Durability",
    text: "Weather-resistant construction for long service life.",
  },
];

export default function TurboVentilatorsHero() {
  return (
    <section className="relative overflow-hidden bg-primary-blue pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-40">
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-10 h-[430px] w-[430px] rounded-full bg-primary-red/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[430px] w-[430px] rounded-full bg-white/5 blur-[120px]" />

      <Container>
        <div className="relative z-10 grid items-center gap-14 xl:grid-cols-[0.95fr_1.05fr]">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-red/25 bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.24em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
              <BadgeCheck size={15} />
              Turbo Ventilators
            </span>

            <h1 className="mt-7 text-[42px] font-black leading-[1.02] tracking-[-0.05em] text-white sm:mt-8 sm:text-5xl lg:text-[72px]">
              Wind-Driven
              <span className="block">Turbo Ventilation</span>
              <span className="block">Systems</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-white/75 sm:mt-8 sm:text-lg sm:leading-8">
              Steelbuild Turbo Ventilators provide efficient wind-driven
              natural ventilation by continuously exhausting hot air,
              moisture and stale indoor air without electricity, helping
              maintain healthier and more comfortable industrial environments.
            </p>

            {/* Feature Cards */}

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3.5 rounded-[20px] border border-white/10 bg-white/10 px-4 py-4 backdrop-blur-sm sm:gap-4 sm:rounded-[22px] sm:px-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-12 sm:w-12">
                      <Icon size={20} className="sm:hidden" />
                      <Icon size={22} className="hidden sm:block" />
                    </div>

                    <p className="text-[13px] font-black text-white sm:text-sm">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Buttons */}

            <div className="relative z-30 mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
              <Link
                href="#turbo-ventilators-overview"
                className="group relative z-30 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 text-center font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue sm:px-8"
              >
                Explore Turbo Ventilators

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group relative z-30 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black !text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue sm:px-8"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            {/* Blue Visual Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-white/10 p-3 shadow-[0_38px_100px_rgba(0,0,0,0.25)] sm:rounded-[36px] sm:p-4 md:rounded-[40px] md:p-6">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_52%,rgba(194,17,25,0.08)_100%)]" />

              {/* Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/turbo-ventilators/turbo-ventilators-hero.jpg"
                    alt="Industrial turbo ventilators installed across a modern Pre-Engineered Building roof"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 52vw"
                    className="object-cover object-[50%_center] transition-transform duration-700 ease-out sm:object-center group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-10

                      rounded-[16px]
                      border
                      border-white/15
                      bg-primary-blue/90
                      px-4
                      py-3
                      backdrop-blur-md

                      sm:left-5
                      sm:right-auto
                      sm:top-5
                      sm:max-w-[330px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Wind-Driven Roof Ventilation
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.3] text-white sm:text-sm sm:leading-5">
                      Industrial Turbo Ventilator System
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      z-10

                      min-[390px]:bottom-5

                      sm:bottom-6
                      sm:left-5
                      sm:right-5

                      md:bottom-7
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Passive Roof Ventilation
                    </p>

                    <h2
                      className="
                        mt-1.5
                        max-w-[560px]

                        text-[18px]
                        font-black
                        leading-[1.12]
                        tracking-[-0.025em]
                        text-white

                        min-[390px]:text-[19px]

                        sm:mt-2
                        sm:text-2xl

                        md:text-[30px]
                      "
                    >
                      Continuous Natural Airflow
                      <span className="block">
                        for Industrial Buildings
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* System Highlights */}

              <div className="relative z-10 mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                {systemHighlights.map((item) => (
                  <div
                    key={item.number}
                    className="min-h-[96px] rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-sm sm:min-h-[104px] sm:rounded-[20px] sm:px-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                        {item.title}
                      </p>

                      <span className="shrink-0 text-[11px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 pr-2 text-[10px] font-medium leading-[1.45] text-white/65 sm:text-[11px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="
                relative
                z-20

                -mt-7
                mx-4

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_24px_75px_rgba(0,0,0,0.2)]

                min-[390px]:mx-5
                min-[390px]:p-5

                sm:-mt-8
                sm:mx-6
                sm:rounded-[28px]
                sm:p-6

                md:-mt-10
                md:mx-9
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
                  <Wind size={22} className="sm:hidden" />
                  <Wind size={25} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Passive Roof Ventilation
                  </p>

                  <p className="mt-1.5 text-[15px] font-black leading-[1.42] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Wind-powered turbo ventilators continuously improve indoor
                    airflow while reducing heat accumulation and supporting
                    energy-efficient industrial buildings.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}