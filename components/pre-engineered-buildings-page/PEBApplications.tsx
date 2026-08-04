"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CarFront,
  Factory,
  Forklift,
  HeartPulse,
  Layers3,
  PackageCheck,
  ShoppingBag,
  Snowflake,
  Sprout,
  Store,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    icon: Warehouse,
    title: "Warehousing & Logistics",
    description:
      "Large-span warehouses, distribution centres, fulfilment hubs and logistics facilities designed for operational efficiency.",
    href: "/industries/warehousing-logistics",
  },
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    description:
      "Production plants, assembly facilities, engineering units and industrial buildings developed around process requirements.",
    href: "/industries/industrial-manufacturing",
  },
  {
    icon: PackageCheck,
    title: "Food & FMCG",
    description:
      "Food processing plants, packaging units, beverage facilities and FMCG manufacturing infrastructure.",
    href: "/industries/food-fmcg",
  },
  {
    icon: HeartPulse,
    title: "Pharma & Healthcare",
    description:
      "Controlled industrial spaces, pharmaceutical manufacturing units and healthcare-related infrastructure.",
    href: "/industries/pharma-healthcare",
  },
  {
    icon: Snowflake,
    title: "Cold Storage Facilities",
    description:
      "Temperature-controlled buildings, insulated facilities and cold-chain infrastructure for sensitive goods.",
    href: "/industries/agriculture-cold-storage",
  },
  {
    icon: CarFront,
    title: "Automobile & Engineering",
    description:
      "Automotive plants, component manufacturing units, workshops and precision engineering facilities.",
    href: "/industries/automobile-engineering",
  },
  {
    icon: Sprout,
    title: "Agriculture Infrastructure",
    description:
      "Agri-processing units, storage facilities, seed warehouses and rural industrial infrastructure.",
    href: "/industries/agriculture-cold-storage",
  },
  {
    icon: Layers3,
    title: "Textile & Garments",
    description:
      "Textile plants, garment units, processing facilities and large industrial production spaces.",
    href: "/industries/textile-garments",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Commercial",
    description:
      "Retail warehouses, commercial steel buildings, showrooms and high-utility business facilities.",
    href: "/industries/retail-commercial",
  },
  {
    icon: Forklift,
    title: "Infrastructure & Construction",
    description:
      "Project support buildings, utility structures, workshops and construction-related industrial facilities.",
    href: "/industries/infrastructure-construction",
  },
  {
    icon: Store,
    title: "Institutional Facilities",
    description:
      "Training centres, institutional buildings, service facilities and government infrastructure applications.",
    href: "/industries/institutional-government",
  },
  {
    icon: Building2,
    title: "Custom Industrial Buildings",
    description:
      "Purpose-built steel structures developed around unique dimensions, operations, equipment and future expansion requirements.",
    href: "/request-a-quote",
  },
];

export default function PEBApplications() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

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
            PEB Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Pre-Engineered Buildings for Diverse Industrial Requirements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild develops Pre-Engineered Building solutions for
            manufacturing, warehousing, processing, logistics and commercial
            applications across multiple industries.
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
                  delay: index * 0.045,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)]"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] transition-transform duration-300 group-hover:scale-105">
                    <Icon size={26} />
                  </div>

                  <span className="text-[34px] font-black leading-none text-primary-blue/[0.05]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                  Industrial Application
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 flex-1 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>

                {/* <Link
                  href={item.href}
                  className="group/link mt-7 inline-flex w-fit items-center gap-2 font-black !text-primary-red transition-colors duration-300 hover:!text-primary-blue"
                >
                  Explore Application

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                  />
                </Link> */}
              </motion.article>
            );
          })}
        </div>

        {/* Bottom banner */}

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
                Project-Specific Engineering
              </p>

              <h3 className="mt-3 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl">
                Every Building Is Developed Around Its Operational Purpose
              </h3>

              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-white/70">
                Building dimensions, loading conditions, equipment,
                circulation, ventilation, future expansion and operational
                requirements are considered during project development.
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