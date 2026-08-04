"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import LeaderCard from "./LeaderCard";
import { leadershipData } from "@/data/leadership";

export default function Leadership() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-primary-blue/5 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-4xl text-center lg:mb-20"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Our Leadership
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Meet the Visionaries Behind
            <br />
            Steelbuild&apos;s Success.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Strong leadership, engineering expertise and commitment to quality
            have enabled Steelbuild Infra Projects Limited to become one of
            India&apos;s fastest-growing Pre-Engineered Building companies.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {leadershipData.map((leader, index) => (
            <LeaderCard key={leader.name} index={index} {...leader} />
          ))}
        </div>
      </Container>
    </section>
  );
}