"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Layers3,
  PanelsTopLeft,
  ShieldCheck,
  SquareStack,
} from "lucide-react";

import Container from "@/components/layout/Container";

const claddingTypes = [
  {
    number: "01",
    icon: PanelsTopLeft,
    eyebrow: "Profiled Exterior Wall System",
    title: "Wall Cladding",
    description:
      "Profiled steel wall sheets form the external façade of industrial and commercial steel buildings and are coordinated with wall girts, openings, trims and approved elevation layouts.",
    suitableFor: [
      "Industrial buildings",
      "Warehouses",
      "Factory buildings",
      "Commercial steel buildings",
    ],
  },
  {
    number: "02",
    icon: Layers3,
    eyebrow: "Insulated Panel System",
    title: "Sandwich Panels",
    description:
      "Factory-manufactured sandwich panels combine external facings and an insulation core where insulated wall-envelope construction is included in the approved project scope.",
    suitableFor: [
      "Temperature-controlled areas",
      "Cold-storage applications",
      "Process facilities",
      "Selected commercial spaces",
    ],
  },
];

const supportingDetails = [
  "Corner trims",
  "Opening flashings",
  "Base and eave details",
  "Panel joints",
  "Fastening arrangements",
  "Roof-to-wall interfaces",
];

export default function CladdingTypes() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

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
            <SquareStack size={15} />
            Cladding System Options
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Cladding Solutions for Different Building-Envelope Requirements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Cladding-system selection depends on building use, façade design,
            environmental exposure, insulation requirements and the approved
            project scope.
          </p>
        </motion.div>

        {/* Main type sections */}

        <div className="relative z-10 mt-16 space-y-8">
          {claddingTypes.map((item, index) => {
            const Icon = item.icon;
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative isolate overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-[0_24px_75px_rgba(27,63,104,0.09)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/20 hover:shadow-[0_34px_90px_rgba(27,63,104,0.14)]"
              >
                <div
                  className={`grid lg:grid-cols-[0.4fr_1.6fr] ${
                    reverse ? "lg:grid-cols-[1.6fr_0.4fr]" : ""
                  }`}
                >
                  {/* Number and icon panel */}

                  <div
                    className={`relative isolate flex min-h-[260px] flex-col justify-between overflow-hidden bg-primary-blue p-8 md:p-10 ${
                      reverse ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:52px_52px]" />

                    <div className="pointer-events-none absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-primary-red/20 blur-[80px]" />

                    <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-[20px] bg-primary-red text-white shadow-[0_14px_35px_rgba(194,17,25,0.28)]">
                      <Icon size={29} />
                    </div>

                    <span className="relative z-10 mt-12 text-[74px] font-black leading-none text-white/[0.09]">
                      {item.number}
                    </span>
                  </div>

                  {/* Type content */}

                  <div
                    className={`p-8 md:p-10 lg:p-12 ${
                      reverse ? "lg:order-1" : ""
                    }`}
                  >
                    <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
                      {item.eyebrow}
                    </p>

                    <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-4xl text-base font-medium leading-8 text-gray-600">
                      {item.description}
                    </p>

                    <div className="mt-8 border-t border-gray-200 pt-7">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                        Typical Applications
                      </p>

                      <div className="mt-5 grid gap-x-6 gap-y-4 sm:grid-cols-2">
                        {item.suitableFor.map((application) => (
                          <div
                            key={application}
                            className="flex items-start gap-3"
                          >
                            <BadgeCheck
                              size={18}
                              className="mt-0.5 shrink-0 text-primary-red"
                            />

                            <span className="text-sm font-black leading-6 text-primary-blue">
                              {application}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Supporting details */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 grid gap-8 rounded-[34px] border border-gray-200 bg-white p-8 shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
        >
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
              <Building2 size={26} />
            </div>

            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
              Supporting Façade Details
            </p>

            <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue">
              Details Complete the Cladding System
            </h3>

            <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
              Profiles alone do not complete the façade. Trims, flashings,
              joints, openings and fixing arrangements must be coordinated with
              the approved building-envelope design.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-1 sm:grid-cols-2">
            {supportingDetails.map((detail) => (
              <div
                key={detail}
                className="flex items-center gap-3 border-b border-gray-200 py-4"
              >
                <ShieldCheck
                  size={18}
                  className="shrink-0 text-primary-red"
                />

                <span className="text-sm font-black text-primary-blue">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Engineering note */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto mt-14 max-w-5xl overflow-hidden rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

          <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Cladding Selection Must Follow the Approved Project Design
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                The final system, profile, insulation arrangement, coatings,
                accessories and fixing details are determined according to the
                approved drawings, project specifications and building use.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}