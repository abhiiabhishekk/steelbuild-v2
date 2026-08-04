"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ManufacturingFeatures from "./ManufacturingFeatures";

export default function ManufacturingContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 45 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-flex rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
        Manufacturing Excellence
      </span>

      <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[56px]">
        Advanced Manufacturing
        <span className="block">for PEB Excellence.</span>
      </h2>

      <p className="mt-7 text-lg leading-9 text-gray-600">
        Steelbuild Infra Projects Limited operates advanced manufacturing
        facilities equipped with modern technology, precision machinery and
        highly skilled professionals to deliver world-class Pre-Engineered
        Building solutions.
      </p>

      <p className="mt-5 text-lg leading-9 text-gray-600">
        From engineering and fabrication to quality inspection and dispatch,
        every stage is managed through robust systems that ensure consistency,
        speed, safety and exceptional product quality.
      </p>

      <ManufacturingFeatures />

      <div className="mt-10">
        <Link
          href="/manufacturing"
          className="inline-flex items-center rounded-2xl bg-primary-red px-8 py-4 font-black text-white shadow-[0_18px_45px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
          style={{ color: '#ffffff' }}
        >
          Explore Manufacturing →
        </Link>
      </div>
    </motion.div>
  );
}