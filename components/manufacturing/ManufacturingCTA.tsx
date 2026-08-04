"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Check,
  Download,
  Factory,
  Gauge,
  Layers3,
  ShieldCheck,
  Truck,
  Warehouse,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const capabilities = [
  {
    icon: Factory,
    title: "Heavy Fabrication",
  },
  {
    icon: Layers3,
    title: "Roofing & Cladding",
  },
  {
    icon: Wrench,
    title: "CNC Cutting & Welding",
  },
  {
    icon: Warehouse,
    title: "Secondary Members",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
  },
  {
    icon: Check,
    title: "Packing & Dispatch",
  },
];

const stats = [
  {
    value: "50,000 MT",
    label: "Annual Capacity",
  },
  {
    value: "3 Units",
    label: "Manufacturing Facilities",
  },
  {
    value: "ISO 9001:2015",
    label: "Certified Systems",
  },
  {
    value: "Pan India",
    label: "Project Delivery",
  },
];

export default function ManufacturingCTA() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-8 lg:pb-20 lg:pt-10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative isolate overflow-hidden rounded-[38px] border border-white/10 bg-[#143b68] shadow-[0_40px_100px_rgba(15,40,80,0.22)]"
        >
          {/* Main gradient background */}

          <div className="absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#24578d_50%,#12345e_100%)]" />

          {/* Subtle grid */}

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

          {/* Background glow */}

          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary-red/20 blur-[110px]" />

          <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-[#6ba3df]/20 blur-[130px]" />

          {/* Decorative lines */}

          <div className="absolute right-[14%] top-0 h-full w-px rotate-[28deg] bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="absolute right-[24%] top-0 h-full w-px rotate-[28deg] bg-gradient-to-b from-transparent via-white/5 to-transparent" />

          {/* Main content */}

          <div className="relative z-10 grid gap-12 px-7 py-14 md:px-10 md:py-16 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:px-16 lg:py-20">
            {/* Left content */}

            <div className="lg:max-w-[680px]">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                <Factory size={16} className="text-primary-red" />

                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-white">
                  Manufacturing Excellence
                </span>
              </div>

              <h2 className="mt-7 max-w-[680px] text-4xl font-black leading-[1] tracking-[-0.045em] text-white md:text-5xl lg:text-[56px]">
                Ready to Manufacture Your Next Pre-Engineered Building?
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/75 md:text-lg">
                Partner with Steelbuild for precision-engineered structural
                fabrication, roofing, cladding and complete manufacturing
                support backed by advanced machinery and strict quality
                control.
              </p>

              {/* Statistics */}

              <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="group min-h-[112px] rounded-[22px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-red/35 hover:bg-white/[0.13] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
                  >
                    <p className="text-xl font-black leading-tight text-white">
                      {stat.value}
                    </p>

                    <p className="mt-2 text-xs font-semibold leading-5 text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[60px] min-w-[245px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_40px_rgba(194,17,25,0.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
                >
                  Discuss Your Project
                  <ArrowUpRight size={20} />
                </Link>

                <a
  href="/documents/steelbuild-company-profile.pdf"
  download
  className="group inline-flex min-h-[60px] min-w-[245px] items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:!text-primary-blue"
>
  <Download
    size={20}
    className="!text-white transition-colors duration-300 group-hover:!text-primary-blue"
  />

  <span className="!text-white transition-colors duration-300 group-hover:!text-primary-blue">
    Download Company Profile
  </span>
</a>
              </div>
            </div>

            {/* Right capabilities panel */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="self-center rounded-[30px] border border-white/15 bg-white/10 p-6 shadow-[0_35px_90px_rgba(0,0,0,0.22)] backdrop-blur-xl md:p-8"
            >
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
                  <Factory size={28} />
                </div>

                <div>
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary-red">
                    Integrated Capability
                  </p>

                  <h3 className="mt-2 text-2xl font-black leading-tight text-white">
                    Complete Manufacturing Support
                  </h3>
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.15 + index * 0.05,
                      }}
                      className="group flex min-h-[112px] items-start gap-4 rounded-[22px] border border-white/10 bg-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/50 hover:bg-white/15"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                        <Icon size={21} />
                      </div>

                      <div>
                        <p className="text-[10px] font-black tracking-[0.16em] text-white/45">
                          0{index + 1}
                        </p>

                        <h4 className="mt-2 text-sm font-black leading-6 text-white">
                          {item.title}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b2b50]/70 px-5 py-4">
                <BadgeCheck
                  size={23}
                  className="shrink-0 text-primary-red"
                />

                <p className="text-sm font-bold leading-6 text-white/75">
                  Precision manufacturing supported by certified quality
                  systems and multi-stage inspection.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom capability strip */}

          <div className="relative z-10 border-t border-white/10 bg-[#0c2c51]/70 px-7 py-5 backdrop-blur-md md:px-10 lg:px-16">
            <div className="flex flex-wrap items-center justify-evenly gap-x-8 gap-y-4 text-center">
              <div className="inline-flex items-center justify-center gap-3">
                <Gauge size={18} className="text-primary-red" />

                <span className="text-xs font-semibold tracking-wide text-white/70">
                  High-Capacity Production
                </span>
              </div>

              <div className="inline-flex items-center justify-center gap-3">
                <ShieldCheck size={18} className="text-primary-red" />

                <span className="text-xs font-semibold tracking-wide text-white/70">
                  Strict Quality Control
                </span>
              </div>

              <div className="inline-flex items-center justify-center gap-3">
                <Truck size={18} className="text-primary-red" />

                <span className="text-xs font-semibold tracking-wide text-white/70">
                  Reliable Pan-India Delivery
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}