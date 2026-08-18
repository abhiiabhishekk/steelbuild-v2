"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Layers3,
  ShieldCheck,
  Sparkles,
  SunMedium,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  "Natural Daylighting",
  "UV-Protected Surface",
  "Impact-Resistant Panels",
  "Energy-Efficient Roof Integration",
];

export default function PolycarbonateSheetsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-16 sm:py-20 lg:py-24">
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background Glows */}

      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 xl:grid-cols-[1.02fr_0.98fr] xl:items-start">
          {/* =========================================================
              LEFT CONTENT
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Eyebrow */}

            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red sm:px-6 sm:text-xs sm:tracking-[0.3em]">
              <SunMedium size={15} />
              Polycarbonate Daylighting Sheets
            </span>

            {/* Main Heading */}

            <h1 className="mt-6 text-[38px] font-black leading-[1.03] tracking-[-0.045em] text-primary-blue min-[390px]:text-[42px] sm:mt-7 sm:text-5xl lg:text-[64px]">
              Premium Natural
              <span className="block">
                Daylighting Sheet
              </span>
              <span className="block">
                Systems
              </span>
            </h1>

            {/* Description */}

            <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              Steelbuild Polycarbonate Sheets deliver controlled natural
              daylight, UV protection, impact resistance and reliable
              integration with industrial roofing systems for modern
              Pre-Engineered Buildings.
            </p>

            {/* Highlights */}

            <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-primary-red/15 bg-primary-red/5 px-4 py-2.5 text-[12px] font-black leading-5 text-primary-blue sm:px-5 sm:py-3 sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="relative z-20 mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
              <Link
                href="#polycarbonate-sheets-overview"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-5 py-3.5 text-sm font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue sm:min-h-[58px] sm:px-8 sm:py-4 sm:text-base"
              >
                Explore Polycarbonate Sheets

                <ArrowDown
                  size={19}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-5 py-3.5 text-sm font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white sm:min-h-[58px] sm:px-8 sm:py-4 sm:text-base"
              >
                Request a Quote

                <ArrowRight
                  size={19}
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* Support Cards */}

            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
              <div className="rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)] sm:rounded-[24px]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red sm:h-12 sm:w-12 sm:rounded-2xl">
                  <SunMedium size={21} />
                </div>

                <h3 className="mt-4 text-lg font-black text-primary-blue sm:mt-5 sm:text-xl">
                  Natural Daylighting
                </h3>

                <p className="mt-2.5 text-[13px] font-medium leading-6 text-gray-600 sm:mt-3 sm:text-sm sm:leading-7">
                  Translucent multiwall sheets distribute natural daylight
                  across large industrial interiors and reduce dependence on
                  artificial lighting.
                </p>
              </div>

              <div className="rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_18px_55px_rgba(27,63,104,0.06)] sm:rounded-[24px]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-red/10 text-primary-red sm:h-12 sm:w-12 sm:rounded-2xl">
                  <ShieldCheck size={21} />
                </div>

                <h3 className="mt-4 text-lg font-black text-primary-blue sm:mt-5 sm:text-xl">
                  UV & Impact Protection
                </h3>

                <p className="mt-2.5 text-[13px] font-medium leading-6 text-gray-600 sm:mt-3 sm:text-sm sm:leading-7">
                  UV-protected polycarbonate material provides long-term
                  weather resistance with dependable impact performance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =========================================================
              RIGHT VISUAL
          ========================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            {/* Main Blue Engineering Panel */}

            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_30px_85px_rgba(27,63,104,0.2)] sm:rounded-[36px] sm:p-5 md:p-6">
              {/* Gradient */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              {/* Engineering Grid */}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:58px_58px]" />

              {/* Red Glow */}

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              {/* Main Image */}

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3">
                <div className="group relative aspect-[5/6] overflow-hidden rounded-[20px] min-[390px]:aspect-[4/5] sm:rounded-[22px] lg:aspect-[5/4]">
                  <Image
                    src="/images/products/polycarbonate-sheets/polycarbonate-sheets-hero-v2.jpg"
                    alt="Multiwall polycarbonate daylighting sheets integrated into an industrial roof"
                    fill
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 46vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Overlay */}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  {/* Top Engineering Label */}

                  <div
                    className="
                      absolute
                      left-3
                      right-3
                      top-3
                      z-20
                      rounded-[16px]
                      border
                      border-white/15
                      bg-primary-blue/90
                      px-4
                      py-3
                      backdrop-blur-md

                      min-[390px]:right-auto
                      min-[390px]:max-w-[84%]

                      sm:left-5
                      sm:top-5
                      sm:max-w-[420px]
                      sm:rounded-[17px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase leading-[1.3] tracking-[0.15em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Engineered Daylighting
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.35] text-white sm:text-sm sm:leading-5">
                      Multiwall Polycarbonate Roof System
                    </p>
                  </div>

                  {/* Bottom Image Heading */}

                  <div className="absolute bottom-4 left-4 right-4 z-20 sm:bottom-6 sm:left-5 sm:right-5">
                    <p className="text-[8px] font-black uppercase tracking-[0.14em] text-primary-red sm:text-[9px] sm:tracking-[0.2em]">
                      Natural Daylighting Solution
                    </p>

                    <h2 className="mt-1.5 text-[21px] font-black leading-[1.08] tracking-[-0.03em] text-white min-[390px]:text-[23px] sm:mt-2 sm:text-2xl md:text-[28px]">
                      Maximum Daylight
                      <span className="block">
                        Minimum Heat Gain
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* =====================================================
                  SYSTEM FEATURE CARDS
              ===================================================== */}

              <div className="relative z-10 mt-3 grid gap-3 sm:mt-4 sm:grid-cols-2">
                {/* Natural Light */}

                <div className="rounded-[18px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                      <SunMedium size={20} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-black text-white">
                        Natural Light
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-white/65 sm:text-xs">
                        Multiwall translucent panels distribute soft daylight
                        throughout the building interior.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Multiwall */}

                <div className="rounded-[18px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-sm sm:rounded-[20px] sm:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                      <Sparkles size={20} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-sm font-black text-white">
                        Multiwall Construction
                      </h3>

                      <p className="mt-1 text-[11px] leading-5 text-white/65 sm:text-xs">
                        Hollow-cell polycarbonate improves daylight
                        transmission while enhancing thermal performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                COMPLETE DAYLIGHTING CARD
            ========================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-3 -mt-5 rounded-[24px] border border-gray-200 bg-white p-4 shadow-[0_20px_65px_rgba(27,63,104,0.14)] min-[390px]:mx-4 min-[390px]:p-5 sm:mx-6 sm:rounded-[26px] sm:p-6 md:mx-8"
            >
              <div className="flex items-start gap-3.5 sm:gap-4">
                {/* Icon */}

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
                  <Layers3 size={22} />
                </div>

                {/* Text */}

                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-black uppercase leading-[1.35] tracking-[0.15em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Complete Daylighting Assembly
                  </p>

                  <p className="mt-2 text-[13px] font-black leading-[1.5] tracking-[-0.01em] text-primary-blue min-[390px]:text-sm sm:text-base sm:leading-6">
                    Multiwall polycarbonate sheets, UV-protected outer surfaces,
                    aluminium glazing bars, EPDM seals, flashings and structural
                    supports work together to deliver durable daylighting and
                    weather-resistant roof integration.
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