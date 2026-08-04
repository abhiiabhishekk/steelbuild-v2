"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

type Stat = {
  icon: LucideIcon;
  value: number;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
  customValue?: string;
};

type StatCardProps = {
  stat: Stat;
  index: number;
};

export default function StatCard({
  stat,
  index,
}: StatCardProps) {
  const ref = useRef<HTMLElement | null>(
    null,
  );

  const isInView = useInView(ref, {
    once: true,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) =>
      Math.round(
        latest,
      ).toLocaleString("en-IN"),
  );

  useEffect(() => {
    if (
      !isInView ||
      stat.customValue
    ) {
      return;
    }

    const controls = animate(
      count,
      stat.value,
      {
        duration: 1.8,
        ease: "easeOut",
      },
    );

    return () => {
      controls.stop();
    };
  }, [
    isInView,
    count,
    stat.value,
    stat.customValue,
  ]);

  const Icon = stat.icon;

  return (
    <motion.article
      ref={ref}
      initial={{
        opacity: 0,
        y: 35,
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
        duration: 0.55,
        delay: index * 0.08,
      }}
      className="group flex h-full min-h-[360px] flex-col rounded-[30px] border border-gray-200 bg-white p-8 shadow-[0_20px_60px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_28px_70px_rgba(27,63,104,0.12)]"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_18px_45px_rgba(194,17,25,0.30)]">
        <Icon size={30} />
      </div>

      <div
        className={`mt-8 font-black tracking-[-0.05em] text-primary-blue ${
          stat.customValue &&
          stat.customValue.length > 10
            ? "text-4xl leading-tight lg:text-5xl"
            : "text-5xl lg:text-6xl"
        }`}
      >
        {stat.customValue ? (
          stat.customValue
        ) : (
          <>
            {stat.prefix}

            <motion.span>
              {rounded}
            </motion.span>

            {stat.suffix}
          </>
        )}
      </div>

      <h3 className="mt-5 text-xl font-black text-primary-blue">
        {stat.label}
      </h3>

      <p className="mt-3 text-sm leading-7 text-gray-600">
        {stat.description}
      </p>
    </motion.article>
  );
}