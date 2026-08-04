"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  "Composite Floor Construction",
  "High Load Carrying Capacity",
  "Faster Construction",
  "Permanent Formwork",
];

export default function DeckSheetsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-24 pb-20 lg:pt-32 lg:pb-28">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>

        <div className="grid gap-14 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">

              <Layers3 size={15} />

              Steel Deck Sheets

            </span>

            <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-[-0.05em] text-primary-blue lg:text-[72px]">

              Composite
              <br />

              Deck Sheet
              <br />

              Systems

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">

              Steelbuild Deck Sheets provide permanent formwork for reinforced
              concrete slabs, enabling faster construction, improved structural
              performance and efficient composite floor systems for multi-storey
              buildings.

            </p>

            <div className="mt-10 flex flex-wrap gap-3">

                {highlights.map((item) => (
  <span
    key={item}
    className="rounded-full border border-primary-red/15 bg-primary-red/5 px-5 py-3 text-sm font-black text-primary-blue"
  >
    {item}
  </span>
))}

<div className="mt-10 flex flex-col gap-4 sm:flex-row">

  <Link
    href="/request-a-quote"
    className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
  >
    Request a Quote

    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>

  <Link
    href="/contact"
    className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/10 bg-white px-8 py-4 font-black text-primary-blue shadow-[0_12px_30px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
  >
    Contact Our Experts

    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>

</div>

<div className="mt-12 grid gap-4 sm:grid-cols-2">

  <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.06)]">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
      <Building2 size={24} />
    </div>

    <h3 className="mt-5 text-xl font-black text-primary-blue">
      Multi-Storey Buildings
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-600">
      Permanent steel formwork engineered for composite floor construction
      in commercial and industrial buildings.
    </p>
  </div>

  <div className="rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.06)]">
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
      <ShieldCheck size={24} />
    </div>

    <h3 className="mt-5 text-xl font-black text-primary-blue">
      Composite Floor System
    </h3>

    <p className="mt-3 text-sm leading-7 text-gray-600">
      Works together with reinforced concrete slabs to improve structural
      efficiency, construction speed and floor performance.
    </p>
  </div>

</div>
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
  <div className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue p-5 shadow-[0_38px_100px_rgba(27,63,104,0.23)] md:p-6">
    {/* Blue panel background */}

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

    <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

    {/* Main Image */}

    <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
      <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
        <Image
          src="/images/products/deck-sheets/deck-sheets-hero.jpg"
          alt="Steel deck sheet composite floor system integrated with a modern multi-storey steel building"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

        {/* Top Information */}

        <div className="absolute left-5 top-5 max-w-[82%] rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
            Composite Floor Construction
          </p>

          <p className="mt-1 text-sm font-black leading-5 text-white">
            Steel Deck Sheet & Structural Floor System
          </p>
        </div>

        {/* Bottom Image Text */}

        <div className="absolute bottom-7 left-5 right-5 z-10">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
            Engineered Deck System
          </p>

          <h2 className="mt-2 max-w-[560px] text-xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-2xl md:text-[30px]">
            Composite Floors Designed for
            <span className="block">
              Strength, Speed and Efficiency
            </span>
          </h2>
        </div>
      </div>
    </div>

    {/* System Elements */}

    <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
      {[
        {
          number: "01",
          title: "Profiled Deck Sheets",
          text: "Permanent steel formwork for floor slabs",
        },
        {
          number: "02",
          title: "Composite Concrete Slab",
          text: "Reinforced concrete integrated with steel deck",
        },
        {
          number: "03",
          title: "Structural Floor Beams",
          text: "Primary and secondary supporting members",
        },
        {
          number: "04",
          title: "Shear Connection",
          text: "Composite interaction where technically required",
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

  {/* Floating Information Card */}

  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: 0.25 }}
    className="absolute -bottom-6 left-5 right-5 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.15)] md:left-9 md:right-9"
  >
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
        <BadgeCheck size={25} />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
          Composite Floor Performance
        </p>

        <p className="mt-2 text-base font-black leading-6 text-primary-blue">
          Deck sheets, floor beams, reinforcement and concrete work together
          as one coordinated structural floor assembly.
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