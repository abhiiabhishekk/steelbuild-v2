"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Flame,
  Layers3,
  ShieldCheck,
  Snowflake,
} from "lucide-react";

import Container from "@/components/layout/Container";

const benefits = [
  "Double Metal Skin Construction",
  "PIR, PUF or Rockwool Core Options",
  "Thermal & Weather Performance",
  "Project-Specific Engineering",
];

export default function SandwichPanelsCTA() {
  return (
    <section className="relative overflow-hidden bg-primary-blue py-24 lg:py-28">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-primary-red/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-red/30 bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Insulated Sandwich Panels
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight tracking-[-0.045em] text-white md:text-5xl lg:text-[60px]">
            Build a High-Performance
            <span className="block">
              Insulated Building Envelope
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg font-medium leading-8 text-white/75">
            Steelbuild Sandwich Panels combine double metal skins with PIR,
            PUF or Rockwool insulation cores to deliver reliable thermal,
            acoustic, weather and project-specific building-envelope
            performance.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {benefits.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-sm"
              >
                <ShieldCheck
                  size={17}
                  className="shrink-0 text-primary-red"
                />

                <span className="text-sm font-bold text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/request-a-quote"
              className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-9 py-4 font-black !text-white shadow-[0_20px_45px_rgba(194,17,25,0.32)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Request a Quote

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-9 py-4 font-black !text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Talk to Our Experts

              <ArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/10 px-6 py-6 backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red text-white">
                <Layers3 size={22} />
              </div>

              <h3 className="mt-4 text-lg font-black text-white">
                Integrated Panel Construction
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-white/70">
                External metal skin, continuous insulation core and internal
                metal skin form one factory-engineered insulated panel.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/10 px-6 py-6 backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red text-white">
                <Snowflake size={22} />
              </div>

              <h3 className="mt-4 text-lg font-black text-white">
                Thermal Efficiency
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-white/70">
                PIR, PUF or Rockwool insulation cores support controlled indoor
                temperatures and reduced heat transfer.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/10 px-6 py-6 backdrop-blur-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red text-white">
                <Flame size={22} />
              </div>

              <h3 className="mt-4 text-lg font-black text-white">
                Performance-Based Core Options
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-white/70">
                Core selection is coordinated with thermal, acoustic,
                fire-performance and building-use requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}