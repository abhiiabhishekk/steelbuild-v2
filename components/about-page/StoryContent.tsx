"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import StoryHighlights from "./StoryHighlights";

export default function StoryContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      {/* Small Heading */}

      <p className="text-sm font-black uppercase tracking-[0.32em] text-primary-red">
        Our Journey
      </p>

      {/* Main Heading */}

      <h2 className="mt-5 max-w-[680px] text-4xl font-black leading-[1.08] tracking-[-0.04em] text-primary-blue lg:text-[52px]">
        Building India&apos;s
        <span className="block">
          Industrial Future with Steel.
        </span>
      </h2>

      {/* Primary Story Content */}

      <p className="mt-8 max-w-[720px] text-lg font-medium leading-8 text-gray-600">
        Steelbuild Infra Projects Limited delivers engineered
        Pre-Engineered Buildings, structural steel systems and industrial
        building solutions for warehouses, factories, manufacturing
        facilities, industrial sheds and other large-scale infrastructure
        requirements across India.
      </p>

      <p className="mt-6 max-w-[720px] text-lg font-medium leading-8 text-gray-600">
        Since our establishment, we have focused on integrating PEB
        engineering, structural design, precision steel fabrication,
        manufacturing and coordinated project execution to help clients
        develop efficient, durable and scalable industrial buildings.
      </p>

      <p className="mt-6 max-w-[720px] text-lg font-medium leading-8 text-gray-600">
        From long-span warehouse buildings and factory structures to heavy
        steel systems, mezzanine solutions, roofing and cladding, our teams
        coordinate every stage around engineering quality, manufacturing
        accuracy, project requirements and dependable execution.
      </p>

      {/* Highlights */}

      <StoryHighlights />

      {/* CTA */}

<div className="mt-10 flex flex-wrap gap-4">
  <Link
    href="/projects"
    className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl bg-primary-red px-8 py-4 font-bold !text-white shadow-xl shadow-primary-red/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#a50f16]"
  >
    Explore Our Projects

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>

  <Link
    href="/manufacturing"
    className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-xl border border-primary-blue/15 bg-white px-8 py-4 font-bold !text-primary-blue shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
  >
    Manufacturing Capabilities

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>
    </motion.div>
  );
}