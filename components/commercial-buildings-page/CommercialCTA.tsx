"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  FileText,
  Layers3,
  Ruler,
} from "lucide-react";

import Container from "@/components/layout/Container";

const projectInputs = [
  {
    icon: Ruler,
    title: "Building Requirements",
    text: "Dimensions, number of levels and project location",
  },
  {
    icon: Layers3,
    title: "Functional Layout",
    text: "Commercial usage, circulation and access requirements",
  },
  {
    icon: FileText,
    title: "Approved Project Inputs",
    text: "Architectural layout, scope and expected timeline",
  },
];

export default function CommercialCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 isolate overflow-hidden rounded-[42px] bg-primary-blue shadow-[0_40px_110px_rgba(27,63,104,0.24)]"
        >
          {/* Panel background */}

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-96 w-96 rounded-full bg-primary-red/20 blur-[110px]" />

          <div className="relative z-10 grid gap-12 px-8 py-12 md:px-12 md:py-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:px-16 lg:py-20">
            {/* Left content */}

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white backdrop-blur-md">
                <Building2
                  size={16}
                  className="text-primary-red"
                />
                Start Your Commercial Project
              </span>

              <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-5xl lg:text-[58px]">
                Planning a Commercial
                <span className="block">
                  Steel Building Project?
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70 md:text-lg">
                Share your building dimensions, commercial usage, floor
                requirements, approved layout and project location with our
                team for a coordinated technical discussion.
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
            </div>

            {/* Right project inputs */}

            <div className="rounded-[32px] border border-white/12 bg-white/[0.08] p-7 backdrop-blur-md md:p-8">
              <p className="text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                Helpful Project Information
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white">
                Share the Basics to Begin the Discussion
              </h3>

              <div className="mt-8 space-y-5">
                {projectInputs.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                    >
                      <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                        <Icon size={23} />
                      </div>

                      <div>
                        <h4 className="text-lg font-black text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm font-medium leading-7 text-white/60">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-[22px] bg-[#102f55] p-5">
                <BadgeCheck
                  size={21}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Final structural planning follows approved architectural
                  inputs, project scope and site conditions.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}