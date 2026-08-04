"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  ClipboardList,
  Factory,
  Ruler,
  ShieldCheck,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const projectRequirements = [
  "Building width and length",
  "Required clear height",
  "Industrial usage",
  "Project location",
  "Access requirements",
  "Expected timeline",
];

export default function IndustrialShedsCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 isolate overflow-hidden rounded-[42px] bg-primary-blue shadow-[0_40px_110px_rgba(27,63,104,0.24)]"
        >
          {/* Panel background */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,#153b68_0%,#23578d_46%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[100px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-[#6ba3df]/20 blur-[120px]" />

          <div className="relative z-10 grid lg:grid-cols-[1.12fr_0.88fr]">
            {/* Left content */}

            <div className="px-8 py-12 md:px-12 md:py-16 lg:px-16 lg:py-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white backdrop-blur-md">
                <Warehouse
                  size={16}
                  className="text-primary-red"
                />
                Start Your Industrial Shed Project
              </span>

              <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-5xl lg:text-[58px]">
                Planning an Industrial Shed
                <span className="block">
                  Around Your Operations?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70 md:text-lg">
                Share your building dimensions, industrial usage, clear
                height, access, ventilation and future expansion requirements
                with our team for a coordinated project discussion.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/request-a-quote"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
                >
                  Request a Quote

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/45 hover:bg-white/20"
                >
                  Contact Our Team

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>

              {/* Wide span visual strip */}

              <div className="mt-12 overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
                <div className="grid gap-5 md:grid-cols-3">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                      <Ruler size={22} />
                    </div>

                    <div>
                      <p className="font-black text-white">
                        Layout Planning
                      </p>

                      <p className="mt-1 text-xs font-medium leading-6 text-white/60">
                        Width, height, bays and access
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                      <Factory size={22} />
                    </div>

                    <div>
                      <p className="font-black text-white">
                        Industrial Integration
                      </p>

                      <p className="mt-1 text-xs font-medium leading-6 text-white/60">
                        Equipment, workflow and utilities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                      <ShieldCheck size={22} />
                    </div>

                    <div>
                      <p className="font-black text-white">
                        Coordinated Delivery
                      </p>

                      <p className="mt-1 text-xs font-medium leading-6 text-white/60">
                        Engineering through erection
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right requirement panel */}

            <div className="border-t border-white/10 bg-[#0d2f55]/55 px-8 py-12 backdrop-blur-md md:px-10 lg:border-l lg:border-t-0 lg:px-12 lg:py-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <ClipboardList size={29} />
              </div>

              <p className="mt-7 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Project Information
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white">
                Details That Help Us Understand Your Requirement
              </h3>

              <p className="mt-5 text-sm font-medium leading-7 text-white/65">
                Basic project information helps our team understand the shed
                configuration, operational priorities and expected delivery
                requirements.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {projectRequirements.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[66px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4"
                  >
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 rounded-[24px] border border-primary-red/25 bg-[#0a294a]/80 p-5">
                <Building2
                  size={23}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Our team coordinates structural planning, fabrication,
                  roofing, cladding, dispatch and site execution according to
                  the approved project requirements.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}