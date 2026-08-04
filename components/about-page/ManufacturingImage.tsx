"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { manufacturingStats } from "@/data/manufacturing";

export default function ManufacturingImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -55 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="relative"
    >
      <div className="absolute -left-8 -top-8 -z-10 h-72 w-72 rounded-full bg-primary-blue/10 blur-3xl" />
      <div className="absolute -bottom-8 -right-8 -z-10 h-72 w-72 rounded-full bg-primary-red/10 blur-3xl" />

      <div className="overflow-hidden rounded-[34px] border border-gray-100 bg-white p-2 shadow-[0_35px_80px_rgba(27,63,104,0.15)]">
        <div className="overflow-hidden rounded-[28px]">
          <Image
            src="/images/about/manufacturing.jpg"
            alt="Steelbuild Infra Projects advanced manufacturing facility for Pre-Engineered Buildings"
            width={900}
            height={700}
            priority
            className="h-[500px] w-full object-cover object-center transition duration-700 hover:scale-105 lg:h-[540px]"
          />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 hidden rounded-[26px] bg-primary-blue px-8 py-7 text-white shadow-[0_25px_60px_rgba(27,63,104,0.35)] lg:block">
        <p className="text-5xl font-black leading-none">
          {manufacturingStats[0].value}
        </p>

        <p className="mt-3 text-[12px] font-bold uppercase leading-5 tracking-[0.18em]">
          Manufacturing
          <br />
          Units
        </p>
      </div>
    </motion.div>
  );
}