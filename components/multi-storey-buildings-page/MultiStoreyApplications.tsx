"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  Hotel,
  Landmark,
  Layers3,
  ParkingSquare,
  ShoppingBag,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Building2,
    title: "Commercial Office Buildings",
    description:
      "Flexible multi-level office buildings designed around workspaces, circulation, services and future expansion requirements.",
  },
  {
    number: "02",
    icon: Landmark,
    title: "Business Centres",
    description:
      "Efficient vertical steel structures for corporate centres, administration buildings and professional business facilities.",
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "Shopping Complexes",
    description:
      "Multi-floor commercial spaces developed for retail zones, customer circulation, utilities and mixed business requirements.",
  },
  {
    number: "04",
    icon: HeartPulse,
    title: "Healthcare Facilities",
    description:
      "Coordinated steel buildings for healthcare support infrastructure, diagnostic centres and institutional requirements.",
  },
  {
    number: "05",
    icon: Hotel,
    title: "Hotels & Hospitality",
    description:
      "Multi-level steel structures supporting guest areas, service floors, utilities and hospitality operations.",
  },
  {
    number: "06",
    icon: GraduationCap,
    title: "Educational Institutions",
    description:
      "Steel-framed academic buildings for classrooms, laboratories, training centres and institutional facilities.",
  },
  {
    number: "07",
    icon: ParkingSquare,
    title: "Multi-Level Parking",
    description:
      "Optimized structural grids for vehicle movement, ramp planning, parking efficiency and vertical load requirements.",
  },
  {
    number: "08",
    icon: Factory,
    title: "Industrial Multi-Level Buildings",
    description:
      "Multi-floor production, utility, process and support buildings engineered around industrial operational requirements.",
  },
  {
    number: "09",
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description:
      "Vertical storage and distribution facilities designed for efficient material movement and organized floor usage.",
  },
  {
    number: "10",
    icon: Layers3,
    title: "Mixed-Use Developments",
    description:
      "Integrated multi-level buildings combining commercial, industrial, office, storage and service functions.",
  },
];

export default function MultiStoreyApplications() {
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
            <Building2 size={15} />
            Building Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Where Multi-Storey Steel Buildings Deliver Maximum Value
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Multi-storey steel structures provide flexibility, speed,
            structural efficiency and improved space utilization across
            commercial, institutional, industrial and mixed-use developments.
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
                  Multi-Storey Application
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>

                {/* <div className="mt-7 flex items-center gap-2 text-sm font-black text-primary-red">
                  Purpose-Built Solution

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div> */}
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
                Custom Multi-Storey Solution
              </p>

              <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Need a Multi-Level Building Designed Around Your Operations?
              </h3>

              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/70">
                Our engineering team develops coordinated structural solutions
                according to floor usage, loading, access, services, equipment
                and future expansion requirements.
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