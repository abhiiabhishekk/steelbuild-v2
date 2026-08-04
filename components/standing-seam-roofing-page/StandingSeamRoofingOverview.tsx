"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CloudRain,
  Layers3,
  ShieldCheck,
  ThermometerSun,
} from "lucide-react";

import Container from "@/components/layout/Container";

const overviewPoints = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Concealed Fastening",
    description:
      "Roof clips remain concealed below the weather surface, creating a clean roof profile without exposed fasteners.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Raised Standing Seams",
    description:
      "Continuous raised seams connect adjacent roof panels and form the defining geometry of the roofing system.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Structural Integration",
    description:
      "Roof panels, clips, purlins, insulation and accessories are coordinated with the approved steel-building structure.",
  },
];

const roofingFeatures = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Concealed Fastening",
    description:
      "No exposed roof fasteners across the main weather-facing surface.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Raised Standing Seams",
    description:
      "Continuous seam geometry coordinates adjoining metal roof panels.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Long Roof Panels",
    description:
      "Continuous panels can reduce unnecessary transverse roof interruptions.",
  },
  {
    number: "04",
    icon: ThermometerSun,
    title: "Thermal Coordination",
    description:
      "Compatible with approved insulation and industrial roof assemblies.",
  },
  {
    number: "05",
    icon: CloudRain,
    title: "Drainage Integration",
    description:
      "Coordinated with ridge, flashing, gutters and downpipe systems.",
  },
  {
    number: "06",
    icon: BadgeCheck,
    title: "Premium Appearance",
    description:
      "Clean and modern roof geometry for contemporary industrial buildings.",
  },
];

export default function StandingSeamRoofingOverview() {
  return (
    <section
      id="standing-seam-roofing-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Layout */}

        <div className="relative z-10 grid gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative pb-28 md:pb-24"
          >
            <div className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue p-5 shadow-[0_38px_100px_rgba(27,63,104,0.22)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/standing-seam-roofing/standing-seam-roofing-overview.jpg"
                    alt="Standing seam roofing system integrated with a modern Pre-Engineered Building"
                    fill
                    sizes="(max-width: 1280px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information */}

                  <div className="absolute left-5 top-5 max-w-[80%] rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Premium Roof Assembly
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-white">
                      Standing Seam Panel System
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div className="absolute bottom-7 left-5 right-5 z-10">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                      Concealed Roofing Technology
                    </p>

                    <h3 className="mt-2 max-w-[550px] text-xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-2xl md:text-[28px]">
                      Continuous Roof Panels
                      <span className="block">
                        Integrated With Modern Steel Structures
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Note */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="absolute -bottom-10 left-4 right-4 z-20 rounded-[30px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                  <CloudRain size={25} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Weather Protection
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-primary-blue md:text-2xl">
                    Concealed Clips, Continuous Panels and Engineered Roof
                    Details Work Together as One System
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
              <Layers3 size={15} />
              Standing Seam Roofing Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Concealed-Fix Roofing Engineered for Modern Industrial Buildings
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Standing seam roofing is a concealed-fixing metal roof system
              developed for modern Pre-Engineered Buildings, industrial
              facilities, warehouses and commercial steel structures.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Continuous roof panels, concealed clips and raised standing seams
              are coordinated with roof purlins, insulation, flashings,
              drainage systems and the approved structural layout.
            </p>

            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {overviewPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group grid gap-4 py-7 sm:grid-cols-[58px_1fr_auto] sm:items-start"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black leading-tight text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-4xl font-black leading-none text-primary-blue/[0.05]">
                      {item.number}
                    </span>
                  </motion.article>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-4 border-l-4 border-primary-red bg-white px-6 py-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-primary-blue">
                Final roof-panel profile, clip arrangement, seam geometry,
                insulation, roof slope, flashings and drainage details are
                developed according to approved drawings and project
                requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature Cards */}

        <div className="relative z-10 mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {roofingFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
              >
                <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-black leading-tight text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}