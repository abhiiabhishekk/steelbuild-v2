"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import VisionCard from "./VisionCard";
import MissionCard from "./MissionCard";

export default function VisionMission() {
  return (
    <section 
      id="vision-mission"
      className="relative overflow-hidden bg-[#fbfcfe] py-32">
      {/* Background Glow */}

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-blue/5 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.32em] text-primary-red">
            Our Foundation
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-primary-blue lg:text-[58px]">
            Values That Shape Every Structure.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-600">
            Every project we deliver is guided by innovation, engineering
            excellence, integrity and a commitment to building long-term value
            for our customers and partners.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-2">
          <VisionCard />
          <MissionCard />
        </div>
      </Container>
    </section>
  );
}