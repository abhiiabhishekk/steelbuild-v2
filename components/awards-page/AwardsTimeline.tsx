"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CalendarDays,
  Medal,
  Trophy,
} from "lucide-react";

import Container from "@/components/layout/Container";

const milestones = [
  {
    year: "2020",
    icon: Building2,
    title: "Company Established",
    description:
      "Steelbuild Infra Projects began its journey with a vision to deliver world-class Pre-Engineered Building solutions.",
  },
  {
    year: "2023",
    icon: Medal,
    title: "Industry Recognition",
    description:
      "Projects and engineering capabilities received appreciation across multiple industrial sectors.",
  },
  {
    year: "2024",
    icon: Trophy,
    title: "SSMB Magazine Feature",
    description:
      "Steelbuild's achievements and industrial projects were featured in SSMB Magazine.",
  },
  {
    year: "2025+",
    icon: CalendarDays,
    title: "Continued Growth",
    description:
      "Expanded manufacturing capacity, project portfolio and nationwide industrial presence.",
  },
];

export default function AwardsTimeline() {
  return (
    <section
      id="awards-timeline"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32 scroll-mt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            Milestones
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-primary-blue md:text-5xl">
            Our Journey of Recognition
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every milestone reflects our commitment to engineering,
            manufacturing excellence and long-term customer trust.
          </p>
        </motion.div>

        <div className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-[2px] bg-primary-red/20 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  <div className="absolute left-6 top-8 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary-red text-white shadow-lg md:left-1/2">
                    <Icon size={22} />
                  </div>

                  <div className="ml-16 rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_20px_60px_rgba(27,63,104,0.08)] md:ml-0 md:w-[44%]">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-primary-red">
                      {item.year}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}