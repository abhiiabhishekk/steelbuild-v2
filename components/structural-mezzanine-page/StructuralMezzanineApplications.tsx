"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Factory,
  Package,
  ShoppingBag,
  Store,
  Warehouse,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    icon: Warehouse,
    title: "Warehouse Storage Areas",
    description:
      "Additional operational floors can be coordinated for storage, inventory handling and warehouse activities according to project requirements.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Industrial Manufacturing",
    description:
      "Intermediate floors may be incorporated around production layouts, utilities and operational planning where required.",
  },
  {
    number: "03",
    icon: Package,
    title: "Logistics Facilities",
    description:
      "Suitable for logistics operations requiring additional working levels within the available building height.",
  },
  {
    number: "04",
    icon: Store,
    title: "Commercial Buildings",
    description:
      "Can be integrated into commercial steel buildings for offices, storage or operational functions according to approved layouts.",
  },
  {
    number: "05",
    icon: ShoppingBag,
    title: "Retail & Distribution",
    description:
      "Useful where additional floor levels support inventory, staff areas or operational movement.",
  },
  {
    number: "06",
    icon: Building2,
    title: "Project-Specific Applications",
    description:
      "Every mezzanine arrangement is developed according to approved engineering, intended usage and project scope.",
  },
];

const industries = [
  "Warehousing",
  "Manufacturing",
  "Logistics",
  "Industrial Plants",
  "Commercial Buildings",
  "Distribution Centres",
];

export default function StructuralMezzanineApplications() {
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
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Building2 size={15} />
            Applications
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Structural Mezzanine Applications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Structural mezzanine systems are used across different industrial
            and commercial facilities where additional intermediate floor
            space is required within the available building height.
          </p>
        </motion.div>

        {/* Layout */}

        <div className="mt-16 grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative overflow-hidden rounded-[38px] bg-primary-blue p-10 shadow-[0_34px_95px_rgba(27,63,104,0.22)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white">
                <Warehouse size={30} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Typical Industries
              </p>

              <h3 className="mt-4 text-4xl font-black leading-tight text-white">
                Suitable Across
                <span className="block">
                  Multiple Building Types
                </span>
              </h3>

              <p className="mt-6 text-base leading-8 text-white/70">
                Structural mezzanines are coordinated according to available
                space, intended operations, structural requirements and
                approved engineering.
              </p>

              <div className="mt-10 space-y-4">
                {industries.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 border-b border-white/10 pb-4"
                  >
                    <BadgeCheck
                      size={18}
                      className="text-primary-red"
                    />

                    <span className="font-black text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {applications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group grid gap-5 py-8 sm:grid-cols-[64px_1fr_auto]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Application {item.number}
                    </p>

                    <h3 className="mt-3 text-2xl font-black text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="text-[50px] font-black text-primary-blue/[0.05]">
                    {item.number}
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-[30px] bg-primary-blue px-8 py-8 shadow-[0_28px_80px_rgba(27,63,104,0.2)]"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
              <BadgeCheck size={26} />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">
                Every Application Is Project Specific
              </h3>

              <p className="mt-2 text-sm font-medium leading-7 text-white/70">
                Structural layouts, framing systems, floor arrangements,
                staircases and safety provisions are developed according to
                approved engineering drawings, intended building usage and
                project requirements.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}