"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import TimelineItem from "./TimelineItem";
import { companyTimeline } from "@/data/timeline";

export default function CompanyTimeline() {
  return (
    <section
      id="our-journey" 
      className="relative scroll-mt-32 overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(27,63,104,0.06),transparent_40%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <span className="inline-block rounded-full bg-primary-red/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.22em] text-primary-red">
            Our Journey
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-primary-blue lg:text-6xl">
            Building Excellence
            <br />
            Year After Year
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            From a single manufacturing facility to becoming one of India's
            rapidly growing Pre-Engineered Building companies, every milestone
            reflects our commitment to engineering excellence, innovation and
            customer satisfaction.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
  <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-primary-blue/15 lg:block" />

  <div className="space-y-8">
    {companyTimeline.map((item, index) => (
      <TimelineItem key={item.year} item={item} index={index} />
    ))}
  </div>
</div>
      </Container>
    </section>
  );
}