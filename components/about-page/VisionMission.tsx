"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import VisionCard from "./VisionCard";
import MissionCard from "./MissionCard";

export default function VisionMission() {
  return (
    <section
      id="vision-mission"
      aria-labelledby="vision-mission-heading"
      className="relative overflow-hidden bg-[#fbfcfe] py-24 lg:py-28"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.016)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.016)_1px,transparent_1px)] bg-[size:76px_76px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-blue/[0.07] blur-3xl" />

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
          className="relative z-10 mx-auto mb-14 max-w-4xl text-center lg:mb-16"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            Vision & Mission
          </span>

          <h2
            id="vision-mission-heading"
            className="mt-7 text-4xl font-black leading-[1.06] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]"
          >
            Engineering Today.
            <span className="block">
              Building for Tomorrow.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[850px] text-lg font-medium leading-8 text-gray-600">
            Our vision defines where Steelbuild is headed, while our mission
            guides how we engineer, manufacture and deliver dependable
            Pre-Engineered Building and structural steel solutions across India.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="relative z-10 grid gap-7 lg:grid-cols-2">
          <VisionCard />
          <MissionCard />
        </div>
      </Container>
    </section>
  );
}