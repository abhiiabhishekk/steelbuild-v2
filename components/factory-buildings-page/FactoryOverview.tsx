"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  Ruler,
  ShieldCheck,
  Workflow,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const factoryModules = [
  {
    number: "01",
    icon: Workflow,
    title: "Production Flow",
    description:
      "Internal layouts coordinated around process sequence, material movement and working areas.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Machinery Integration",
    description:
      "Structural planning aligned with equipment positions, operational clearances and maintenance access.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Building Configuration",
    description:
      "Clear spans, bay spacing and building height developed according to factory requirements.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Operational Reliability",
    description:
      "Structural and envelope systems coordinated for safe, durable and dependable industrial use.",
  },
];

const factoryCapabilities = [
  "Production-oriented layout",
  "Flexible clear-span planning",
  "Machinery and utility coordination",
  "Future expansion provisions",
];

export default function FactoryOverview() {
  return (
    <section
      id="factory-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
          {/* Left visual composition */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[26px] bg-primary-blue p-3 shadow-[0_28px_70px_rgba(27,63,104,0.20)] sm:rounded-[32px] sm:p-4 md:rounded-[38px] md:p-6 md:shadow-[0_38px_100px_rgba(27,63,104,0.22)]">
              {/* Blue gradient frame */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-2 sm:rounded-[26px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
  <Image
    src="/images/products/factory-buildings/factory-building.jpg"
    alt="Factory building designed around production, machinery and industrial operations"
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/65 via-primary-blue/10 to-transparent" />

  <div
    className="
      absolute
      left-3 right-3 top-3
      rounded-[18px]
      border border-white/15
      bg-primary-blue/90
      px-4 py-4
      shadow-[0_16px_40px_rgba(27,63,104,0.2)]
      backdrop-blur-md

      min-[390px]:left-4
      min-[390px]:right-4
      min-[390px]:top-4
      min-[390px]:px-5

      sm:left-5
      sm:right-auto
      sm:top-5
      sm:max-w-[310px]
      sm:rounded-[20px]
      sm:px-5
      sm:py-4
    "
  >
    <p
      className="
        text-[8px]
        font-black
        uppercase
        leading-[1.45]
        tracking-[0.18em]
        text-primary-red

        min-[360px]:text-[9px]
        min-[390px]:tracking-[0.20em]

        sm:text-[10px]
        sm:tracking-[0.22em]
      "
    >
      Manufacturing Infrastructure
    </p>

    <p
      className="
        mt-2
        text-[18px]
        font-black
        leading-[1.18]
        tracking-[-0.02em]
        text-white

        min-[360px]:text-[19px]
        min-[390px]:text-[20px]

        sm:text-lg
        sm:leading-tight
      "
    >
      Designed Around Production Requirements
    </p>
  </div>
</div>
              </div>
            </div>

            {/* Floating capability panel */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-3 -mt-5 rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_24px_75px_rgba(27,63,104,0.13)] min-[390px]:mx-4 min-[390px]:p-6 sm:-mt-7 sm:rounded-[28px] md:mx-8 md:-mt-8 md:rounded-[30px] md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
  <Factory size={23} className="sm:h-[26px] sm:w-[26px]" />
</div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Factory Capability
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-[1.2] text-primary-blue sm:text-2xl sm:leading-tight">
  Planned Around Manufacturing Operations
</h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {factoryCapabilities.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[56px] items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-3.5 sm:min-h-[62px] sm:py-4"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-primary-blue">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
              <Factory size={15} />
              Factory Building Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Purpose-Built Factory Buildings for Modern Manufacturing
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Factory buildings must support production flow, machinery,
              utilities, material movement and safe working conditions within
              one coordinated industrial facility.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Steelbuild develops each factory according to its operational
              layout, structural requirements and future growth plans.
            </p>

            {/* Factory modules */}

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {factoryModules.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_16px_48px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_26px_70px_rgba(27,63,104,0.13)]"
                  >
                    <span className="pointer-events-none absolute right-4 top-3 text-[42px] font-black leading-none text-primary-blue/[0.045]">
                      {item.number}
                    </span>

                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={23} />
                    </div>

                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Factory Module {item.number}
                    </p>

                    <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
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
      </Container>
    </section>
  );
}