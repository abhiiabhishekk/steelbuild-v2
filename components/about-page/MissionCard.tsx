"use client";

import { motion } from "framer-motion";

import { foundation } from "@/data/foundation";

export default function MissionCard() {
  const mission = foundation.mission;
  const Icon = mission.icon;

  return (
    <motion.article
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
        margin: "-80px",
      }}
      transition={{
        duration: 0.6,
        delay: 0.1,
      }}
      className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_30px_80px_rgba(194,17,25,0.14)]"
    >
      {/* Decorative Glow */}

      <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-primary-red/[0.08] blur-3xl transition-colors duration-500 group-hover:bg-primary-blue/10" />

      <div className="relative z-10">
        {/* Icon */}

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_30px_rgba(194,17,25,0.2)] transition-all duration-500 group-hover:bg-primary-blue group-hover:shadow-[0_14px_34px_rgba(27,63,104,0.22)]">
          <Icon size={25} />
        </div>

        {/* Badge */}

        <p className="mt-7 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
          {mission.badge}
        </p>

        {/* Title */}

        <h3 className="mt-4 text-[28px] font-black leading-[1.15] tracking-[-0.035em] text-primary-blue">
          {mission.title}
        </h3>

        {/* Description */}

        <p className="mt-4 text-[15px] font-medium leading-7 text-gray-600">
          {mission.description}
        </p>
      </div>
    </motion.article>
  );
}