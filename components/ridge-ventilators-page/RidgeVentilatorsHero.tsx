"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wind,
  Thermometer,
  ShieldCheck,
  Building2,
  BadgeCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: Wind,
    title: "Natural Ventilation",
  },
  {
    icon: Thermometer,
    title: "Heat Extraction",
  },
  {
    icon: ShieldCheck,
    title: "Weather Protection",
  },
  {
    icon: Building2,
    title: "Industrial PEB",
  },
];

export default function RidgeVentilatorsHero() {
  return (
    <section className="relative overflow-hidden bg-primary-blue pt-40 pb-24 lg:pb-32">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>

        <div className="grid items-center gap-14 xl:grid-cols-[0.95fr_1.05fr]">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-primary-red/35 bg-primary-red/15 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-[#ff3942] shadow-[0_10px_28px_rgba(194,17,25,0.15)]">

              <BadgeCheck size={15} />

              Ridge Ventilators

            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-[-0.05em] text-white lg:text-[72px]">

              Continuous Ridge
              <br />

              Ventilation
              <br />

              Systems

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/75">

              Steelbuild Ridge Ventilators provide continuous natural
              ventilation across industrial roofing systems, removing hot
              air, improving airflow and maintaining comfortable indoor
              environments without mechanical power.

            </p>

                        <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-[22px] border border-white/20 bg-white/[0.14] px-5 py-4 shadow-[0_16px_38px_rgba(0,0,0,0.1)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/40 hover:bg-white/[0.18]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                      <Icon size={22} />
                    </div>

                    <p className="text-sm font-black text-white">
                      {item.title}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#ridge-ventilators-overview"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
              >
                Explore Ridge Ventilators

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative pb-24 md:pb-20"
          >
            <div className="relative isolate overflow-hidden rounded-[40px] bg-white/10 p-5 shadow-[0_38px_100px_rgba(0,0,0,0.25)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_50%,rgba(194,17,25,0.08)_100%)]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/ridge-ventilators/ridge-ventilators-hero.jpg"
                    alt="Continuous ridge ventilator installed on a modern industrial Pre-Engineered Building"
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 52vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 max-w-[82%] rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Continuous Ridge Ventilation
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-white">
                      Integrated Natural Ventilation System
                    </p>
                  </div>

                  <div className="absolute bottom-7 left-5 right-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                      Passive Heat Extraction
                    </p>

                    <h2 className="mt-2 max-w-[560px] text-xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-2xl md:text-[30px]">
                      Continuous Airflow Across
                      <span className="block">
                        Large Industrial Roof Spans
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Continuous Ridge Opening",
                    text: "Ventilation provided along the roof ridge",
                  },
                  {
                    number: "02",
                    title: "Weather Protection",
                    text: "Integrated flashing and rain-resistant detailing",
                  },
                  {
                    number: "03",
                    title: "Natural Heat Extraction",
                    text: "Hot indoor air rises and exits naturally",
                  },
                  {
                    number: "04",
                    title: "Roof Integration",
                    text: "Coordinated with roofing sheets and purlins",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="min-h-[104px] rounded-[20px] border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-black leading-5 text-white">
                        {item.title}
                      </p>

                      <span className="shrink-0 text-xs font-black text-primary-red">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] font-medium leading-[1.45] text-white/60">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="absolute -bottom-6 left-5 right-5 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(0,0,0,0.2)] md:left-9 md:right-9"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <Wind size={25} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Passive Ventilation Performance
                  </p>

                  <p className="mt-2 text-base font-black leading-6 text-primary-blue">
                    Continuous ridge ventilation supports natural hot-air
                    extraction without rotary or electrically powered roof
                    ventilators.
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

