"use client";

import { motion } from "framer-motion";
import { foundation } from "@/data/foundation";

export default function MissionCard() {
  const mission = foundation.mission;
  const Icon = mission.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.12 }}
      className="group relative overflow-hidden rounded-[32px] border border-gray-200 bg-white p-9 shadow-[0_20px_60px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_35px_90px_rgba(194,17,25,0.14)]"
    >
      <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-primary-red/10 blur-3xl transition duration-500 group-hover:bg-primary-blue/10" />

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20 transition duration-500 group-hover:bg-primary-blue">
        <Icon size={28} />
      </div>

      <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-primary-red">
        {mission.badge}
      </p>

      <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
        {mission.title}
      </h3>

      <p className="mt-5 text-base leading-8 text-gray-600">
        {mission.description}
      </p>
    </motion.div>
  );
}