"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Building2,
  HeartPulse,
  PackageCheck,
  ShoppingBag,
  Snowflake,
  Truck,
  Warehouse,
  Wheat,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applicationGroups = [
  {
    number: "01",
    label: "Food & Agricultural Storage",
    applications: [
      {
        icon: Wheat,
        title: "Agricultural Produce Storage",
        description:
          "Cold-storage building infrastructure planned around receiving, internal storage, handling and dispatch requirements.",
      },
      {
        icon: PackageCheck,
        title: "Food Processing Support",
        description:
          "Storage facilities coordinated with processing, packaging and material-movement areas according to project needs.",
      },
    ],
  },
  {
    number: "02",
    label: "Healthcare & Consumer Products",
    applications: [
      {
        icon: HeartPulse,
        title: "Pharmaceutical Storage",
        description:
          "Building structures coordinated with approved storage layouts, controlled-access areas and specialist system requirements.",
      },
      {
        icon: ShoppingBag,
        title: "FMCG Cold Storage",
        description:
          "Facilities supporting organized storage, product handling, loading and frequent distribution operations.",
      },
    ],
  },
  {
    number: "03",
    label: "Warehousing & Distribution",
    applications: [
      {
        icon: Warehouse,
        title: "Temperature-Controlled Warehousing",
        description:
          "Warehouse buildings planned around insulated envelopes, storage zones, loading access and operational circulation.",
      },
      {
        icon: Truck,
        title: "Cold-Chain Distribution Facilities",
        description:
          "Infrastructure coordinated around receiving, staging, storage and dispatch movement within the approved facility layout.",
      },
    ],
  },
];

export default function ColdStorageApplications() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            <Snowflake size={15} />
            Cold Storage Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Cold Storage Infrastructure Across Essential Sectors
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Cold-storage buildings can be developed around different products,
            storage workflows, access requirements and distribution
            operations.
          </p>
        </motion.div>

        {/* Application bands */}

        <div className="relative z-10 mt-16 space-y-6">
          {applicationGroups.map((group, groupIndex) => (
            <motion.article
              key={group.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{
                duration: 0.55,
                delay: groupIndex * 0.07,
              }}
              className="group relative overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_18px_58px_rgba(27,63,104,0.075)] transition-all duration-500 hover:border-primary-red/20 hover:shadow-[0_28px_85px_rgba(27,63,104,0.13)]"
            >
              <div className="grid lg:grid-cols-[0.34fr_1.66fr]">
                {/* Group label */}

                <div className="relative isolate overflow-hidden bg-primary-blue px-7 py-8 md:px-9 lg:flex lg:flex-col lg:justify-between lg:py-10">
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#286295_50%,#113158_100%)]" />

                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

                  <div className="relative z-10">
                    <span className="text-[54px] font-black leading-none text-white/[0.08]">
                      {group.number}
                    </span>

                    <p className="mt-5 text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
                      Application Group
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                      {group.label}
                    </h3>
                  </div>

                  <Building2
                    size={28}
                    className="relative z-10 mt-8 text-white/25"
                  />
                </div>

                {/* Two applications */}

                <div className="grid md:grid-cols-2">
                  {group.applications.map((application, index) => {
                    const Icon = application.icon;

                    return (
                      <div
                        key={application.title}
                        className={`relative flex min-h-[260px] flex-col px-7 py-8 md:px-9 md:py-10 ${
                          index === 0
                            ? "border-b border-gray-200 md:border-b-0 md:border-r"
                            : ""
                        }`}
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                          <Icon size={26} />
                        </div>

                        <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                          Cold Storage Use
                        </p>

                        <h4 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                          {application.title}
                        </h4>

                        <p className="mt-4 max-w-xl text-sm font-medium leading-7 text-gray-500">
                          {application.description}
                        </p>

                        <div className="mt-auto pt-7">
                          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.17em] text-primary-blue/45">
                            <Boxes
                              size={15}
                              className="text-primary-red"
                            />
                            Project-Specific Planning
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-12 max-w-5xl border-l-4 border-primary-red bg-[#f7f9fc] px-7 py-6 md:px-9"
        >
          <p className="text-base font-bold leading-8 text-primary-blue">
            Final storage configuration, insulated systems and specialist
            service requirements are developed according to the approved
            project design and operational inputs.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}