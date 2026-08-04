"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const logos = Array.from({ length: 80 }, (_, index) => ({
  id: index + 1,
  image: `/images/clients/client-${index + 1}.png`,
}));

export default function LogoMarquee() {
  const prefersReducedMotion = useReducedMotion();
  const items = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-2">
      {/* Edge fades */}

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/85 to-transparent md:w-32" />

      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/85 to-transparent md:w-32" />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: ["0%", "-50%"],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 52,
                ease: "linear",
                repeat: Infinity,
              }
        }
        className="flex w-max gap-6"
      >
        {items.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="group flex h-28 w-52 shrink-0 items-center justify-center rounded-[22px] border border-gray-200 bg-white px-7 shadow-[0_16px_45px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1.5 hover:border-primary-red/20 hover:shadow-[0_25px_65px_rgba(27,63,104,0.13)]"
          >
            <Image
              src={logo.image}
              alt={`Steelbuild client logo ${logo.id}`}
              width={160}
              height={72}
              sizes="160px"
              className="max-h-[58px] max-w-[145px] object-contain grayscale opacity-65 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}