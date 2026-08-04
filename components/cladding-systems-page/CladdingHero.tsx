"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  PanelsTopLeft,
  SquareStack,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  {
    icon: PanelsTopLeft,
    title: "Wall Protection",
    text: "Coordinated exterior wall systems",
  },
  {
    icon: SquareStack,
    title: "Architectural Appearance",
    text: "Modern industrial façade solutions",
  },
  {
    icon: Building2,
    title: "Building Envelope",
    text: "Integrated with the steel structure",
  },
];

const floatingTags = [
  "Wall Cladding",
  "Flashings",
  "Trim Details",
  "Corners",
  "Openings",
  "Weather Protection",
];

export default function CladdingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-[440px] w-[440px] rounded-full bg-primary-red/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-primary-blue/[0.08] blur-3xl" />

      <Container>
        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500"
        >
          <Link
            href="/"
            className="hover:text-primary-red"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/products"
            className="hover:text-primary-red"
          >
            Products
          </Link>

          <span>/</span>

          <span className="font-black text-primary-blue">
            Cladding Systems
          </span>
        </motion.div>

        <div className="mt-12 grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <PanelsTopLeft size={15} />
              Industrial Cladding Systems
            </span>

            <h1 className="mt-8 text-5xl font-black leading-[0.96] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[72px]">
              Protect.
              <span className="block">
                Enhance.
              </span>
              <span className="block">
                Complete the Building Envelope.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Steelbuild Infra Projects Limited provides engineered wall
              cladding systems developed according to building function,
              environmental exposure, architectural intent and approved
              project requirements.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#cladding-overview"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
              >
                Explore Cladding Systems

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-10 flex max-w-xl items-start gap-4 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,.06)]">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                <BadgeCheck size={20} />
              </div>

              <p className="text-sm font-bold leading-7 text-gray-600">
                Wall cladding selection, profiles, accessories and installation
                details are coordinated according to approved engineering and
                architectural requirements.
              </p>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .75 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[40px] border border-gray-200 bg-white shadow-[0_38px_100px_rgba(27,63,104,.15)]">

              <div className="relative aspect-[5/4] overflow-hidden">
                <Image
                  src="/images/products/cladding-systems/industrial-wall-cladding.jpg"
                  alt="Industrial Wall Cladding"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/70 via-transparent to-transparent" />

                <div className="absolute left-6 top-6 rounded-2xl bg-primary-blue/90 px-5 py-4 backdrop-blur-md">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Building Envelope
                  </p>

                  <p className="mt-1 font-black text-white">
                    Exterior Wall System
                  </p>
                </div>

                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-black leading-tight text-white">
                    Premium
                    <span className="block">
                      Architectural Cladding
                    </span>
                  </h3>
                </div>
              </div>

              {/* Exploded concept */}

              <div className="grid gap-4 p-8">

                {[
                  "Wall Cladding",
                  "Steel Structure",
                  "Concrete Foundation",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 py-4"
                  >
                    <span className="font-black text-primary-blue">
                      {item}
                    </span>

                    {index < 2 && (
                      <ArrowDown
                        size={18}
                        className="text-primary-red"
                      />
                    )}
                  </div>
                ))}

              </div>
            </div>

            {/* Floating Tags */}

            <div className="mt-6 flex flex-wrap gap-3">
              {floatingTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary-red/15 bg-primary-red/5 px-4 py-2 text-xs font-black text-primary-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Strip */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .7, delay: .2 }}
          className="mt-16 grid overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_18px_60px_rgba(27,63,104,.08)] md:grid-cols-3"
        >
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex items-center gap-5 border-b border-gray-200 px-7 py-6 last:border-b-0 md:border-b-0 md:border-r last:md:border-r-0"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Icon size={24} />
                </div>

                <div>
                  <h3 className="font-black text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs font-semibold leading-5 text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}