"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Flame,
  Layers3,
  ShieldCheck,
  Snowflake,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    icon: Snowflake,
    title: "High Thermal Efficiency",
    description:
      "Continuous PIR, PUF or Rockwool insulation cores reduce heat transfer and improve indoor temperature control.",
  },
  {
    icon: Layers3,
    title: "Integrated Panel Construction",
    description:
      "Double pre-painted metal skins are permanently bonded to the insulation core as one factory-engineered panel.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Envelope Protection",
    description:
      "Sealed joints, protective skins and engineered flashings provide durable weather-resistant wall and roof systems.",
  },
  {
    icon: Flame,
    title: "Project-Specific Core Options",
    description:
      "Insulation cores are selected according to thermal, acoustic, fire-performance and building-use requirements.",
  },
];

export default function SandwichPanelsOverview() {
  return (
    <section
      id="sandwich-panels-overview"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          {/* Left Visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/sandwich-panels/sandwich-panels-overview.jpg"
                    alt="Insulated sandwich panel wall and roof system with double metal skins and a continuous insulation core"
                    fill
                    sizes="(max-width: 1280px) 100vw, 45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 max-w-[84%] rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Insulated Panel Construction
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-white">
                      Double Metal Skins + Continuous Insulation Core
                    </p>
                  </div>

                  <div className="absolute bottom-6 left-5 right-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Engineered Building Envelope
                    </p>

                    <h3 className="mt-2 text-2xl font-black leading-[1.12] tracking-[-0.03em] text-white md:text-[28px]">
                      Thermal Protection
                      <span className="block">
                        Integrated Into Every Panel
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordination Card */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="relative z-20 mx-6 -mt-5 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_28px_80px_rgba(27,63,104,0.14)] md:mx-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <Layers3 size={24} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Factory-Engineered Panel Assembly
                  </p>

                  <p className="mt-2 text-sm font-black leading-6 text-primary-blue md:text-base">
                    Outer metal skin, insulation core and inner metal skin are
                    permanently integrated into one panel, clearly
                    distinguishing sandwich panels from ordinary single-skin
                    cladding.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}

          <motion.div
  initial={{ opacity: 0, x: 35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.65 }}
>
  <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
    <Layers3 size={15} />
    Sandwich Panel Overview
  </span>

  <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[56px]">
    Factory-Engineered
    <span className="block">
      Insulated Building Panels
    </span>
  </h2>

  <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-gray-600">
    Steelbuild Sandwich Panels combine an external metal skin, a continuous
    PIR, PUF or Rockwool insulation core and an internal metal skin into one
    integrated factory-manufactured panel. This construction provides thermal
    insulation, weather protection, structural stability and a clean finished
    surface for walls and roofs.
  </p>

  <div className="mt-10 grid gap-5 sm:grid-cols-2">
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
          className="group rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
            <Icon size={24} />
          </div>

          <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
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
        <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-70px" }}
  transition={{ duration: 0.6 }}
  className="relative z-10 mx-auto mt-16 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-[#f8fafc] px-7 py-6 shadow-[0_14px_40px_rgba(27,63,104,0.06)] md:px-9"
>
  <BadgeCheck
    size={24}
    className="mt-0.5 shrink-0 text-primary-red"
  />

  <p className="text-sm font-bold leading-7 text-primary-blue">
    Final panel thickness, metal-skin specification, PIR, PUF or Rockwool core
    type, joint geometry, fastening system, flashing details and supporting
    wall-girt or roof-purlin layout are developed according to thermal,
    structural, fire-performance and project-specific requirements.
  </p>
</motion.div>
      </Container>
    </section>
  );
}