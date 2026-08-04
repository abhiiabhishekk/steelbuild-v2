"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Warehouse,
  Building2,
  Snowflake,
  Wheat,
  Store,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    title: "Industrial Manufacturing",
    image:
      "/images/products/roofing-sheets/application-1.jpg",
    icon: Factory,
    description:
      "Heavy-duty roofing systems for manufacturing facilities, production plants and engineering workshops.",
  },
  {
    number: "02",
    title: "Warehouses & Logistics",
    image:
      "/images/products/roofing-sheets/application-2.jpg",
    icon: Warehouse,
    description:
      "Reliable roofing for logistics parks, distribution centres and large-span warehouses.",
  },
  {
    number: "03",
    title: "Food Processing",
    image:
      "/images/products/roofing-sheets/application-3.jpg",
    icon: Building2,
    description:
      "Weather-resistant roofing systems for hygienic food-processing facilities.",
  },
  {
    number: "04",
    title: "Cold Storage",
    image:
      "/images/products/roofing-sheets/application-4.jpg",
    icon: Snowflake,
    description:
      "Integrated roofing systems suitable for insulated cold-storage buildings.",
  },
  {
    number: "05",
    title: "Agricultural Buildings",
    image:
      "/images/products/roofing-sheets/application-5.jpg",
    icon: Wheat,
    description:
      "Long-lasting roofing for agricultural processing, storage and utility buildings.",
  },
  {
    number: "06",
    title: "Commercial Buildings",
    image:
      "/images/products/roofing-sheets/application-6.jpg",
    icon: Store,
    description:
      "Architectural roofing systems for commercial and industrial developments.",
  },
];

export default function RoofingSheetsApplications() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Roofing Sheet Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Industrial Applications
            <br />
            of Roofing Sheets
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Steelbuild Roofing Sheets are widely used across industrial,
            commercial and infrastructure projects requiring dependable,
            weather-resistant roofing performance.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {applications.map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.article
      key={item.title}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_38px_95px_rgba(27,63,104,0.15)]"
    >
      {/* Image */}

      <div className="relative h-[285px] overflow-hidden bg-primary-blue">
        <Image
          src={item.image}
          alt={`${item.title} with profiled industrial roofing sheets`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

        <span className="absolute right-5 top-5 rounded-full border border-white/15 bg-primary-blue/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white backdrop-blur-md">
          Application {item.number}
        </span>

        <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-red shadow-xl">
          <Icon size={26} />
        </div>
      </div>

      {/* Content */}

      <div className="flex flex-1 flex-col p-7 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
          Roofing Sheet Application
        </p>

        <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
          {item.title}
        </h3>

        <p className="mt-4 flex-1 text-sm font-medium leading-7 text-gray-500">
          {item.description}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200 pt-5">
          <div className="flex items-center gap-3">
            <BadgeCheck
              size={18}
              className="shrink-0 text-primary-red"
            />

            <p className="text-xs font-black uppercase tracking-[0.16em] text-primary-blue">
              Engineered Roofing Solution
            </p>
          </div>

          <ArrowRight
            size={18}
            className="shrink-0 text-primary-red transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </motion.article>
  );
})}

        </div>

        <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-70px" }}
  transition={{ duration: 0.6 }}
  className="relative z-10 mx-auto mt-16 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
>
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

  <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
      <BadgeCheck size={26} />
    </div>

    <div>
      <h3 className="text-2xl font-black text-white">
        Every Application Requires Project-Specific Roofing Coordination
      </h3>

      <p className="mt-2 text-sm font-medium leading-7 text-white/70">
        Roof profile, material thickness, protective coating, insulation,
        fastener spacing, skylights, flashings, gutters and structural support
        details are developed according to building usage, approved drawings
        and environmental conditions.
      </p>
    </div>
  </div>
</motion.div>

      </Container>
    </section>
  );
}