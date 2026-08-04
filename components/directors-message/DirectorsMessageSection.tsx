"use client";

import Image from "next/image";
import Link from "next/link";

import {
  motion,
} from "framer-motion";

import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Factory,
  Handshake,
  MessageSquareQuote,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

import Container from "@/components/layout/Container";

import type {
  SanityLeadershipMember,
} from "@/types/sanityLeadershipMember";

type DirectorsMessageSectionProps = {
  leaders: SanityLeadershipMember[];
};

const leadershipValues = [
  {
    icon: Target,
    title: "Clear Vision",
    description:
      "A long-term approach focused on responsible growth, customer value and engineering excellence.",
  },
  {
    icon: ShieldCheck,
    title:
      "Uncompromised Quality",
    description:
      "Strong quality standards embedded across engineering, manufacturing and project delivery.",
  },
  {
    icon: Handshake,
    title: "Client Trust",
    description:
      "Transparent communication, dependable commitments and enduring professional relationships.",
  },
  {
    icon: Factory,
    title:
      "Operational Excellence",
    description:
      "Advanced manufacturing, disciplined processes and coordinated project execution.",
  },
];

export default function DirectorsMessageSection({
  leaders,
}: DirectorsMessageSectionProps) {
  return (
    <>
      <section
        id="directors-message"
        className="relative scroll-mt-28 overflow-hidden bg-[#f7f9fc] py-24 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.02)_1px,transparent_1px)] bg-[size:74px_74px]" />

        <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-24 h-[430px] w-[430px] rounded-full bg-primary-blue/10 blur-3xl" />

        <Container>
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
              <MessageSquareQuote
                size={15}
              />

              Leadership Messages
            </span>

            <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
              Words That Define Our Direction
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
              Personal messages from our Directors reflecting the vision,
              responsibilities and commitments guiding Steelbuild forward.
            </p>
          </motion.div>

          <div className="relative z-10 mt-16 space-y-14 lg:space-y-20">
            {leaders.map(
              (director, index) => (
                <motion.article
                  key={
                    director._id
                  }
                  id={`${director.slug}-message`}
                  initial={{
                    opacity: 0,
                    y: 38,
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
                    duration: 0.7,
                    delay:
                      index * 0.08,
                  }}
                  className="scroll-mt-32 overflow-hidden rounded-[38px] border border-gray-200 bg-white shadow-[0_30px_95px_rgba(27,63,104,0.12)]"
                >
                  <div className="grid items-stretch lg:min-h-[900px] lg:grid-cols-[40%_60%]">
                    <div className="relative isolate flex min-h-[620px] flex-col overflow-hidden bg-primary-blue p-5 md:p-7 lg:min-h-[900px]">
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#194979_0%,#123760_52%,#0c2b4c_100%)]" />

                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:52px_52px]" />

                      <div className="pointer-events-none absolute -bottom-20 -right-16 h-60 w-60 rounded-full bg-primary-red/18 blur-[85px]" />

                      <div className="relative z-10 h-[520px] w-full overflow-hidden rounded-[28px] border border-white/15 bg-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.16)]">
                        {director
                          .profileImage
                          ?.url ? (
                          <Image
                            src={
                              director
                                .profileImage
                                .url
                            }
                            alt={
                              director
                                .profileImage
                                .alt ||
                              `${director.name}, ${director.designation}`
                            }
                            fill
                            sizes="(max-width: 1024px) 100vw, 40vw"
                            placeholder={
                              director
                                .profileImage
                                .lqip
                                ? "blur"
                                : "empty"
                            }
                            blurDataURL={
                              director
                                .profileImage
                                .lqip
                            }
                            className="object-cover"
                            style={{
                              objectPosition:
                                director.imagePosition,
                            }}
                            priority={
                              index === 0
                            }
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-6xl font-black text-white">
                            {director.name
                              .replace(
                                /^Mr\.\s*/i,
                                "",
                              )
                              .split(
                                /\s+/,
                              )
                              .map(
                                (
                                  word,
                                ) =>
                                  word[0],
                              )
                              .slice(
                                0,
                                2,
                              )
                              .join("")}
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-[#07182d]/35 via-transparent to-transparent" />
                      </div>

                      <div className="relative z-10 flex flex-1 flex-col px-1 pb-2 pt-7">
                        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.17em] text-white/85 backdrop-blur-md">
                          <BadgeCheck
                            size={13}
                            className="text-primary-red"
                          />

                          Steelbuild Leadership
                        </span>

                        <h3 className="mt-6 text-3xl font-black tracking-[-0.04em] text-white md:text-4xl">
                          {
                            director.name
                          }
                        </h3>

                        <p className="mt-2 font-black text-primary-red">
                          {
                            director.designation
                          }
                        </p>
                      </div>
                    </div>

                    <div className="flex min-h-[900px] flex-col p-7 md:p-10 lg:p-12">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
                          {
                            director.messageEyebrow
                          }
                        </p>

                        <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-primary-blue md:text-4xl">
                          Message from{" "}
                          {
                            director.name
                          }
                        </h3>

                        <div className="mt-7 rounded-[28px] border border-primary-red/15 bg-primary-red/[0.035] p-6 md:p-7">
                          <MessageSquareQuote
                            size={27}
                            className="text-primary-red"
                          />

                          <blockquote className="mt-4 text-xl font-black leading-9 tracking-[-0.02em] text-primary-blue">
                            “
                            {
                              director.quote
                            }
                            ”
                          </blockquote>
                        </div>

                        <div className="mt-8 space-y-6">
                          {director.message.map(
                            (
                              paragraph,
                              paragraphIndex,
                            ) => (
                              <p
                                key={`${director._id}-paragraph-${paragraphIndex}`}
                                className="text-base font-medium leading-8 text-gray-600"
                              >
                                {
                                  paragraph
                                }
                              </p>
                            ),
                          )}
                        </div>

                        {director
                          .strengths
                          .length > 0 && (
                          <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {director.strengths.map(
                              (
                                strength,
                              ) => (
                                <div
                                  key={
                                    strength
                                  }
                                  className="flex min-h-[72px] items-start gap-3 rounded-2xl border border-gray-100 bg-[#f8fafc] px-4 py-4"
                                >
                                  <BadgeCheck
                                    size={
                                      17
                                    }
                                    className="mt-0.5 shrink-0 text-primary-red"
                                  />

                                  <span className="text-sm font-black leading-6 text-primary-blue">
                                    {
                                      strength
                                    }
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        )}
                      </div>

                      <div className="mt-auto pt-10">
                        <div className="flex flex-col gap-7 border-t border-gray-200 pt-7 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <p className="font-black text-primary-blue">
                              {
                                director.name
                              }
                            </p>

                            <p className="mt-1 text-sm font-bold text-primary-red">
                              {
                                director.designation
                              }
                            </p>

                            <p className="mt-1 text-sm font-semibold text-gray-500">
                              Steelbuild Infra Projects Limited
                            </p>
                          </div>

                          <div className="text-left sm:text-right">
                            <p className="font-serif text-[27px] italic leading-tight text-primary-blue/65">
                              {
                                director.signatureName
                              }
                            </p>

                            <p className="mt-2 text-[9px] font-black uppercase tracking-[0.22em] text-gray-400">
                              Authorized Message
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <Container>
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
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] text-primary-red">
              <Sparkles size={15} />
              Leadership Values
            </span>

            <h2 className="mt-7 text-4xl font-black tracking-[-0.045em] text-primary-blue md:text-5xl">
              Principles Guiding Every Decision
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {leadershipValues.map(
              (item, index) => {
                const Icon =
                  item.icon;

                return (
                  <motion.article
                    key={
                      item.title
                    }
                    initial={{
                      opacity: 0,
                      y: 26,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.06,
                    }}
                    className="group rounded-[28px] border border-gray-200 bg-[#f8fafc] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:bg-white hover:shadow-[0_25px_70px_rgba(27,63,104,0.11)]"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                      <Icon
                        size={25}
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-black text-primary-blue">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-gray-500">
                      {
                        item.description
                      }
                    </p>
                  </motion.article>
                );
              },
            )}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
            }}
            className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[30px] bg-primary-blue p-8 md:flex-row md:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
                <Building2
                  size={26}
                />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  Discover the People Behind Steelbuild
                </h3>

                <p className="mt-2 max-w-2xl text-sm font-medium leading-7 text-white/65">
                  Meet the leadership and professionals supporting
                  Steelbuild&apos;s engineering, manufacturing and project
                  delivery.
                </p>
              </div>
            </div>

            <Link
              href="/about/team"
              className="group inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
            >
              Meet Our Team

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>
        </Container>
      </section>
    </>
  );
}