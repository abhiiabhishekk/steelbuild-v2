"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import TimelineItem from "./TimelineItem";

import { companyTimeline } from "@/data/timeline";

export default function CompanyTimeline() {
  return (
    <section
      id="our-journey"
      aria-labelledby="company-timeline-heading"
      className="relative scroll-mt-32 overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.06),transparent_40%)]" />

      {/* Subtle Engineering Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <Container>
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10 mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            Our Journey
          </span>

          <h2
            id="company-timeline-heading"
            className="mt-6 text-4xl font-black leading-[1.06] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]"
          >
            Building Industrial
            <span className="block">
              Excellence Year After Year.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg font-medium leading-8 text-gray-600">
            Since our establishment, Steelbuild Infra Projects Limited has
            expanded its engineering, Pre-Engineered Building manufacturing,
            structural steel fabrication and project execution capabilities to
            support increasingly complex industrial building requirements
            across India.
          </p>

          <p className="mx-auto mt-4 max-w-[900px] text-base leading-7 text-gray-500">
  Each milestone reflects continued investment in manufacturing capacity,
  engineering capability, quality systems, people and dependable delivery of
  warehouses, factory buildings, industrial sheds and structural steel projects.
</p>
        </motion.div>

        {/* =====================================================
            TIMELINE
        ====================================================== */}

        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Desktop Vertical Timeline Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-primary-blue/15 lg:block" />

          {/* Timeline Items */}

          <div className="space-y-5 lg:space-y-6">
            {companyTimeline.map((item, index) => (
              <TimelineItem
                key={`${item.year}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}