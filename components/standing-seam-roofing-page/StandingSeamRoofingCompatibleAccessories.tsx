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
      "Provides continuous protection along roof ridges while maintaining weather-tight roof transitions.",
  },
  {
    title: "Industrial Gutter System",
    image: "/images/manufacturing/accessories/gutter-system.jpg",
    description:
      "Efficient rainwater collection and drainage designed for large industrial roofing systems.",
  },
  {
    title: "Down Take Pipe",
    image: "/images/manufacturing/accessories/down-take-pipe.jpg",
    description:
      "Transfers collected rainwater safely from gutters to the drainage system.",
  },
  {
    title: "Polycarbonate Skylight",
    image: "/images/manufacturing/accessories/polycarbonate-sheet.jpg",
    description:
      "Provides natural daylight while maintaining weather protection across industrial roofing.",
  },
  {
    title: "Glass Wool Insulation",
    image: "/images/manufacturing/insulation/glass-wool.jpg",
    description:
      "Improves thermal performance and acoustic insulation beneath the standing seam roof system.",
  },
  {
    title: "Rock Wool Insulation",
    image: "/images/manufacturing/insulation/rock-wool.jpg",
    description:
      "High-performance thermal and fire-resistant insulation suitable for industrial buildings.",
  },
  {
    title: "Air Bubble Insulation",
    image: "/images/manufacturing/insulation/air-bubble.jpg",
    description:
      "Reflective insulation system helping reduce radiant heat transfer and improve energy efficiency.",
  },
];

export default function StandingSeamRoofingCompatibleAccessories() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <PackageCheck size={15}/>
            Compatible Roofing Systems
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Recommended Accessories &
            <br/>
            Compatible Roofing Systems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Standing Seam Roofing performs as a complete roofing solution
            when combined with engineered drainage systems, insulation
            materials, ventilation and daylighting products designed for
            industrial buildings.
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
    className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_38px_95px_rgba(27,63,104,0.16)]"
  >
    <div className="relative h-[250px] overflow-hidden bg-primary-blue">
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width:1024px)100vw,25vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-primary-blue/10 to-transparent" />

      <div className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red shadow-lg">
        Compatible System
      </div>
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
        Recommended with Standing Seam Roofing
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
          Every standing seam roofing project performs best when roof
          panels, drainage components, insulation materials, daylighting
          products and ventilation systems are engineered as one complete
          roofing solution.
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