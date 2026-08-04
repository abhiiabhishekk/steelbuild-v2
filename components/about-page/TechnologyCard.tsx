"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

type TechnologyCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
};

export default function TechnologyCard({
  icon: Icon,
  title,
  description,
  index,
}: TechnologyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/10"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-red/20 blur-3xl transition duration-500 group-hover:bg-primary-red/30" />

      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_18px_45px_rgba(194,17,25,0.30)] transition duration-500 group-hover:bg-white group-hover:text-primary-blue">
        <Icon size={28} />
      </div>

      <h3 className="relative mt-8 text-2xl font-black leading-tight tracking-[-0.03em] text-white">
        {title}
      </h3>

      <p className="relative mt-4 text-sm leading-7 text-white/68">
        {description}
      </p>
    </motion.article>
  );
}