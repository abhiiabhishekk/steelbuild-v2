"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Check,
  Download,
  FileText,
} from "lucide-react";

import Container from "@/components/layout/Container";

const brochurePath = "/documents/steelbuild-company-profile.pdf";

const brochureDetails = [
  "Company overview and organizational journey",
  "Products and industrial building systems",
  "Manufacturing infrastructure and capabilities",
  "Selected project experience and industries served",
  "Quality systems and execution commitment",
];

export default function CorporateProfileBrochure() {
  return (
    <section
      id="corporate-brochure"
      className="relative scroll-mt-32 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Brochure visual */}

          <motion.div
            initial={{ opacity: 0, x: -38 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative flex min-h-[460px] items-center justify-center lg:min-h-[570px]"
          >
            <div className="pointer-events-none absolute bottom-[10%] left-1/2 h-20 w-[72%] -translate-x-1/2 rounded-[50%] bg-primary-blue/20 blur-3xl" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/10 blur-[95px]" />

            <motion.a
              href={brochurePath}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Steelbuild company brochure"
              initial={{
                rotateY: 13,
                rotateX: 4,
                rotateZ: 1.5,
              }}
              animate={{
                y: [0, -10, 0],
                rotateY: [13, 9, 13],
                rotateX: [4, 2, 4],
              }}
              transition={{
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateX: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                rotateY: 5,
                rotateX: 1,
                rotateZ: 0,
                scale: 1.025,
                y: -8,
              }}
              className="group relative block h-[290px] w-[430px] cursor-pointer [perspective:1800px] sm:h-[345px] sm:w-[520px] lg:h-[385px] lg:w-[580px]"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Thickness */}

              <div
                className="absolute bottom-[-12px] left-[18px] right-[-14px] top-[12px] rounded-[20px] bg-gradient-to-b from-white via-[#eeeeee] to-[#cfcfcf] shadow-[30px_38px_80px_rgba(27,63,104,0.3)]"
                style={{
                  transform: "translateZ(-24px)",
                }}
              />

              {/* Right edge */}

              <div
                className="absolute -right-[18px] bottom-[5px] top-[8px] w-[34px] rounded-r-[12px] bg-gradient-to-r from-[#9a0c12] via-[#c21119] to-[#7d090e]"
                style={{
                  transform: "rotateY(90deg) translateZ(17px)",
                  transformOrigin: "left center",
                }}
              />

              {/* Bottom edge */}

              <div
                className="absolute -bottom-[18px] left-[8px] right-[8px] h-[32px] rounded-b-[12px] bg-gradient-to-b from-[#f3f3f3] via-[#d8d8d8] to-[#bfbfbf]"
                style={{
                  transform: "rotateX(90deg) translateZ(16px)",
                  transformOrigin: "top center",
                }}
              />

              {/* Cover */}

              <div className="absolute inset-0 overflow-hidden rounded-[20px] border border-gray-200 bg-white shadow-[0_34px_90px_rgba(27,63,104,0.25)] transition-shadow duration-500 group-hover:shadow-[0_46px_120px_rgba(27,63,104,0.35)]">
                <Image
                  src="/images/company-brochure/steelbuild-company-profile-cover.jpg"
                  alt="Steelbuild Infra Projects Limited company profile brochure"
                  fill
                  sizes="(max-width: 640px) 430px, (max-width: 1024px) 520px, 580px"
                  className="object-cover"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-white/10" />

                <div className="pointer-events-none absolute inset-y-0 left-0 w-[16px] bg-gradient-to-r from-black/25 to-transparent" />
              </div>

              <div className="absolute -bottom-6 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary-blue px-5 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-[0_15px_35px_rgba(27,63,104,0.28)] transition-all duration-300 group-hover:bg-primary-red">
                Click to View Brochure
              </div>
            </motion.a>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 38 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
              <BookOpen size={15} />
              Official Company Brochure
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Explore Our Complete Corporate Profile
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-gray-600">
              Access the official Steelbuild company brochure for a structured
              overview of our organization, engineering expertise,
              manufacturing capabilities, products, projects and industry
              experience.
            </p>

            <div className="mt-8 space-y-3">
              {brochureDetails.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 py-4"
                >
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-red/10 text-primary-red">
                    <Check
                      size={15}
                      strokeWidth={3}
                    />
                  </div>

                  <p className="text-sm font-bold leading-7 text-primary-blue">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={brochurePath}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 text-base font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a80e15] hover:!text-white"
              >
                <FileText size={20} />

                View Company Profile

                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <a
                href={brochurePath}
                download
                className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-primary-blue px-8 py-4 text-base font-black !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:!text-white"
              >
                <Download
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />

                Download PDF
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}