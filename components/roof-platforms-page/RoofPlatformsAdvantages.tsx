"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Frame,
  PanelsTopLeft,
  Route,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: PanelsTopLeft,
    title: "Dedicated Equipment Support",
    description:
      "Structural framing can support approved rooftop equipment independently from the roof-sheet surface.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Organized Maintenance Access",
    description:
      "Working areas and access routes can be coordinated around equipment inspection, servicing and maintenance requirements.",
  },
  {
    number: "03",
    icon: Route,
    title: "Clear Service Movement",
    description:
      "Walkways, platforms and access points help organize movement around rooftop equipment and service zones.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Coordinated Edge Protection",
    description:
      "Guardrails, mid rails, toe boards and access gates can be incorporated according to the approved platform arrangement.",
  },
  {
    number: "05",
    icon: Frame,
    title: "Integrated Structural Framing",
    description:
      "Columns, beams, bracing and connections work together as one coordinated platform-support system.",
  },
];

const coordinationItems = [
  "Equipment positions",
  "Service clearances",
  "Maintenance walkways",
  "Access staircase or ladder",
  "Guardrails and toe boards",
  "Structural support points",
];

export default function RoofPlatformsAdvantages() {
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
            <ShieldCheck size={15} />
            Roof Platform Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Why Engineered Roof Platforms Are Important
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Roof platforms create coordinated structural support and organized
            access around rooftop equipment according to approved engineering
            and operational requirements.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
          {/* Left feature panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <PanelsTopLeft size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Coordinated Rooftop Infrastructure
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Equipment Support and Access Planned Together
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                A roof platform must coordinate structural support, equipment
                layout, maintenance clearances, access routes and perimeter
                protection as one complete system.
              </p>

              <div className="mt-9 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                {coordinationItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 py-4"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-4 border-t border-white/15 pt-7">
                <Frame
                  size={24}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="text-sm font-black leading-7 text-white/80">
                  Final framing and support conditions must be coordinated with
                  the approved roof structure and equipment arrangement.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right open rows */}

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group grid gap-5 py-8 sm:grid-cols-[64px_1fr_auto] sm:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Platform Advantage {item.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-[50px] font-black leading-none text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Engineering note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Designed Around Approved Rooftop Requirements
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Final platform dimensions, member sizes, equipment supports,
                access systems and perimeter-protection details are developed
                according to approved drawings, structural engineering and site
                conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}