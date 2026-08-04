"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export default function QualityCard({
  icon: Icon,
  title,
  description,
  index,
}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
      }}
      className="group rounded-[28px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.12)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
        <Icon size={30} />
      </div>

      <h3 className="mt-7 text-2xl font-black text-primary-blue">
        {title}
      </h3>

      <p className="mt-4 leading-8 text-gray-600">
        {description}
      </p>
    </motion.article>
  );
}