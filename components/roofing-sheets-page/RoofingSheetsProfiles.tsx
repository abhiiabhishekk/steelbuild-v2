"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Layers3,
} from "lucide-react";

import Container from "@/components/layout/Container";

const profiles = [
  {
    title: "High Rib Roofing Profile",
    image: "/images/products/roofing-sheets/profile-1.png",
    description:
      "High-strength trapezoidal roofing profile engineered for long-span industrial roofing applications requiring superior load carrying capability.",
  },
  {
    title: "Industrial Trapezoidal Profile",
    image: "/images/products/roofing-sheets/profile-2.png",
    description:
      "Optimized rib geometry providing efficient drainage, structural stability and economical roof construction.",
  },
];

export default function RoofingSheetsProfiles() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">

            <Layers3 size={15}/>

            Roofing Profiles

          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">

            Engineered Roofing
            <br/>
            Sheet Profiles

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

            Steelbuild manufactures industrial roofing sheet profiles
            engineered for structural performance, weather protection,
            efficient drainage and long service life.

          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
            

            {profiles.map((profile, index) => (
  <motion.article
    key={profile.title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.55,
      delay: index * 0.08,
    }}
    className="group overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_24px_70px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_36px_95px_rgba(27,63,104,0.14)]"
  >
    <div className="relative flex h-[260px] items-center justify-center bg-white p-10">
      <Image
        src={
          index === 0
            ? "/images/manufacturing/standing-seam/profile-610.png?v=2"
            : "/images/manufacturing/standing-seam/profile-760.png?v=2"
        }
        alt={profile.title}
        width={520}
        height={220}
        unoptimized
        className="object-contain transition duration-700 group-hover:scale-105"
      />
    </div>

    <div className="border-t border-gray-200 p-8">
      <p className="text-[11px] font-black uppercase tracking-[0.22em] text-primary-red">
        Engineered Profile
      </p>

      <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-primary-blue">
        {profile.title}
      </h3>

      <p className="mt-5 text-base leading-8 text-gray-600">
        {profile.description}
      </p>

      <div className="mt-7 flex items-center gap-3 rounded-2xl bg-primary-red/5 px-5 py-4">
        <BadgeCheck
          size={18}
          className="text-primary-red"
        />

        <span className="text-sm font-black text-primary-blue">
          Precision Roll-Formed Roofing Profile
        </span>
      </div>
    </div>
  </motion.article>
))}

</div>

      </Container>
    </section>
  );
}