"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Factory,
  FileQuestion,
  Home,
  Mail,
  MapPinned,
  PackageSearch,
  SearchX,
} from "lucide-react";

import Container from "@/components/layout/Container";

const popularPages = [
  {
    label: "Pre-Engineered Buildings",
    href: "/products/pre-engineered-buildings",
    icon: Building2,
  },
  {
    label: "Products",
    href: "/products",
    icon: PackageSearch,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: MapPinned,
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    icon: Factory,
  },
];

export default function NotFound() {
  return (
    <main className="relative isolate min-h-[calc(100vh-120px)] overflow-hidden bg-[#f7f9fc] py-20 lg:py-28">
      {/* Engineering grid background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />

      {/* Background glows */}

      <div className="pointer-events-none absolute -left-44 top-10 h-[440px] w-[440px] rounded-full bg-primary-red/[0.07] blur-[110px]" />

      <div className="pointer-events-none absolute -right-44 bottom-0 h-[480px] w-[480px] rounded-full bg-primary-blue/[0.12] blur-[120px]" />

      <Container>
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* Left content */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
                <SearchX size={16} />
                Page Not Found
              </span>

              <div className="relative mt-7">
                <span className="block text-[110px] font-black leading-none tracking-[-0.08em] text-primary-blue sm:text-[150px] lg:text-[190px]">
                  404
                </span>

                <div className="absolute bottom-2 left-1 h-2 w-24 rounded-full bg-primary-red sm:w-32" />
              </div>

              <h1 className="mt-8 max-w-2xl text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
                The Page You&apos;re Looking for Could Not Be Found.
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-gray-600">
                The page may have been moved, renamed or removed. Return to the
                homepage or explore Steelbuild&apos;s products, projects and
                manufacturing capabilities.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 text-base font-black !text-white shadow-[0_18px_45px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a80e15] hover:!text-white"
                >
                  <Home size={20} />

                  Back to Home
                </Link>

                <Link
                  href="/products"
                  className="group inline-flex min-h-[58px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-8 py-4 text-base font-black !text-primary-blue shadow-[0_14px_38px_rgba(27,63,104,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:!text-white"
                >
                  Explore Products

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>

            {/* Right visual */}

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative"
            >
              <div className="relative isolate overflow-hidden rounded-[40px] bg-primary-blue p-8 shadow-[0_35px_100px_rgba(27,63,104,0.22)] sm:p-10 lg:p-12">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#102f55_100%)]" />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

                <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/25 blur-[95px]" />

                <div className="relative z-10">
                  {/* Engineering illustration */}

                  <div className="relative mx-auto flex aspect-square max-w-[390px] items-center justify-center">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="relative flex h-[245px] w-[245px] items-center justify-center rounded-[42px] border border-white/15 bg-white/[0.08] shadow-[0_25px_70px_rgba(0,0,0,0.18)] backdrop-blur-md sm:h-[290px] sm:w-[290px]"
                    >
                      <div className="absolute inset-5 rounded-[32px] border border-dashed border-white/15" />

                      <div className="absolute left-8 top-8 h-3 w-16 rounded-full bg-primary-red" />

                      <div className="absolute bottom-8 right-8 h-3 w-20 rounded-full bg-white/15" />

                      <div className="flex h-28 w-28 items-center justify-center rounded-[30px] bg-primary-red text-white shadow-[0_20px_50px_rgba(194,17,25,0.35)]">
                        <FileQuestion
                          size={58}
                          strokeWidth={1.7}
                        />
                      </div>
                    </motion.div>

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="pointer-events-none absolute inset-8 rounded-full border border-dashed border-white/15"
                    />

                    <div className="pointer-events-none absolute left-5 top-10 h-4 w-4 rounded-full bg-primary-red shadow-[0_0_22px_rgba(194,17,25,0.8)]" />

                    <div className="pointer-events-none absolute bottom-14 right-7 h-3 w-3 rounded-full bg-white/70" />
                  </div>

                  <div className="mt-7 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-red">
                      Steelbuild Navigation
                    </p>

                    <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                      Let&apos;s Help You Find the Right Page
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-sm font-medium leading-7 text-white/65">
                      Use the quick links below to continue exploring our
                      industrial building solutions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Popular pages */}

          <motion.section
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-16 overflow-hidden rounded-[34px] border border-gray-200 bg-white p-7 shadow-[0_24px_75px_rgba(27,63,104,0.09)] md:p-9 lg:mt-20"
          >
            <div className="flex flex-col gap-4 border-b border-gray-200 pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-primary-red">
                  Quick Navigation
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-primary-blue md:text-3xl">
                  Explore Popular Pages
                </h2>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-black text-primary-blue transition-colors duration-300 hover:text-primary-red"
              >
                Need assistance? Contact us

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {popularPages.map((page, index) => {
                const Icon = page.icon;

                return (
                  <motion.div
                    key={page.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.25 + index * 0.06,
                    }}
                  >
                    <Link
                      href={page.href}
                      className="group flex min-h-[120px] items-center justify-between gap-5 rounded-[24px] border border-gray-200 bg-[#f8fafc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/25 hover:bg-white hover:shadow-[0_20px_55px_rgba(27,63,104,0.1)]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                          <Icon size={22} />
                        </div>

                        <span className="text-sm font-black leading-6 text-primary-blue">
                          {page.label}
                        </span>
                      </div>

                      <ArrowRight
                        size={18}
                        className="shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-red"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Assistance CTA */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[30px] bg-primary-blue p-7 shadow-[0_24px_70px_rgba(27,63,104,0.18)] md:flex-row md:p-9"
          >
            <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.28)]">
                <Mail size={26} />
              </div>

              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-red-200">
                  Need Assistance?
                </p>

                <h2 className="mt-2 text-xl font-black text-white md:text-2xl">
                  Our Team Is Here to Help
                </h2>

                <p className="mt-2 text-sm font-medium leading-7 text-white/65">
                  Contact us for project enquiries, technical discussions or
                  help finding information.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="group inline-flex min-h-[54px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-black !text-primary-blue transition-all duration-300 hover:-translate-y-1 hover:bg-primary-red hover:!text-white"
            >
              Contact Our Team

              <ArrowLeft
                size={18}
                className="rotate-180 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}