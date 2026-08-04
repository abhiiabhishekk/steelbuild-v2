"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  MapPinned,
  Warehouse,
} from "lucide-react";

type CounterProps = {
  value: string;
  label: string;
  description: string;
  index: number;
};

const icons = [
  <Building2 size={22} />,
  <Factory size={22} />,
  <Warehouse size={22} />,
  <MapPinned size={22} />,
];

export default function Counter({
  value,
  label,
  description,
  index,
}: CounterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="group rounded-[30px] border border-gray-200 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary-blue/20 hover:shadow-[0_25px_60px_rgba(27,63,104,0.14)]"
    >
      {/* Icon */}

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red text-white transition-all duration-500 group-hover:scale-110 group-hover:bg-primary-blue">
        {icons[index]}
      </div>

      {/* Number */}

      <h3 className="text-5xl font-black tracking-[-0.04em] text-primary-blue transition-colors duration-300 group-hover:text-primary-red">
        {value}
      </h3>

      {/* Label */}

      <h4 className="mt-3 text-lg font-black text-gray-900">
        {label}
      </h4>

      {/* Description */}

      <p className="mt-3 text-sm leading-7 text-gray-500">
        {description}
      </p>
    </motion.div>
  );
}