"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

import type { TimelineItem as TimelineItemType } from "@/data/timeline";

type Props = {
  item: TimelineItemType;
  index: number;
};

export default function TimelineItem({
  item,
  index,
}: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 26,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-70px",
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.045,
      }}
      className="relative grid items-center gap-2 lg:grid-cols-[minmax(0,1fr)_76px_minmax(0,1fr)]"
    >
      {/* =====================================================
          TIMELINE CARD
      ====================================================== */}

      <div
        className={`lg:row-start-1 ${
          isEven
            ? "lg:col-start-1"
            : "lg:col-start-3"
        }`}
      >
        <article
          className={`relative overflow-hidden rounded-[26px] border border-gray-200 bg-white px-7 py-6 shadow-[0_16px_48px_rgba(27,63,104,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_24px_65px_rgba(27,63,104,0.12)] ${
            isEven
  ? "lg:ml-auto lg:mr-3 lg:max-w-[520px] lg:text-right"
  : "lg:mr-auto lg:ml-3 lg:max-w-[520px] lg:text-left"
          }`}
        >
        

          

          {/* Highlight */}

          {item.highlight && (
            <span className="inline-flex max-w-full rounded-full bg-primary-red/10 px-4 py-2 text-[10px] font-black uppercase leading-5 tracking-[0.2em] text-primary-red sm:text-[11px]">
              {item.highlight}
            </span>
          )}

          {/* Title */}

          <h3 className="mt-5 text-2xl font-black leading-[1.15] tracking-[-0.035em] text-primary-blue lg:text-[28px]">
            {item.title}
          </h3>

          {/* Description */}

          <p className="mt-4 text-[15px] font-medium leading-7 text-gray-600">
            {item.description}
          </p>
        </article>
      </div>

      {/* =====================================================
          YEAR MARKER
      ====================================================== */}

      <div className="flex justify-start lg:col-start-2 lg:row-start-1 lg:justify-center">
        <div className="relative z-10 flex h-[66px] w-[66px] shrink-0 flex-col items-center justify-center rounded-full border-[5px] border-white bg-primary-blue text-white shadow-[0_14px_36px_rgba(27,63,104,0.24)]">
          <CalendarDays
            size={16}
            strokeWidth={2.2}
          />

          <span className="mt-1 text-[13px] font-black">
            {item.year}
          </span>
        </div>
      </div>

      {/* =====================================================
          EMPTY GRID COLUMN
      ====================================================== */}

      <div
        className={`hidden lg:row-start-1 lg:block ${
          isEven
            ? "lg:col-start-3"
            : "lg:col-start-1"
        }`}
      />
    </motion.div>
  );
}