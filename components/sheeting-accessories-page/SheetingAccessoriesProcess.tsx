"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  Layers3,
  SearchCheck,
  Truck,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const processSteps = [
  {
    number: "01",
    title: "Roof & Wall Detail Review",
    description:
      "Roof geometry, wall interfaces, penetrations, drainage routes, edge conditions and project specifications are reviewed.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Accessory Engineering",
    description:
      "Flashing profiles, ridge caps, trims, closures, fasteners, sealants, gutters and penetration details are finalized.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "Material Selection",
    description:
      "Material thickness, coating system, sealing components and accessory specifications are selected according to exposure conditions.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Precision Fabrication",
    description:
      "Sheet-metal accessories are cut, bent, roll-formed and finished according to approved fabrication drawings.",
    icon: Factory,
  },
  {
    number: "05",
    title: "Quality Inspection",
    description:
      "Dimensions, bend angles, coating condition, profile accuracy, fitment and accessory completeness are inspected.",
    icon: SearchCheck,
  },
  {
    number: "06",
    title: "Packing & Site Dispatch",
    description:
      "Flashings, trims, fasteners, closures, sealants and drainage components are protected and prepared for project delivery.",
    icon: Truck,
  },
  {
    number: "07",
    title: "Professional Installation",
    description:
      "Accessories are installed with approved fasteners, sealing systems and coordinated roof or wall interface details.",
    icon: Wrench,
  },
  {
    number: "08",
    title: "Final Inspection & Handover",
    description:
      "Weatherproofing, drainage continuity, edge finishing, penetration sealing and installation quality are verified.",
    icon: BadgeCheck,
  },
];

export default function SheetingAccessoriesProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Sheeting Accessory Process
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            From Detail Engineering
            <span className="block">
              to Final Weatherproof Installation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Every sheeting-accessory package follows a coordinated process
            covering interface review, accessory engineering, fabrication,
            quality control, installation and final inspection.
          </p>
        </motion.div>

        {/* Desktop Timeline */}

        <div className="relative z-10 mx-auto mt-20 hidden max-w-6xl md:block">
          <div className="pointer-events-none absolute bottom-10 left-1/2 top-10 w-px -translate-x-1/2 bg-gradient-to-b from-primary-red via-primary-blue/20 to-primary-red" />

          <div className="space-y-7">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -28 : 28,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="relative grid grid-cols-[1fr_100px_1fr] items-center gap-7"
                >
                  <div className="flex justify-end">
                    {isLeft ? (
                      <div className="w-full max-w-[470px] rounded-[28px] border border-gray-200 bg-white p-7 text-right shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                          Process Step {item.number}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  <div className="relative z-10 flex justify-center">
                    <div className="flex h-[76px] w-[76px] items-center justify-center rounded-[24px] border-4 border-white bg-primary-blue text-white shadow-[0_14px_38px_rgba(27,63,104,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red">
                      <Icon size={27} />
                    </div>
                  </div>

                  <div className="flex justify-start">
                    {!isLeft ? (
                      <div className="w-full max-w-[470px] rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]">
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                          Process Step {item.number}
                        </p>

                        <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}

        <div className="relative z-10 mt-14 space-y-5 md:hidden">
          <div className="pointer-events-none absolute bottom-8 left-7 top-8 w-px bg-gradient-to-b from-primary-red via-primary-blue/20 to-primary-red" />

          {processSteps.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="relative grid grid-cols-[56px_1fr] items-start gap-4"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-primary-blue text-white shadow-[0_12px_32px_rgba(27,63,104,0.16)]">
                  <Icon size={23} />
                </div>

                <div className="rounded-[26px] border border-gray-200 bg-white p-6 shadow-[0_16px_48px_rgba(27,63,104,0.07)]">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Process Step {item.number}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Engineering Note */}

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
              <BadgeCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Approved Interface Details Guide Every Stage
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Accessory profiles, flashing geometry, closures, fastener
                spacing, sealing systems, gutter sizing, drainage routes and
                installation sequence are finalized according to approved
                drawings, the primary sheeting system and project conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}