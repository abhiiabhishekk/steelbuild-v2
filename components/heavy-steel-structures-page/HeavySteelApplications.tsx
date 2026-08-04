"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Gauge,
  HardHat,
  Layers3,
  PackageOpen,
  Settings,
  ShieldCheck,
  TowerControl,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Factory,
    title: "Heavy Manufacturing Plants",
    description:
      "High-capacity structural systems developed for large machinery, production equipment, working platforms and demanding industrial operations.",
  },
  {
    number: "02",
    icon: Settings,
    title: "Equipment Support Structures",
    description:
      "Dedicated steel framing designed around equipment loads, access requirements, maintenance zones and service connections.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Industrial Platforms",
    description:
      "Heavy-duty working and maintenance platforms engineered for process areas, machinery access and operational movement.",
  },
  {
    number: "04",
    icon: TowerControl,
    title: "Process Plant Structures",
    description:
      "Complex structural systems supporting process equipment, pipe racks, access levels, utilities and integrated industrial functions.",
  },
  {
    number: "05",
    icon: Gauge,
    title: "Power & Energy Facilities",
    description:
      "Heavy structural framing developed for power infrastructure, equipment zones, service platforms and specialized operational loads.",
  },
  {
    number: "06",
    icon: Warehouse,
    title: "Heavy-Duty Industrial Buildings",
    description:
      "Large-span industrial structures engineered for high operational loads, overhead equipment and specialized production requirements.",
  },
  {
    number: "07",
    icon: Building2,
    title: "Multi-Level Industrial Structures",
    description:
      "Vertical steel systems combining heavy columns, beams, floor framing, platforms, staircases and equipment-support requirements.",
  },
  {
    number: "08",
    icon: PackageOpen,
    title: "Material Handling Structures",
    description:
      "Structural framing developed for conveyors, transfer systems, material-handling equipment and associated access requirements.",
  },
  {
    number: "09",
    icon: HardHat,
    title: "Maintenance & Access Structures",
    description:
      "Engineered staircases, walkways, platforms and support systems designed for safe industrial access and maintenance activities.",
  },
  {
    number: "10",
    icon: ShieldCheck,
    title: "Specialized Steel Infrastructure",
    description:
      "Project-specific heavy steel solutions developed for unique loads, complex geometry, operational constraints and execution conditions.",
  },
];

export default function HeavySteelApplications() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Factory size={15} />
            Structural Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Where Heavy Steel Structures Deliver Maximum Performance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Heavy structural steel systems support demanding industrial
            applications where high loads, complex framing, equipment
            integration and reliable long-term performance are essential.
          </p>
        </motion.div>

        {/* Application cards */}

        <div className="relative z-10 mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)]"
              >
                {/* Accent line */}

                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary-red transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={26} />
                  </div>

                  <span className="text-[42px] font-black leading-none text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                  Heavy Steel Application
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-14 isolate overflow-hidden rounded-[36px] bg-primary-blue p-8 shadow-[0_32px_90px_rgba(27,63,104,0.2)] md:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Custom Heavy Steel Solution
              </p>

              <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Need a Heavy Steel Structure Designed Around Complex Loads?
              </h3>

              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/70">
                Our engineering team develops coordinated structural solutions
                according to equipment loads, structural spans, access,
                platforms, stability, fabrication and erection requirements.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="group inline-flex min-h-[58px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Discuss Your Project

              <ArrowUpRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}