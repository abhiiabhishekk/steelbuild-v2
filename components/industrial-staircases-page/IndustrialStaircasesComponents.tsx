"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Building2,
  Fence,
  Footprints,
  Frame,
  ShieldCheck,
  SquareStack,
  Workflow,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    icon: Frame,
    title: "Steel Stringers",
    description:
      "Primary inclined structural members supporting the staircase.",
  },
  {
    icon: Footprints,
    title: "Steel Treads",
    description:
      "Industrial walking surfaces developed for the approved staircase geometry.",
  },
  {
    icon: Workflow,
    title: "Intermediate Landings",
    description:
      "Platform areas providing level transitions between staircase flights.",
  },
  {
    icon: Fence,
    title: "Handrails",
    description:
      "Continuous hand support provided along staircase flights.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrails",
    description:
      "Edge protection around landings and elevated access areas.",
  },
  {
    icon: Building2,
    title: "Support Columns",
    description:
      "Structural members transferring staircase loads into the building frame.",
  },
  {
    icon: SquareStack,
    title: "Connection Plates",
    description:
      "Fabricated steel connections joining staircase members together.",
  },
  {
    icon: ArrowUp,
    title: "Upper Landing",
    description:
      "Final access point connecting to mezzanines or elevated platforms.",
  },
];

export default function IndustrialStaircasesComponents() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Staircase Components
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-primary-blue lg:text-[58px]">
            Major Structural Elements
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every industrial staircase is developed by coordinating structural
            members, access platforms, protection systems and support
            connections into one integrated steel access solution.
          </p>
        </motion.div>

        {/* Main */}

        <div className="mt-16 grid gap-12 xl:grid-cols-[0.95fr_1.05fr]">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="relative overflow-hidden rounded-[36px] bg-primary-blue p-5 shadow-[0_30px_80px_rgba(27,63,104,.18)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#153b68,#245b8c,#113158)]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
              <Image
                src="/images/products/mezzanine-systems/industrial-staircases-components.jpg"
                alt="Industrial Staircase Components"
                fill
                sizes="(max-width:1280px)100vw,45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Right */}

          <div className="grid gap-5 sm:grid-cols-2">
            {components.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .45,
                    delay: index * .05,
                  }}
                  className="group rounded-[26px] border border-gray-200 bg-[#fafbfd] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/20 hover:bg-white hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-2xl font-black leading-tight text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .55 }}
          className="mt-16 rounded-[30px] border border-primary-red/15 bg-primary-red/5 px-8 py-8"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <ShieldCheck size={25} />
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-primary-red">
                Engineering Coordination
              </p>

              <h3 className="mt-2 text-2xl font-black text-primary-blue">
                Every Staircase Component Works Together as One Structural System
              </h3>

              <p className="mt-3 max-w-4xl text-base leading-8 text-gray-600">
                Stair flights, stringers, landings, support members,
                guardrails and structural connections are coordinated with
                the complete steel framing to create an integrated industrial
                access solution.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}