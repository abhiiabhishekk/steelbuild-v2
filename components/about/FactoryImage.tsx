"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ExperienceBadge from "./ExperienceBadge";

export default function FactoryImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 55 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative lg:pl-8"
    >
      <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-red/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-[6px] shadow-[0_30px_80px_rgba(27,63,104,0.15)]">
        <div className="overflow-hidden rounded-[28px]">
          <Image
            src="/images/about/trust.jpg"
            alt="Steelbuild Infra Projects manufacturing facility"
            width={900}
            height={650}
            className="h-[500px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>
      </div>

      <ExperienceBadge />
    </motion.div>
  );
}