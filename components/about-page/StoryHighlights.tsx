"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "15+ Years of Engineering Excellence",
  "700+ Successfully Delivered Projects",
  "ISO 9001:2015 Certified Company",
  "Pan India Manufacturing & Execution",
];

export default function StoryHighlights() {
  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2">
      {highlights.map((item, index) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:border-primary-red/20 hover:shadow-lg"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-red/10 text-primary-red">
            <CheckCircle2 size={20} />
          </div>

          <p className="text-[15px] font-semibold text-gray-800">
            {item}
          </p>
        </motion.div>
      ))}
    </div>
  );
}