"use client";

import { motion } from "framer-motion";

export default function ExperienceBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="absolute bottom-8 left-0 hidden rounded-[24px] bg-primary-red px-7 py-6 text-white shadow-[0_25px_60px_rgba(194,17,25,.35)] lg:block"
    >
      <p className="text-5xl font-black leading-none">15+</p>
      <p className="mt-3 text-[12px] font-bold uppercase leading-5 tracking-[0.18em]">
        Years of <br /> Experience
      </p>
    </motion.div>
  );
}