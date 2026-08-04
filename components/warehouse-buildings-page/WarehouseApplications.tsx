"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  Factory,
  PackageCheck,
  ShoppingBag,
  Store,
  Truck,
  Warehouse,
  Wheat,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Truck,
    title: "Distribution Centres",
    description:
      "Large-scale warehouse facilities planned around inbound receiving, pallet storage, order movement, dock operations and regional dispatch.",
    featured: true,
  },
  {
    number: "02",
    icon: Warehouse,
    title: "General Warehousing",
    description:
      "Flexible storage buildings for industrial goods, raw materials, finished products and general inventory.",
    featured: false,
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Fulfilment Centres",
    description:
      "Operational facilities designed for sorting, picking, packing, order consolidation and fast dispatch.",
    featured: false,
  },
  {
    number: "04",
    icon: Factory,
    title: "Manufacturing Warehouses",
    description:
      "Integrated storage spaces supporting raw materials, work-in-progress and finished goods near production operations.",
    featured: false,
  },
  {
    number: "05",
    icon: Boxes,
    title: "High-Bay Storage",
    description:
      "Warehouse buildings planned for increased clear height, vertical racking and higher storage density.",
    featured: false,
  },
  {
    number: "06",
    icon: ShoppingBag,
    title: "Retail Distribution",
    description:
      "Warehouses supporting inventory replenishment, regional distribution and organized goods movement for retail networks.",
    featured: false,
  },
  {
    number: "07",
    icon: Wheat,
    title: "Agricultural Storage",
    description:
      "Covered storage buildings for packaged agricultural products, equipment, processing inputs and related materials.",
    featured: false,
  },
  {
    number: "08",
    icon: Store,
    title: "FMCG Warehousing",
    description:
      "Fast-moving consumer goods warehouses planned for high inventory turnover, organized storage and frequent dispatch.",
    featured: false,
  },
  {
    number: "09",
    icon: Building2,
    title: "Industrial Storage Facilities",
    description:
      "Purpose-built storage buildings for engineering components, machinery parts, packaging materials and industrial products.",
    featured: false,
  },
];

const featuredStrengths = [
  "Multiple loading positions",
  "High-volume storage planning",
  "Clear vehicle circulation",
  "Inbound and outbound zoning",
  "Racking-compatible structure",
  "Future dock expansion",
];

const sectorGroups = [
  {
    title: "Storage",
    text: "Raw materials, finished goods and bulk inventory",
  },
  {
    title: "Logistics",
    text: "Receiving, sorting, movement and dispatch",
  },
  {
    title: "Distribution",
    text: "Regional supply and fulfilment operations",
  },
];

export default function WarehouseApplications() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

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
            <Warehouse size={15} />
            Warehouse Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Warehouse Buildings for Storage, Logistics and Distribution
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Warehouse facilities can be configured around inventory type,
            storage height, material movement, loading frequency and dispatch
            requirements.
          </p>
        </motion.div>

        {/* Main application composition */}

        <div className="relative z-10 mt-16 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          {/* Featured distribution centre */}

          <motion.article
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue p-8 shadow-[0_36px_100px_rgba(27,63,104,0.23)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                  <Truck size={29} />
                </div>

                <span className="text-[68px] font-black leading-none text-white/[0.06]">
                  01
                </span>
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Featured Application
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Distribution Centres Built Around Movement and Dispatch
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                Distribution centres require careful coordination between
                receiving zones, storage areas, order movement, loading docks
                and vehicle circulation to maintain efficient daily operations.
              </p>

              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {featuredStrengths.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[66px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                  >
                    <PackageCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[26px] border border-primary-red/25 bg-[#102f55] p-6">
                <div className="flex items-start gap-4">
                  <Boxes
                    size={24}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <div>
                    <h4 className="text-xl font-black text-white">
                      Storage and Dispatch Integration
                    </h4>

                    <p className="mt-2 text-sm font-medium leading-7 text-white/65">
                      Internal storage zones and external logistics areas are
                      planned together to reduce movement delays and improve
                      warehouse throughput.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Application matrix */}

          <div className="grid gap-5 md:grid-cols-2">
            {applications.slice(1).map((item, index) => {
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
                  className="group relative flex min-h-[250px] flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)]"
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary-red transition-transform duration-500 group-hover:scale-x-100" />

                  <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Warehouse Application {item.number}
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
        </div>

        {/* Sector strip */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-[#f8fafc] shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          {sectorGroups.map((item, index) => (
            <div
              key={item.title}
              className={`flex items-start gap-4 px-7 py-7 ${
                index < sectorGroups.length - 1
                  ? "border-b border-gray-200 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                {index === 0 ? (
                  <Boxes size={24} />
                ) : index === 1 ? (
                  <Truck size={24} />
                ) : (
                  <PackageCheck size={24} />
                )}
              </div>

              <div>
                <p className="text-xl font-black text-primary-blue">
                  {item.title}
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-gray-500">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Discussion panel */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 overflow-hidden rounded-[36px] border border-gray-200 bg-white p-8 shadow-[0_24px_75px_rgba(27,63,104,0.1)] md:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Warehouse Project Planning
              </p>

              <h3 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl">
                Need a Warehouse Designed Around Your Storage Operations?
              </h3>

              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-gray-600">
                Share your inventory type, required clear height, racking
                layout, loading frequency, vehicle movement and future
                expansion requirements.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="group inline-flex min-h-[58px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
            >
              Discuss Your Warehouse

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