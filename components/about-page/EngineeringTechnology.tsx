"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import TechnologyCard from "./TechnologyCard";
import { technologyItems } from "@/data/technology";

export default function EngineeringTechnology() {
  return (
    <section className="relative overflow-hidden bg-primary-blue py-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.10),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_38%,rgba(0,0,0,0.18)_100%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-primary-red">
            Engineering & Technology
          </p>

          <h2 className="mt-5 text-4xl font-black leading-[1.08] tracking-[-0.04em] lg:text-[58px]">
            Powered by Modern Engineering.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/72">
            Steelbuild combines in-house design expertise, advanced detailing,
            precision fabrication and process-driven execution to deliver
            high-performance Pre-Engineered Building solutions across India.
          </p>
        </motion.div>

        <div className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologyItems.map((item, index) => (
            <TechnologyCard key={item.title} index={index} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}