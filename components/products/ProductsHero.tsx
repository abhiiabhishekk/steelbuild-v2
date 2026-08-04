"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Building2, ChevronRight } from "lucide-react";
import Container from "@/components/layout/Container";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5fb] pt-36 pb-24 lg:pt-44 lg:pb-32">

      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-primary-red/5 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-primary-blue/5 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            {/* Breadcrumb */}

            <div className="mb-8 flex items-center text-sm text-gray-500">

              <Link
                href="/"
                className="hover:text-primary-red"
              >
                Home
              </Link>

              <ChevronRight size={16} className="mx-2" />

              <span className="font-semibold text-primary-blue">
                Products
              </span>

            </div>

            <span className="inline-flex rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.35em] text-primary-red">
              Premium PEB Solutions
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-[-0.05em] text-primary-blue lg:text-7xl">

              Pre-Engineered Building
              <span className="block text-primary-blue">
                Solutions
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">

              Steelbuild Infra Projects Limited delivers world-class
              Pre-Engineered Buildings, warehouses, industrial buildings,
              factory sheds and customized steel infrastructure engineered
              for speed, durability and long-term performance.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
  href="/contact"
  className="inline-flex items-center rounded-xl bg-primary-red px-8 py-4 font-black !text-white shadow-xl shadow-primary-red/25 transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
>
  Request a Quote
  <ArrowRight size={18} className="ml-2 !text-white" />
</Link>

              <Link
  href="/projects"
  className="inline-flex items-center rounded-xl border border-primary-blue px-8 py-4 font-black !text-primary-blue transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue hover:!text-white"
>
  View Projects
</Link>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="relative"
          >

            <div className="rounded-[40px] border border-gray-200 bg-white p-10 shadow-[0_40px_90px_rgba(27,63,104,.12)]">

              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary-blue text-white">

                <Building2 size={44} />

              </div>

              <div className="mt-10 space-y-7">

                <div>

                  <p className="text-5xl font-black text-primary-blue">
                    10+
                  </p>

                  <p className="mt-2 font-semibold text-gray-600">
                    Premium Product Categories
                  </p>

                </div>

                <div>

                  <p className="text-5xl font-black text-primary-blue">
                    700+
                  </p>

                  <p className="mt-2 font-semibold text-gray-600">
                    Projects Delivered
                  </p>

                </div>

                <div>

                  <p className="text-5xl font-black text-primary-blue">
                    50,000 MT
                  </p>

                  <p className="mt-2 font-semibold text-gray-600">
                    Annual Manufacturing Capacity
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </Container>
    </section>
  );
}