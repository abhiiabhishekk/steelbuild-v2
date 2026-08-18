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
  Thermometer,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  "Thermal Insulation",
  "Energy Efficient",
  "Condensation Control",
  "Complete Building Envelope",
];

export default function InsulationSystemsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background Glows */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
              <Layers3 size={15} />
              Industrial Insulation Systems
            </span>

            <h1 className="mt-6 text-[38px] font-black leading-[1.04] tracking-[-0.045em] text-primary-blue sm:mt-7 sm:text-5xl lg:text-[64px]">
              High-Performance
              <span className="block">
                Building Insulation
              </span>
              <span className="block">
                Systems
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Steelbuild Industrial Insulation Systems improve thermal
              efficiency, reduce energy consumption, control condensation and
              create high-performance building envelopes for modern
              Pre-Engineered Buildings.
            </p>

            {/* Highlights */}

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary-red/15 bg-primary-red/5 px-4 py-2.5 text-xs font-black text-primary-blue sm:px-5 sm:py-3 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="relative z-20 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="#insulation-overview"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 text-sm font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue sm:min-h-[58px] sm:px-8 sm:text-base"
              >
                Explore Insulation Systems

                <ArrowDown
                  size={19}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-6 py-4 text-sm font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white sm:min-h-[58px] sm:px-8 sm:text-base"
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
              <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Thermometer size={22} />
                </div>

                <h3 className="mt-5 text-xl font-black text-primary-blue">
                  Thermal Performance
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                  Continuous insulation minimizes heat transfer and improves
                  overall building energy efficiency.
                </p>
              </div>

              <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Snowflake size={22} />
                </div>

                <h3 className="mt-5 text-xl font-black text-primary-blue">
                  Condensation Control
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
                  Proper insulation and vapour barriers help reduce moisture
                  build-up and protect the complete building envelope.
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
            {/* Blue Panel */}

            <div className="relative isolate overflow-hidden rounded-[32px] bg-primary-blue p-3 pb-10 shadow-[0_30px_85px_rgba(27,63,104,0.2)] sm:rounded-[36px] sm:p-4 sm:pb-11 md:p-6 md:pb-12">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Main Image */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] sm:aspect-[4/5] sm:rounded-[22px] lg:aspect-[5/4]">
                  <Image
                    src="/images/products/insulation-systems/insulation-systems-hero.jpg"
                    alt="Industrial roof and wall insulation system integrated within a modern Pre-Engineered Building"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 46vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay */}

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
                      Engineered Thermal Envelope
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Roof & Wall Insulation Integration
                    </p>
                  </div>

                  {/* Bottom Image Text */}

                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      z-10

                      min-[390px]:bottom-5

                      sm:bottom-6
                      sm:left-5
                      sm:right-5
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Steelbuild Insulation Systems
                    </p>

                    <h2
                      className="
                        mt-1.5
                        max-w-lg

                        text-[18px]
                        font-black
                        leading-[1.12]
                        tracking-[-0.025em]
                        text-white

                        min-[390px]:text-[19px]

                        sm:mt-2
                        sm:text-2xl

                        md:text-[28px]
                      "
                    >
                      Continuous Thermal Protection
                      <span className="block">
                        Within the Building Envelope
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* System Highlights */}

              <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[18px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                      <Layers3 size={20} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[13px] font-black leading-5 text-white sm:text-sm">
                        Separate Insulation Layer
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-white/65 sm:text-xs">
                        Installed independently beneath roofing and behind wall
                        cladding.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[18px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                      <ShieldCheck size={20} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-[13px] font-black leading-5 text-white sm:text-sm">
                        Vapour & Moisture Control
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-white/65 sm:text-xs">
                        Coordinated barriers help control condensation and
                        moisture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordination Card */}

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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
                  <Thermometer size={21} className="sm:hidden" />

                  <Thermometer size={23} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.16em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Integrated Insulation Assembly
                  </p>

                  <p className="mt-1.5 text-[14px] font-black leading-[1.45] tracking-[-0.01em] text-primary-blue sm:mt-2 sm:text-base sm:leading-6">
                    Insulation blankets or boards, vapour barriers, support
                    systems, spacers, external roofing and wall cladding work
                    together to improve thermal performance without forming a
                    sandwich panel.
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