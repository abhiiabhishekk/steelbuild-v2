"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";

const contactOptions = [
  {
    icon: Phone,
    label: "Call Our Team",
    value: "+91 81301 99427",
    href: "tel:+918130199427",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Discuss Your Requirement",
    href: "https://wa.me/918130199427",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@steelbuildinfra.com",
    href: "mailto:info@steelbuildinfra.com",
  },
];

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-8 lg:pb-28 lg:pt-10">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative isolate min-w-0 overflow-hidden rounded-[40px] bg-primary-blue shadow-[0_40px_105px_rgba(27,63,104,0.23)]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:62px_62px]" />

          <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary-red/20 blur-[110px]" />

          <div className="pointer-events-none absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-[#6ba3df]/20 blur-[125px]" />

          <div className="relative z-10 grid min-w-0 gap-14 px-8 py-14 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-16 lg:py-20">
            {/* Left */}
            <div className="min-w-0">
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-md">
                <BadgeCheck
                  size={16}
                  className="shrink-0 text-primary-red"
                />

                <span className="min-w-0 break-words text-[11px] font-black uppercase tracking-[0.25em] text-white">
                  Start Your Project
                </span>
              </div>

              <h2 className="mt-7 max-w-3xl break-words text-4xl font-black leading-[1.02] tracking-[-0.045em] text-white md:text-5xl lg:text-[58px]">
                Ready to Discuss Your Industrial Building Requirement?
              </h2>

              <p className="mt-6 max-w-2xl break-words text-base font-medium leading-8 text-white/72 md:text-lg">
                Share your project details through the quotation form or speak
                directly with our team for preliminary guidance on your
                Pre-Engineered Building requirement.
              </p>

              <div className="mt-9 flex min-w-0 flex-wrap gap-3">
                {[
                  "Engineering Consultation",
                  "Customized PEB Solution",
                  "Pan-India Support",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex max-w-full min-w-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-black text-white/90 backdrop-blur-md"
                  >
                    <ShieldCheck
                      size={15}
                      className="shrink-0 text-primary-red"
                    />

                    <span className="min-w-0 break-words">
                      {item}
                    </span>
                  </span>
                ))}
              </div>

              <div className="mt-10 flex min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="#quote-form"
                  className="group inline-flex min-h-[60px] w-full min-w-0 items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 text-center font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue sm:w-auto"
                >
                  <span className="min-w-0">
                    Complete Quote Form
                  </span>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  href="tel:+918130199427"
                  className="group inline-flex min-h-[60px] w-full min-w-0 items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-center font-black !text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:!text-primary-blue sm:w-auto"
                >
                  <span className="min-w-0">
                    Call Our Experts
                  </span>

                  <Headphones
                    size={20}
                    className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
            </div>

            {/* Right */}
            <div className="min-w-0 rounded-[32px] border border-white/15 bg-white/10 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl md:p-8">
              <p className="break-words text-[11px] font-black uppercase tracking-[0.26em] text-primary-red">
                Contact Options
              </p>

              <h3 className="mt-4 break-words text-3xl font-black leading-tight text-white">
                Connect With Steelbuild
              </h3>

              <p className="mt-4 break-words text-sm font-medium leading-7 text-white/65">
                Choose the most convenient channel to discuss your project
                requirement with our team.
              </p>

              <div className="mt-7 min-w-0 space-y-4">
                {contactOptions.map(
                  (item) => {
                    const Icon =
                      item.icon;

                    const external =
                      item.href.startsWith(
                        "http",
                      );

                    const isEmail =
                      item.label ===
                      "Email Us";

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target={
                          external
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          external
                            ? "noreferrer noopener"
                            : undefined
                        }
                        className="group flex min-w-0 items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.08] p-5 !text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary-red/40 hover:bg-white/[0.13]"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
                          <Icon
                            size={22}
                          />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold text-white/55">
                            {
                              item.label
                            }
                          </p>

                          <p
                            className={`mt-1 min-w-0 font-black text-white ${
                              isEmail
                                ? "break-all"
                                : "break-words"
                            }`}
                          >
                            {
                              item.value
                            }
                          </p>
                        </div>

                        <ArrowUpRight
                          size={19}
                          className="shrink-0 text-primary-red transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        />
                      </Link>
                    );
                  },
                )}
              </div>

              <div className="mt-6 flex min-w-0 items-start gap-3 rounded-[22px] border border-white/10 bg-[#0b2b50]/70 px-5 py-4">
                <MapPin
                  size={22}
                  className="mt-0.5 shrink-0 text-primary-red"
                />

                <p className="min-w-0 break-words text-sm font-bold leading-7 text-white/72">
                  Head Office: Pitampura, New Delhi. Manufacturing facilities
                  located in Sonipat, Haryana.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}