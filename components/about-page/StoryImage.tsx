"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoryImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -left-8 -top-8 -z-10 h-72 w-72 rounded-full bg-primary-red/10 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 -z-10 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl" />

      <div className="overflow-hidden rounded-[34px] border border-gray-100 bg-white p-2 shadow-[0_35px_80px_rgba(27,63,104,0.14)]">
        <div className="overflow-hidden rounded-[28px]">
          <Image
            src="/images/about/company-story.jpg"
            alt="Steelbuild Infra Projects Limited team"
            width={900}
            height={700}
            priority
            className="h-[560px] w-full object-cover object-top transition duration-700 hover:scale-105"
          />
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden rounded-[24px] bg-primary-red px-7 py-6 text-white shadow-[0_25px_60px_rgba(194,17,25,.35)] lg:block">
        <p className="text-5xl font-black leading-none">15+</p>
        <p className="mt-3 text-[12px] font-bold uppercase leading-5 tracking-[0.18em]">
          Years of <br /> Excellence
        </p>
      </div>
    </motion.div>
  );
}