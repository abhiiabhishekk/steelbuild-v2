"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  "High Structural Strength",
  "Weather-Resistant Roofing",
  "Long Service Life",
  "Cost-Effective Roofing Solution",
];

export default function RoofingSheetsHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-36 pb-24 lg:pb-32">

      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>

        <div className="grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity:0,x:-40 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.65 }}
          >
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-500">

              <Link
                href="/"
                className="transition hover:text-primary-red"
              >
                Home
              </Link>

              <ChevronRight size={15} />

              <Link
                href="/products"
                className="transition hover:text-primary-red"
              >
                Products
              </Link>

              <ChevronRight size={15} />

              <Link
                href="/products/roofing-systems"
                className="transition hover:text-primary-red"
              >
                Roofing Systems
              </Link>

              <ChevronRight size={15} />

              <span className="font-black text-primary-red">
                Roofing Sheets
              </span>

            </div>

            <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">

              <ShieldCheck size={15} />

              Roofing Sheet System

            </span>

            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.05em] text-primary-blue lg:text-[72px]">

              Industrial
              <span className="block">
                Roofing Sheets
              </span>

            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-gray-600">

              Steelbuild Industrial Roofing Sheets provide dependable weather
              protection, structural strength and long-term durability for
              warehouses, factories, logistics parks, commercial buildings and
              industrial infrastructure.

            </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-[0_12px_35px_rgba(27,63,104,0.06)]"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-primary-red"
                  />

                  <span className="text-sm font-black leading-6 text-primary-blue">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#roofing-sheets-overview"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
              >
                Explore Roofing Sheets

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-8 flex max-w-xl items-start gap-4 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.07)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                <BadgeCheck size={21} />
              </div>

              <p className="pt-0.5 text-sm font-bold leading-7 text-gray-600">
                Final sheet profile, material thickness, coating, fastener
                arrangement, insulation and roof-accessory details are
                developed according to approved drawings and project
                requirements.
              </p>
            </div>
          </motion.div>

          {/* Right Visual */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative pb-24 md:pb-20"
          >
            <div className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue p-5 shadow-[0_38px_100px_rgba(27,63,104,0.23)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/roofing-sheets/roofing-sheets-hero.jpg"
                    alt="Industrial profiled roofing sheets installed on a modern Pre-Engineered Building"
                    fill
                    priority
                    sizes="(max-width: 1280px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 max-w-[80%] rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Industrial Roofing System
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-white">
                      Profiled Metal Roofing Sheets
                    </p>
                  </div>

                  <div className="absolute bottom-7 left-5 right-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                      Engineered Roof Protection
                    </p>

                    <h2 className="mt-2 max-w-[560px] text-xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-2xl md:text-[30px]">
                      Strong Roofing Designed for
                      <span className="block">
                        Industrial Performance
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Profiled Sheets",
                    text: "Trapezoidal industrial roofing profile",
                  },
                  {
                    number: "02",
                    title: "Roof Fasteners",
                    text: "Coordinated fixing and sealing arrangement",
                  },
                  {
                    number: "03",
                    title: "Roof Accessories",
                    text: "Ridge, flashing, gutters and trims",
                  },
                  {
                    number: "04",
                    title: "Structural Support",
                    text: "Integrated with purlins and steel framing",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="min-h-[104px] rounded-[20px] border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-black leading-5 text-white">
                        {item.title}
                      </p>

                      <span className="shrink-0 text-xs font-black text-primary-red">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 text-[11px] font-medium leading-[1.45] text-white/60">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="absolute -bottom-6 left-5 right-5 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.15)] md:left-9 md:right-9"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <ShieldCheck size={25} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Reliable Roofing Performance
                  </p>

                  <p className="mt-2 text-base font-black leading-6 text-primary-blue">
                    Profiled sheets, fasteners, purlins, flashings and drainage
                    components work together as one coordinated roofing system.
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