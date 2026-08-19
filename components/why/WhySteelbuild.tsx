"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import WhyCard from "./WhyCard";

const items = [
  {
    number: "01",
    title: "PEB Engineering Excellence",
    description:
      "Precision-driven engineering, structural design and detailing for efficient, durable and scalable Pre-Engineered Buildings and industrial steel structures.",
  },
  {
    number: "02",
    title: "Advanced Steel Manufacturing",
    description:
      "Modern manufacturing and fabrication capabilities support consistent quality, dimensional accuracy and efficient production for large-scale steel building projects.",
  },
  {
    number: "03",
    title: "Quality-Controlled Execution",
    description:
      "Systematic quality assurance across engineering, fabrication and project execution supports dependable structural performance and long-term building reliability.",
  },
  {
    number: "04",
    title: "Efficient Project Delivery",
    description:
      "Coordinated engineering, manufacturing and site execution help optimize project schedules while maintaining approved technical and quality requirements.",
  },
  {
    number: "05",
    title: "Pan-India Project Capability",
    description:
      "Engineering, manufacturing and execution capabilities support warehouses, factories, industrial sheds and steel building projects across India.",
  },
  {
    number: "06",
    title: "End-to-End PEB Solutions",
    description:
      "From concept engineering and structural detailing to steel fabrication, roofing, cladding and project execution, solutions are coordinated around complete project requirements.",
  },
];

export default function WhySteelbuild() {
  return (
    <section
      aria-labelledby="why-steelbuild-heading"
      className="relative overflow-hidden bg-primary-blue py-28 text-white"
    >
      {/* Background Effects */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(194,17,25,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_32%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0%,transparent_38%,rgba(0,0,0,0.16)_100%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:78px_78px]" />

      <Container>
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
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
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <p className="text-sm font-black uppercase tracking-[0.3em] text-primary-red">
              Why Steelbuild Infra
            </p>

            <h2
              id="why-steelbuild-heading"
              className="mt-6 max-w-xl text-4xl font-black leading-[1.08] tracking-[-0.03em] lg:text-[52px]"
            >
              Engineering Strength Behind
              <span className="block">
                Every PEB & Steel Building.
              </span>
            </h2>

            <p className="mt-7 max-w-lg text-lg leading-8 text-white/75">
              Steelbuild Infra Projects Limited combines Pre-Engineered
              Building engineering, structural steel expertise, manufacturing
              capability and disciplined project execution to deliver
              warehouses, factories, industrial sheds and engineered steel
              buildings across India.
            </p>

            {/* SEO / GEO Supporting Copy */}

            <div className="mt-8 border-l-4 border-primary-red pl-5">
              <p className="max-w-lg text-sm font-semibold leading-7 text-white/80">
                Our integrated PEB solutions coordinate structural design,
                steel fabrication, manufacturing, roofing, cladding and site
                execution around project-specific requirements for reliable
                industrial building performance.
              </p>
            </div>

            {/* Expertise Keywords - Visible & Useful */}

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "Pre-Engineered Buildings",
                "Structural Steel",
                "Warehouse Buildings",
                "Factory Buildings",
                "Industrial Sheds",
                "Steel Fabrication",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold text-white/80 backdrop-blur-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Why Cards */}

          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item, index) => (
              <WhyCard
                key={item.title}
                index={index}
                {...item}
              />
            ))}
          </div>
        </div>

        {/* Bottom Authority Statement */}

        <motion.div
          initial={{
            opacity: 0,
            y: 24,
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
            duration: 0.6,
          }}
          className="relative z-10 mx-auto mt-16 max-w-5xl rounded-[28px] border border-white/10 bg-white/[0.055] px-7 py-7 backdrop-blur-sm md:px-9"
        >
          <p className="text-center text-sm font-semibold leading-7 text-white/78">
            Steelbuild Infra supports industrial construction requirements
            through coordinated Pre-Engineered Building design, structural
            steel engineering, fabrication, manufacturing and project
            execution for warehouse, factory, manufacturing, logistics and
            other industrial infrastructure applications.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}