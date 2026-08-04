"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  PackageCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const accessories = [
  {
    title: "Ridge Cap",
    image: "/images/manufacturing/accessories/ridge-cap.jpg",
    description:
      "Protects roof intersections and supports a clean, weather-resistant ridge transition.",
  },
  {
    title: "Industrial Gutter System",
    image: "/images/manufacturing/accessories/gutter-system.jpg",
    description:
      "Collects and directs rainwater from large industrial roof areas toward the drainage system.",
  },
  {
    title: "Down Take Pipe",
    image: "/images/manufacturing/accessories/down-take-pipe.jpg",
    description:
      "Transfers collected rainwater safely from gutters to ground-level drainage or storage.",
  },
  {
    title: "Polycarbonate Skylight",
    image: "/images/manufacturing/accessories/polycarbonate-sheet.jpg",
    description:
      "Introduces natural daylight while remaining coordinated with the approved roofing layout.",
  },
  {
    title: "Glass Wool Insulation",
    image: "/images/manufacturing/insulation/glass-wool.jpg",
    description:
      "Supports thermal and acoustic performance beneath industrial profiled roofing sheets.",
  },
  {
    title: "Rock Wool Insulation",
    image: "/images/manufacturing/insulation/rock-wool.jpg",
    description:
      "Provides thermal, acoustic and fire-performance support for industrial roof assemblies.",
  },
  {
    title: "Air Bubble Insulation",
    image: "/images/manufacturing/insulation/air-bubble.jpg",
    description:
      "Reflective insulation helping reduce radiant heat transfer beneath the roofing system.",
  },
];

export default function RoofingSheetsCompatibleAccessories() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <PackageCheck size={15} />
            Compatible Roofing Systems
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Recommended Accessories &
            <span className="block">
              Compatible Roofing Systems
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Profiled roofing sheets perform as a complete roof assembly when
            coordinated with rainwater drainage, insulation, daylighting,
            ridge protection and related roof accessories.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            

            {accessories.map((item, index) => (
  <motion.article
    key={item.title}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{
      duration: 0.5,
      delay: index * 0.05,
    }}
    className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_38px_95px_rgba(27,63,104,0.16)]"
  >
    <div className="relative h-[240px] overflow-hidden bg-gray-100">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width:768px)100vw,(max-width:1280px)50vw,25vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-primary-blue/5 to-transparent" />

      <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red shadow-lg">
        Compatible System
      </span>
    </div>

    <div className="flex flex-1 flex-col p-7">
      <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
        {item.title}
      </h3>

      <p className="mt-4 flex-1 text-sm font-medium leading-7 text-gray-600">
        {item.description}
      </p>

      <div className="mt-6 h-px w-full bg-gray-200" />

      <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-primary-red">
        Recommended with Roofing Sheets
      </p>
    </div>
  </motion.article>
))}

</div>

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="mt-16 overflow-hidden rounded-[34px] bg-primary-blue px-8 py-9 shadow-[0_28px_80px_rgba(27,63,104,0.18)] md:px-10"
>
  <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
        <BadgeCheck size={24} />
      </div>

      <div>
        <h3 className="text-2xl font-black text-white">
          Complete Your Roofing System
        </h3>

        <p className="mt-2 max-w-3xl text-sm font-medium leading-7 text-white/70">
          Roofing sheets achieve optimum long-term performance when combined
          with engineered drainage systems, insulation materials, ridge
          protection, daylighting products and compatible roofing
          accessories.
        </p>
      </div>
    </div>

    <Link
      href="/manufacturing"
      className="group inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white shadow-[0_16px_38px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
    >
      Explore Roofing Systems

      <ArrowUpRight
        size={19}
        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </Link>
  </div>
</motion.div>

      </Container>
    </section>
  );
}