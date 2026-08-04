"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { manufacturingFeatures } from "@/data/manufacturing";

export default function ManufacturingFeatures() {
  return (
    <div className="mt-9 grid gap-4">
      {manufacturingFeatures.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.07 }}
          className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-4 shadow-[0_12px_35px_rgba(27,63,104,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_18px_45px_rgba(27,63,104,0.10)]"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
            <CheckCircle2 size={20} />
          </div>

          <p className="font-bold text-primary-blue">{feature}</p>
        </motion.div>
      ))}
    </div>
  );
}