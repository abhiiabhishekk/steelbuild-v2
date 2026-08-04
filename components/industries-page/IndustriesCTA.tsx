"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Factory,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const sectors = [
  "Warehousing",
  "Manufacturing",
  "Logistics",
  "Food Processing",
  "Pharmaceutical",
  "Automobile",
];

const highlights = [
  {
    icon: Factory,
    title: "Engineering",
    text: "Industry-specific structural design",
  },
  {
    icon: Warehouse,
    title: "Manufacturing",
    text: "Controlled fabrication processes",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    text: "Multi-stage QA/QC inspection",
  },
  {
    icon: Truck,
    title: "Execution",
    text: "Reliable nationwide delivery",
  },
];

export default function IndustriesCTA() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-8 lg:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue shadow-[0_40px_100px_rgba(27,63,104,0.22)]"
        >
          {/* Background */}

          <div className="absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_45%,#113158_100%)]" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:62px_62px]" />

          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary-red/20 blur-[110px]" />

          <div className="absolute -right-24 -bottom-24 h-[420px] w-[420px] rounded-full bg-[#6ba3df]/20 blur-[120px]" />

          <div className="relative z-10 grid gap-14 px-8 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-20">
            {/* Left */}

            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                <Building2
                  size={16}
                  className="text-primary-red"
                />

                <span className="text-[11px] font-black uppercase tracking-[0.24em] text-white">
                  Let's Build Together
                </span>
              </div>

              <h2 className="mt-7 max-w-3xl text-4xl font-black leading-tight tracking-[-0.045em] text-white md:text-5xl lg:text-[58px]">
                Planning Your Next Industrial Building?
              </h2>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Whether you're developing a warehouse, factory, logistics
                center, food processing unit or any specialized industrial
                facility, Steelbuild delivers engineered PEB solutions
                tailored to your operational requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-black text-white backdrop-blur-md"
                  >
                    {sector}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_40px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
                >
                  Discuss Your Project

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
                >
                  View Our Projects

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>

            {/* Right */}

            <div className="rounded-[32px] border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-primary-red">
                Why Steelbuild
              </p>

              <h3 className="mt-4 text-3xl font-black text-white">
                One Partner From Engineering to Delivery
              </h3>

              <div className="mt-8 space-y-5">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/10 p-5"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-red text-white">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h4 className="font-black text-white">
                          {item.title}
                        </h4>

                        <p className="mt-1 text-sm leading-6 text-white/70">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-[#0d2f55]/70 px-5 py-4">
                <BadgeCheck
                  size={22}
                  className="mt-1 shrink-0 text-primary-red"
                />

                <p className="text-sm font-bold leading-6 text-white/75">
                  Trusted engineering, advanced manufacturing and reliable
                  project execution across diverse industries throughout India.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}