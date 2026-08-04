"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  PanelsTopLeft,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const overviewPoints = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Equipment Support",
    description:
      "Structural framing is coordinated to support approved rooftop equipment and associated service requirements.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Safe Maintenance Access",
    description:
      "Platforms provide organized access routes for inspection, servicing and routine maintenance activities.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Project-Based Engineering",
    description:
      "Platform framing, connections, support arrangements and access systems are developed according to approved engineering inputs.",
  },
];

const platformFeatures = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Equipment Support",
    description:
      "Steel framing developed around rooftop equipment requirements.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Maintenance Walkways",
    description:
      "Safe movement around rooftop service equipment.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Structural Support",
    description:
      "Columns, beams and connections working together.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Guardrails & Safety",
    description:
      "Perimeter protection coordinated with platform layout.",
  },
];

export default function RoofPlatformsOverview() {
  return (
    <section
      id="roof-platforms-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Main Layout */}

        <div className="relative z-10 grid gap-14 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative pb-20 md:pb-16"
          >
            <div className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue p-5 shadow-[0_38px_100px_rgba(27,63,104,0.22)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/mezzanine-systems/roof-platforms-overview.jpg"
                    alt="Structural roof platform with rooftop equipment support and maintenance walkway"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width:1280px)100vw,55vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Roof Platform System
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Structural Equipment Support
                    </p>
                  </div>

                  <div className="absolute bottom-12 left-5 right-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Engineered Roof Platform
                    </p>

                    <h3 className="mt-2 max-w-lg text-xl font-black leading-[1.12] text-white sm:text-2xl md:text-[28px]">
                      Safe Rooftop Access
                      <span className="block">
                        Built Around Structural Engineering
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
              className="absolute -bottom-4 left-4 right-4 z-20 rounded-[30px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8 md:p-7"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <Building2 size={25} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Engineering Objective
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-tight text-primary-blue">
                    Designed Around Rooftop Equipment and Safe Access
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
              <Building2 size={15} />
              Roof Platform Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Engineered Rooftop Platforms for Safe Equipment Access
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Structural roof platforms provide elevated steel working areas
              for supporting rooftop equipment, inspection activities and
              maintenance access.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Every platform is engineered according to the approved equipment
              layout, structural requirements and project conditions.
            </p>

            <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {overviewPoints.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="group grid gap-4 py-7 sm:grid-cols-[58px_1fr_auto]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h3 className="text-xl font-black text-primary-blue">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-4xl font-black text-primary-blue/[0.05]">
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
                Final framing, platform layout, equipment support, access
                systems and perimeter protection are coordinated according to
                approved engineering requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}

        <div className="relative z-10 mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {platformFeatures.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={24} />
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                  Feature {item.number}
                </p>

                <h3 className="mt-3 text-xl font-black text-primary-blue">
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