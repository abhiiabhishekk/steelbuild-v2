"use client";

import { motion } from "framer-motion";

type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
  index: number;
};

export default function ProcessStep({
  number,
  title,
  description,
  index,
}: ProcessStepProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-700 hover:-translate-y-3 hover:border-primary-blue/20 hover:shadow-[0_35px_90px_rgba(27,63,104,0.18)]"
    >
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary-red/10 blur-3xl transition duration-700 group-hover:bg-primary-blue/15" />

      <div className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-blue text-lg font-black text-white shadow-[0_12px_28px_rgba(27,63,104,0.22)] transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-red group-hover:shadow-[0_18px_38px_rgba(194,17,25,0.35)]">
        {number}
      </div>

      <h3 className="text-2xl font-black leading-tight tracking-[-0.02em] text-primary-blue">
        {title}
      </h3>

      <p className="mt-4 flex-1 text-sm leading-7 text-gray-600">{description}</p>
    </motion.article>
  );
}