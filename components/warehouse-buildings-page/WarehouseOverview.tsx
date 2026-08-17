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
            <div className="relative isolate overflow-hidden rounded-[26px] bg-primary-blue p-3 shadow-[0_28px_70px_rgba(27,63,104,0.20)] sm:rounded-[32px] sm:p-4 md:rounded-[38px] md:p-6 md:shadow-[0_38px_100px_rgba(27,63,104,0.22)]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-2 sm:rounded-[26px] sm:p-3 md:rounded-[30px]">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[20px] sm:aspect-[5/4] sm:rounded-[24px]">
  <Image
    src="/images/products/warehouse-buildings/warehouse-building-v2.JPG"
    alt="Warehouse building designed for storage, logistics and loading operations"
    fill
    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 55vw"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/70 via-primary-blue/10 to-transparent" />

  {/* Storage zone */}

  <div
    className="
      absolute left-3 right-3 top-3
      rounded-[16px]
      border border-white/15
      bg-primary-blue/90
      px-4 py-3
      backdrop-blur-md

      sm:left-5
      sm:right-auto
      sm:top-5
      sm:max-w-[270px]
      sm:rounded-2xl
    "
  >
    <p className="text-[8px] font-black uppercase leading-[1.4] tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
      Storage Zone
    </p>

    <p className="mt-1 text-[13px] font-black leading-[1.3] text-white sm:text-sm">
      High-Capacity Internal Space
    </p>
  </div>

  {/* Loading + Dispatch zones */}

  <div
    className="
      absolute bottom-3 left-3 right-3
      grid gap-2

      sm:bottom-5
      sm:left-5
      sm:right-5
      sm:grid-cols-2
      sm:gap-4
    "
  >
    <div className="rounded-[16px] border border-white/15 bg-primary-blue/90 px-4 py-3 backdrop-blur-md sm:rounded-2xl">
      <p className="text-[8px] font-black uppercase leading-[1.4] tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
        Loading Zone
      </p>

      <p className="mt-1 text-[13px] font-black leading-[1.3] text-white sm:text-sm">
        Vehicle & Dock Coordination
      </p>
    </div>

    <div className="rounded-[16px] border border-white/15 bg-primary-blue/90 px-4 py-3 backdrop-blur-md sm:rounded-2xl">
      <p className="text-[8px] font-black uppercase leading-[1.4] tracking-[0.18em] text-primary-red sm:text-[10px] sm:tracking-[0.2em]">
        Dispatch Zone
      </p>

      <p className="mt-1 text-[13px] font-black leading-[1.3] text-white sm:text-sm">
        Organized Material Movement
      </p>
    </div>
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
              className="relative z-20 mx-3 -mt-5 rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_24px_75px_rgba(27,63,104,0.13)] min-[390px]:mx-4 min-[390px]:p-6 sm:-mt-7 sm:rounded-[28px] md:mx-8 md:-mt-8 md:rounded-[30px] md:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)] sm:h-14 sm:w-14">
  <PackageCheck size={23} className="sm:h-[26px] sm:w-[26px]" />
</div>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                    Warehouse Capability
                  </p>

                  <h3 className="mt-2 text-xl font-black leading-[1.2] text-primary-blue sm:text-2xl sm:leading-tight">
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