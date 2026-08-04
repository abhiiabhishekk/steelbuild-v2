"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Download,
  Factory,
  FileText,
  Users,
} from "lucide-react";

import Container from "@/components/layout/Container";

const brochurePath =
  "/documents/steelbuild-company-profile.pdf";

export default function BrochureHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#183c69] via-[#1b4b80] to-[#214f88] pb-24 pt-28 text-white lg:pb-28 lg:pt-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -left-40 top-8 h-[440px] w-[440px] rounded-full bg-primary-red/15 blur-[110px]" />

      <div className="pointer-events-none absolute -right-36 bottom-10 h-[460px] w-[460px] rounded-full bg-white/[0.07] blur-[120px]" />

      <Container>
        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[0.94fr_1.06fr]">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-white backdrop-blur-md">
              <BookOpen
                size={17}
                className="text-white"
              />
              Company Profile
            </span>

            <h1 className="mt-8 max-w-2xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-white md:text-6xl lg:text-[72px]">
              Download Our
              <span className="block">
                Company Brochure
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-white/80">
              Explore Steelbuild Infra Projects Limited&apos;s manufacturing
              capabilities, Pre-Engineered Building expertise, completed
              projects, engineering excellence and nationwide industrial
              infrastructure solutions.
            </p>

            <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={brochurePath}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 text-base font-black !text-white shadow-[0_20px_48px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a80e15] hover:!text-white"
              >
                View Company Profile

                <ArrowRight
                  size={21}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={brochurePath}
                download
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-base font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:!text-primary-blue"
              >
                Download PDF

                <Download
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>

            {/* Information note */}

            <div className="mt-8 flex max-w-xl items-start gap-4 rounded-[22px] border border-white/15 bg-white/[0.1] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.08)] backdrop-blur-md">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white shadow-[0_10px_25px_rgba(194,17,25,0.28)]">
                <FileText
                  size={21}
                  className="text-white"
                />
              </div>

              <p className="pt-0.5 text-sm font-bold leading-7 text-white/85">
                View the complete company profile online or download the
                official PDF for meetings, presentations and project
                discussions.
              </p>
            </div>
          </motion.div>

          {/* Right 3D landscape brochure */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative flex min-h-[520px] items-center justify-center lg:min-h-[600px]"
          >
            <div className="pointer-events-none absolute bottom-[12%] left-1/2 h-20 w-[78%] -translate-x-1/2 rounded-[50%] bg-black/30 blur-3xl" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-[95px]" />

            <motion.a
              href={brochurePath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Steelbuild company profile PDF"
              initial={{
                rotateY: -14,
                rotateX: 5,
                rotateZ: -2,
              }}
              animate={{
                y: [0, -10, 0],
                rotateY: [-14, -10, -14],
                rotateX: [5, 3, 5],
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateX: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                rotateY: -6,
                rotateX: 1,
                rotateZ: 0,
                scale: 1.025,
                y: -8,
              }}
              className="group relative block h-[310px] w-[470px] cursor-pointer [perspective:1800px] sm:h-[360px] sm:w-[550px] lg:h-[400px] lg:w-[610px]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Page thickness */}

              <div
                className="absolute bottom-[-12px] left-[18px] right-[-14px] top-[12px] rounded-[20px] bg-gradient-to-b from-white via-[#eeeeee] to-[#cfcfcf] shadow-[30px_38px_80px_rgba(0,0,0,0.35)]"
                style={{
                  transform: "translateZ(-24px)",
                }}
              />

              {/* Right edge */}

              <div
                className="absolute -right-[18px] bottom-[5px] top-[8px] w-[34px] rounded-r-[12px] bg-gradient-to-r from-[#9a0c12] via-[#c21119] to-[#7d090e]"
                style={{
                  transform: "rotateY(90deg) translateZ(17px)",
                  transformOrigin: "left center",
                }}
              />

              {/* Bottom edge */}

              <div
                className="absolute -bottom-[18px] left-[8px] right-[8px] h-[32px] rounded-b-[12px] bg-gradient-to-b from-[#f3f3f3] via-[#d8d8d8] to-[#bfbfbf]"
                style={{
                  transform: "rotateX(90deg) translateZ(16px)",
                  transformOrigin: "top center",
                }}
              />

              {/* Front cover */}

              <div className="absolute inset-0 overflow-hidden rounded-[20px] border border-white/20 bg-white shadow-[0_34px_90px_rgba(0,0,0,0.4)] transition-shadow duration-500 group-hover:shadow-[0_46px_120px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/company-brochure/steelbuild-company-profile-cover.jpg"
                  alt="Steelbuild Infra Projects Limited company brochure cover"
                  fill
                  priority
                  sizes="(max-width: 640px) 470px, (max-width: 1024px) 550px, 610px"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-white/10" />

                <div className="pointer-events-none absolute inset-y-0 left-0 w-[16px] bg-gradient-to-r from-black/25 to-transparent" />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/12 to-transparent" />
              </div>

              <div className="pointer-events-none absolute inset-y-4 left-4 w-px bg-black/15" />

              <div className="pointer-events-none absolute right-5 top-4 h-24 w-28 rounded-full bg-white/18 blur-2xl" />

              <div className="absolute -bottom-6 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 bg-[#0d2f55]/95 px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-[0_15px_35px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-300 group-hover:bg-primary-red">
                Click to View Brochure
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-10 mt-16 grid overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.1] shadow-[0_24px_75px_rgba(0,0,0,0.15)] backdrop-blur-md md:grid-cols-3 lg:mt-20"
        >
          <div className="group flex min-h-[180px] items-center gap-5 border-b border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.07] md:border-b-0 md:border-r md:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.26)] transition-transform duration-300 group-hover:scale-105">
              <Building2
                size={28}
                className="text-white"
              />
            </div>

            <div>
              <h3 className="text-4xl font-black tracking-[-0.04em] text-white lg:text-5xl">
                700+
              </h3>

              <p className="mt-2 text-base font-bold text-white/75">
                Completed Projects
              </p>
            </div>
          </div>

          <div className="group flex min-h-[180px] items-center gap-5 border-b border-white/10 p-7 transition-colors duration-300 hover:bg-white/[0.07] md:border-b-0 md:border-r md:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.26)] transition-transform duration-300 group-hover:scale-105">
              <Users
                size={28}
                className="text-white"
              />
            </div>

            <div>
              <h3 className="text-4xl font-black tracking-[-0.04em] text-white lg:text-5xl">
                500+
              </h3>

              <p className="mt-2 text-base font-bold text-white/75">
                Happy Clients
              </p>
            </div>
          </div>

          <div className="group flex min-h-[180px] items-center gap-5 p-7 transition-colors duration-300 hover:bg-white/[0.07] md:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.26)] transition-transform duration-300 group-hover:scale-105">
              <Factory
                size={28}
                className="text-white"
              />
            </div>

            <div>
              <h3 className="text-4xl font-black tracking-[-0.04em] text-white lg:text-5xl">
                50,000 MT
              </h3>

              <p className="mt-2 text-base font-bold text-white/75">
                Annual Manufacturing Capacity
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}