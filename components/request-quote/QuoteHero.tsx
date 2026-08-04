"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock3,
  Factory,
  Gauge,
  Headphones,
  MapPin,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

const benefits = [
  {
    icon: Building2,
    number: "01",
    title: "Customized Engineering",
    description:
      "Project-specific PEB solutions developed around dimensions, workflow, loading and future expansion requirements.",
  },
  {
    icon: Headphones,
    number: "02",
    title: "Expert Consultation",
    description:
      "Direct technical guidance from experienced engineering and project teams before quotation preparation.",
  },
  {
    icon: Clock3,
    number: "03",
    title: "Focused Response",
    description:
      "Your submitted requirement is reviewed systematically for timely technical discussion and quotation planning.",
  },
  {
    icon: MapPin,
    number: "04",
    title: "Pan-India Execution",
    description:
      "Integrated engineering, manufacturing, dispatch and project execution support across India.",
  },
];

const stats = [
  {
    value: "700+",
    label: "Completed Projects",
    icon: Building2,
  },
  {
    value: "500+",
    label: "Happy Clients",
    icon: UsersRound,
  },
  {
    value: "50,000 MT",
    label: "Annual Capacity",
    icon: Factory,
  },
  {
    value: "Pan India",
    label: "Project Execution",
    icon: MapPin,
  },
];

export default function QuoteHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white pb-20 pt-28 lg:pb-28 lg:pt-36">
      {/* Background grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      {/* Background glow */}

      <div className="pointer-events-none absolute -left-40 top-12 h-[420px] w-[420px] rounded-full bg-primary-red/[0.055] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[460px] w-[460px] rounded-full bg-primary-blue/[0.085] blur-3xl" />

      <Container>
        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative z-10 flex items-center gap-3 text-sm font-semibold text-gray-500"
        >
          <Link
            href="/"
            className="transition-colors duration-300 hover:text-primary-red"
          >
            Home
          </Link>

          <span className="text-gray-300">/</span>

          <span className="font-black text-primary-blue">
            Request a Quote
          </span>
        </motion.div>

        {/* Main content */}

        <div className="relative z-10 mt-12 grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
          {/* Left content */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
              <BadgeCheck size={16} />
              Request a Quote
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[74px]">
              Let&apos;s Build Your
              <span className="block">
                Next Industrial Project
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-gray-600">
              Share your project requirements with Steelbuild and receive
              engineering guidance, a customized Pre-Engineered Building
              solution and a quotation aligned with your project scope.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                href="#quote-form"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:shadow-[0_24px_55px_rgba(27,63,104,0.2)]"
              >
                Submit Requirement

                <ArrowDown
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </Link>

              <Link
                href="tel:+918130199427"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_16px_42px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
              >
                Call Our Experts

                <Headphones
                  size={20}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>

            {/* Trust note */}

            <div className="mt-8 flex max-w-xl items-start gap-3 rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_14px_40px_rgba(27,63,104,0.06)]">
              <ShieldCheck
                size={23}
                className="mt-0.5 shrink-0 text-primary-red"
              />

              <p className="text-sm font-bold leading-7 text-gray-600">
                Your requirement will be reviewed by our engineering and
                commercial teams before the quotation process begins.
              </p>
            </div>
          </motion.div>

          {/* Right capability panel */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-7 shadow-[0_38px_100px_rgba(27,63,104,0.22)] md:p-9 lg:p-10"
          >
            {/* Panel background */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#225286_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

            <div className="relative z-10">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                What You Can Expect
              </p>

              <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Clear Technical Guidance Before Your Project Begins
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/70">
                Our quotation process begins with understanding the project
                scope, dimensions, building usage, location and technical
                requirements.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.45,
                        delay: 0.18 + index * 0.06,
                      }}
                      className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.08] p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/45 hover:bg-white/[0.12]"
                    >
                      <span className="absolute right-4 top-3 text-3xl font-black leading-none text-white/[0.05]">
                        {item.number}
                      </span>

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                        <Icon size={23} />
                      </div>

                      <h3 className="mt-5 text-lg font-black leading-tight text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium leading-7 text-white/60">
                        {item.description}
                      </p>
                    </motion.article>
                  );
                })}
              </div>

              <div className="mt-6 flex items-start gap-3 rounded-[22px] border border-white/10 bg-[#0b2b50]/70 px-5 py-4">
                <Gauge
                  size={22}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-bold leading-7 text-white/75">
                  Better project information helps our team provide more
                  relevant technical recommendations and quotation guidance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics strip */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.28 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_24px_75px_rgba(27,63,104,0.1)] sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className={`group flex min-h-[122px] items-center gap-4 px-6 py-6 transition-colors duration-300 hover:bg-[#f8fafc] ${
                  index < stats.length - 1
                    ? "border-b border-gray-200 sm:border-b-0 sm:border-r"
                    : ""
                } ${
                  index === 1
                    ? "sm:border-r-0 lg:border-r"
                    : ""
                }`}
              >
                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={24} />
                </div>

                <div>
                  <p className="whitespace-nowrap text-2xl font-black tracking-[-0.04em] text-primary-blue md:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm font-bold text-gray-500">
                    {stat.label}
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