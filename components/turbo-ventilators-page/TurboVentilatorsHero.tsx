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
    <section className="relative overflow-hidden bg-primary-blue pb-24 pt-40 lg:pb-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />

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
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-red/25 bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
              <BadgeCheck size={15} />
              Turbo Ventilators
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white lg:text-[72px]">
              Wind-Driven
              <span className="block">Turbo Ventilation</span>
              <span className="block">Systems</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/75">
              Steelbuild Turbo Ventilators provide efficient wind-driven
              natural ventilation by continuously exhausting hot air,
              moisture and stale indoor air without electricity, helping
              maintain healthier and more comfortable industrial
              environments.
            </p>

            {/* Feature Cards */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-sm"
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

            {/* Buttons */}

            <div className="relative z-30 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#turbo-ventilators-overview"
                className="group relative z-30 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
              >
                Explore Turbo Ventilators

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group relative z-30 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
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
            className="relative pb-24 md:pb-20"
          >
            <div className="relative isolate overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-5 shadow-[0_38px_100px_rgba(0,0,0,0.25)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.03)_52%,rgba(194,17,25,0.08)_100%)]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/turbo-ventilators/turbo-ventilators-hero.jpg"
                    alt="Industrial turbo ventilators installed across a modern Pre-Engineered Building roof"
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 52vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information */}

                  <div className="absolute left-5 top-5 max-w-[82%] rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Wind-Driven Roof Ventilation
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-white">
                      Industrial Turbo Ventilator System
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div className="absolute bottom-7 left-5 right-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                      Passive Roof Ventilation
                    </p>

                    <h2 className="mt-2 max-w-[560px] text-xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-2xl md:text-[30px]">
                      Continuous Natural Airflow
                      <span className="block">
                        for Industrial Buildings
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* System Highlights */}

              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                {systemHighlights.map((item) => (
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

                    <p className="mt-2 text-[11px] font-medium leading-[1.45] text-white/65">
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
              className="absolute -bottom-6 left-5 right-5 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(0,0,0,0.2)] md:left-9 md:right-9"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <Wind size={25} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Passive Roof Ventilation
                  </p>

                  <p className="mt-2 text-base font-black leading-6 text-primary-blue">
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