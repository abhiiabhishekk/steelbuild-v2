"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Factory,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const cultureHighlights = [
  {
    icon: UsersRound,
    number: "01",
    title: "Collaborative Teams",
    description:
      "Work across engineering, detailing, production, quality, projects, sales, marketing and corporate functions.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Learning by Doing",
    description:
      "Develop practical expertise through real project responsibilities, technical discussions and cross-functional exposure.",
  },
  {
    icon: Target,
    number: "03",
    title: "Ownership & Accountability",
    description:
      "Take responsibility for meaningful tasks and contribute directly to project quality, timelines and client satisfaction.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Safety & Quality Culture",
    description:
      "Work within an environment that values disciplined processes, quality systems, safety practices and continuous improvement.",
  },
];

const workAreas = [
  "Design & Engineering",
  "PEB Detailing",
  "Manufacturing",
  "Quality Assurance",
  "Project Execution",
  "Sales & Marketing",
  "Commercial Operations",
  "Corporate Functions",
];

export default function LifeAtSteelbuild() {
  return (
    <section
    id="life-at-steelbuild"
    className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
>
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <Sparkles size={15} />
            Life at Steelbuild
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Grow Through Real Work, Responsibility and Teamwork
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Life at Steelbuild is shaped by practical learning, project
            ownership, cross-functional collaboration and a shared commitment
            to engineering and execution excellence.
          </p>
        </motion.div>

        {/* Main content */}

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          {/* Left feature panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
                <HeartHandshake size={30} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Our People Experience
              </p>

              <h3 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                A Professional Environment Where Contribution Matters
              </h3>

              <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-white/70">
                Team members are encouraged to communicate clearly, solve
                problems responsibly, learn from experienced professionals and
                contribute ideas that improve project and organizational
                performance.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {workAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                  >
                    <BadgeCheck
                      size={18}
                      className="shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-5 text-white/85">
                      {area}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 rounded-[24px] border border-white/10 bg-[#0b2b50]/70 p-5">
                <Factory
                  size={24}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-bold leading-7 text-white/72">
                  Exposure to engineering offices, manufacturing facilities and
                  live project execution helps employees understand the complete
                  lifecycle of a Pre-Engineered Building project.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right culture cards */}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {cultureHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_16px_50px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
                >
                  <div className="absolute right-5 top-4 text-[46px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Culture {item.number}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom strip */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_60px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          <div className="flex items-center gap-4 border-b border-gray-200 px-7 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <BriefcaseBusiness size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Real Responsibilities
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Practical contribution from day one
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-200 px-7 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <Wrench size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Functional Exposure
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Engineering to project delivery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-7 py-6">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <HeartHandshake size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Team-Based Growth
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Learn through collaboration
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}