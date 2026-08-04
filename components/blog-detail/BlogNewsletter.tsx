"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BellRing,
  Factory,
  Mail,
} from "lucide-react";

import Container from "@/components/layout/Container";

export default function BlogNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] py-24 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <Container>
        <div className="relative z-10 overflow-hidden rounded-[36px] bg-primary-blue p-8 shadow-[0_30px_90px_rgba(27,63,104,0.22)] md:p-12 lg:p-16">

          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">

            <div>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-white">

                <BellRing
                  size={15}
                  className="text-primary-red"
                />

                Newsletter

              </span>

              <h2 className="mt-7 text-4xl font-black leading-tight text-white md:text-5xl">
                Stay Updated With Steelbuild Insights
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                Receive the latest articles on
                Pre-Engineered Buildings,
                industrial construction,
                manufacturing technologies
                and engineering innovation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "PEB Knowledge",
                  "Construction Trends",
                  "Engineering",
                  "Manufacturing",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-xs font-black text-white"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

            <div className="rounded-[30px] bg-white p-8 shadow-xl">

              <Mail
                size={34}
                className="text-primary-red"
              />

              <h3 className="mt-5 text-2xl font-black text-primary-blue">
                Subscribe
              </h3>

              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="mt-6 w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none transition focus:border-primary-red"
              />

              <button
                className="mt-5 flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-6 py-4 font-black !text-white transition hover:bg-primary-blue"
              >
                Subscribe

                <ArrowUpRight size={19} />

              </button>

              <div className="mt-8 border-t border-gray-200 pt-8">

                <Factory
                  size={28}
                  className="text-primary-red"
                />

                <h4 className="mt-4 text-xl font-black text-primary-blue">
                  Planning an Industrial Project?
                </h4>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  Speak with Steelbuild's engineering
                  specialists for your next project.
                </p>

                <Link
                  href="/request-a-quote"
                  className="group mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-2xl border border-primary-blue bg-white px-6 py-4 font-black text-primary-blue transition hover:bg-primary-blue hover:!text-white"
                >
                  Request a Quote

                  <ArrowUpRight
                    size={18}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </Link>

              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}