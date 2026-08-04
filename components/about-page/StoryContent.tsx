"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import StoryHighlights from "./StoryHighlights";

export default function StoryContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Small Heading */}

      <p className="text-sm font-black uppercase tracking-[0.32em] text-primary-red">
        Our Journey
      </p>

      {/* Main Heading */}

      <h2 className="mt-5 text-4xl font-black leading-[1.08] tracking-[-0.04em] text-primary-blue lg:text-[52px]">
        Engineering India's
<span className="block">Industrial Future.</span>
      </h2>

      {/* Paragraph */}

      <p className="mt-8 text-lg leading-8 text-gray-600">
        Steelbuild Infra Projects Limited is one of India's rapidly growing
        Pre-Engineered Building (PEB) companies, delivering premium industrial
        infrastructure solutions with unmatched engineering precision,
        manufacturing excellence and customer-focused execution.
      </p>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        From modern warehouses and manufacturing facilities to complex
        industrial structures, our experienced team transforms ideas into
        world-class steel buildings that combine strength, speed,
        sustainability and long-term value for businesses across India.
      </p>

      {/* Highlights */}

      <StoryHighlights />

      {/* Button */}

      <div className="mt-10">
        <Link
          href="/projects"
          className="inline-flex items-center rounded-xl bg-primary-red px-8 py-4 font-bold !text-white shadow-xl shadow-primary-red/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#a50f16]"
        >
          View Our Projects →
        </Link>
      </div>
    </motion.div>
  );
}