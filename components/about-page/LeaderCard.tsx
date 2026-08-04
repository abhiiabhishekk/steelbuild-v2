"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";

type LeaderCardProps = {
  image: string;
  name: string;
  designation: string;
  description: string;
  quote: string;
  messageHref: string;
  index: number;
};

export default function LeaderCard({
  image,
  name,
  designation,
  description,
  quote,
  messageHref,
  index,
}: LeaderCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="group overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-3 hover:border-primary-red/20 hover:shadow-[0_35px_90px_rgba(27,63,104,0.16)]"
    >
      <div className="relative overflow-hidden bg-[#f4f7fb]">
        <Image
          src={image}
          alt={`${name} - ${designation}, Steelbuild Infra Projects Limited`}
          width={850}
          height={900}
          className="h-[390px] w-full object-cover object-center transition duration-700 group-hover:scale-105 lg:h-[460px]"
        />

        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-primary-blue/75 via-primary-blue/20 to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-flex rounded-full bg-primary-red px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-white shadow-lg">
            {designation}
          </span>
        </div>
      </div>

      <div className="flex min-h-[330px] flex-col p-8 lg:p-10">
        <h3 className="text-3xl font-black tracking-[-0.04em] text-primary-blue lg:text-4xl">
          {name}
        </h3>

        <p className="mt-5 text-base leading-8 text-gray-600">
          {description}
        </p>

        <div className="mt-8 rounded-3xl bg-[#f7f9fc] p-6">
          <Quote size={30} className="text-primary-red" />

          <p className="mt-4 text-base font-semibold leading-8 text-primary-blue">
            “{quote}”
          </p>
        </div>

        <div className="mt-auto pt-7">
          <Link
            href={messageHref}
            className="group/message inline-flex items-center gap-2 font-black text-primary-red transition-colors duration-300 hover:text-primary-blue"
          >
            Leadership Message

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover/message:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}