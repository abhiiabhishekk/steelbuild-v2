"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Droplets,
  Hammer,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: ShieldCheck,
    title: "Complete Weather Protection",
    description:
      "Engineered flashings, trims and closures protect roof and wall junctions against water ingress, wind uplift and environmental exposure.",
  },
  {
    icon: Layers3,
    title: "Integrated Building Envelope",
    description:
      "Accessories connect roofing sheets, wall cladding, structural framing and drainage systems into one coordinated envelope.",
  },
  {
    icon: Hammer,
    title: "Precision Installation",
    description:
      "Purpose-designed fasteners, EPDM sealing washers, closures and trims ensure accurate installation and long-term reliability.",
  },
  {
    icon: Droplets,
    title: "Reliable Drainage Performance",
    description:
      "Gutters, downpipes, valleys and flashing details efficiently direct rainwater away from the building structure.",
  },
];

export default function SheetingAccessoriesOverview() {
  return (
    <section
      id="sheeting-accessories-overview"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32"
    >
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* ========================================================= */}
          {/* LEFT VISUAL */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main Blue Engineering Card */}
            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[34px] sm:p-4 md:rounded-[38px] md:p-6">
              {/* Blue Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}
              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}
              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2.5 sm:rounded-[27px] sm:p-3 md:rounded-[30px]">
                {/*
                  IMPORTANT MOBILE FIX

                  Mobile:
                  Taller portrait-style visual so top badge and
                  bottom heading never collide.

                  Tablet/Desktop:
                  Original 5:4 ratio restored.
                */}
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[19px] sm:aspect-[5/4] sm:rounded-[22px] md:rounded-[24px]">
                  <Image
                    src="/images/products/sheeting-accessories/sheeting-accessories-overview.jpg"
                    alt="Complete roofing and wall cladding accessory system"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Gradient */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/95 via-primary-blue/10 to-transparent" />

                  {/* ================================================= */}
                  {/* TOP IMAGE BADGE */}
                  {/* ================================================= */}

                  <div className="absolute left-3 right-3 top-3 rounded-[14px] border border-white/15 bg-primary-blue/95 px-4 py-3 backdrop-blur-md sm:left-5 sm:right-auto sm:top-5 sm:max-w-[84%] sm:rounded-[18px] sm:px-5 sm:py-4">
                    <p className="text-[7px] font-black uppercase leading-3 tracking-[0.17em] text-primary-red min-[400px]:text-[8px] sm:text-[9px] sm:tracking-[0.22em]">
                      Engineered Building Envelope
                    </p>

                    <p className="mt-1 text-[11px] font-black leading-[1.35] text-white min-[400px]:text-xs sm:text-sm sm:leading-5">
                      Roofing &amp; Cladding Accessory Integration
                    </p>
                  </div>

                  {/* ================================================= */}
                  {/* BOTTOM IMAGE CONTENT */}
                  {/* ================================================= */}

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5">
                    <p className="text-[7px] font-black uppercase leading-3 tracking-[0.16em] text-primary-red min-[400px]:text-[8px] sm:text-[9px] sm:tracking-[0.2em]">
                      Complete Roofing System
                    </p>

                    <h3 className="mt-1.5 max-w-[95%] text-[20px] font-black leading-[1.06] tracking-[-0.035em] text-white min-[400px]:text-[22px] sm:mt-2 sm:text-2xl sm:leading-[1.12] md:text-[28px]">
                      Precision Accessories
                      <span className="block">
                        Long-Term Weather Protection
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* FLOATING COORDINATION CARD */}
            {/* ========================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative z-20 mx-3 -mt-4 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_28px_80px_rgba(27,63,104,0.14)] sm:mx-6 sm:-mt-5 sm:rounded-[28px] sm:p-6 md:mx-8"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-red text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Hammer size={21} className="sm:hidden" />

                  <Hammer
                    size={24}
                    className="hidden sm:block"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-black uppercase leading-4 tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Complete Accessory Integration
                  </p>

                  <p className="mt-2 text-[13px] font-black leading-[1.7] text-primary-blue sm:text-sm sm:leading-6 md:text-base">
                    Flashings, trims, closures, fasteners, sealants, gutters,
                    downpipes and penetration details work together to complete
                    the roofing and wall cladding system with durable
                    weatherproof performance.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT CONTENT */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
          >
            {/* Section Label */}
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-5 sm:text-xs sm:tracking-[0.28em]">
              <Hammer size={15} />
              Sheeting Accessories Overview
            </span>

            {/* Heading */}
            <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.04em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-tight">
              Engineered Accessories
              <span className="block">
                for Complete Envelope Performance
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-7 sm:text-lg sm:leading-8">
              Steelbuild Sheeting Accessories complete industrial roofing and
              wall-cladding systems by protecting critical edges, joints,
              penetrations, transitions and drainage paths. Every flashing,
              closure, fastener and sealing component is coordinated with the
              primary sheeting system for dependable long-term performance.
            </p>

            {/* ========================================================= */}
            {/* FEATURE CARDS */}
            {/* ========================================================= */}

            <div className="mt-9 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon size={22} className="sm:hidden" />

                      <Icon
                        size={24}
                        className="hidden sm:block"
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-black leading-tight tracking-[-0.03em] text-primary-blue sm:mt-6 sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* =========================================================== */}
        {/* BOTTOM ENGINEERING NOTE */}
        {/* =========================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-12 flex max-w-5xl items-start gap-3 border-l-4 border-primary-red bg-[#f8fafc] px-5 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)] sm:mt-16 sm:gap-4 sm:px-7 sm:py-6 md:px-9"
        >
          <BadgeCheck
            size={22}
            className="mt-0.5 shrink-0 text-primary-red sm:hidden"
          />

          <BadgeCheck
            size={24}
            className="mt-0.5 hidden shrink-0 text-primary-red sm:block"
          />

          <p className="text-[13px] font-bold leading-6 text-primary-blue sm:text-sm sm:leading-7">
            Final accessory profiles, material thickness, coating system,
            flashing geometry, closure type, fastener spacing, sealing method,
            gutter sizing and roof or wall integration are engineered according
            to the primary sheeting system, weather exposure and approved
            project requirements.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}