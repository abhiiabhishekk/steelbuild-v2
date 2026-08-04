"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Factory,
 ShieldCheck,
  Users,
  HeartHandshake,
  Recycle,
} from "lucide-react";

import Container from "@/components/layout/Container";

const commitments = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    text:
      "Reducing environmental impact through efficient operations, resource optimization and responsible industrial practices.",
  },
  {
    icon: Factory,
    title: "Responsible Manufacturing",
    text:
      "Disciplined manufacturing systems focused on quality, efficiency and long-term operational sustainability.",
  },
  {
    icon: Users,
    title: "Employee Wellbeing",
    text:
      "Providing a safe, respectful and growth-oriented workplace for every member of our team.",
  },
  {
    icon: HeartHandshake,
    title: "Community Engagement",
    text:
      "Supporting communities through responsible business practices and meaningful social participation.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical Governance",
    text:
      "Maintaining transparency, accountability and integrity across every business decision.",
  },
  {
    icon: Recycle,
    title: "Continuous Improvement",
    text:
      "Driving innovation and operational excellence through continuous evaluation and improvement.",
  },
];

export default function SustainabilityCommitment() {
  return (
    <section
      id="sustainability-commitment"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-primary-red">
            OUR RESPONSIBILITY
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-primary-blue">
            Sustainability Built Into
            <span className="block">
              Every Commitment.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Steelbuild believes sustainable growth is achieved by balancing
            industrial progress, environmental awareness, responsible
            governance and people-first values.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {commitments.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .45,
                  delay: index * .08,
                }}
                className="group rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary-red/40 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white transition-all duration-300 group-hover:bg-primary-blue">
                  <Icon size={30} />
                </div>

                <h3 className="mt-7 text-2xl font-black text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-8">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}