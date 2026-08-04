"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  HandHeart,
  HeartPulse,
  ShieldCheck,
  TreePine,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

const initiatives = [
  {
    icon: UsersRound,
    title: "Community Engagement",
    description:
      "Building positive relationships through responsible business practices and meaningful participation.",
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description:
      "Supporting knowledge sharing, skill enhancement and continuous professional development.",
  },
  {
    icon: HeartPulse,
    title: "Health & Wellbeing",
    description:
      "Promoting a healthy, safe and respectful workplace environment.",
  },
  {
    icon: TreePine,
    title: "Environmental Awareness",
    description:
      "Encouraging responsible resource usage and environmentally conscious operational practices.",
  },
];

export default function CommunityImpact() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <span className="inline-flex rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
              Community Impact
            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-primary-blue">
              Creating Positive Value
              <span className="block">
                Beyond Infrastructure.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Steelbuild believes responsible growth extends beyond engineering.
              Strong organizations contribute through ethical business,
              employee wellbeing, community participation and sustainable
              operational practices.
            </p>

            <div className="mt-10 rounded-[30px] bg-primary-blue p-7 text-white shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red">
                  <HandHeart size={26} />
                </div>

                <div>
                  <h3 className="text-2xl font-black">
                    Responsible Business Culture
                  </h3>

                  <p className="mt-3 leading-8 text-white/75">
                    We strive to create long-term value by strengthening people,
                    processes, partnerships and responsible operational
                    excellence.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {initiatives.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * .08,
                    duration: .45,
                  }}
                  className="group rounded-[28px] border border-gray-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-primary-red/30 hover:shadow-2xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white transition-all duration-300 group-hover:bg-primary-blue">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-7 text-2xl font-black text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-black text-primary-red">
                    <ShieldCheck size={18} />
                    Responsible Commitment
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}