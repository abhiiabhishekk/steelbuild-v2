"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import ManufacturingCard from "./ManufacturingCard";

import { SITE } from "@/constants/site";

const items = [
  {
    image: "/images/manufacturing/unit-1.jpg",
    title: "Unit 1 – Katwal, Sonipat",
    description:
      "A dedicated PEB and structural steel manufacturing facility supporting precision fabrication, engineered production and large-scale industrial building projects.",
  },
  {
    image: "/images/manufacturing/unit-2.jpg",
    title: "Unit 2 & 3 – Halalpur, Sonipat",
    description:
      "Integrated steel fabrication and manufacturing facilities supporting high-volume production for warehouses, factories, industrial sheds and Pre-Engineered Buildings.",
  },
  {
    image: "/images/manufacturing/machinery.jpg",
    title: "Advanced Machinery & Quality Control",
    description:
      "Modern fabrication equipment, controlled manufacturing processes, skilled teams and systematic quality inspection support dimensional accuracy and consistent structural performance.",
  },
];

const capabilities = [
  "PEB Manufacturing",
  "Structural Steel Fabrication",
  "Industrial Steel Buildings",
  "Warehouse Structures",
  "Factory Buildings",
  "Quality-Controlled Production",
];

export default function ManufacturingSection() {
  return (
    <section
      aria-labelledby="manufacturing-excellence-heading"
      className="relative overflow-hidden bg-[#f7f8fa] py-28 lg:py-36"
    >
      {/* Background Grid */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:76px_76px]" />

      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-primary-red/10 blur-3xl" />

      <Container>
        {/* Heading Row */}

        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
              PEB & Steel Manufacturing Excellence
            </p>

            <h2
              id="manufacturing-excellence-heading"
              className="mt-6 max-w-2xl text-4xl font-black leading-[1.04] tracking-[-0.04em] text-primary-blue lg:text-[58px]"
            >
              Advanced PEB Manufacturing
              <span className="block">
                Built for Scale and Precision.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            <p className="max-w-2xl text-lg leading-8 text-gray-600">
              Steelbuild Infra Projects Limited operates advanced manufacturing
              facilities in Sonipat, Haryana, with an annual manufacturing
              capacity of {SITE.stats.capacity}. Our facilities support
              Pre-Engineered Building manufacturing, structural steel
              fabrication and industrial steel production for large-scale
              projects across India.
            </p>

            <div className="mt-7 border-l-4 border-primary-red pl-5">
              <p className="max-w-2xl text-sm font-semibold leading-7 text-primary-blue">
                From engineered steel members and built-up sections to
                fabricated structural components, every production stage is
                coordinated around approved drawings, dimensional accuracy,
                fabrication quality and project-specific requirements.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Manufacturing Capability Tags */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
          }}
          className="relative z-10 mt-10 flex flex-wrap gap-3"
        >
          {capabilities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary-blue/10 bg-white px-5 py-2.5 text-xs font-black text-primary-blue shadow-[0_10px_30px_rgba(27,63,104,0.05)]"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Manufacturing Cards */}

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-3">
          {items.map((item, index) => (
            <ManufacturingCard
              key={item.title}
              index={index}
              {...item}
            />
          ))}
        </div>

        {/* Manufacturing Authority Block */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative z-10 mx-auto mt-16 max-w-5xl rounded-[28px] border border-primary-blue/10 bg-white px-7 py-7 shadow-[0_20px_60px_rgba(27,63,104,0.07)] md:px-10"
        >
          <p className="text-center text-sm font-semibold leading-7 text-gray-600">
            Steelbuild&apos;s manufacturing infrastructure supports
            Pre-Engineered Buildings, industrial sheds, warehouse buildings,
            factory structures, heavy steel structures, mezzanine systems,
            roofing components and other engineered steel building solutions
            through controlled fabrication and quality-focused production.
          </p>
        </motion.div>

        {/* CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative z-10 mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/manufacturing"
            className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-blue px-8 py-4 font-black !text-white shadow-[0_18px_45px_rgba(27,63,104,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:!text-white hover:shadow-[0_24px_55px_rgba(194,17,25,0.22)]"
          >
            Explore Our Manufacturing

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>

          <Link
            href="/request-a-quote"
            className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 font-black !text-primary-blue shadow-[0_14px_40px_rgba(27,63,104,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-red hover:bg-primary-red hover:!text-white"
          >
            Discuss Your PEB Project

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}