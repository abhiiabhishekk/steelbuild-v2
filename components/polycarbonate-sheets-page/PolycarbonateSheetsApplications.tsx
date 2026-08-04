"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Factory,
  Landmark,
  SunMedium,
  Warehouse,
  Hospital,
  GraduationCap,
} from "lucide-react";

import Container from "@/components/layout/Container";

const applications = [
  {
    number: "01",
    title: "Industrial Manufacturing Plants",
    image: "/images/products/polycarbonate-sheets/application-1.jpg",
    icon: Factory,
    description:
      "Continuous multiwall polycarbonate rooflights provide uniform natural daylight across production and manufacturing facilities.",
  },
  {
    number: "02",
    title: "Warehouses & Logistics Buildings",
    image: "/images/products/polycarbonate-sheets/application-2.jpg",
    icon: Warehouse,
    description:
      "Engineered daylight strips improve interior illumination while integrating seamlessly with long-span industrial roofing systems.",
  },
  {
    number: "03",
    title: "Food Processing Facilities",
    image: "/images/products/polycarbonate-sheets/application-3.jpg",
    icon: Building2,
    description:
      "Translucent roof panels create bright working environments while maintaining durable weather-resistant roof construction.",
  },
  {
    number: "04",
    title: "Commercial Buildings",
    image: "/images/products/polycarbonate-sheets/application-4.jpg",
    icon: Building2,
    description:
      "Natural daylight enhances commercial-industrial interiors while reducing daytime artificial lighting requirements.",
  },
  {
    number: "05",
    title: "Healthcare & Institutional Buildings",
    image: "/images/products/polycarbonate-sheets/application-5.jpg",
    icon: Hospital,
    description:
      "Engineered daylighting systems help create bright, comfortable interiors for healthcare and institutional projects.",
  },
  {
    number: "06",
    title: "Educational & Infrastructure Buildings",
    image: "/images/products/polycarbonate-sheets/application-6.jpg",
    icon: GraduationCap,
    description:
      "Multiwall polycarbonate daylighting systems provide durable roof illumination across educational and infrastructure facilities.",
  },
];

export default function PolycarbonateSheetsApplications() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <BadgeCheck size={15} />
            Polycarbonate Sheet Applications
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Engineered Daylighting
            <span className="block">
              Across Modern Buildings
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild Polycarbonate Daylighting Systems provide high natural
            light transmission, UV protection and long-term durability across
            industrial, commercial and institutional projects.
          </p>
        </motion.div>

        <div className="relative z-10 mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {applications.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                }}
                className="group flex h-full flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_34px_90px_rgba(27,63,104,0.14)]"
              >
                <div className="relative aspect-[5/4] overflow-hidden bg-primary-blue">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width:1024px)100vw,33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/85 via-primary-blue/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-primary-red shadow-lg">
                    Application {item.number}
                  </span>

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary-red shadow-xl">
                    <Icon size={27} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-5 flex-1 text-sm font-medium leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px bg-gray-200" />

                  <div className="mt-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-primary-red">
                    <SunMedium size={15} />
                    Natural Daylighting
                  </div>
                </div>
              </motion.article>
            );
          })}
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
            Final daylighting area, sheet thickness, light-transmission level,
            UV-protection layer, glazing system, flashing arrangement and roof
            integration are engineered according to daylight requirements,
            building function and approved project specifications.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}