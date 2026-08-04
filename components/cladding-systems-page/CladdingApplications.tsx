"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Landmark,
  PanelsTopLeft,
  ShieldCheck,
  Snowflake,
  Store,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Factory,
    title: "Industrial Manufacturing Buildings",
    description:
      "Wall-cladding systems coordinated for manufacturing plants, engineering units and industrial production facilities.",
  },
  {
    number: "02",
    icon: Warehouse,
    title: "Warehouse & Logistics Facilities",
    description:
      "Exterior wall systems developed around storage buildings, logistics centres, loading areas and approved façade requirements.",
  },
  {
    number: "03",
    icon: Building2,
    title: "Factory Buildings",
    description:
      "Cladding layouts coordinated with production buildings, wall openings, ventilation provisions and structural framing.",
  },
  {
    number: "04",
    icon: Store,
    title: "Commercial Steel Buildings",
    description:
      "Façade systems planned for showrooms, offices, retail facilities and commercial developments using steel construction.",
  },
  {
    number: "05",
    icon: Snowflake,
    title: "Temperature-Controlled Facilities",
    description:
      "Sandwich-panel wall systems can be incorporated where insulated building-envelope construction forms part of the approved project scope.",
  },
  {
    number: "06",
    icon: Landmark,
    title: "Institutional & Infrastructure Buildings",
    description:
      "Project-specific cladding coordinated for institutional, utility and infrastructure-related steel buildings.",
  },
];

const applicationGroups = [
  "Industrial Facilities",
  "Warehouse Buildings",
  "Factory Buildings",
  "Commercial Projects",
  "Temperature-Controlled Areas",
  "Institutional Structures",
];

export default function CladdingApplications() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            Cladding Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Cladding Systems Across Different Building Applications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Cladding systems are selected and coordinated according to building
            use, façade intent, structural arrangement and approved project
            requirements.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          {/* Left feature panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                <PanelsTopLeft size={29} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Application Areas
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Façade Systems Developed Around Building Use
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                The final cladding arrangement depends on the intended building
                function, elevation design, wall openings, environmental
                exposure and approved project scope.
              </p>

              <div className="mt-9 space-y-4">
                {applicationGroups.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-b border-white/10 pb-4 last:border-b-0 last:pb-0"
                  >
                    <ShieldCheck
                      size={18}
                      className="mt-0.5 shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-white/15 pt-7">
                <p className="text-sm font-black leading-7 text-white/80">
                  Wall profiles, panel orientation, trims, openings and fixing
                  details are finalized according to each project&apos;s
                  approved structural and architectural requirements.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right application rows */}

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
                  className="group grid gap-5 py-8 sm:grid-cols-[64px_1fr_auto] sm:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Application {item.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-[52px] font-black leading-none text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-16 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Every Cladding Application Requires Project-Specific Coordination
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Cladding profiles, insulation arrangements, coatings,
                accessories and installation details are developed according to
                approved drawings, building use and site conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}