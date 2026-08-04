"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CloudRain,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Weather Protection",
    description:
      "Engineered roof profiles provide reliable protection against rain, wind and changing environmental conditions.",
  },
  {
    icon: Building2,
    title: "Structural Performance",
    description:
      "Designed to work efficiently with roof purlins and primary steel framing for long-span industrial buildings.",
  },
  {
    icon: CloudRain,
    title: "Efficient Water Drainage",
    description:
      "Profile geometry and roof accessories help ensure controlled rainwater drainage.",
  },
];

export default function RoofingSheetsOverview() {
  return (
    <section
      id="roofing-sheets-overview"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Roofing Sheet Overview
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Reliable Roofing
            <br />
            Engineered for Modern
            <br />
            Industrial Buildings
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Steelbuild Roofing Sheets are engineered to deliver dependable
            weather protection, structural stability and long-term performance
            for industrial, commercial and warehouse applications.
          </p>
        </motion.div>

        <div className="grid gap-12 xl:grid-cols-[1fr_1fr] xl:items-center">

           {/* Left Image */}

<motion.div
  initial={{ opacity: 0, x: -35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.65 }}
  className="relative pb-24 md:pb-20"
>
  <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

    <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
      <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px]">
        <Image
          src="/images/products/roofing-sheets/roofing-sheets-overview.jpg"
          alt="Industrial Roofing Sheet System"
          fill
          sizes="(max-width:1280px)100vw,50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

        <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
            Industrial Roofing System
          </p>

          <p className="mt-1 text-sm font-black text-white">
            Profiled Metal Roofing Sheets
          </p>
        </div>

        <div className="absolute bottom-7 left-5 right-5">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
            Weather Protection
          </p>

          <h3 className="mt-2 text-2xl font-black leading-tight text-white md:text-[30px]">
            Engineered Roofing
            <span className="block">
              Built for Long-Term Performance
            </span>
          </h3>
        </div>
      </div>
    </div>
  </div>

  <div className="absolute -bottom-6 left-5 right-5 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
        <ShieldCheck size={24} />
      </div>

      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
          Reliable Roofing Performance
        </p>

        <p className="mt-2 text-base font-black leading-6 text-primary-blue">
          Roofing sheets, fasteners, flashings, drainage and structural
          supports operate together as one coordinated roofing system.
        </p>
      </div>
    </div>
  </div>
</motion.div>

{/* Right Content */}

<div className="space-y-6">
  {benefits.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.article
        key={item.title}
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
        }}
        className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)]"
      >
        <div className="flex items-start gap-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
            <Icon size={24} />
          </div>

          <div>
            <h3 className="text-2xl font-black tracking-[-0.03em] text-primary-blue">
              {item.title}
            </h3>

            <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      </motion.article>
    );
  })}
</div>

</div>

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mx-auto mt-16 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-[#f8fafc] px-8 py-7 shadow-[0_16px_42px_rgba(27,63,104,0.06)]"
>
  <BadgeCheck
    size={24}
    className="mt-0.5 shrink-0 text-primary-red"
  />

  <p className="text-sm font-bold leading-7 text-primary-blue">
    Final roofing sheet profile selection, coating specification, sheet
    thickness, fastener arrangement, insulation system and drainage details
    are coordinated according to approved engineering drawings and project
    requirements.
  </p>
</motion.div>

      </Container>
    </section>
  );
}