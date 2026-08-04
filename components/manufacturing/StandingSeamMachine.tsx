"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  CheckCircle2,
  Cog,
} from "lucide-react";

import Container from "@/components/layout/Container";

const specifications = [
  { label: "Suitable Material", value: "PPGL (345 MPa)" },
  { label: "Coil Width", value: "610 mm / 760 mm" },
  { label: "Material Thickness", value: "0.50 – 0.70 mm" },
  { label: "Roller Stations", value: "Approx. 12 Stations" },
  { label: "Machine Structure", value: "Wire-Electrode Cutting Frame" },
  { label: "Roller Material", value: "ASTM1045 Chrome Plated" },
  { label: "Cutting Method", value: "Pre-Cut System" },
  { label: "Machine Body", value: "Container Fixed" },
  { label: "Seaming System", value: "360° Double Lock" },
];

const advantages = [
  "360° Double Lock Standing Seam",
  "Leak-Proof Roofing System",
  "Concealed Fastening",
  "Superior Weather Protection",
];

export default function StandingSeamMachine() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[linear-gradient(#1b3f68_1px,transparent_1px),linear-gradient(90deg,#1b3f68_1px,transparent_1px)] bg-[size:70px_70px]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Standing Seam Technology
          </span>

          <h2 className="mt-7 text-4xl font-black tracking-[-0.04em] text-primary-blue lg:text-[58px]">
            Standing Seam Roll Forming Machine
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Advanced roll forming technology for manufacturing premium
            concealed-fastener standing seam roofing systems with outstanding
            weather resistance, structural performance and leak-proof
            protection.
          </p>
        </motion.div>

        {/* Feature Pills */}

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {advantages.map((item) => (
            <span
              key={item}
              className="rounded-full border border-primary-red/15 bg-primary-red/5 px-5 py-3 text-sm font-black text-primary-blue"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Main */}

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Machine */}

          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative min-h-[420px] overflow-hidden rounded-[34px] border border-gray-200 bg-primary-blue shadow-[0_25px_75px_rgba(27,63,104,0.12)] lg:min-h-[700px]"
>
  <Image
  src="/images/manufacturing/standing-seam/machine-v2.jpg"
  alt="Standing Seam Roll Forming Machine at Steelbuild manufacturing facility"
  fill
  priority
  unoptimized
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover object-[52%_55%]"
/>

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/15 via-transparent to-transparent" />
</motion.div>

          {/* Specs */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-[34px] border border-gray-200 bg-white p-9 shadow-[0_25px_75px_rgba(27,63,104,0.12)]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red/10">
                <Cog
                  size={34}
                  className="text-primary-red"
                />
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                  Machine Specifications
                </p>

                <h3 className="mt-2 text-3xl font-black text-primary-blue">
                  Technical Details
                </h3>
              </div>
            </div>

            <div className="mt-10 space-y-5">
              {specifications.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start justify-between gap-6 border-b border-gray-100 pb-4"
                >
                  <span className="font-bold text-gray-500">
                    {item.label}
                  </span>

                  <span className="text-right font-black text-primary-blue">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Profile */}

        <div className="mt-20">

          <div className="text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
              Available Profiles
            </p>

            <h3 className="mt-4 text-4xl font-black text-primary-blue">
              Standing Seam Roofing Profiles
            </h3>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">

            <div className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg">
              <div className="relative h-[220px]">
                <Image
  src="/images/manufacturing/standing-seam/profile-610.png?v=2"
  alt="Standing Seam 610 Profile"
  fill
  unoptimized
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-contain"
/>
              </div>

              <div className="mt-8 text-center">
                <h4 className="text-2xl font-black text-primary-blue">
                  Coil Width 610 mm
                </h4>
              </div>
            </div>

            <div className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg">
              <div className="relative h-[220px]">
                <Image
  src="/images/manufacturing/standing-seam/profile-760.png?v=2"
  alt="Standing Seam 760 Profile"
  fill
  unoptimized
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-contain"
/>
              </div>

              <div className="mt-8 text-center">
                <h4 className="text-2xl font-black text-primary-blue">
                  Coil Width 760 mm
                </h4>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}

        <div className="relative z-10 mt-20 rounded-[34px] bg-primary-blue px-10 py-14 text-center">

          <BadgeCheck
            className="mx-auto text-primary-red"
            size={46}
          />

          <h3 className="mt-6 text-4xl font-black text-white">
            Need High-Performance Standing Seam Roofing?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
            Discuss your project with our engineering experts and discover
            premium standing seam roofing systems designed for superior
            durability and weather protection.
          </p>

          <Link
  href="/contact"
  className="group relative z-20 mt-10 inline-flex min-h-[58px] items-center justify-center rounded-2xl bg-primary-red px-8 py-4 font-black !text-white shadow-[0_18px_40px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
>
  <CheckCircle2
    size={20}
    className="mr-2 transition-transform duration-300 group-hover:scale-110"
  />
  Request Standing Seam Consultation
</Link>

        </div>
      </Container>
    </section>
  );
}