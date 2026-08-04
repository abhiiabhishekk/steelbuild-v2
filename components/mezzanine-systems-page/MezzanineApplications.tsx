"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Building2,
  ClipboardCheck,
  Factory,
  Layers3,
  Package,
  Warehouse,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Boxes,
    title: "Additional Storage Areas",
    description:
      "Intermediate floors can create organized storage space above existing operational areas.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Office & Administrative Space",
    description:
      "Mezzanine levels can support offices, supervision rooms and administrative functions within industrial facilities.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Production Support Areas",
    description:
      "Additional floor space can be coordinated around assembly, inspection or supporting production activities.",
  },
  {
    number: "04",
    icon: Package,
    title: "Packing & Dispatch Support",
    description:
      "Mezzanine layouts can support packing, sorting and material-handling requirements according to approved workflow.",
  },
  {
    number: "05",
    icon: ClipboardCheck,
    title: "Quality & Inspection Zones",
    description:
      "Dedicated intermediate areas can be planned for inspection, documentation and operational control activities.",
  },
];

export default function MezzanineApplications() {
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
            <Layers3 size={15} />
            Mezzanine Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Mezzanine Systems for Diverse Operational Requirements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steel mezzanine systems can create additional functional areas for
            storage, offices, production support and material-handling
            activities.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          {/* Featured application */}

          <motion.article
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                  <Warehouse size={29} />
                </div>

                {/* <span className="text-[72px] font-black leading-none text-white/[0.06]">
                  01
                </span> */}
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Featured Mezzanine Use
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Additional Storage Without Changing the Building Footprint
              </h3>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/70">
                Mezzanine systems can create an intermediate storage level while
                retaining functional space below, subject to approved loading,
                layout and access requirements.
              </p>

              <div className="mt-10 space-y-5 border-t border-white/15 pt-8">
                <div className="flex items-start gap-4">
                  <Boxes
                    size={23}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-sm font-black leading-7 text-white/80">
                    Storage areas can be coordinated around inventory type,
                    handling requirements and internal movement.
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <Wrench
                    size={23}
                    className="mt-0.5 shrink-0 text-primary-red"
                  />

                  <p className="text-sm font-black leading-7 text-white/80">
                    Final framing and access arrangements follow the approved
                    structural and operational design.
                  </p>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Application rows */}

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group grid gap-5 py-7 sm:grid-cols-[64px_1fr_auto] sm:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Mezzanine Application {item.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-[48px] font-black leading-none text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Scope note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-[#f7f9fc] px-7 py-6 md:px-9"
        >
          <Layers3
            size={24}
            className="mt-0.5 shrink-0 text-primary-red"
          />

          <p className="text-sm font-bold leading-7 text-primary-blue">
            The intended application, approved loading, access, clearances and
            existing building conditions determine the final mezzanine
            configuration.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}