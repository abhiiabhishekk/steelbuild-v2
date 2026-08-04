"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

const highlights = [
  {
    icon: Building2,
    title: "Industrial Projects",
    description:
      "Work on large-scale Pre-Engineered Building and industrial infrastructure projects.",
  },
  {
    icon: UsersRound,
    title: "Professional Growth",
    description:
      "Collaborate with experienced engineering, manufacturing and project teams.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Career Opportunities",
    description:
      "Explore opportunities across engineering, projects, sales, manufacturing and support functions.",
  },
];

export default function JoinTeamCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_35px_100px_rgba(27,63,104,0.24)] md:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/25 blur-[100px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white backdrop-blur-md">
                <BriefcaseBusiness
                  size={15}
                  className="text-primary-red"
                />
                Build Your Career
              </span>

              <h2 className="mt-7 text-4xl font-black leading-[1.04] tracking-[-0.045em] text-white md:text-5xl lg:text-[54px]">
                Grow With a Team Building India&apos;s Industrial Future
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">
                Join Steelbuild Infra Projects Limited and contribute to
                engineering, manufacturing and delivering high-performance
                Pre-Engineered Building solutions across India.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/careers#open-positions"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
                >
                  Explore Current Openings

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="/careers#submit-resume"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
                >
                  Submit Your Resume

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.07,
                    }}
                    className="group rounded-[24px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/40 hover:bg-white/[0.12]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-white">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm font-medium leading-7 text-white/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}