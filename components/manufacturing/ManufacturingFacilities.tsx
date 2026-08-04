"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Factory,
  Gauge,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const facilities = [
  {
    unit: "Unit 01",
    label: "Manufacturing Unit 1",
    title: "Katwal Manufacturing Facility",
    image: "/images/manufacturing/facilities/unit-1-katwal.jpg",
    imagePosition: "object-[50%_58%]",
    address:
      "Khewat No. 168, Khasra No. 20//19, 22, 23/1, 36//2/1, Khata No. 172, Village Katwal, Tehsil Gohana, Sonipat, Haryana – 131409",
    mapLink: "https://maps.app.goo.gl/gANZmXy1uWog8LPw9",
    strength: "Heavy Structural Fabrication Hub",
    description:
      "Our Katwal facility supports heavy structural fabrication, primary framing production and precision manufacturing for large-scale Pre-Engineered Building projects.",
    capabilities: [
      {
        number: "01",
        title: "Heavy Structural Steel Fabrication",
        description:
          "Precision fabrication of primary framing members and heavy structural steel components.",
      },
      {
        number: "02",
        title: "Primary Framing Production",
        description:
          "Production of columns, rafters and critical load-bearing PEB members.",
      },
      {
        number: "03",
        title: "Automated Cutting & Welding",
        description:
          "Advanced CNC cutting and high-capacity welding systems for consistent production quality.",
      },
      {
        number: "04",
        title: "Dedicated QA/QC Inspection",
        description:
          "Multi-stage quality inspection for fabrication accuracy, finish and compliance.",
      },
    ],
  },
  {
    unit: "Unit 02 & 03",
    label: "Manufacturing Unit 2 & 3",
    title: "Halalpur Manufacturing Facilities",
    image: "/images/manufacturing/facilities/unit-2-3-halalpur.jpg",
    imagePosition: "object-center",
    address:
      "Khasra No. 75/21/2, 21/3, 22/2, 22/3, Village Halalpur, Sonipat, Haryana – 131103",
    mapLink: "https://maps.app.goo.gl/nChi1zSjxJD3WHECA",
    strength: "High-Volume PEB Production Hub",
    description:
      "Our Halalpur facilities are designed for high-volume PEB manufacturing, roofing, cladding, secondary members, packing and organized project dispatch.",
    capabilities: [
      {
        number: "01",
        title: "High-Volume PEB Manufacturing",
        description:
          "Scalable production infrastructure for large-volume industrial building components.",
      },
      {
        number: "02",
        title: "Roofing & Cladding Systems",
        description:
          "Manufacturing support for roofing, cladding and standing seam roll-forming systems.",
      },
      {
        number: "03",
        title: "Secondary Member Production",
        description:
          "Production of purlins, girts, eave struts and other secondary framing components.",
      },
      {
        number: "04",
        title: "Packing & Dispatch Infrastructure",
        description:
          "Organized storage, packing and dispatch systems supporting timely project delivery.",
      },
    ],
  },
];

const strengths = [
  {
    icon: Gauge,
    value: "50,000 MT",
    label: "Annual Manufacturing Capacity",
  },
  {
    icon: Factory,
    value: "3 Units",
    label: "Integrated Manufacturing Facilities",
  },
  {
    icon: BadgeCheck,
    value: "ISO 9001:2015",
    label: "Certified Quality Management",
  },
  {
    icon: ShieldCheck,
    value: "Strict QA/QC",
    label: "Multi-Stage Quality Inspection",
  },
];

export default function ManufacturingFacilities() {
  return (
    <section
      id="manufacturing-facilities"
      className="relative scroll-mt-32 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="absolute -right-40 bottom-24 h-96 w-96 rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Manufacturing Facilities
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-[58px]">
            Built for Scale, Precision and Reliable Delivery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Steelbuild operates three integrated manufacturing units in
            Sonipat, Haryana, supporting structural fabrication, roofing,
            cladding, secondary members and complete PEB production.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="relative z-10 mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="group rounded-[26px] border border-gray-200 bg-white p-7 shadow-[0_18px_55px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_30px_75px_rgba(27,63,104,0.14)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                  <Icon size={28} />
                </div>

                <p className="mt-5 text-2xl font-black text-primary-blue">
                  {item.value}
                </p>

                <p className="mt-2 text-sm font-bold leading-6 text-gray-500">
                  {item.label}
                </p>
              </motion.article>
            );
          })}
        </div>

        {/* Facilities */}

        <div className="relative z-10 mt-20 space-y-14">
          {facilities.map((facility, index) => (
            <motion.article
              key={facility.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="overflow-hidden rounded-[38px] border border-gray-200 bg-white shadow-[0_30px_90px_rgba(27,63,104,0.1)]"
            >
              {/* Image */}

              <div className="group relative aspect-[16/7.6] min-h-[300px] overflow-hidden bg-gray-100 md:min-h-[390px]">
                <Image
                  src={facility.image}
                  alt={`${facility.title} of Steelbuild Infra Projects`}
                  fill
                  sizes="(max-width: 768px) 100vw, 1200px"
                  className={`object-cover ${facility.imagePosition} transition-transform duration-1000 group-hover:scale-[1.025]`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/55 via-primary-blue/5 to-transparent" />

                <div className="absolute left-5 top-5 flex flex-wrap gap-3 md:left-8 md:top-8">
                  <span className="rounded-full bg-white px-5 py-2 text-[11px] font-black uppercase tracking-[0.22em] text-primary-red shadow-lg">
                    {facility.unit}
                  </span>

                  <span className="rounded-full border border-white/25 bg-primary-blue/85 px-5 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-lg backdrop-blur-md">
                    {facility.label}
                  </span>
                </div>

                <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-auto">
                  <div className="max-w-sm rounded-2xl border border-white/30 bg-white/90 px-5 py-4 shadow-xl backdrop-blur-md">
                    <p className="text-[11px] font-black uppercase tracking-[0.24em] text-primary-red">
                      Facility Strength
                    </p>

                    <p className="mt-1 text-base font-black text-primary-blue">
                      {facility.strength}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}

              <div className="grid gap-12 p-7 md:p-10 lg:grid-cols-[0.82fr_1.18fr] lg:p-14">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-red">
                    Steelbuild Manufacturing
                  </p>

                  <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl lg:text-[48px]">
                    {facility.title}
                  </h3>

                  <p className="mt-5 text-base font-medium leading-8 text-gray-600">
                    {facility.description}
                  </p>

                  <div className="mt-7 flex items-start gap-3 border-t border-gray-200 pt-7 text-base font-medium leading-8 text-gray-600">
                    <MapPin
                      size={20}
                      className="mt-1.5 shrink-0 text-primary-red"
                    />

                    <span>{facility.address}</span>
                  </div>

                  <Link
                    href={facility.mapLink}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-primary-red px-7 py-4 font-black !text-white shadow-xl shadow-primary-red/20 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
                  >
                    View Facility on Google Maps
                    <ArrowUpRight size={20} />
                  </Link>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.28em] text-primary-red">
                    Facility Capabilities
                  </p>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {facility.capabilities.map((capability) => (
                      <div
                        key={capability.number}
                        className="group rounded-[24px] border border-gray-200 bg-[#f8fafc] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/25 hover:bg-white hover:shadow-[0_18px_55px_rgba(27,63,104,0.09)]"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-red/10 text-sm font-black text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                          {capability.number}
                        </div>

                        <h4 className="mt-5 text-lg font-black leading-tight text-primary-blue">
                          {capability.title}
                        </h4>

                        <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                          {capability.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}