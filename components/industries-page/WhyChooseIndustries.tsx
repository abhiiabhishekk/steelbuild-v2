"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  Factory,
  Gauge,
  Layers3,
  ShieldCheck,
  Snowflake,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";
import CountUp from "react-countup";

const advantages = [
  {
    icon: Gauge,
    number: "01",
    title: "Sector-Specific Engineering",
    description:
      "Every building is engineered according to industry workflow, structural loading, movement planning and operational requirements.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Heavy Equipment Compatible",
    description:
      "Structures can be designed to support cranes, mezzanines, production machinery and specialized industrial equipment.",
  },
  {
    icon: Snowflake,
    number: "03",
    title: "Advanced Insulation Systems",
    description:
      "Roofing, cladding, ventilation and insulation systems are selected according to environmental and operational requirements.",
  },
  {
    icon: Layers3,
    number: "04",
    title: "Expansion-Ready Buildings",
    description:
      "Building systems can be planned for future capacity expansion with reduced disruption to existing operations.",
  },
  {
    icon: ShieldCheck,
    number: "05",
    title: "Quality-Assured Manufacturing",
    description:
      "Structural components are manufactured through controlled fabrication, inspection and certified quality-management processes.",
  },
  {
    icon: Clock3,
    number: "06",
    title: "Faster Project Delivery",
    description:
      "Optimized engineering, factory-controlled production and organized site execution help reduce overall project timelines.",
  },
];

const sectorList = [
  "Warehousing",
  "Manufacturing",
  "Logistics",
  "Food Processing",
  "Pharmaceutical",
  "Automobile",
];

export default function WhyChooseIndustries() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          {/* Left panel */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[36px] bg-primary-blue p-8 shadow-[0_30px_90px_rgba(27,63,104,0.2)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10 flex h-full flex-col">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.26em] text-white backdrop-blur-md">
                <Factory size={15} className="text-primary-red" />
                Why Choose Steelbuild
              </span>

              <h2 className="mt-7 text-4xl font-black leading-[1.04] tracking-[-0.045em] text-white md:text-5xl lg:text-[52px]">
                Engineering Advantages Built Into Every Project
              </h2>

              <p className="mt-6 text-base font-medium leading-8 text-white/75">
                Every Steelbuild Pre-Engineered Building is developed around
                operational workflow, loading requirements, future expansion
                and long-term performance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {sectorList.map((sector) => (
                  <div
                    key={sector}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-4 backdrop-blur-md"
                  >
                    <BadgeCheck
                      size={18}
                      className="shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-5 text-white/85">
                      {sector}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stat panel */}

              <div className="mt-8 rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl md:p-7">
                <p className="text-xs font-black uppercase tracking-[0.26em] text-primary-red">
                  Proven Execution Capability
                </p>

                <div className="mt-5 flex items-end gap-5">
                  <div className="flex min-w-[150px] items-end">
  <p className="whitespace-nowrap text-5xl font-black leading-none tracking-[-0.05em] text-white [font-variant-numeric:tabular-nums] md:text-6xl">
    <span className="inline-block min-w-[3ch] text-right">
      <CountUp
        end={700}
        duration={2.2}
        enableScrollSpy
        scrollSpyOnce
        useEasing
      />
    </span>
    <span>+</span>
  </p>
</div>

                  <p className="pb-1 text-sm font-bold leading-6 text-white/65">
                    Completed projects across diverse industrial sectors
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-sm font-bold leading-7 text-white/75">
                    Integrated engineering, manufacturing and project
                    execution support from concept development through final
                    delivery.
                  </p>
                </div>
              </div>

              <a
                href="/contact"
                className="group mt-8 inline-flex min-h-[58px] w-fit items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white shadow-[0_18px_40px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
              >
                Discuss Your Industry Requirement

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
          </motion.div>

          {/* Right content */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-red">
                Engineering Performance
              </p>

              <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl lg:text-[48px]">
                Solutions Designed for Efficiency, Reliability and Growth
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-gray-600">
                Steelbuild combines structural engineering, controlled
                manufacturing and practical project execution to deliver
                building systems aligned with each sector&apos;s operational
                requirements.
              </p>
            </motion.div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {advantages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group relative overflow-hidden rounded-[26px] border border-gray-200 bg-[#f8fafc] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:bg-white hover:shadow-[0_25px_70px_rgba(27,63,104,0.11)]"
                  >
                    <div className="absolute right-5 top-4 text-[42px] font-black leading-none text-primary-blue/[0.045]">
                      {item.number}
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Advantage {item.number}
                    </p>

                    <h4 className="mt-3 text-xl font-black leading-tight text-primary-blue">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom strip */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.08)] sm:grid-cols-3"
        >
          <div className="flex items-center gap-4 border-b border-gray-200 px-6 py-6 sm:border-b-0 sm:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <Factory size={23} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Integrated Manufacturing
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Controlled fabrication quality
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-200 px-6 py-6 sm:border-b-0 sm:border-r">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <ShieldCheck size={23} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Multi-Stage QA/QC
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Inspection-led execution
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-6 py-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <Clock3 size={23} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Reliable Delivery
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Organized project coordination
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}