"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  Handshake,
  HeartHandshake,
  Quote,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

const recognitionPoints = [
  {
    icon: Handshake,
    number: "01",
    title: "Long-Term Client Relationships",
    description:
      "Relationships strengthened through transparent communication, dependable commitments and responsive project coordination.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Trust Through Quality",
    description:
      "Customer confidence built through controlled manufacturing, engineering precision and consistent quality standards.",
  },
  {
    icon: Building2,
    number: "03",
    title: "Dependable Project Delivery",
    description:
      "Coordinated execution supporting industrial buildings, warehouses, factories and infrastructure projects across India.",
  },
  {
    icon: UsersRound,
    number: "04",
    title: "Customer-Focused Support",
    description:
      "Cross-functional teams working closely with customers from initial requirements through manufacturing and execution.",
  },
];

export default function ClientRecognition() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.65 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
            <HeartHandshake size={15} />
            Client Recognition
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Trust Earned Through Every Commitment
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            The confidence of our clients remains one of Steelbuild&apos;s most
            meaningful recognitions, reflecting dependable quality,
            communication and project delivery.
          </p>
        </motion.div>

        {/* Main layout */}

        <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          {/* Left statement panel */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative isolate overflow-hidden rounded-[38px] bg-primary-blue p-8 shadow-[0_34px_95px_rgba(27,63,104,0.22)] md:p-10 lg:p-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_48%,#113158_100%)]" />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:58px_58px]" />

            <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-primary-red/20 blur-[100px]" />

            <div className="relative z-10">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-red text-white shadow-lg shadow-primary-red/20">
                <Quote size={30} />
              </div>

              <p className="mt-8 text-[11px] font-black uppercase tracking-[0.28em] text-primary-red">
                Recognition Through Trust
              </p>

              <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-white md:text-4xl lg:text-[46px]">
                Every Successful Project Strengthens a Lasting Partnership
              </h3>

              <p className="mt-6 text-base font-medium leading-8 text-white/70">
                We consider client trust a responsibility. Every commitment is
                supported by coordinated engineering, controlled manufacturing,
                clear communication and accountable execution.
              </p>

              <div className="mt-9 space-y-4">
                {[
                  "Transparent project communication",
                  "Quality-focused manufacturing",
                  "Timely coordination and delivery",
                  "Responsive customer support",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-5 py-4 backdrop-blur-md"
                  >
                    <BadgeCheck
                      size={19}
                      className="shrink-0 text-primary-red"
                    />

                    <span className="text-sm font-black leading-6 text-white/82">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right cards */}

          <div className="grid gap-5 sm:grid-cols-2">
            {recognitionPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.06,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-7 shadow-[0_16px_50px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_28px_75px_rgba(27,63,104,0.13)]"
                >
                  <span className="absolute right-5 top-4 text-[46px] font-black leading-none text-primary-blue/[0.045]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-red group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                    Trust Pillar {item.number}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm font-medium leading-7 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
                    <BadgeCheck
                      size={17}
                      className="shrink-0 text-primary-red"
                    />

                    <span className="text-xs font-black uppercase tracking-[0.12em] text-primary-blue">
                      Client Value
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom trust strip */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-[#f8fafc] shadow-[0_20px_60px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          <TrustItem
            value="Quality"
            label="Controlled processes and dependable standards"
          />

          <TrustItem
            value="Commitment"
            label="Responsible coordination across every project stage"
            bordered
          />

          <TrustItem
            value="Partnership"
            label="Professional relationships built for the long term"
          />
        </motion.div>
      </Container>
    </section>
  );
}

type TrustItemProps = {
  value: string;
  label: string;
  bordered?: boolean;
};

function TrustItem({
  value,
  label,
  bordered = false,
}: TrustItemProps) {
  return (
    <div
      className={`px-7 py-7 text-center ${
        bordered
          ? "border-y border-gray-200 md:border-x md:border-y-0"
          : ""
      }`}
    >
      <p className="text-2xl font-black tracking-[-0.04em] text-primary-blue">
        {value}
      </p>

      <p className="mx-auto mt-2 max-w-xs text-sm font-semibold leading-6 text-gray-500">
        {label}
      </p>
    </div>
  );
}