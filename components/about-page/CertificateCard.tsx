"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import type { Certificate } from "./certificateData";

type Props = {
  certificate: Certificate;
  index: number;
  onClick: () => void;
};

export default function CertificateCard({ certificate, index, onClick }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.05 }}
      className="group relative mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-gray-200 bg-white p-1 shadow-[0_12px_35px_rgba(27,63,104,0.10)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_70px_rgba(27,63,104,0.16)]"
    >
      <div className="relative overflow-hidden rounded-xl bg-[#f8fafc]">
        <Image
          src={certificate.image}
          alt={certificate.title}
          width={certificate.orientation === "portrait" ? 900 : 1400}
          height={certificate.orientation === "portrait" ? 1300 : 900}
          className="h-auto w-full object-contain transition duration-700"
        />

        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/45" />

        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-blue shadow-xl">
            <Expand size={22} />
          </div>

          <p className="mt-4 text-sm font-black uppercase tracking-[0.22em] text-white">
            View Certificate
          </p>
        </div>
      </div>
    </motion.button>
  );
}