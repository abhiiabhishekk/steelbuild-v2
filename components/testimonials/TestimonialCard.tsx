"use client";

import { motion } from "framer-motion";

type TestimonialCardProps = {
  quote: string;
  name: string;
  company: string;
  rating: string;
  source: string;
  index: number;
};

export default function TestimonialCard({
  quote,
  name,
  company,
  rating,
  source,
  index,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[32px] border border-white/12 bg-white/6 p-8 shadow-[0_24px_75px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:border-primary-red/40 hover:bg-white/10 hover:shadow-[0_38px_95px_rgba(0,0,0,0.30)]"
    >
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary-red/20 blur-3xl transition duration-700 group-hover:bg-primary-red/35" />

      <div className="relative z-10 flex h-full flex-col">
        <p className="text-6xl font-black leading-none text-primary-red">“</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm font-black tracking-[0.18em] text-primary-red">
            ★★★★★
          </span>

          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black text-white">
            {rating}/5
          </span>

          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-black text-white/80">
            {source}
          </span>
        </div>

        <p className="mt-7 flex-1 text-lg leading-8 text-white/84">{quote}</p>

        <div className="mt-8 border-t border-white/12 pt-6">
          <p className="font-black text-white">{name}</p>
          <p className="mt-1 text-sm text-white/70">{company}</p>
        </div>
      </div>
    </motion.article>
  );
}