"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  HandHeart,
  Leaf,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function CSRCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 isolate overflow-hidden rounded-[40px] bg-primary-blue p-8 shadow-[0_38px_105px_rgba(27,63,104,0.24)] md:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/25 blur-[100px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white backdrop-blur-md">
                <HandHeart
                  size={15}
                  className="text-primary-red"
                />
                Responsible Growth
              </span>

              <h2 className="mt-7 max-w-4xl text-4xl font-black leading-[1.03] tracking-[-0.045em] text-white md:text-5xl lg:text-[56px]">
                Build Responsibly.
                <span className="block">
                  Grow Sustainably.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">
                Steelbuild combines engineering capability, disciplined
                manufacturing, responsible operations and people-focused
                values to create long-term industrial impact.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/projects"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
                >
                  Explore Our Projects

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
                >
                  Contact Our Team

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[26px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                    <Leaf size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">
                      Sustainable Operations
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-7 text-white/60">
                      Responsible resource use, process efficiency and
                      continuous operational improvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                    <Building2 size={26} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">
                      Responsible Industrial Growth
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-7 text-white/60">
                      Engineering, manufacturing and project delivery aligned
                      with accountability, quality and long-term value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}