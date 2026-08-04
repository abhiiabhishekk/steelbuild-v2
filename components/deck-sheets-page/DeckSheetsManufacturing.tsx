"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Cog,
  Factory,
  Gauge,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const specifications = [
  {
    label: "Material",
    value: "High-Strength Coated Steel",
  },
  {
    label: "Production Method",
    value: "Precision Roll Forming",
  },
  {
    label: "Deck Profile",
    value: "Structural Composite Deck",
  },
  {
    label: "Profile Geometry",
    value: "Deep Ribbed Configuration",
  },
  {
    label: "Application",
    value: "Composite Floor Construction",
  },
  {
    label: "Quality Control",
    value: "Profile & Dimension Inspection",
  },
];

const manufacturingFeatures = [
  {
    icon: Gauge,
    title: "Controlled Profile Geometry",
    description:
      "Roll-forming stations maintain consistent deck depth, rib geometry and effective cover width.",
  },
  {
    icon: Layers3,
    title: "Structural Deck Formation",
    description:
      "Coated steel coils are progressively formed into approved load-bearing deck-sheet profiles.",
  },
  {
    icon: ShieldCheck,
    title: "Production Quality Checks",
    description:
      "Finished sheets are checked for dimensions, profile consistency, surface condition and material quality.",
  },
  {
    icon: Factory,
    title: "Project-Based Production",
    description:
      "Deck-sheet quantities and lengths are manufactured according to approved drawings and floor layouts.",
  },
];

export default function DeckSheetsManufacturing() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Factory size={15} />
            Deck Sheet Manufacturing
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Precision Manufacturing for Structural Deck Performance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild manufactures deck sheets using controlled roll-forming
            technology to achieve consistent rib geometry, profile accuracy
            and reliable structural performance for composite floor systems.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            
            {/* Manufacturing Image */}

<motion.div
  initial={{ opacity: 0, x: -35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative overflow-hidden rounded-[36px] border border-gray-200 bg-primary-blue shadow-[0_28px_80px_rgba(27,63,104,0.18)]"
>
  <Image
  src="/images/products/deck-sheets/deck-sheets-manufacturing.jpg"
  alt="Steel deck sheet roll-forming production line at a modern manufacturing facility"
  fill
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover transition-transform duration-700 hover:scale-105"
/>

  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/15 to-transparent" />

  <div className="absolute left-7 top-7 rounded-full bg-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-primary-red shadow-xl">
    Steelbuild Manufacturing
  </div>

  <div className="absolute bottom-7 left-7 right-7">
    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
      Precision Roll Forming
    </p>

    <h3 className="mt-2 max-w-lg text-3xl font-black leading-tight text-white">
      Engineered Production for Composite Floor Systems
    </h3>
  </div>
</motion.div>

{/* Right Content */}

<motion.div
  initial={{ opacity: 0, x: 35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <div className="rounded-[34px] border border-gray-200 bg-white p-8 shadow-[0_24px_70px_rgba(27,63,104,0.08)]">

    <div className="flex items-center gap-4">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10">
        <Cog
          size={34}
          className="text-primary-red"
        />
      </div>

      <div>
        <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
          Manufacturing Specifications
        </p>

        <h3 className="mt-2 text-3xl font-black text-primary-blue">
          Technical Details
        </h3>
      </div>

    </div>

    <div className="mt-10 space-y-5">
      {specifications.map((item) => (
        <div
          key={item.label}
          className="flex items-start justify-between gap-6 border-b border-gray-100 pb-4"
        >
          <span className="font-bold text-gray-500">
            {item.label}
          </span>

          <span className="text-right font-black text-primary-blue">
            {item.value}
          </span>
        </div>
      ))}
    </div>

  </div>
</motion.div>

</div>

<div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  {manufacturingFeatures.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.article
        key={item.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
        }}
        className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/20 hover:shadow-[0_28px_70px_rgba(27,63,104,0.13)]"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
          <Icon size={24} />
        </div>

        <h3 className="mt-6 text-xl font-black text-primary-blue">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-600">
          {item.description}
        </p>
      </motion.article>
    );
  })}
</div>

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative z-10 mt-16 overflow-hidden rounded-[34px] bg-primary-blue px-10 py-14 text-center"
>
  <BadgeCheck
    className="mx-auto text-primary-red"
    size={46}
  />

  <h3 className="mt-6 text-4xl font-black text-white">
    Looking for High-Performance Deck Sheet Systems?
  </h3>

  <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
    Talk to our engineering team for composite floor systems designed for
    strength, speed, structural efficiency and long-term performance.
  </p>

  <Link
    href="/contact"
    className="group relative z-20 mt-10 inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_40px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
  >
    Contact Our Experts

    <ArrowRight
      size={20}
      className="transition-transform duration-300 group-hover:translate-x-1"
    />
  </Link>
</motion.div>

      </Container>
    </section>
  );
}