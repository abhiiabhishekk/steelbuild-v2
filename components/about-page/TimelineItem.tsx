"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import type { TimelineItem as TimelineItemType } from "@/data/timeline";

type Props = {
  item: TimelineItemType;
  index: number;
};

export default function TimelineItem({ item, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="relative grid items-center gap-6 lg:grid-cols-[1fr_90px_1fr]"
    >
      <div
        className={`self-center lg:row-start-1 ${
          isEven ? "lg:col-start-1" : "lg:col-start-3"
        }`}
      >
        <article
          className={`rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)] ${
            isEven ? "lg:text-right" : "lg:text-left"
          }`}
        >
          {item.highlight && (
            <span className="inline-flex rounded-full bg-primary-red/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary-red">
              {item.highlight}
            </span>
          )}

          <h3 className="mt-5 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue lg:text-3xl">
            {item.title}
          </h3>

          <p className="mt-4 text-base leading-8 text-gray-600">
            {item.description}
          </p>
        </article>
      </div>

      <div className="flex self-center justify-center lg:col-start-2 lg:row-start-1">
        <div className="relative z-10 flex h-[74px] w-[74px] flex-col items-center justify-center rounded-full border-[6px] border-white bg-primary-blue text-white shadow-[0_18px_45px_rgba(27,63,104,0.28)]">
          <CalendarDays size={18} />
          <span className="mt-1 text-sm font-black">{item.year}</span>
        </div>
      </div>

      <div
        className={`hidden lg:row-start-1 lg:block ${
          isEven ? "lg:col-start-3" : "lg:col-start-1"
        }`}
      />
    </motion.div>
  );
}