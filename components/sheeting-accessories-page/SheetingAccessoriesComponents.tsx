"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Droplets,
  Hammer,
  Layers3,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Layers3,
    title: "Ridge Caps",
    description:
      "Precision-formed ridge covers protect the roof apex and maintain continuity between adjoining roof slopes.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Eave & Verge Flashings",
    description:
      "Engineered edge flashings protect roof-sheet terminations and provide clean, weather-resistant perimeter detailing.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Apron & Transition Flashings",
    description:
      "Custom-formed transition details seal interfaces between roof sheets, wall cladding, parapets and adjoining structures.",
  },
  {
    number: "04",
    icon: Wrench,
    title: "Self-Drilling Fasteners",
    description:
      "Approved screws with EPDM sealing washers secure roofing and cladding sheets while maintaining weather protection.",
  },
  {
    number: "05",
    icon: Layers3,
    title: "Closures & Foam Fillers",
    description:
      "Profile-matched closures seal sheet corrugations at ridges, eaves and wall interfaces to restrict water, dust and pest entry.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Sealants & Butyl Tapes",
    description:
      "Weatherproof sealing materials protect laps, joints, flashings and penetration details from water ingress.",
  },
  {
    number: "07",
    icon: Droplets,
    title: "Gutters & Downpipe Accessories",
    description:
      "Engineered gutters, outlets, brackets, bends and downpipe fittings manage roof drainage efficiently.",
  },
  {
    number: "08",
    icon: BadgeCheck,
    title: "Penetration & Opening Flashings",
    description:
      "Pipe boots, curb flashings, skylight trims and opening details maintain weather protection around roof and wall penetrations.",
  },
];

const systemLayers = [
  {
    number: "01",
    title: "Ridge & Edge Flashings",
    text: "Protect roof apexes and perimeter terminations",
  },
  {
    number: "02",
    title: "Closures & Fillers",
    text: "Seal profiled sheet openings and gaps",
  },
  {
    number: "03",
    title: "Fastening System",
    text: "Self-drilling screws with EPDM washers",
  },
  {
    number: "04",
    title: "Sealants & Tapes",
    text: "Weatherproof lap and transition sealing",
  },
  {
    number: "05",
    title: "Drainage Accessories",
    text: "Gutters, outlets, brackets and downpipes",
  },
  {
    number: "06",
    title: "Roof & Wall Supports",
    text: "Purlins, girts and structural framing",
  },
];

export default function SheetingAccessoriesComponents() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* ========================================================= */}
        {/* HEADING */}
        {/* ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
            <Layers3 size={15} />
            Sheeting Accessory Components
          </span>

          <h2 className="mt-6 text-[34px] font-black leading-[1.08] tracking-[-0.045em] text-primary-blue sm:mt-7 sm:text-4xl md:text-5xl lg:text-[58px] lg:leading-tight">
            Major Elements of a
            <span className="block">
              Complete Sheeting Accessory System
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            Flashings, closures, fasteners, sealants, drainage components and
            penetration details work together to complete the roofing and wall
            cladding envelope with reliable long-term weather protection.
          </p>
        </motion.div>

        <div className="relative z-10 mt-12 grid gap-12 sm:mt-16 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
          {/* ========================================================= */}
          {/* LEFT ENGINEERING PANEL */}
          {/* ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_34px_95px_rgba(27,63,104,0.22)] sm:rounded-[34px] sm:p-4 md:rounded-[38px] md:p-6">
              {/* Background Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}
              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* ===================================================== */}
              {/* IMAGE CARD */}
              {/* ===================================================== */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2.5 sm:rounded-[27px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[19px] sm:aspect-[5/4] sm:rounded-[22px] md:rounded-[24px]">
                  <Image
                    src="/images/products/sheeting-accessories/sheeting-accessories-components.jpg"
                    alt="Cutaway view of industrial roofing and cladding accessories"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/95 via-primary-blue/10 to-transparent" />

                  {/* ================================================= */}
                  {/* TOP BADGE */}
                  {/* ================================================= */}

                  <div className="absolute left-3 right-3 top-3 rounded-[14px] border border-white/15 bg-primary-blue/95 px-4 py-3 backdrop-blur-md sm:left-5 sm:right-auto sm:top-5 sm:max-w-[84%] sm:rounded-[18px] sm:px-5 sm:py-4">
                    <p className="text-[7px] font-black uppercase leading-3 tracking-[0.17em] text-primary-red min-[400px]:text-[8px] sm:text-[9px] sm:tracking-[0.22em]">
                      Complete Accessory Assembly
                    </p>

                    <p className="mt-1 text-[11px] font-black leading-[1.35] text-white min-[400px]:text-xs sm:text-sm sm:leading-5">
                      Flashings, Closures, Fasteners &amp; Drainage Details
                    </p>
                  </div>

                  {/* ================================================= */}
                  {/* BOTTOM IMAGE CONTENT */}
                  {/* ================================================= */}

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-5 sm:right-5">
                    <p className="text-[7px] font-black uppercase leading-3 tracking-[0.16em] text-primary-red min-[400px]:text-[8px] sm:text-[9px] sm:tracking-[0.2em]">
                      Major Sheeting Accessories
                    </p>

                    <h3 className="mt-1.5 max-w-[96%] text-[20px] font-black leading-[1.06] tracking-[-0.035em] text-white min-[400px]:text-[22px] sm:mt-2 sm:text-2xl sm:leading-[1.12] md:text-[28px]">
                      Every Detail Supports
                      <span className="block">
                        Complete Envelope Protection
                      </span>
                    </h3>
                  </div>
                </div>
              </div>

              {/* ===================================================== */}
              {/* LAYER GRID */}
              {/* ===================================================== */}

              <div className="relative z-10 mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2">
                {systemLayers.map((item, index) => (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    className="rounded-[16px] border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-sm sm:rounded-[18px]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="shrink-0 pt-0.5 text-[11px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>

                      <div className="min-w-0">
                        <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[10px] font-medium leading-[1.65] text-white/60 sm:text-[11px] sm:leading-5">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ========================================================= */}
            {/* COORDINATION CARD */}
            {/* ========================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-3 -mt-4 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_28px_80px_rgba(27,63,104,0.14)] sm:mx-6 sm:-mt-5 sm:rounded-[28px] sm:p-6 md:mx-8"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-primary-red text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Layers3 size={21} className="sm:hidden" />

                  <Layers3
                    size={24}
                    className="hidden sm:block"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-black uppercase leading-4 tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Complete Accessory Assembly
                  </p>

                  <p className="mt-2 text-[13px] font-black leading-[1.7] text-primary-blue sm:text-sm sm:leading-6 md:text-base">
                    Flashings, trims, ridge caps, closures, fasteners, sealants,
                    gutters, drainage accessories and penetration details work
                    together to complete the roofing and wall cladding envelope
                    with reliable long-term weather protection.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COMPONENT CARDS */}
          {/* ========================================================= */}

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {components.map((item, index) => {
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
                  className="group relative overflow-hidden rounded-[24px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] sm:rounded-[28px] sm:p-7"
                >
                  {/* Large Background Number */}
                  <span className="pointer-events-none absolute right-5 top-4 text-[44px] font-black leading-none text-primary-blue/[0.045] sm:text-[48px]">
                    {item.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon size={22} className="sm:hidden" />

                    <Icon
                      size={24}
                      className="hidden sm:block"
                    />
                  </div>

                  {/* Component Number */}
                  <p className="mt-5 text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:mt-6 sm:text-[10px] sm:tracking-[0.2em]">
                    Component {item.number}
                  </p>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-black leading-tight tracking-[-0.035em] text-primary-blue sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm font-medium leading-7 text-gray-500 sm:mt-4">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
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
            Final flashing geometry, trim profiles, ridge caps, closures,
            fastener spacing, EPDM sealing washers, sealant systems, drainage
            accessories, penetration details and roof or wall interface layouts
            are engineered according to the primary sheeting system, weather
            exposure and approved project specifications.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}