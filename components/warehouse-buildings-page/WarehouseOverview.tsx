"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Boxes,
  PackageCheck,
  Ruler,
  ShieldCheck,
  Truck,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const warehouseModules = [
  {
    number: "01",
    icon: Boxes,
    title: "Storage Planning",
    description:
      "Clear internal areas coordinated around pallet storage, floor stacking, racks and inventory organization.",
  },
  {
    number: "02",
    icon: Truck,
    title: "Loading Operations",
    description:
      "Dock positions, vehicle access, loading areas and dispatch movement planned around daily logistics activity.",
  },
  {
    number: "03",
    icon: Ruler,
    title: "Height Utilization",
    description:
      "Building clear height and structural configuration developed to support efficient vertical storage.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Building Protection",
    description:
      "Roofing, cladding, drainage and ventilation systems coordinated to protect stored goods and operations.",
  },
];

const warehouseCapabilities = [
  "Clear-span storage space",
  "High-bay warehouse planning",
  "Racking-compatible layouts",
  "Loading and unloading zones",
  "Vehicle circulation planning",
  "Future expansion provisions",
];

export default function WarehouseOverview() {
  return (
    <section
      id="warehouse-overview"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
          {/* Left visual */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_38px_100px_rgba(27,63,104,0.22)] md:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
                <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
                  <Image
                    src="/images/products/warehouse-buildings/warehouse-building-v2.JPG"
                    alt="Warehouse building designed for storage, logistics and loading operations"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 1280px) 100vw, 55vw"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/65 via-primary-blue/5 to-transparent" />

                  {/* Operational zone labels */}

                  <div className="absolute left-5 top-5 rounded-2xl border border-white/15 bg-primary-blue/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Storage Zone
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      High-Capacity Internal Space
                    </p>
                  </div>

                  <div className="absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-primary-blue/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Loading Zone
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Vehicle & Dock Coordination
                    </p>
                  </div>

                  <div className="absolute bottom-5 right-5 rounded-2xl border border-white/15 bg-primary-blue/80 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Dispatch Zone
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Organized Material Movement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Capability strip */}

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="relative z-20 mx-4 -mt-8 rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_24px_75px_rgba(27,63,104,0.13)] md:mx-8 md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]">
                  <PackageCheck size={26} />
                </div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Warehouse Capability
                  </p>

                  <h3 className="mt-2 text-2xl font-black leading-tight text-primary-blue">
                    Planned Around Storage and Logistics
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {warehouseCapabilities.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[62px] items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-4 py-4"
                  >
                    <BadgeCheck
                      size={17}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-primary-blue">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right content */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-90px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
              <Warehouse size={15} />
              Warehouse Building Overview
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Engineered Warehouse Buildings for Efficient Storage and Movement
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-gray-600">
              Warehouse buildings must support more than covered storage. Their
              structure, height, access, circulation and loading arrangements
              directly influence inventory capacity and daily logistics
              performance.
            </p>

            <p className="mt-5 text-base font-medium leading-8 text-gray-500">
              Steelbuild Infra Projects Limited develops warehouse solutions
              according to storage type, racking layout, material-handling
              equipment, vehicle movement, loading operations and future
              expansion requirements.
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {warehouseModules.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_16px_48px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_26px_70px_rgba(27,63,104,0.13)]"
                  >
                    <span className="pointer-events-none absolute right-4 top-3 text-[42px] font-black leading-none text-primary-blue/[0.045]">
                      {item.number}
                    </span>

                    <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Warehouse Module {item.number}
                    </p>

                    <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}