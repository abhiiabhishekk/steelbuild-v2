"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
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
    <section className="relative isolate overflow-hidden bg-white pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-28 lg:pt-36">
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
          className="relative z-10 hidden flex-wrap items-center gap-3 text-sm font-semibold text-gray-500 sm:flex"
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

        <div className="relative z-10 grid gap-12 sm:mt-12 lg:gap-14 xl:grid-cols-[0.94fr_1.06fr] xl:items-center">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 xl:order-1"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red sm:gap-3 sm:px-5 sm:py-2.5 sm:text-[11px] sm:tracking-[0.3em]">
              <Route size={15} />
              Industrial Walkways & Catwalks
            </span>

            <h1 className="mt-6 max-w-4xl text-[42px] font-black leading-[0.98] tracking-[-0.05em] text-primary-blue sm:mt-7 sm:text-5xl md:text-6xl lg:text-[72px]">
              Connect Work Areas.
              <span className="block">Organize Elevated Access.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-gray-600 sm:mt-7 sm:text-lg sm:leading-9">
              Steelbuild Infra Projects Limited develops structural steel
              walkways and catwalks for elevated movement, equipment access,
              inspection routes and maintenance requirements inside industrial
              Pre-Engineered Buildings.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="#walkways-catwalks-overview"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white sm:min-h-[58px] sm:px-8"
              >
                Explore Walkways & Catwalks

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="/request-a-quote"
                className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-6 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white sm:min-h-[58px] sm:px-8"
              >
                Request a Quote

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-7 flex max-w-xl items-start gap-3 rounded-[20px] border border-gray-200 bg-white p-4 shadow-[0_14px_40px_rgba(27,63,104,0.07)] sm:mt-8 sm:gap-4 sm:rounded-[22px] sm:p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white shadow-[0_10px_25px_rgba(194,17,25,0.22)] sm:h-11 sm:w-11">
                <BadgeCheck size={20} />
              </div>

              <p className="text-[13px] font-bold leading-6 text-gray-600 sm:pt-0.5 sm:text-sm sm:leading-7">
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
            className="relative order-1 pb-[190px] sm:pb-24 md:pb-20 xl:order-2"
          >
            <div className="relative isolate overflow-hidden rounded-[30px] bg-primary-blue p-3 shadow-[0_30px_80px_rgba(27,63,104,0.22)] sm:rounded-[36px] sm:p-5 md:rounded-[40px] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/10 p-2 sm:rounded-[28px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] min-[390px]:aspect-[5/6] sm:aspect-[5/4] sm:rounded-[24px]">
                  <Image
                    src="/images/products/mezzanine-systems/walkways-catwalks.jpg"
                    alt="Industrial steel walkway and catwalk with grating floor and guardrails inside a PEB building"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/5 to-transparent" />

                  {/* Top label */}

                  <div
                    className="
                      absolute
                      left-3 right-3 top-3
                      rounded-[15px]
                      border border-white/15
                      bg-primary-blue/90
                      px-4 py-3
                      backdrop-blur-md

                      sm:left-5
                      sm:right-auto
                      sm:top-5
                      sm:max-w-[300px]
                      sm:rounded-[18px]
                      sm:px-5
                      sm:py-4
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[9px] sm:tracking-[0.22em]">
                      Elevated Access Route
                    </p>

                    <p className="mt-1 text-[12px] font-black leading-[1.25] text-white sm:text-sm">
                      Walkway, Catwalk & Guardrail System
                    </p>
                  </div>

                  {/* Bottom image text */}

                  <div
                    className="
                      absolute
                      bottom-4 left-4 right-4

                      sm:bottom-6
                      sm:left-5
                      sm:right-5

                      md:bottom-7
                    "
                  >
                    <p className="text-[8px] font-black uppercase tracking-[0.17em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
                      Industrial Steel Walkway
                    </p>

                    <h2 className="mt-1.5 max-w-lg text-[17px] font-black leading-[1.1] tracking-[-0.02em] text-white min-[390px]:text-[18px] sm:mt-2 sm:text-2xl md:text-[30px]">
                      Elevated Movement Coordinated With
                      <span className="block">
                        the Complete Steel Structure
                      </span>
                    </h2>
                  </div>
                </div>
              </div>

              {/* System elements */}

              <div className="relative z-10 mt-4 grid gap-3 sm:mt-5 sm:grid-cols-2">
                {walkwayElements.map((item) => (
                  <div
                    key={item.number}
                    className="min-h-[92px] rounded-[18px] border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-sm sm:min-h-[104px] sm:rounded-[20px] sm:px-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-[13px] font-black leading-5 text-white sm:text-sm">
                        {item.title}
                      </p>

                      <span className="shrink-0 text-[11px] font-black text-primary-red sm:text-xs">
                        {item.number}
                      </span>
                    </div>

                    <p className="mt-2 pr-2 text-[10px] font-medium leading-[1.5] text-white/60 sm:pr-3 sm:text-[11px]">
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
              className="
                absolute
                bottom-5
                left-3
                right-3
                z-20
                rounded-[24px]
                border
                border-gray-200
                bg-white
                p-4
                shadow-[0_24px_75px_rgba(27,63,104,0.15)]

                min-[390px]:left-4
                min-[390px]:right-4
                min-[390px]:p-5

                sm:-bottom-4
                sm:left-5
                sm:right-5
                sm:rounded-[28px]
                sm:p-6

                md:-bottom-6
                md:left-9
                md:right-9
              "
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white sm:h-14 sm:w-14">
                  <Footprints size={22} className="sm:hidden" />
                  <Footprints size={25} className="hidden sm:block" />
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] font-black uppercase tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.22em]">
                    Movement Planning
                  </p>

                  <p className="mt-2 text-[16px] font-black leading-[1.28] text-primary-blue sm:text-base sm:leading-6">
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
          className="relative z-10 mt-10 grid overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-[0_20px_65px_rgba(27,63,104,0.08)] sm:mt-16 sm:rounded-[30px] md:grid-cols-3"
        >
          {walkwayHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`group flex min-h-[110px] items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#f8fafc] sm:min-h-[122px] sm:gap-5 sm:px-7 sm:py-6 ${
                  index < walkwayHighlights.length - 1
                    ? "border-b border-gray-200 md:border-b-0 md:border-r"
                    : ""
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white sm:h-[52px] sm:w-[52px]">
                  <Icon size={23} />
                </div>

                <div>
                  <p className="font-black text-primary-blue">{item.title}</p>

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