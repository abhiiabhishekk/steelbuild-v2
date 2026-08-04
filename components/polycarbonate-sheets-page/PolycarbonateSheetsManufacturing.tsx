"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Factory,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const manufacturingSteps = [
  {
    title: "Multiwall Sheet Extrusion",
    description:
      "Premium polycarbonate resin is precision extruded into technically accurate multiwall hollow-cell daylighting sheets with controlled geometry and uniform internal chambers.",
    icon: Layers3,
  },
  {
    title: "UV Protection & Finishing",
    description:
      "UV-protective surface layers, dimensional calibration, cooling and trimming processes ensure long-term weather resistance and optical clarity.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Inspection & Dispatch",
    description:
      "Finished sheets are inspected for thickness, light transmission, hollow-cell consistency, UV layer, dimensional accuracy and surface quality before packaging.",
    icon: BadgeCheck,
  },
];

export default function PolycarbonateSheetsManufacturing() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid gap-14 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

              <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

              <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">

                <div className="group relative aspect-[5/4] overflow-hidden rounded-[24px]">

                  <Image
                    src="/images/products/polycarbonate-sheets/polycarbonate-sheets-manufacturing.jpg"
                    alt="Industrial manufacturing of multiwall polycarbonate sheets"
                    fill
                    sizes="(max-width:1280px)100vw,45vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

                  <div className="absolute left-5 top-5 max-w-[84%] rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">

                    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
                      Industrial Manufacturing
                    </p>

                    <p className="mt-1 text-sm font-black leading-5 text-white">
                      Multiwall Polycarbonate Production
                    </p>

                  </div>

                  <div className="absolute bottom-7 left-5 right-5">

                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red">
                      Precision Manufacturing
                    </p>

                    <h3 className="mt-2 text-[28px] font-black leading-[1.12] text-white">
                      Controlled Production
                      <span className="block">
                        Consistent Daylighting Quality
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
  className="relative z-20 mx-6 -mt-5 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_28px_80px_rgba(27,63,104,0.14)] md:mx-8"
>
  <div className="flex items-start gap-4">
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
      <BadgeCheck size={24} />
    </div>

    <div className="min-w-0">
      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
        Controlled Manufacturing Quality
      </p>

      <p className="mt-2 text-sm font-black leading-6 text-primary-blue md:text-base">
        Multiwall hollow-cell geometry, UV-protected surfaces, sheet
        thickness, optical clarity, dimensional accuracy and overall
        manufacturing quality are verified before packaging and dispatch.
      </p>
    </div>
  </div>
</motion.div>

</motion.div>

{/* Right Content */}

<motion.div
  initial={{ opacity: 0, x: 35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.65 }}
>
  <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2 text-xs font-black uppercase tracking-[0.28em] text-primary-red">
    <Factory size={15} />
    Polycarbonate Sheet Manufacturing
  </span>

  <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[56px]">
    Precision Manufacturing
    <span className="block">
      for Reliable Daylighting
    </span>
  </h2>

  <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-gray-600">
    Steelbuild Multiwall Polycarbonate Sheets are manufactured using
    precision extrusion, controlled cooling, UV-surface protection,
    dimensional calibration and systematic quality inspection to deliver
    dependable daylighting performance and long-term durability.
  </p>

  <div className="mt-10 space-y-5">
    {manufacturingSteps.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.5,
            delay: index * 0.08,
          }}
          className="group rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
              <Icon size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                {item.description}
              </p>
            </div>
          </div>
        </motion.article>
      );
    })}
  </div>
</motion.div>

</div>

{/* Bottom Engineering Note */}

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
        Precision Extrusion Ensures Consistent Performance
      </h3>

      <p className="mt-2 text-sm font-medium leading-7 text-white/70">
        Multiwall cell geometry, UV-protected surface layers, sheet
        thickness, dimensional tolerances, optical clarity and production
        consistency are maintained according to approved manufacturing
        standards and project specifications.
      </p>
    </div>
  </div>
</motion.div>

</Container>
</section>
);
}