"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AirVent,
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  CloudRain,
  ShieldCheck,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  "Natural Air Intake",
  "Industrial Air Exhaust",
  "Rain-Resistant Design",
  "Façade Integration",
];

export default function LouversHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-20 lg:py-24">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
              <AirVent size={15} />
              Industrial Ventilation Louvers
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.03] tracking-[-0.05em] text-primary-blue lg:text-[64px]">
              Engineered Industrial
              <span className="block">
                Ventilation Louver
              </span>
              <span className="block">
                Systems
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-gray-600">
              Steelbuild Industrial Louvers provide controlled natural air
              intake and exhaust while helping restrict rain, birds, insects
              and airborne debris from entering modern industrial buildings.
            </p>

            {/* Highlights */}

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary-red/15 bg-primary-red/5 px-5 py-3 text-sm font-black text-primary-blue"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="relative z-20 mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#louvers-overview"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
              >
                Explore Industrial Louvers

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Support Cards */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Wind size={22} />
                </div>

                <h3 className="mt-5 text-xl font-black text-primary-blue">
                  Controlled Airflow
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                  Aerodynamic fixed blades support natural air intake and
                  exhaust across industrial wall openings.
                </p>
              </div>

              <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <CloudRain size={22} />
                </div>

                <h3 className="mt-5 text-xl font-black text-primary-blue">
                  Weather Protection
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                  Rain-resistant blade geometry, drainage paths and protective
                  screens help maintain ventilation during changing weather.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}

          <motion.div
  initial={{ opacity: 0, x: 35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.65 }}
  className="relative"
>
  <div className="relative isolate overflow-hidden rounded-[36px] bg-primary-blue p-5 shadow-[0_30px_85px_rgba(27,63,104,0.2)] md:p-6">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />

    <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

    {/* Main Image */}

    <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-white/10 p-3">
      <div className="group relative aspect-[5/4] overflow-hidden rounded-[22px]">
        <Image
          src="/images/products/louvers/louvers-hero.jpg"
          alt="Industrial ventilation louvers integrated into a modern Pre-Engineered Building façade"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 46vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

        <div className="absolute left-5 top-5 max-w-[84%] rounded-[17px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
            Industrial Airflow System
          </p>

          <p className="mt-1 text-sm font-black leading-5 text-white">
            Fixed Weather Louvers for Intake & Exhaust
          </p>
        </div>

        <div className="absolute bottom-6 left-5 right-5">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
            Steelbuild Ventilation Louvers
          </p>

          <h2 className="mt-2 text-2xl font-black leading-[1.12] tracking-[-0.03em] text-white md:text-[28px]">
            Controlled Natural Airflow
            <span className="block">
              With Weather Protection
            </span>
          </h2>
        </div>
      </div>
    </div>

    {/* System Highlights */}

    <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
      <div className="rounded-[20px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
            <Wind size={20} />
          </div>

          <div>
            <h3 className="text-sm font-black text-white">
              Air Intake & Exhaust
            </h3>

            <p className="mt-1 text-xs leading-5 text-white/65">
              Fixed blades maintain a continuous passage for natural or
              mechanical ventilation.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
            <ShieldCheck size={20} />
          </div>

          <div>
            <h3 className="text-sm font-black text-white">
              Rain & Debris Control
            </h3>

            <p className="mt-1 text-xs leading-5 text-white/65">
              Weather blades, drainage paths and protective screens restrict
              unwanted entry.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Coordination Card */}

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: 0.18 }}
    className="relative z-20 mx-5 -mt-5 rounded-[26px] border border-gray-200 bg-white p-6 shadow-[0_20px_65px_rgba(27,63,104,0.14)] md:mx-8"
  >
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
        <AirVent size={23} />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
          Functional Industrial Ventilation
        </p>

        <p className="mt-2 text-sm font-black leading-6 text-primary-blue md:text-base">
          Aerodynamic blades, perimeter frames, drainage paths, bird mesh,
          insect screens and façade flashings work together to support airflow
          while helping control rain, birds, insects and airborne debris.
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