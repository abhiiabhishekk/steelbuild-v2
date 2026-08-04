"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Cog,
  Factory,
  Gauge,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Container from "@/components/layout/Container";

type Machine = {
  title: string;
  badge: string;
  image: string;
  introduction?: string;
  specifications: string[];
};

const machines: Machine[] = [
  {
    title: "CNC Multi-Torch Plasma Cutting System",
    badge: "3 Nos.",
    image: "/images/manufacturing/machines/cnc-plasma-cutting.jpg",
    introduction: "Cutting and machining flame-cutting system.",
    specifications: [
      "A pressurized mixture of oxygen and combustible gas, such as propane, heats the steel.",
      "Heat is focused on a very narrow band, melting the steel at approximately 1500°C.",
      "The process achieves the required cuts quickly and efficiently.",
      "Rapid heating and cooling cycles may introduce residual stresses and distortion.",
      "Daily processing capacity: 20 MT.",
      "System configuration: MaxPro 200 Hypertherm.",
    ],
  },
  {
    title: "Heavy Duty H-Beam Welding Line",
    badge: "3 Nos.",
    image: "/images/manufacturing/machines/h-beam-welding-line.jpg",
    introduction:
      "High-capacity welding line for precision fabrication of primary structural steel members.",
    specifications: [
      "Web height: 200–1500 mm.",
      "Workpiece length: 2.5–13 m.",
      "Flange thickness: 5–25 mm.",
      "Welding wire diameter: 1.6 mm.",
      "Voltage: 415 V / 50–60 Hz / 3 Phase.",
      "Web taper angle: 15°.",
      "Flange width: 200–500 mm.",
      "Welding type: Single-arc twin wire or single wire.",
      "Web thickness: 5–20 mm.",
      "Welding speed: 300–1000 mm/min with stepless speed adjustment.",
    ],
  },
  {
    title: "8-Wheel Automatic Shot Blasting Machine",
    badge: "8 Blast Wheels",
    image: "/images/manufacturing/machines/shot-blasting-machine.jpg",
    introduction:
      "Automatic surface-treatment equipment for cleaning and preparing structural steel components.",
    specifications: [
      "Machine opening size: 1500 mm height × 1500 mm width.",
      "Effective working envelope: 1400 mm height × 1400 mm width.",
      "Automatic roller conveyor system.",
      "12-metre inlet roller conveyor.",
      "12-metre outlet roller conveyor.",
      "8 high-efficiency blast wheels.",
      "Blast-wheel power: 11 kW each.",
    ],
  },
  {
    title: "Quick Interchange C & Z Punching Machine",
    badge: "25 m/min",
    image: "/images/manufacturing/machines/cz-punching-machine.jpg",
    introduction:
      "Automated production system for C and Z secondary structural members.",
    specifications: [
      "Integrated pre-levelling, pre-punching and pre-cutting devices.",
      "Material thickness range: 1.5–3.5 mm.",
      "Suitable for 345 MPa and UTS 550 MPa materials.",
      "Supported Z sections: Z100–Z350.",
      "Supported C sections: C100–C350.",
      "Production speed: 25 m/min.",
      "5 MT automatic decoiler.",
      "Pre-programmable punching with ±2 mm corner tolerance.",
    ],
  },
  {
    title: "HV Series Roll Forming Machine",
    badge: "20 m/min",
    image: "/images/manufacturing/machines/roll-forming-machine.jpg",
    introduction:
      "High-speed roll-forming line for roofing, cladding and profile-sheet production.",
    specifications: [
      "Raw material: Pre-painted galvalume steel sheet.",
      "Material standards: ASTM A526 / JIS G3302 SGCC or equivalent soft-grade material.",
      "Coil thickness range: 0.3–0.8 mm.",
      "Suitable for material strength up to 550 MPa.",
      "Effective profile width: 1225 mm.",
      "Maximum line speed: 20 m/min.",
      "Uncoiler load capacity: 6 MT.",
    ],
  },
  {
    title: "Heavy Duty 3-Metre Press Brake",
    badge: "1500 KN",
    image: "/images/manufacturing/machines/press-brake-machine.jpg",
    introduction:
      "Heavy-duty hydraulic bending and shearing equipment for customized steel components.",
    specifications: [
      "Pressing capacity: 1500 KN.",
      "Maximum working length: 3150 mm.",
      "Distance between frames: 3000 mm.",
      "Sections can be cut to the required length or width using hydraulic shears.",
      "Suitable for heavy sections and long steel plates.",
      "Specialized plate-shearing capability.",
      "Shearing knives are used for smaller plate sections.",
    ],
  },
  {
    title: "Automatic Down Take Pipe Roll Forming Machine",
    badge: "S-Type Profile",
    image:
      "/images/manufacturing/machines/down-take-pipe-roll-forming-machine.jpg",
    introduction:
      "Automatic roll-forming system for manufacturing rainwater downpipes and industrial downspouts.",
    specifications: [
      "Manufactures S-Type down take pipes and downspouts.",
      "Processes pre-painted galvanized steel coils.",
      "Also supports galvanized steel coils.",
      "Profile type: S-Type down take pipe.",
      "Finished profile size: 137 mm × 174 mm.",
    ],
  },
];

const stats = [
  {
    icon: Factory,
    label: "Annual Capacity",
    value: "50,000 MT",
  },
  {
    icon: BadgeCheck,
    label: "Quality System",
    value: "ISO 9001:2015",
  },
  {
    icon: ShieldCheck,
    label: "Quality Assurance",
    value: "Strict Inspection",
  },
  {
    icon: Zap,
    label: "Production",
    value: "High Capacity",
  },
];

export default function PlantMachinery() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Plant & Machinery
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Precision-Engineered Manufacturing Infrastructure
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            High-capacity, precision-engineered equipment supporting world-class
            manufacturing standards for Pre-Engineered Buildings and structural
            steel systems.
          </p>
        </motion.div>

        <div className="relative z-10 mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[26px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.08)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                  <Icon size={28} />
                </div>

                <p className="mt-5 text-sm font-black uppercase tracking-[0.18em] text-gray-500">
                  {item.label}
                </p>

                <p className="mt-2 text-2xl font-black text-primary-blue">
                  {item.value}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-2">
          {machines.map((machine, index) => (
            <motion.article
              key={machine.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group overflow-hidden rounded-[34px] border border-gray-200 bg-white shadow-[0_25px_75px_rgba(27,63,104,0.1)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_40px_100px_rgba(27,63,104,0.16)]"
            >
              <div className="relative h-[300px] overflow-hidden bg-primary-blue">
                <Image
                  src={machine.image}
                  alt={`${machine.title} at Steelbuild manufacturing facility`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/15 to-transparent" />

                <span className="absolute left-6 top-6 inline-flex rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary-red shadow-lg">
                  {machine.badge}
                </span>
              </div>

              <div className="p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red">
                    <Cog size={27} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                      {machine.title}
                    </h3>

                    {machine.introduction && (
                      <p className="mt-3 text-sm font-semibold leading-7 text-gray-600">
                        {machine.introduction}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-7 border-t border-gray-200 pt-6">
                  <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-primary-red">
                    Machine Specifications
                  </p>

                  <ul className="space-y-3">
                    {machine.specifications.map((specification) => (
                      <li
                        key={specification}
                        className="flex items-start gap-3 text-sm font-semibold leading-7 text-gray-600"
                      >
                        <Gauge
                          size={17}
                          className="mt-1.5 shrink-0 text-primary-red"
                        />

                        <span>{specification}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}