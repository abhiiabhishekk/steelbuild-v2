"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CloudRain,
  Layers3,
  ShieldCheck,
  SquareStack,
  ThermometerSun,
  Wrench,
} from "lucide-react";

import Container from "@/components/layout/Container";

const components = [
  {
    number: "01",
    icon: Layers3,
    title: "Standing Seam Panels",
    description:
      "Continuous metal roof panels forming the primary weather-protection surface.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Raised Standing Seams",
    description:
      "Interlocking raised seams joining adjacent roof panels.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Concealed Clips",
    description:
      "Hidden fastening clips securing roof panels to roof purlins.",
  },
  {
    number: "04",
    icon: Building2,
    title: "Roof Purlins",
    description:
      "Secondary structural members supporting the complete roof system.",
  },
  {
    number: "05",
    icon: ThermometerSun,
    title: "Roof Insulation",
    description:
      "Insulation and vapour-control layers coordinated beneath roof panels.",
  },
  {
    number: "06",
    icon: CloudRain,
    title: "Flashings & Ridge",
    description:
      "Engineered ridge caps, flashings and weatherproof roof transitions.",
  },
  {
    number: "07",
    icon: BadgeCheck,
    title: "Rainwater Drainage",
    description:
      "Gutters and downpipes integrated with the roof assembly.",
  },
  {
    number: "08",
    icon: SquareStack,
    title: "Structural Connections",
    description:
      "Steel rafters, beams, purlins and roof interfaces supporting the roofing system.",
  },
];

const engineeringLayers = [
  {
    number: "01",
    title: "Roof Panels",
    text: "Primary weather-protection surface",
  },
  {
    number: "02",
    title: "Standing Seams",
    text: "Continuous panel joints",
  },
  {
    number: "03",
    title: "Concealed Clips",
    text: "Hidden structural fastening",
  },
  {
    number: "04",
    title: "Roof Purlins",
    text: "Secondary roof support",
  },
  {
    number: "05",
    title: "Roof Accessories",
    text: "Flashing, ridge and drainage",
  },
  {
    number: "06",
    title: "Structural Steel",
    text: "Primary roof framework",
  },
];

export default function StandingSeamRoofingComponents() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <Layers3 size={15} />
            Standing Seam Roofing Components
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Major Structural Elements
            <br />
            of a Standing Seam
            <br />
            Roofing System
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Standing Seam Roofing consists of engineered roof panels,
            concealed fastening clips, structural supports, insulation
            assemblies and roof accessories that operate together as one
            coordinated roofing system.
          </p>
        </motion.div>

        <div className="grid gap-12 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">

          {/* Left Engineering Panel */}

<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.65 }}
  className="relative pb-28 md:pb-24"
>
  {/* Main Blue Panel */}

  <div className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-5 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-6">
    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#245b8c_48%,#113158_100%)]" />

    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

    <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-primary-red/20 blur-[95px]" />

    {/* Image */}

    <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/10 p-3">
      <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px]">
        <Image
          src="/images/products/standing-seam-roofing/standing-seam-roofing-components.jpg"
          alt="Major structural components of a standing seam roofing system"
          fill
          sizes="(max-width: 1280px) 100vw, 45vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-blue/90 via-primary-blue/10 to-transparent" />

        <div className="absolute left-5 top-5 max-w-[80%] rounded-[18px] border border-white/15 bg-primary-blue/90 px-5 py-4 backdrop-blur-md">
          <p className="text-[9px] font-black uppercase tracking-[0.22em] text-primary-red">
            Standing Seam Roof Assembly
          </p>

          <p className="mt-1 text-sm font-black leading-5 text-white">
            Roof Panels, Clips & Structural Integration
          </p>
        </div>

        <div className="absolute bottom-7 left-5 right-5">
          <p className="text-[9px] font-black uppercase tracking-[0.2em] text-primary-red sm:text-[10px]">
            Major Roofing Components
          </p>

          <h3 className="mt-2 max-w-lg text-xl font-black leading-[1.12] tracking-[-0.03em] text-white sm:text-2xl md:text-[28px]">
            Every Component Supports
            <span className="block">
              the Complete Roof System
            </span>
          </h3>
        </div>
      </div>
    </div>

    {/* Engineering Layers */}

    <div className="relative z-10 mt-5 space-y-3">
      {engineeringLayers.map((item, index) => (
        <motion.div
          key={item.number}
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          className="rounded-[20px] border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <span className="shrink-0 text-xs font-black text-primary-red">
              {item.number}
            </span>

            <div>
              <p className="text-sm font-black text-white">
                {item.title}
              </p>

              <p className="mt-1 text-xs font-medium leading-5 text-white/60">
                {item.text}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Floating Card — Blue panel ke bahar */}

  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55, delay: 0.18 }}
    className="absolute -bottom-8 left-4 right-4 z-20 rounded-[28px] border border-gray-200 bg-white p-6 shadow-[0_24px_75px_rgba(27,63,104,0.14)] md:left-8 md:right-8"
  >
    <div className="flex items-start gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
        <ShieldCheck size={24} />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
          Roof System Coordination
        </p>

        <p className="mt-2 text-base font-black leading-6 text-primary-blue">
          Panels, concealed clips, purlins, insulation, flashings and drainage
          components work together to achieve long-term industrial roof
          performance.
        </p>
      </div>
    </div>
  </motion.div>
</motion.div>

          {/* Right Component Cards */}

          <div className="grid gap-5 sm:grid-cols-2">
  {components.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.article
        key={item.title}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
        }}
        className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-1 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
      >
        <span className="pointer-events-none absolute right-5 top-4 text-[48px] font-black leading-none text-primary-blue/[0.045]">
          {item.number}
        </span>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
          <Icon size={24} />
        </div>

        <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
          Roofing Component {item.number}
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
</div>

<motion.div
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-70px" }}
  transition={{ duration: 0.6 }}
  className="relative z-10 mx-auto mt-16 flex max-w-5xl items-start gap-4 border-l-4 border-primary-red bg-white px-7 py-6 shadow-[0_14px_40px_rgba(27,63,104,0.06)] md:px-9"
>
  <BadgeCheck
    size={24}
    className="mt-0.5 shrink-0 text-primary-red"
  />

  <p className="text-sm font-bold leading-7 text-primary-blue">
    Final roof panel profiles, concealed clip spacing, insulation systems,
    flashing details, drainage layouts and structural support arrangements
    are developed according to approved engineering drawings, project
    requirements and environmental conditions.
  </p>
</motion.div>

      </Container>
    </section>
  );
}