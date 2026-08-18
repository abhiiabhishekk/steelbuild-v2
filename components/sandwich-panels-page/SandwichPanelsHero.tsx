"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Layers3,
  ShieldCheck,
  Snowflake,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  "Thermal Insulation",
  "Energy Efficient",
  "Weather Protection",
  "Premium Building Envelope",
];

const systemHighlights = [
  {
    icon: Layers3,
    title: "Double Metal Skins",
    description:
      "Durable inner and outer steel skins bonded to the insulation core.",
  },
  {
    icon: Snowflake,
    title: "Insulated Core",
    description:
      "PIR, PUF or Rockwool core selected according to performance needs.",
  },
];

export default function SandwichPanelsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background Glows */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 sm:gap-14 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Eyebrow */}

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
              <Layers3 size={15} />
              Insulated Sandwich Panels
            </span>

            {/* Heading */}

            <h1 className="mt-6 text-[40px] font-black leading-[1.04] tracking-[-0.045em] text-primary-blue sm:mt-7 sm:text-5xl lg:text-[64px]">
              Premium Insulated
              <span className="block">Sandwich Panel</span>
              <span className="block">Systems</span>
            </h1>

            {/* Description */}

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Steelbuild Sandwich Panels combine double metal skins with
              high-performance PIR, PUF or Rockwool insulation cores to deliver
              exceptional thermal efficiency, weather protection, structural
              integrity and premium architectural appearance.
            </p>

            {/* Highlights */}

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary-red/15 bg-primary-red/5 px-4 py-2.5 text-[12px] font-black text-primary-blue sm:px-5 sm:py-3 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="relative z-20 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="#sandwich-panels-overview"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 text-sm font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue sm:min-h-[58px] sm:px-8"
              >
                Explore Sandwich Panels

                <ArrowDown
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-6 py-4 text-sm font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white sm:min-h-[58px] sm:px-8"
              >
                Request a Quote

                <ArrowRight
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Support Cards */}

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
              <div className="rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)] sm:rounded-[24px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Snowflake size={22} />
                </div>

                <h3 className="mt-5 text-lg font-black text-primary-blue sm:text-xl">
                  Thermal Performance
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-gray-600 sm:leading-7">
                  High-performance insulated cores significantly reduce heat
                  transfer and improve overall building energy efficiency.
                </p>
              </div>

              <div className="rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)] sm:rounded-[24px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <ShieldCheck size={22} />
                </div>

                <h3 className="mt-5 text-lg font-black text-primary-blue sm:text-xl">
                  Complete Building Envelope
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-gray-600 sm:leading-7">
                  Double metal skins permanently bonded to insulated cores
                  create durable weather-resistant building envelopes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-9 shadow-[0_30px_85px_rgba(27,63,104,0.2)] sm:rounded-[36px] sm:p-4 sm:pb-10 md:p-6 md:pb-12">
              {/* Blue Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Image Frame */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[22px]">
                  <Image
                    src="/images/products/sandwich-panels/sandwich-panels-hero.jpg"
                    alt="Modern industrial building using insulated sandwich panel wall and roof systems"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 46vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Image Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Information */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-10

                      rounded-[16px]
                      border
                      border-white/15
                      bg-primary-blue/90
                      px-4
                      py-3
                      backdrop-blur-md

                      sm:left-5
                      sm:right-auto
                      sm:top-5
                      sm:max-w-[390px]
                      sm:rounded-[17px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Insulated Building Envelope
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Double Metal Skins + High-Performance Core
                    </p>
                  </div>

                  {/* Bottom Information */}

                  <div className="absolute bottom-4 left-4 right-4 z-10 min-[390px]:bottom-5 sm:bottom-6 sm:left-5 sm:right-5">
                    <p className="text-[8px] font-black uppercase tracking-[0.15em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Steelbuild Sandwich Panels
                    </p>

                    <h2 className="mt-1.5 max-w-[540px] text-[19px] font-black leading-[1.12] tracking-[-0.025em] text-white min-[390px]:text-[20px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Insulated Wall and Roof Systems
                      <span className="block">
                        Built for Energy Efficiency
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* System Highlights */}

              <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
                {systemHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[18px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5"
                    >
                      <div className="flex items-start gap-3.5 sm:gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                          <Icon size={20} />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-[13px] font-black leading-5 text-white sm:text-sm">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-[11px] font-medium leading-5 text-white/65 sm:text-xs">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Integrated Envelope Card */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="
                relative
                z-20

                -mt-8
                mx-3

                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4

                shadow-[0_20px_65px_rgba(27,63,104,0.14)]

                min-[390px]:mx-4
                min-[390px]:p-5

                sm:-mt-9
                sm:mx-5
                sm:rounded-[26px]
                sm:p-6

                md:-mt-10
                md:mx-8
              "
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.2)] sm:h-14 sm:w-14">
                  <ShieldCheck size={21} className="sm:hidden" />

                  <ShieldCheck size={23} className="hidden sm:block" />
                </div>

                {/* Text */}

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Integrated Insulated Envelope
                  </p>

                  <p className="mt-1.5 text-[14px] font-black leading-[1.45] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Double metal skins, insulated cores, sealed joints,
                    flashings and supporting framing work together to deliver
                    thermal efficiency, weather protection and long-term
                    building performance.
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