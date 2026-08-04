"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Crown,
  ShieldCheck,
  Target,
} from "lucide-react";

import Container from "@/components/layout/Container";

import type {
  SanityLeadershipMember,
} from "@/types/sanityLeadershipMember";

type LeadershipSectionProps = {
  leaders: SanityLeadershipMember[];
};

const leadershipPrinciples = [
  {
    icon: Target,
    title:
      "Clear Strategic Direction",
    description:
      "Focused leadership aligned with sustainable growth, engineering capability and customer value.",
  },
  {
    icon: ShieldCheck,
    title:
      "Commitment to Quality",
    description:
      "Strong emphasis on dependable engineering, manufacturing control and accountable execution.",
  },
  {
    icon: Building2,
    title:
      "Industrial Growth Vision",
    description:
      "Continuous investment in infrastructure, technology, people and manufacturing capacity.",
  },
];

function getInitials(
  name: string,
): string {
  const cleanName = name
    .replace(/^Mr\.\s*/i, "")
    .replace(/^Ms\.\s*/i, "")
    .replace(/^Mrs\.\s*/i, "")
    .replace(/^Dr\.\s*/i, "")
    .trim();

  const words = cleanName
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) {
    return "SB";
  }

  if (words.length === 1) {
    return words[0]
      .slice(0, 2)
      .toUpperCase();
  }

  return `${words[0][0]}${
    words[words.length - 1][0]
  }`.toUpperCase();
}

export default function LeadershipSection({
  leaders,
}: LeadershipSectionProps) {
  return (
    <section
      id="leadership"
      className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <Crown size={15} />
            Leadership
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Leadership Driving Steelbuild Forward
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Steelbuild is guided by experienced leadership focused on
            engineering excellence, responsible growth, manufacturing
            capability and dependable project delivery.
          </p>
        </motion.div>

        {leaders.length > 0 ? (
          <div className="relative z-10 mt-16 grid gap-8 lg:grid-cols-2">
            {leaders.map(
              (leader, index) => (
                <motion.article
                  id={leader.slug}
                  key={leader._id}
                  initial={{
                    opacity: 0,
                    y: 34,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-70px",
                  }}
                  transition={{
                    duration: 0.6,
                    delay:
                      index * 0.08,
                  }}
                  className="group relative isolate overflow-hidden rounded-[36px] border border-gray-200 bg-white shadow-[0_26px_80px_rgba(27,63,104,0.1)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/20 hover:shadow-[0_36px_95px_rgba(27,63,104,0.16)]"
                >
                  <div className="grid h-full md:grid-cols-[190px_1fr]">
                    <div className="relative isolate flex min-h-[290px] items-center justify-center overflow-hidden bg-primary-blue p-7">
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

                      <div className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-primary-red/25 blur-[65px]" />

                      <div className="relative z-10 text-center">
                        {leader.profileImage
                          ?.url ? (
                          <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-[6px] border-white/15 bg-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-105">
                            <Image
                              src={
                                leader
                                  .profileImage
                                  .url
                              }
                              alt={
                                leader
                                  .profileImage
                                  .alt ||
                                leader.name
                              }
                              fill
                              sizes="144px"
                              placeholder={
                                leader
                                  .profileImage
                                  .lqip
                                  ? "blur"
                                  : "empty"
                              }
                              blurDataURL={
                                leader
                                  .profileImage
                                  .lqip
                              }
                              className="object-cover"
                              style={{
                                objectPosition:
                                  leader.imagePosition,
                              }}
                            />
                          </div>
                        ) : (
                          <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-white/15 bg-white/10 text-4xl font-black tracking-[-0.04em] text-white shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-500 group-hover:scale-105">
                            {getInitials(
                              leader.name,
                            )}
                          </div>
                        )}

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white/80">
                          <BadgeCheck
                            size={14}
                            className="text-primary-red"
                          />

                          Leadership
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col p-7 md:p-8">
                      <p className="text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                        Steelbuild Leadership
                      </p>

                      <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue">
                        {leader.name}
                      </h3>

                      <p className="mt-2 font-black text-primary-red">
                        {
                          leader.designation
                        }
                      </p>

                      <p className="mt-5 text-sm font-medium leading-7 text-gray-600">
                        {
                          leader.shortDescription
                        }
                      </p>

                      {leader.strengths
                        .length > 0 && (
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {leader.strengths.map(
                            (
                              strength,
                            ) => (
                              <div
                                key={
                                  strength
                                }
                                className="flex items-start gap-2.5 rounded-2xl bg-[#f8fafc] px-4 py-3"
                              >
                                <BadgeCheck
                                  size={
                                    16
                                  }
                                  className="mt-0.5 shrink-0 text-primary-red"
                                />

                                <span className="text-xs font-black leading-5 text-primary-blue">
                                  {
                                    strength
                                  }
                                </span>
                              </div>
                            ),
                          )}
                        </div>
                      )}

                      <Link
                        href={`/about/leadership#${leader.slug}-message`}
                        className="group/button mt-7 inline-flex w-fit items-center gap-3 font-black !text-primary-red transition-colors duration-300 hover:!text-primary-blue"
                      >
                        Read Leadership Message

                        <ArrowUpRight
                          size={18}
                          className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        ) : (
          <div className="relative z-10 mt-16 rounded-[30px] border border-gray-200 bg-white p-10 text-center shadow-[0_20px_65px_rgba(27,63,104,0.08)]">
            <Crown
              size={42}
              className="mx-auto text-primary-red"
            />

            <h3 className="mt-5 text-2xl font-black text-primary-blue">
              Leadership Profiles Will Be Added Soon
            </h3>
          </div>
        )}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative z-10 mt-12 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_20px_65px_rgba(27,63,104,0.08)] md:grid-cols-3"
        >
          {leadershipPrinciples.map(
            (item, index) => {
              const Icon =
                item.icon;

              return (
                <div
                  key={
                    item.title
                  }
                  className={`group p-7 transition-colors duration-300 hover:bg-[#f8fafc] ${
                    index <
                    leadershipPrinciples.length -
                      1
                      ? "border-b border-gray-200 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                    <Icon
                      size={25}
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-primary-blue">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                    {
                      item.description
                    }
                  </p>
                </div>
              );
            },
          )}
        </motion.div>
      </Container>
    </section>
  );
}