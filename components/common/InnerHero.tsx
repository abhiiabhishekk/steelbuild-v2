"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  PlayCircle,
} from "lucide-react";

import Container from "@/components/layout/Container";

type HeroAction = {
  label: string;
  href: string;
};

type InnerHeroProps = {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;

  highlights?: string[];

  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;

  imageAlt?: string;
  imagePosition?: string;
};

export default function InnerHero({
  title,
  subtitle,
  description,
  image,
  highlights = [],
  primaryAction,
  secondaryAction,
  imageAlt,
  imagePosition = "center",
}: InnerHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9fc]">
      {/* Background pattern */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background glows */}

      <div className="absolute -left-40 top-16 h-[420px] w-[420px] rounded-full bg-primary-red/10 blur-[130px]" />

      <div className="absolute -right-40 bottom-0 h-[440px] w-[440px] rounded-full bg-primary-blue/10 blur-[140px]" />

      <Container>
        <div className="relative z-10 grid min-h-[650px] items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-20">
          {/* Left content */}

          <div className="relative z-20">
            {subtitle && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-3 rounded-full border border-primary-red/10 bg-primary-red/10 px-5 py-2.5"
              >
                <span className="h-2 w-2 rounded-full bg-primary-red shadow-[0_0_0_5px_rgba(194,17,25,0.10)]" />

                <span className="text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                  {subtitle}
                </span>
              </motion.div>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className={`max-w-[720px] text-5xl font-black leading-[0.98] tracking-[-0.055em] text-primary-blue md:text-6xl lg:text-[74px] ${
                subtitle ? "mt-7" : ""
              }`}
            >
              {title}
            </motion.h1>

            {description && (
              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.14 }}
                className="mt-7 max-w-2xl text-base font-medium leading-8 text-gray-600 md:text-lg md:leading-9"
              >
                {description}
              </motion.p>
            )}

            {/* Highlights */}

            {highlights.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.22 }}
                className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2"
              >
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3.5 shadow-[0_10px_30px_rgba(27,63,104,0.06)]"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-primary-blue">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* Actions */}

            {(primaryAction || secondaryAction) && (
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3 }}
                className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
              >
                {primaryAction && (
                  <Link
                    href={primaryAction.href}
                    className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
                  >
                    {primaryAction.label}

                    <ArrowUpRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-7 py-4 font-black !text-primary-blue shadow-[0_12px_34px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
                  >
                    <PlayCircle size={20} />

                    {secondaryAction.label}
                  </Link>
                )}
              </motion.div>
            )}
          </div>

          {/* Right image */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="relative"
          >
            {/* Outer decorative frame */}

            <div className="absolute -left-5 -top-5 hidden h-full w-full rounded-[42px] border border-primary-blue/10 lg:block" />

            <div className="relative overflow-hidden rounded-[34px] border border-white bg-primary-blue shadow-[0_35px_100px_rgba(27,63,104,0.20)]">
              <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[560px]">
                <Image
                  src={image}
                  alt={imageAlt || `${title} - Steelbuild Infra Projects`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  style={{
                    objectPosition: imagePosition,
                  }}
                />

                {/* Image overlays */}

                <div className="absolute inset-0 bg-gradient-to-t from-[#061b36]/80 via-transparent to-primary-blue/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 via-transparent to-transparent" />

                {/* Top label */}

                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-[#071b34]/55 px-5 py-2.5 backdrop-blur-md md:left-8 md:top-8">
                  <p className="text-[10px] font-black uppercase tracking-[0.26em] text-white">
                    Steelbuild Infra Projects
                  </p>
                </div>

                {/* Bottom floating card */}

                <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-white/15 bg-[#071b34]/65 p-5 backdrop-blur-xl md:bottom-8 md:left-8 md:right-8 md:p-6">
                  <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-red">
                    Engineering Excellence
                  </p>

                  <p className="mt-2 max-w-xl text-lg font-black leading-7 text-white md:text-xl">
                    Precision infrastructure engineered for strength,
                    performance and reliable delivery.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating red accent */}

            {/* <div className="absolute -bottom-5 -right-5 hidden h-24 w-24 rounded-[28px] bg-primary-red shadow-[0_20px_45px_rgba(194,17,25,0.25)] lg:flex lg:items-center lg:justify-center">
              <ArrowUpRight size={34} className="text-white" />
            </div> */}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}