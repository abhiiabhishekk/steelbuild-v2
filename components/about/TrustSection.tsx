"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Counter from "./Counter";
import FactoryImage from "./FactoryImage";

import { SITE } from "@/constants/site";

const counters = [
  {
    value: SITE.stats.projects,
    label: "PEB & Steel Projects Delivered",
    description:
      "Industrial, warehouse, factory and steel building projects executed across India.",
  },
  {
    value: SITE.stats.capacity,
    label: "Annual Manufacturing Capacity",
    description:
      "Manufacturing strength supporting large-scale PEB and structural steel projects.",
  },
  {
    value: SITE.stats.units,
    label: "Manufacturing Units",
    description:
      "Strategically located manufacturing facilities supporting precision steel fabrication.",
  },
  {
    value: SITE.stats.reach,
    label: "Pan-India Project Execution",
    description:
      "Engineering, manufacturing and project execution capabilities across India.",
  },
];

export default function TrustSection() {
  return (
    <section
      aria-labelledby="trust-section-heading"
      className="relative overflow-hidden bg-white pb-32 pt-40"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-[#fbfcfe] to-white" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-primary-red/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-24 h-80 w-80 rounded-full bg-primary-blue/10 blur-3xl"
      />

      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}

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
              margin: "-80px",
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >
            {/* Eyebrow */}

            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
              Pre-Engineered Buildings • Structural Steel • Industrial
              Infrastructure
            </p>

            {/* Main Heading */}

            <h2
              id="trust-section-heading"
              className="mt-6 max-w-[680px] text-4xl font-black leading-[1.04] tracking-[-0.04em] text-primary-blue lg:text-[58px]"
            >
              Trusted PEB & Steel Building Partner for India&apos;s Industrial
              Growth.
            </h2>

            {/* Primary SEO Copy */}

            <p className="mt-7 max-w-[620px] text-lg font-medium leading-8 text-gray-600">
              Steelbuild Infra Projects Limited delivers engineered
              Pre-Engineered Buildings (PEB), structural steel buildings and
              industrial infrastructure solutions for warehouses, factories,
              industrial sheds, manufacturing facilities and commercial steel
              buildings across India.
            </p>

            {/* Secondary SEO / GEO Copy */}

            <p className="mt-5 max-w-[620px] text-base font-medium leading-8 text-gray-500">
              Our integrated capabilities cover PEB engineering, structural
              design, steel fabrication, manufacturing, roofing, cladding and
              project execution—helping clients develop efficient, durable and
              scalable industrial building systems from concept to completion.
            </p>

            {/* Trust Statement */}

            <div className="mt-7 border-l-4 border-primary-red pl-5">
              <p className="max-w-[600px] text-sm font-bold leading-7 text-primary-blue">
                From large-span warehouse buildings and factory structures to
                heavy steel systems, mezzanines and complete building
                envelopes, every solution is coordinated around engineering
                quality, manufacturing accuracy and dependable project
                execution.
              </p>
            </div>

            {/* CTAs */}

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/about"
                aria-label="Learn more about Steelbuild Infra Projects Limited"
                className="rounded-xl bg-primary-blue px-8 py-4 font-bold !text-white shadow-xl shadow-primary-blue/20 transition duration-300 hover:-translate-y-1 hover:bg-[#143252] hover:!text-white"
              >
                Know Our Story
              </Link>

              <Link
  href="/request-a-quote"
  aria-label="Request a quote for a Pre-Engineered Building or steel structure project"
  className="rounded-xl border border-gray-200 px-8 py-4 font-bold !text-primary-blue transition-all duration-300 hover:-translate-y-1 hover:border-primary-red hover:bg-primary-red hover:!text-white"
>
  Get a Project Quote
</Link>
            </div>

            {/* Semantic Service Links */}

            <nav
              aria-label="Core Steelbuild solutions"
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
            >
              <Link
                href="/products/pre-engineered-buildings"
                className="text-sm font-bold text-primary-blue transition-colors hover:text-primary-red"
              >
                Pre-Engineered Buildings
              </Link>

              <Link
                href="/products/warehouse-buildings"
                className="text-sm font-bold text-primary-blue transition-colors hover:text-primary-red"
              >
                Warehouse Buildings
              </Link>

              <Link
                href="/products/factory-buildings"
                className="text-sm font-bold text-primary-blue transition-colors hover:text-primary-red"
              >
                Factory Buildings
              </Link>

              <Link
                href="/products/heavy-steel-structures"
                className="text-sm font-bold text-primary-blue transition-colors hover:text-primary-red"
              >
                Heavy Steel Structures
              </Link>
            </nav>
          </motion.div>

          {/* Right Factory / Manufacturing Visual */}

          <FactoryImage />
        </div>

        {/* =====================================================
            AUTHORITY / SCALE COUNTERS
        ====================================================== */}

        <div
          aria-label="Steelbuild Infra Projects capabilities"
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {counters.map((item, index) => (
            <Counter
              key={item.label}
              index={index}
              value={item.value}
              label={item.label}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}