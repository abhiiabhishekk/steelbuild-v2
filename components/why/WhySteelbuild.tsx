"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import WhyCard from "./WhyCard";

const items = [
  {
    number: "01",
    title: "Engineering Excellence",
    description:
      "Precision-driven design and detailing for strong, scalable and efficient steel structures.",
  },
  {
    number: "02",
    title: "Modern Manufacturing",
    description:
      "Advanced fabrication facilities built to deliver consistent quality and production speed.",
  },
  {
    number: "03",
    title: "Quality Assurance",
    description:
      "Strict quality control systems ensure durable, reliable and high-performance buildings.",
  },
  {
    number: "04",
    title: "Fast Delivery",
    description:
      "Optimized processes help reduce project timelines without compromising engineering standards.",
  },
  {
    number: "05",
    title: "Pan India Execution",
    description:
      "Experienced execution capability for projects across multiple industrial sectors in India.",
  },
  {
    number: "06",
    title: "Customer-Centric Approach",
    description:
      "Transparent communication, dependable support and long-term partnerships with every client.",
  },
];

export default function WhySteelbuild() {
  return (
    <section className="relative overflow-hidden bg-primary-blue py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_38%,rgba(0,0,0,0.16)_100%)]" />

      <Container>
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
              Why Steelbuild
            </p>

            <h2 className="mt-6 max-w-lg text-4xl font-black leading-[1.08] tracking-[-0.03em] lg:text-[52px]">
              Built on Trust, Precision and Commitment.
            </h2>

            <p className="mt-7 max-w-md text-lg leading-8 text-white/72">
              We combine engineering intelligence, modern manufacturing and
              disciplined execution to deliver Pre-Engineered Buildings that
              perform for decades.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item, index) => (
              <WhyCard key={item.title} index={index} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}