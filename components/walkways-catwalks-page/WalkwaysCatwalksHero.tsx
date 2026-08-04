"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  Footprints,
  Frame,
  Route,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const walkwayHighlights = [
  {
    icon: Route,
    title: "Elevated Movement",
    text: "Defined access routes between approved industrial working areas",
  },
  {
    icon: Frame,
    title: "Structural Integration",
    text: "Walkway framing coordinated with platforms and building supports",
  },
  {
    icon: ShieldCheck,
    title: "Perimeter Protection",
    text: "Guardrails and toe boards incorporated within the approved layout",
  },
];

const walkwayElements = [
  {
    number: "01",
    title: "Steel Grating Floor",
    text: "Industrial walking surface for elevated access",
  },
  {
    number: "02",
    title: "Support Beams",
    text: "Primary and secondary walkway framing",
  },
  {
    number: "03",
    title: "Guardrails",
    text: "Protection around exposed walkway edges",
  },
  {
    number: "04",
    title: "Access Connections",
    text: "Links with stairs, platforms and service areas",
  },
];

export default function WalkwaysCatwalksHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-40 top-12 h-[440px] w-[440px] rounded-full bg-primary-red/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-primary-blue/[0.08] blur-3xl" />

      <Container>
        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 flex flex-wrap items-center gap-3 text-sm font-semibold text-gray-500"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <Link
            href="/products"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Products
          </Link>

          <span className="text-gray-300">/</span>

          <Link
            href="/products/mezzanine-systems"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Mezzanine Systems
          </Link>

          <span className="text-gray-300">/</span>

          <span className="font-black text-primary-blue">
            Walkways & Catwalks
          </span>
        </motion.div>

        {/* Main hero */}

        <div className="relative z-10 mt-12 grid gap-14 xl:grid-cols-[0.94fr_1.06fr] xl:items-center">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <Route size={16} />
              Industrial Walkways & Catwalks
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[72px]">
              Connect Work Areas.
              <span className="block">
                Organize Elevated Access.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Steelbuild Infra Projects Limited develops structural steel
              walkways and catwalks for elevated movement, equipment access,
              inspection routes and maintenance requirements inside industrial
              Pre-Engineered Buildings.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#walkways-catwalks-overview"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
              >
                Explore Walkways & Catwalks

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
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
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white shadow-[0_10px_25px_rgba(194,17,25,0.22)]">
                <BadgeCheck size={21} />
              </div>

              <p className="pt-0.5 text-sm font-bold leading-7 text-gray-600">
                Final walkway width, elevation, support framing, access
                connections and perimeter-protection details are developed
                according to approved drawings and project requirements.
              </p>
            </div>
          </motion.div>

          {/* Right visual */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
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
                    src="/images/products/mezzanine-systems/walkways-catwalks.jpg"
                    alt="Industrial steel walkway and catwalk with grating floor and guardrails inside a PEB building"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 55vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Elevated Access Route
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Walkway, Catwalk & Guardrail System
                    </p>
                  </div>

                  <div className="absolute bottom-7 left-5 right-5">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
                      Industrial Steel Walkway
                    </p>

                    <h2 className="mt-2 max-w-lg text-xl font-black leading-[1.12] text-white sm:text-2xl md:text-[30px]">
                      Elevated Movement Coordinated With
                      <span className="block">
                        the Complete Steel Structure
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* System elements */}

              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                {walkwayElements.map((item) => (
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

                    <p className="mt-2 pr-3 text-[11px] font-medium leading-[1.45] text-white/60">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating note */}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="absolute -bottom-6 left-5 right-5 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.15)] md:left-9 md:right-9"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                  <Footprints size={25} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Movement Planning
                  </p>

                  <p className="mt-2 text-base font-black leading-6 text-primary-blue">
                    Walkway routes must connect approved working areas without
                    obstructing industrial operations below.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom highlights */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mt-16 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          {walkwayHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group flex min-h-[122px] items-center gap-5 px-7 py-6 transition-colors duration-300 hover:bg-[#f8fafc] ${
                  index < walkwayHighlights.length - 1
                    ? "border-b border-gray-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={24} />
                </div>

                <div>
                  <p className="font-black text-primary-blue">
                    {item.title}
                  </p>

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