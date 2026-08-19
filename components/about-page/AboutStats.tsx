"use client";

import { motion } from "framer-motion";

import {
  Building2,
  Factory,
  IndianRupee,
  MapPinned,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/layout/Container";
import StatCard from "./StatCard";

const stats = [
  {
    icon: Building2,
    value: 700,
    suffix: "+",
    label: "Projects Delivered",
    description:
      "Successfully delivered Pre-Engineered Buildings, warehouses, factories and structural steel projects across India.",
  },
  {
  icon: TrendingUp,
  value: 15,
  suffix: "+",
  label: "Years of Industry Experience",
  description:
    "Backed by experienced professionals across PEB engineering, manufacturing and industrial project execution.",
},
  {
    icon: Factory,
    value: 50000,
    suffix: " MT",
    label: "Annual Manufacturing Capacity",
    description:
      "Installed annual manufacturing capacity supporting large-scale PEB and structural steel project requirements.",
  },
  {
    icon: IndianRupee,
    value: 340,
    prefix: "₹",
    suffix: " Cr",
    label: "Annual Turnover",
    description:
      "A strong business milestone reflecting continued growth, manufacturing capability and project execution strength.",
  },
  {
  icon: ShieldCheck,
  value: 0,
  customValue: "ISO 9001:2015",
  label: "Certified Company",
  description:
    "Quality management processes aligned with internationally recognized standards.",
},
  {
  icon: MapPinned,
  value: 0,
  customValue: "Pan-India",
  label: "Project Execution",
  description:
    "Engineering, manufacturing and project execution capabilities supporting industrial projects across India.",
},
];

export default function AboutStats() {
  return (
    <section
      aria-labelledby="about-stats-heading"
      className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.05),transparent_35%)]" />

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-primary-red/5 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-primary-blue/5 blur-[150px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.65,
          }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            Our Achievements
          </span>

          <h2
            id="about-stats-heading"
            className="mt-7 text-4xl font-black leading-[1.06] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]"
          >
            Numbers That Reflect
            <span className="block">
              Engineering Excellence.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[850px] text-lg font-medium leading-8 text-gray-600">
            Our growth reflects continued investment in engineering,
            manufacturing, quality systems and dependable delivery of
            Pre-Engineered Building and structural steel projects across India.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}