"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Expand,
  Factory,
  MoveHorizontal,
  ShieldCheck,
  TrendingUp,
  Warehouse,
  Wind,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: MoveHorizontal,
    title: "Efficient Clear-Span Space",
    description:
      "Wide unobstructed internal areas support machinery placement, material movement, assembly operations and flexible production layouts.",
  },
  {
    number: "02",
    icon: Clock3,
    title: "Faster Project Execution",
    description:
      "Factory-manufactured structural components reduce site fabrication and support systematic, time-efficient building erection.",
  },
  {
    number: "03",
    icon: Expand,
    title: "Flexible Building Configuration",
    description:
      "Bay spacing, clear height, access openings and internal layouts can be coordinated around specific operational requirements.",
  },
  {
    number: "04",
    icon: Wind,
    title: "Ventilation & Daylight Planning",
    description:
      "Roof ventilation, wall louvers, translucent panels and ridge systems can improve natural airflow and internal daylight.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Reliable Weather Protection",
    description:
      "Coordinated roofing, cladding, flashing and drainage systems help protect industrial operations from external weather conditions.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Future Expansion Capability",
    description:
      "Industrial sheds can be planned for future length extensions, additional bays, new access points and changing production needs.",
  },
];

const planningFactors = [
  "Building width and length",
  "Required clear height",
  "Bay spacing and column grid",
  "Equipment and production layout",
  "Vehicle and material access",
  "Ventilation and daylight needs",
  "Roof drainage requirements",
  "Future building expansion",
];

export default function IndustrialShedsAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Warehouse size={15} />
            Operational Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Industrial Sheds Planned for Space, Speed and Productivity
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            A well-planned industrial shed supports efficient operations by
            coordinating structural space, internal movement, environmental
            comfort and future business requirements.
          </p>
        </motion.div>

        {/* Main asymmetric layout */}

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.84fr_1.16fr] xl:items-stretch">
          {/* Left planning panel */}

          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <Factory size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Planning Before Construction
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Every Shed Begins With the Operational Layout
              </h3>

              <p className="mt-5 text-base font-medium leading-8 text-white/70">
                Industrial shed planning starts with understanding how people,
                materials, machinery, vehicles and services will move through
                the facility.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                {planningFactors.map((factor) => (
                  <div
                    key={factor}
                    className="flex min-h-[64px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                  >
                    <BadgeCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/82">
                      {factor}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 rounded-[24px] border border-primary-red/25 bg-[#102f55] p-5">
                <MoveHorizontal
                  size={23}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  The structural grid is coordinated to support efficient
                  workflow without creating unnecessary internal obstructions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right advantage rows */}

          <div className="grid gap-4">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.055,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white px-6 py-6 shadow-[0_16px_48px_rgba(27,63,104,0.065)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_26px_75px_rgba(27,63,104,0.13)] md:px-7"
                >
                  <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-primary-red transition-transform duration-500 group-hover:scale-y-100" />

                  <span className="pointer-events-none absolute right-5 top-3 text-[54px] font-black leading-none text-primary-blue/[0.04]">
                    {item.number}
                  </span>

                  <div className="relative z-10 grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={25} />
                    </div>

                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                        Shed Advantage {item.number}
                      </p>

                      <h3 className="mt-2 text-xl font-black leading-tight text-primary-blue md:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                        {item.description}
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-[#f8fafc] text-primary-blue transition-all duration-300 group-hover:border-primary-red group-hover:bg-primary-red group-hover:text-white sm:flex">
                      <ArrowRight
                        size={20}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom operational strip */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-[#f8fafc] shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          <div className="flex items-center gap-4 border-b border-gray-200 px-7 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <MoveHorizontal size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Clear Internal Movement
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Planned for people, vehicles and materials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-b border-gray-200 px-7 py-6 md:border-b-0 md:border-r">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <Clock3 size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Systematic Construction
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Factory production and planned erection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 px-7 py-6">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <TrendingUp size={24} />
            </div>

            <div>
              <p className="font-black text-primary-blue">
                Expansion-Ready Planning
              </p>

              <p className="mt-1 text-xs font-semibold text-gray-500">
                Prepared for future operational growth
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}