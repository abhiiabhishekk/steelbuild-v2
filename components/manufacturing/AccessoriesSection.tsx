"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";

type ProductItem = {
  title: string;
  image: string;
  description: string;
};

const accessories: ProductItem[] = [
  {
    title: "Turbo Vents",
    image: "/images/manufacturing/accessories/turbo-vent.jpg",
    description:
      "Natural roof ventilation systems that exhaust hot air without electricity, helping reduce indoor heat accumulation and improve airflow inside industrial buildings.",
  },
  {
    title: "Ridge Ventilator",
    image: "/images/manufacturing/accessories/ridge-ventilator.jpg",
    description:
      "Continuous ridge ventilation systems designed to extract hot air efficiently and maintain balanced airflow throughout large-span factories and warehouses.",
  },
  {
    title: "Louvers",
    image: "/images/manufacturing/accessories/louvers.jpg",
    description:
      "Engineered wall louvers that provide controlled ventilation while helping prevent rainwater, dust and external debris from entering the building.",
  },
  {
    title: "Polycarbonate Sheets",
    image: "/images/manufacturing/accessories/polycarbonate-sheet.jpg",
    description:
      "High-transparency daylight panels that provide natural illumination while offering excellent impact strength and reliable weather protection.",
  },
];

const insulation: ProductItem[] = [
  {
    title: "Air Bubble Insulation",
    image: "/images/manufacturing/insulation/air-bubble.jpg",
    description:
      "Reflective Air Bubble Insulation reflects up to 97% of radiant heat, helping maintain stable indoor temperatures and improve energy efficiency in hot and cold climates.",
  },
  {
    title: "Glass Wool",
    image: "/images/manufacturing/insulation/glass-wool.jpg",
    description:
      "Glass Wool is manufactured from fine glass fibres and provides excellent thermal insulation, acoustic performance and long-term energy efficiency.",
  },
  {
    title: "Rock Wool",
    image: "/images/manufacturing/insulation/rock-wool.jpg",
    description:
      "Rock Wool provides high-performance thermal insulation, sound absorption and fire resistance for industrial and commercial building applications.",
  },
];

function ProductCard({
  item,
  index,
}: {
  item: ProductItem;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.07,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.09)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_38px_95px_rgba(27,63,104,0.16)]"
    >
      <div className="relative h-[260px] overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt={`${item.title} by Steelbuild Infra Projects`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/75 via-primary-blue/5 to-transparent" />

        <span className="absolute bottom-5 left-5 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-primary-red shadow-lg">
          Steelbuild System
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h4 className="text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
          {item.title}
        </h4>

        <p className="mt-4 flex-1 text-sm font-medium leading-7 text-gray-600">
          {item.description}
        </p>

        <div className="mt-6 h-px w-full bg-gray-200" />

        <p className="mt-5 text-xs font-black uppercase tracking-[0.2em] text-primary-red">
          Engineered for Performance
        </p>
      </div>
    </motion.article>
  );
}

export default function AccessoriesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Accessories & Insulation
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Complete Roofing Support Systems
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Steelbuild provides advanced roofing accessories and insulation
            systems designed to improve ventilation, daylighting, thermal
            performance, acoustic comfort and fire protection.
          </p>
        </motion.div>

        {/* Roofing Accessories */}

        <div className="relative z-10 mt-16">
          <div className="flex flex-col gap-3 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                Roofing Accessories
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-primary-blue md:text-4xl">
                Ventilation & Daylighting Systems
              </h3>
            </div>

            <p className="max-w-xl text-sm font-medium leading-7 text-gray-600">
              Integrated solutions that improve indoor airflow, reduce heat
              build-up and increase the use of natural daylight.
            </p>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {accessories.map((item, index) => (
              <ProductCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Insulation */}

        <div className="relative z-10 mt-24">
          <div className="flex flex-col gap-3 border-b border-gray-200 pb-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                Insulation Systems
              </p>

              <h3 className="mt-3 text-3xl font-black tracking-[-0.03em] text-primary-blue md:text-4xl">
                Thermal, Acoustic & Fire Protection
              </h3>
            </div>

            <p className="max-w-xl text-sm font-medium leading-7 text-gray-600">
              High-performance insulation options for improved energy
              efficiency, acoustic comfort and building safety.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {insulation.map((item, index) => (
              <ProductCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}