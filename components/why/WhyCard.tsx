"use client";

import { motion } from "framer-motion";

type WhyCardProps = {
  number: string;
  title: string;
  description: string;
  index: number;
};

export default function WhyCard({
  number,
  title,
  description,
  index,
}: WhyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.09 }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10 hover:shadow-[0_35px_90px_rgba(0,0,0,0.28)]"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-red/20 blur-3xl transition duration-700 group-hover:bg-primary-red/30" />

      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-red text-sm font-black text-white shadow-lg shadow-red-900/25">
        {number}
      </span>

      <h3 className="mt-6 text-2xl font-black leading-tight tracking-[-0.02em] text-white">
        {title}
      </h3>

      <p className="mt-4 text-sm leading-6 text-white/68">{description}</p>
    </motion.article>
  );
}