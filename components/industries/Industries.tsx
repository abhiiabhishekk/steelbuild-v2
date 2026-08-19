"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import IndustryCard from "./IndustryCard";

const industries = [
  {
    title: "Warehousing",
    image: "/images/industries/warehouse.jpg",
    category: "Storage & Distribution",
    description:
      "Pre-Engineered warehouse buildings designed for large-span storage, logistics movement, operational efficiency and future expansion.",
    href: "/industries",
  },
  {
    title: "Manufacturing",
    image: "/images/industries/manufacturing.jpg",
    category: "Industrial Production",
    description:
      "High-performance PEB manufacturing facilities and factory buildings engineered for production efficiency, durability and operational scale.",
    href: "/industries",
  },
  {
    title: "Automobile",
    image: "/images/industries/automobile.jpg",
    category: "Automotive Sector",
    description:
      "Purpose-built structural steel and Pre-Engineered Building solutions supporting automotive production, assembly and component manufacturing.",
    href: "/industries",
  },
  {
    title: "Food Processing",
    image: "/images/industries/food.jpg",
    category: "Food & FMCG",
    description:
      "Clean, durable and efficiently planned industrial buildings for food processing, FMCG manufacturing, storage and distribution operations.",
    href: "/industries",
  },
  {
    title: "Pharmaceutical",
    image: "/images/industries/pharma.jpg",
    category: "Pharma & Healthcare",
    description:
      "Engineered industrial building solutions for pharmaceutical manufacturing, controlled production areas, warehousing and storage requirements.",
    href: "/industries",
  },
  {
    title: "Logistics",
    image: "/images/industries/logistics.jpg",
    category: "Logistics & Distribution",
    description:
      "Large-scale logistics warehouses and distribution facilities engineered for rapid material handling, connectivity and dependable operations.",
    href: "/industries",
  },
];

export default function Industries() {
  return (
    <section
      aria-labelledby="industries-heading"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      {/* Background glow */}

      <div className="pointer-events-none absolute -left-32 top-32 h-96 w-96 rounded-full bg-primary-red/[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-primary-blue/[0.08] blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
            Industries We Serve
          </p>

          <h2
            id="industries-heading"
            className="mt-5 text-4xl font-black leading-[1.04] tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[56px]"
          >
            Pre-Engineered Building Solutions
            <span className="block">
              for India&apos;s Leading Industries.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild Infra Projects Limited delivers Pre-Engineered
            Buildings, structural steel systems, warehouse buildings, factory
            buildings and industrial infrastructure solutions for
            manufacturing, automotive, food processing, pharmaceutical,
            logistics and distribution sectors across India.
          </p>
        </motion.div>

        {/* Industry cards */}

        <div className="relative z-10 mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard
              key={industry.title}
              image={industry.image}
              title={industry.title}
              category={industry.category}
              description={industry.description}
              href={industry.href}
              index={index}
            />
          ))}
        </div>

        {/* SEO-supporting visible copy */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 max-w-5xl rounded-[28px] border border-gray-200 bg-[#f8fafc] px-7 py-7 shadow-[0_18px_55px_rgba(27,63,104,0.06)] md:px-9 md:py-8"
        >
          <p className="text-sm font-bold leading-7 text-primary-blue">
            From large-span warehouse PEB buildings and factory sheds to
            manufacturing units, logistics facilities, automotive plants, food
            processing buildings and pharmaceutical infrastructure, our
            industrial steel building solutions are engineered around project
            requirements, structural performance, speed of construction,
            durability and long-term operational efficiency.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}