"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Cog,
  Factory,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const specifications = [
  {
    label: "Material",
    value: "High-Strength Colour Coated Steel",
  },
  {
    label: "Steel Thickness",
    value: "0.40–0.80 mm",
  },
  {
    label: "Manufacturing",
    value: "Precision Roll Forming",
  },
  {
    label: "Roof Profile",
    value: "Industrial Trapezoidal Profiles",
  },
  {
    label: "Protective Finish",
    value: "Colour Coated / Galvalume",
  },
  {
    label: "Applications",
    value: "Industrial & Commercial Roofing",
  },
];

const features = [
  "Precision Roll Forming",
  "Consistent Profile Accuracy",
  "Industrial Quality Inspection",
  "High-Performance Roofing",
];

export default function RoofingSheetsManufacturing() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>

        <motion.div
          initial={{ opacity:0,y:30 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">

            <Factory size={15}/>

            Manufacturing Technology

          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">

            Precision Roofing
            <br/>
            Sheet Manufacturing

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">

            Steelbuild manufactures industrial roofing sheets using
            precision roll-forming technology to achieve consistent
            profile geometry, structural strength and reliable
            weather performance.

          </p>

        </motion.div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">

          {features.map((item)=>(
            <span
              key={item}
              className="rounded-full border border-primary-red/15 bg-primary-red/5 px-5 py-3 text-sm font-black text-primary-blue"
            >
              {item}
            </span>
          ))}

        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            
            {/* Manufacturing Image */}

<motion.div
  initial={{ opacity: 0, x: -35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.65 }}
  className="relative min-h-[520px] overflow-hidden rounded-[38px] border border-gray-200 bg-primary-blue shadow-[0_32px_90px_rgba(27,63,104,0.18)] lg:min-h-[700px]"
>
  <Image
    src="/images/manufacturing/roofing/roofing-sheet.jpg"
    alt="Steelbuild industrial roofing sheet manufacturing"
    fill
    priority
    sizes="(max-width: 1024px) 100vw, 52vw"
    className="object-cover transition-transform duration-700 hover:scale-105"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

  <div className="absolute left-6 top-6 max-w-[82%] rounded-[20px] border border-white/15 bg-primary-blue/85 px-5 py-4 backdrop-blur-md">
    <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
      Steelbuild Manufacturing
    </p>

    <p className="mt-1 text-sm font-black leading-5 text-white">
      Industrial Roofing Sheet Production
    </p>
  </div>

  <div className="absolute bottom-7 left-6 right-6">
    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
      Precision Roll-Forming Technology
    </p>

    <h3 className="mt-2 max-w-xl text-2xl font-black leading-tight tracking-[-0.035em] text-white md:text-[32px]">
      Consistent Profile Geometry
      <span className="block">
        for Reliable Roofing Performance
      </span>
    </h3>
  </div>
</motion.div>

{/* Technical Specifications */}

<motion.div
  initial={{ opacity: 0, x: 35 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.65 }}
  className="rounded-[38px] border border-gray-200 bg-[#f7f9fc] p-7 shadow-[0_25px_75px_rgba(27,63,104,0.1)] md:p-9"
>
  <div className="flex items-center gap-4">
    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_14px_32px_rgba(194,17,25,0.22)]">
      <Cog size={30} />
    </div>

    <div>
      <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
        Production Specifications
      </p>

      <h3 className="mt-2 text-3xl font-black tracking-[-0.035em] text-primary-blue">
        Technical Details
      </h3>
    </div>
  </div>

  <div className="mt-9 divide-y divide-gray-200 border-y border-gray-200">
    {specifications.map((item) => (
      <div
        key={item.label}
        className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-6"
      >
        <span className="text-sm font-bold leading-6 text-gray-500">
          {item.label}
        </span>

        <span className="text-sm font-black leading-6 text-primary-blue sm:max-w-[250px] sm:text-right">
          {item.value}
        </span>
      </div>
    ))}
  </div>

  <div className="mt-8 flex items-start gap-3 rounded-[22px] border border-primary-red/10 bg-white p-5">
    <ShieldCheck
      size={21}
      className="mt-0.5 shrink-0 text-primary-red"
    />

    <p className="text-sm font-bold leading-7 text-primary-blue">
      Material selection, sheet thickness, coating and final profile geometry
      are coordinated according to approved production and project
      requirements.
    </p>
  </div>
</motion.div>

</div>

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-70px" }}
  transition={{ duration: 0.6 }}
  className="relative z-10 mt-14 overflow-hidden rounded-[32px] bg-primary-blue px-8 py-9 shadow-[0_28px_80px_rgba(27,63,104,0.2)] md:px-10"
>
  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

  <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
        <Factory size={25} />
      </div>

      <div>
        <h3 className="text-2xl font-black text-white">
          Explore Steelbuild Manufacturing Capabilities
        </h3>

        <p className="mt-2 max-w-3xl text-sm font-medium leading-7 text-white/70">
          Discover our production systems, roofing and cladding solutions,
          sheeting accessories, insulation options and manufacturing
          infrastructure.
        </p>
      </div>
    </div>

    <Link
      href="/manufacturing"
      className="group inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white shadow-[0_16px_38px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
    >
      Explore Manufacturing

      <ArrowRight
        size={19}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  </div>
</motion.div>

      </Container>
    </section>
  );
}