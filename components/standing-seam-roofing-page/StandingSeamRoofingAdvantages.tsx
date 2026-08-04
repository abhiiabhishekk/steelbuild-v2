"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CloudRain,
  Layers3,
  ShieldCheck,
  ThermometerSun,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Concealed Fastening",
    description:
      "Roof clips remain hidden beneath the raised seam, keeping the primary weather-facing surface free from exposed fasteners.",
  },
  {
    number: "02",
    icon: CloudRain,
    title: "Coordinated Weather Protection",
    description:
      "Continuous roof panels, raised seams, flashings and drainage components work together as one complete roof system.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Reduced Roof Interruptions",
    description:
      "Long roof panels can reduce unnecessary transverse joints across large industrial roof areas.",
  },
  {
    number: "04",
    icon: ThermometerSun,
    title: "Insulation Compatibility",
    description:
      "Standing seam panels can be integrated with approved insulation, vapour-control and roof-assembly requirements.",
  },
  {
    number: "05",
    icon: Wind,
    title: "Structural Coordination",
    description:
      "Clips, purlins, roof panels and accessories are coordinated according to approved structural and environmental inputs.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Clean Architectural Profile",
    description:
      "Continuous raised seams create a refined roof appearance for modern industrial and commercial steel buildings.",
  },
];

const coordinationItems = [
  "Roof slope",
  "Panel profile",
  "Panel length",
  "Clip arrangement",
  "Purlin spacing",
  "Insulation assembly",
  "Ridge and flashing details",
  "Gutter and drainage layout",
];

export default function StandingSeamRoofingAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
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
            <ShieldCheck size={15} />
            Standing Seam Roofing Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Why Standing Seam Roofing Suits Modern Industrial Buildings
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Standing seam roofing coordinates concealed fastening, continuous
            metal panels, insulation, structural supports and roof accessories
            within one integrated industrial roof system.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[1.12fr_0.88fr] xl:items-start">
          {/* Left Advantage Rows */}

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group grid gap-5 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Roofing Advantage {item.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-[50px] font-black leading-none text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </motion.article>
              );
            })}
          </div>

          {/* Right Coordination Panel */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:sticky lg:top-28 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <Layers3 size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Roof System Coordination
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Every Roof Element Must Work as One Complete Assembly
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                Standing seam roofing performance depends on coordinated panel
                geometry, clip locations, structural supports, insulation,
                flashings and rainwater drainage details.
              </p>

              <div className="mt-9 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                {coordinationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 py-4"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-7">
                <CloudRain
                  size={24}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Roof seams, flashings and drainage interfaces must remain
                  continuous across the approved roof geometry.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing Note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-[#f7f9fc] px-7 py-6 md:px-9"
        >
          <ShieldCheck
            size={24}
            className="mt-0.5 shrink-0 text-primary-red"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Final roof performance depends on approved panel profiles, clip
            spacing, structural support conditions, insulation requirements,
            roof slope, accessories, environmental exposure and installation
            detailing.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}