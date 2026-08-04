"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  Building2,
  Layers3,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

const advantages = [
  {
    number: "01",
    icon: Boxes,
    title: "Better Vertical Space Utilization",
    description:
      "Available building height can be used more effectively through an engineered intermediate floor system.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Flexible Working Areas",
    description:
      "Mezzanine levels can support storage, offices, assembly, inspection or operational support according to project requirements.",
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Project-Specific Structural Design",
    description:
      "Columns, beams and floor framing are developed according to approved loading, layout and intended usage.",
  },
  {
    number: "04",
    icon: Workflow,
    title: "Operational Adaptability",
    description:
      "The mezzanine layout can be coordinated with workflow, access and future operational requirements considered during engineering.",
  },
];

export default function MezzanineAdvantages() {
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
            Mezzanine Advantages
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Why Choose an Engineered Steel Mezzanine System?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Mezzanine systems help create additional functional floor area
            within the available building height while supporting approved
            operational and structural requirements.
          </p>
        </motion.div>

        {/* Main feature */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mt-16 isolate overflow-hidden rounded-[38px] border border-gray-200 bg-[#f7f9fc] px-8 py-12 shadow-[0_24px_75px_rgba(27,63,104,0.08)] md:px-12 lg:px-16 lg:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-blue/10 blur-[90px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[0.3fr_1.7fr] lg:items-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-primary-blue text-white shadow-[0_20px_55px_rgba(27,63,104,0.18)]">
              <Layers3 size={42} />
            </div>

            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Core Mezzanine Value
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl lg:text-[46px]">
                Designed Around Available Building Height
              </h3>

              <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-gray-600">
                Additional usable floor space can be created within an existing
                or planned industrial building according to approved structural
                design, access requirements and intended operational use.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Advantage cards */}

        <div className="relative z-10 mt-14 grid gap-6 md:grid-cols-2">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.13)] md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-primary-red transition-transform duration-500 group-hover:scale-x-100" />

                <span className="pointer-events-none absolute right-5 top-4 text-[52px] font-black leading-none text-primary-blue/[0.045]">
                  {item.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={26} />
                </div>

                <p className="mt-7 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                  Mezzanine Advantage {item.number}
                </p>

                <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 max-w-6xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Engineering Inputs Define the Final Mezzanine System
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Every mezzanine system is developed according to approved
                loading, structural layout, connection details, access
                requirements and applicable project specifications.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}