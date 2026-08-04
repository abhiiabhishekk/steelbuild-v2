"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
import Container from "@/components/layout/Container";

const featuredProjects = [
  {
    title: "Industrial PEB Project",
    category: "Industrial Building",
    type: "Industrial Manufacturing",
    location: "Bhaproda, Haryana",
    image: "/images/projects/project-1.jpg",
  },
  {
    title: "Warehouse Building Project",
    category: "Warehouse Building",
    type: "Logistics Warehouse",
    location: "Patna, Bihar",
    image: "/images/projects/project-2.jpg",
  },
  {
    title: "Factory Building Project",
    category: "Factory Building",
    type: "Factory Building",
    location: "Sitarganj, Uttarakhand",
    image: "/images/projects/project-3.jpg",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(27,63,104,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(194,17,25,0.06),transparent_38%)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto mb-16 max-w-4xl text-center"
        >
          <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
            Featured Projects
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-5xl lg:text-6xl">
            Proven PEB Execution
            <br />
            Across Industries
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Explore selected Steelbuild Infra Projects delivered for industrial,
            warehousing and manufacturing sectors with precision engineering,
            quality fabrication and timely execution.
          </p>
        </motion.div>

        <div className="relative z-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_22px_65px_rgba(27,63,104,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_35px_90px_rgba(27,63,104,0.15)]"
            >
              <div className="relative h-[330px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/75 via-primary-blue/10 to-transparent" />

                <span className="absolute left-6 top-6 rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-[0.22em] text-primary-red">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black tracking-[-0.03em] text-primary-blue">
                  {project.title}
                </h3>

                <div className="mt-5 flex flex-col gap-3 text-sm font-bold text-gray-600">
                  <span className="inline-flex items-center gap-2">
                    <Building2 size={17} className="text-primary-red" />
                    {project.type}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <MapPin size={17} className="text-primary-red" />
                    {project.location}
                  </span>
                </div>

                <Link
                  href="/projects"
                  className="mt-7 inline-flex items-center font-black text-primary-red transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary-blue"
                >
                  View Project
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="relative z-10 mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center rounded-xl bg-primary-red px-8 py-4 font-black !text-white shadow-xl shadow-primary-red/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
          >
            Explore All Projects
            <ArrowRight size={18} className="ml-2 !text-white" />
          </Link>
        </div>
      </Container>
    </section>
  );
}