"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const features = [
  {
    title: "Permanent Formwork",
    description:
      "Acts as permanent shuttering during concrete casting, eliminating conventional temporary formwork.",
    icon: Layers3,
  },
  {
    title: "Composite Floor System",
    description:
      "Works together with reinforced concrete to improve floor strength and structural efficiency.",
    icon: Building2,
  },
  {
    title: "Long-Term Performance",
    description:
      "Manufactured from high-quality coated steel for durability, corrosion resistance and long service life.",
    icon: ShieldCheck,
  },
];

export default function DeckSheetsOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <Container>

        <div className="grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative pb-24"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">

                <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px]">

                  <Image
                    src="/images/products/deck-sheets/deck-sheets-overview.jpg"
                    alt="Steel Deck Sheet Composite Floor System"
                    fill
                    sizes="(max-width:1280px)100vw,45vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">

                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Composite Floor Technology
                    </p>

                    <p className="mt-1 text-sm font-black text-white">
                      Steel Deck + Reinforced Concrete
                    </p>

                  </div>

                  <div className="absolute bottom-7 left-5 right-5">

                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Engineered Floor System
                    </p>

                    <h3 className="mt-2 text-[28px] font-black leading-[1.12] text-white">
                      Faster Construction
                      <span className="block">
                        Higher Structural Efficiency
                      </span>
                    </h3>

                  </div>

                </div>

              </div>
            </div>

            {/* Floating Card */}

            <motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.55, delay: 0.2 }}
  className="absolute -bottom-6 left-5 right-5 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8"
>
  <div className="flex items-start gap-4">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
      <BadgeCheck size={24} />
    </div>

    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
        Structural Floor System
      </p>

      <p className="mt-2 text-base font-black leading-6 text-primary-blue">
        Steel deck sheets remain as a permanent part of the structure while
        working compositely with reinforced concrete to create efficient
        floor systems.
      </p>
    </div>
  </div>
</motion.div>

</motion.div>

{/* Right Content */}

<motion.div
  initial={{ opacity: 0, x: 35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.65 }}
>
  <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
    <Layers3 size={15} />
    Deck Sheet Overview
  </span>

  <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue lg:text-[56px]">
    Composite Steel Deck
    <br />
    Floor Systems
  </h2>

  <p className="mt-7 text-lg leading-8 text-gray-600">
    Steelbuild Deck Sheets provide an efficient composite floor solution
    for commercial, industrial and multi-storey buildings. The profiled
    steel deck acts as permanent formwork during construction and
    contributes to the structural performance of the completed floor.
  </p>

  <div className="mt-10 space-y-5">
    {features.map((item) => {
      const Icon = item.icon;

      return (
        <div
          key={item.title}
          className="flex items-start gap-5 rounded-[26px] border border-gray-200 bg-white p-6 shadow-[0_18px_55px_rgba(27,63,104,0.06)] transition-all duration-300 hover:border-primary-red/20 hover:shadow-[0_24px_70px_rgba(27,63,104,0.12)]"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
            <Icon size={24} />
          </div>

          <div>
            <h3 className="text-xl font-black text-primary-blue">
              {item.title}
            </h3>

            <p className="mt-2 text-sm leading-7 text-gray-600">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</motion.div>

        </div>

              </Container>
    </section>
  );
}