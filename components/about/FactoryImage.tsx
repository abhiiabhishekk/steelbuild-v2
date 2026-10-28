
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ExperienceBadge from "./ExperienceBadge";

export default function FactoryImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 55 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative lg:pl-8"
    >
      {/* Soft Background Glow */}
      <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-red/10 blur-3xl" />

      {/* Premium Image Frame */}
      <div className="relative overflow-hidden rounded-[32px] border border-gray-100 bg-white p-[7px] shadow-[0_30px_80px_rgba(27,63,104,0.15)]">
        <div className="group relative h-[460px] overflow-hidden rounded-[26px] sm:h-[480px] lg:h-[500px]">
          <Image
            src="/images/about/trust-v2.jpg"
            alt="Aerial view of Steelbuild Infra Projects Limited manufacturing facility and industrial steel buildings"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 48vw"
            className="object-cover object-[center_60%] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Experience Badge */}
      <ExperienceBadge />
    </motion.div>
  );
}