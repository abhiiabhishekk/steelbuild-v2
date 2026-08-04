"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Hammer,
  PackageCheck,
  Settings,
  ShoppingCart,
  Tractor,
  Truck,
  Warehouse,
  Wheat,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Factory,
    title: "Manufacturing Facilities",
    description:
      "Industrial sheds planned around machinery placement, production flow, utilities, material movement and future expansion requirements.",
    className: "xl:col-span-2 xl:row-span-2",
    featured: true,
  },
  {
    number: "02",
    icon: Hammer,
    title: "Engineering Workshops",
    description:
      "Flexible workshop spaces for fabrication, maintenance, assembly and equipment-related industrial activities.",
    className: "",
    featured: false,
  },
  {
    number: "03",
    icon: Warehouse,
    title: "Storage Sheds",
    description:
      "Covered industrial storage spaces designed for organized material handling and operational access.",
    className: "",
    featured: false,
  },
  {
    number: "04",
    icon: Truck,
    title: "Logistics Facilities",
    description:
      "Efficient buildings supporting vehicle circulation, loading activity, dispatch and logistics operations.",
    className: "xl:col-span-2",
    featured: false,
  },
  {
    number: "05",
    icon: Settings,
    title: "Assembly Units",
    description:
      "Purpose-built spaces developed around assembly lines, tools, workstations and internal circulation.",
    className: "",
    featured: false,
  },
  {
    number: "06",
    icon: PackageCheck,
    title: "Packaging Facilities",
    description:
      "Industrial sheds for packaging, sorting, finished-goods handling and related operational functions.",
    className: "",
    featured: false,
  },
  {
    number: "07",
    icon: Wheat,
    title: "Food Processing Units",
    description:
      "Coordinated industrial buildings for processing, handling, packaging and utility requirements.",
    className: "xl:col-span-2",
    featured: false,
  },
  {
    number: "08",
    icon: Tractor,
    title: "Agricultural Sheds",
    description:
      "Steel sheds for equipment storage, agricultural processing and protected operational areas.",
    className: "",
    featured: false,
  },
  {
    number: "09",
    icon: ShoppingCart,
    title: "FMCG Facilities",
    description:
      "Fast-moving consumer goods facilities planned around production, storage and dispatch operations.",
    className: "",
    featured: false,
  },
  {
    number: "10",
    icon: Building2,
    title: "General Industrial Buildings",
    description:
      "Customized industrial shed solutions for varied manufacturing, service and operational requirements.",
    className: "xl:col-span-2",
    featured: false,
  },
];

const applicationStrengths = [
  "Production-oriented planning",
  "Material-flow coordination",
  "Vehicle access integration",
  "Flexible internal clear space",
  "Future expansion readiness",
  "Roof ventilation provisions",
];

export default function IndustrialShedsApplications() {
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
            <Factory size={15} />
            Industrial Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Industrial Shed Solutions Across Diverse Operations
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Industrial sheds can be configured around production, assembly,
            storage, processing, logistics and specialized operational
            requirements.
          </p>
        </motion.div>

        {/* Asymmetric application mosaic */}

        <div className="relative z-10 mt-16 grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                className={`group relative flex min-h-[260px] flex-col overflow-hidden rounded-[30px] border transition-all duration-500 hover:-translate-y-2 ${item.className} ${
                  item.featured
                    ? "border-primary-blue bg-primary-blue p-8 shadow-[0_30px_90px_rgba(27,63,104,0.2)] md:p-10"
                    : "border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)]"
                }`}
              >
                {item.featured && (
                  <>
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

                    <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />
                  </>
                )}

                {!item.featured && (
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary-red transition-transform duration-500 group-hover:scale-x-100" />
                )}

                <span
                  className={`pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none ${
                    item.featured
                      ? "text-white/[0.06]"
                      : "text-primary-blue/[0.045]"
                  }`}
                >
                  {item.number}
                </span>

                <div className="relative z-10 flex h-full flex-col">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-105 ${
                      item.featured
                        ? "bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]"
                        : "bg-primary-red/10 text-primary-red group-hover:bg-primary-red group-hover:text-white"
                    }`}
                  >
                    <Icon size={26} />
                  </div>

                  <p
                    className={`mt-7 text-[10px] font-black uppercase tracking-[0.2em] ${
                      item.featured
                        ? "text-primary-red"
                        : "text-primary-red"
                    }`}
                  >
                    Industrial Application {item.number}
                  </p>

                  <h3
                    className={`mt-3 font-black leading-tight tracking-[-0.035em] ${
                      item.featured
                        ? "max-w-xl text-3xl text-white md:text-4xl"
                        : "text-2xl text-primary-blue"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-4 flex-1 font-medium ${
                      item.featured
                        ? "max-w-2xl text-base leading-8 text-white/70"
                        : "text-sm leading-7 text-gray-500"
                    }`}
                  >
                    {item.description}
                  </p>

                  {item.featured && (
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                      {applicationStrengths.map((strength) => (
                        <div
                          key={strength}
                          className="flex min-h-[60px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 backdrop-blur-md"
                        >
                          <PackageCheck
                            size={17}
                            className="mt-0.5 shrink-0 text-primary-red"
                          />

                          <span className="text-sm font-black leading-6 text-white/80">
                            {strength}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom project discussion panel */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-14 overflow-hidden rounded-[36px] border border-gray-200 bg-[#f8fafc] p-8 shadow-[0_24px_75px_rgba(27,63,104,0.1)] md:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Purpose-Built Industrial Shed
              </p>

              <h3 className="mt-4 max-w-4xl text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl">
                Need an Industrial Shed Planned Around Your Workflow?
              </h3>

              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-gray-600">
                Share your production process, storage needs, equipment layout,
                clear height, access and future expansion requirements with our
                project team.
              </p>
            </div>

            <Link
              href="/request-a-quote"
              className="group inline-flex min-h-[58px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
            >
              Discuss Your Shed Project

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