"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Fence,
  Footprints,
  Frame,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Continuous Edge Protection",
    description:
      "Guardrail systems create a coordinated protection line around approved elevated edges, platforms, walkways and landings.",
  },
  {
    number: "02",
    icon: Footprints,
    title: "Clear Access Coordination",
    description:
      "Railing layouts are developed around stairs, gates, platform transitions and movement routes.",
  },
  {
    number: "03",
    icon: Frame,
    title: "Integrated Structural Support",
    description:
      "Posts, rails, brackets, base plates and connections are coordinated with the supporting steel structure.",
  },
  {
    number: "04",
    icon: Fence,
    title: "Flexible Railing Arrangement",
    description:
      "Top rails, mid rails, posts and toe boards can be configured according to the approved platform geometry.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Suitable for Multiple Access Systems",
    description:
      "Handrails and guardrails can be integrated with staircases, catwalks, mezzanines and roof platforms.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Project-Specific Development",
    description:
      "Final railing dimensions, post positions and connection details are developed according to approved project information.",
  },
];

const coordinationItems = [
  "Platform geometry",
  "Exposed edge locations",
  "Stair openings",
  "Access gates",
  "Post spacing",
  "Rail configuration",
  "Toe-board requirements",
  "Support connections",
];

export default function HandrailsGuardrailsAdvantages() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Fence size={15} />
            Handrails & Guardrails Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Why Engineered Railing Systems Matter
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Industrial handrails and guardrails coordinate perimeter
            protection, movement routes, access openings and structural support
            around elevated working areas.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[1.12fr_0.88fr] xl:items-start">
          {/* Left advantage rows */}

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {advantages.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group grid gap-5 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Railing Benefit {item.number}
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

          {/* Right coordination panel */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:sticky lg:top-28 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <ShieldCheck size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Railing Coordination
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Edge Protection Must Follow the Complete Access Layout
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                Railing systems must align with platform edges, staircase
                openings, gates, walkways, landings and structural support
                points.
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
                  Posts and connections must be coordinated with the approved
                  supporting steelwork and platform framing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-[#f7f9fc] px-7 py-6 md:px-9"
        >
          <ShieldCheck
            size={24}
            className="mt-0.5 shrink-0 text-primary-red"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            Final rail heights, post spacing, member arrangement, gate
            locations, toe boards and support connections are determined
            according to approved drawings, engineering inputs and site
            conditions.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}