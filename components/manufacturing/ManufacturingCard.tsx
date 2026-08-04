"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type ManufacturingCardProps = {
  image: string;
  title: string;
  description: string;
  index: number;
};

export default function ManufacturingCard({
  image,
  title,
  description,
  index,
}: ManufacturingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_22px_60px_rgba(27,63,104,0.10)] transition-all duration-700 hover:-translate-y-2 hover:border-primary-blue/20 hover:shadow-[0_40px_100px_rgba(27,63,104,0.22)]"
    >
      <div className="relative h-[300px] overflow-hidden bg-primary-blue">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/55 via-transparent to-transparent opacity-70 transition duration-700 group-hover:opacity-90" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black leading-tight tracking-[-0.02em] text-primary-blue">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-600">{description}</p>

        <Link
          href="/manufacturing"
          className="mt-7 inline-flex items-center gap-2 font-black text-primary-red transition-all duration-300 hover:text-primary-blue"
        >
          Learn More
          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </motion.article>
  );
}