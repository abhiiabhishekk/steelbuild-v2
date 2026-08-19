"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  useEffect,
  useRef,
} from "react";

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
  const ref =
    useRef<HTMLElement | null>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const count = useMotionValue(0);

  const rounded = useTransform(
    count,
    (latest) =>
      Math.round(latest).toLocaleString(
        "en-IN",
      ),
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
        duration: 1.6,
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
        y: 28,
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
        duration: 0.5,
        delay: index * 0.07,
      }}
      className="group flex h-full min-h-[330px] flex-col rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_16px_50px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_28px_70px_rgba(27,63,104,0.12)]"
    >
      {/* Icon */}

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.25)] transition-all duration-300 group-hover:scale-105">
        <Icon size={26} />
      </div>

      {/* Value */}

      <div
        className={`mt-7 font-black tracking-[-0.05em] text-primary-blue ${
          stat.customValue &&
          stat.customValue.length > 10
            ? "text-[34px] leading-tight lg:text-[42px]"
            : "text-[46px] leading-none lg:text-[54px]"
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

      {/* Label */}

      <h3 className="mt-5 text-xl font-black leading-tight text-primary-blue">
        {stat.label}
      </h3>

      {/* Description */}

      <p className="mt-3 text-sm font-medium leading-7 text-gray-600">
        {stat.description}
      </p>
    </motion.article>
  );
}