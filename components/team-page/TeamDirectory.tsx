"use client";

import Image from "next/image";

import {
  useMemo,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  // BadgeCheck,
  Search,
  UserRound,
  UsersRound,
  X,
} from "lucide-react";

import Container from "@/components/layout/Container";

import {
  departments,
  type DepartmentId,
} from "@/data/departments";

import type {
  SanityTeamMember,
} from "@/types/sanityTeamMember";

type DepartmentFilter =
  | "all"
  | DepartmentId;

type TeamDirectoryProps = {
  members: SanityTeamMember[];
};

const getInitials = (
  name: string,
): string => {
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
    words[
      words.length - 1
    ][0]
  }`.toUpperCase();
};

export default function TeamDirectory({
  members,
}: TeamDirectoryProps) {
  const [search, setSearch] =
    useState("");

  const [
    activeDepartment,
    setActiveDepartment,
  ] =
    useState<DepartmentFilter>(
      "all",
    );

  const availableDepartments =
    useMemo(() => {
      return departments
        .filter((department) =>
          members.some(
            (member) =>
              member.department ===
              department.id,
          ),
        )
        .sort(
          (first, second) =>
            first.order -
            second.order,
        );
    }, [members]);

  const filteredMembers =
    useMemo(() => {
      const query = search
        .trim()
        .toLowerCase();

      return [...members]
        .filter((member) => {
          const departmentMatch =
            activeDepartment ===
              "all" ||
            member.department ===
              activeDepartment;

          const searchMatch =
            !query ||
            member.name
              .toLowerCase()
              .includes(query) ||
            member.designation
              .toLowerCase()
              .includes(query) ||
            member.department
              .toLowerCase()
              .includes(query) ||
            member.bio
              ?.toLowerCase()
              .includes(query) ||
            member.skills.some(
              (skill) =>
                skill
                  .toLowerCase()
                  .includes(query),
            );

          return (
            departmentMatch &&
            searchMatch
          );
        })
        .sort(
          (first, second) => {
            if (
              first.departmentHead &&
              !second.departmentHead
            ) {
              return -1;
            }

            if (
              !first.departmentHead &&
              second.departmentHead
            ) {
              return 1;
            }

            if (
              first.featured &&
              !second.featured
            ) {
              return -1;
            }

            if (
              !first.featured &&
              second.featured
            ) {
              return 1;
            }

            return (
              first.displayOrder -
              second.displayOrder
            );
          },
        );
    }, [
      activeDepartment,
      members,
      search,
    ]);

  const groupedMembers =
    useMemo(() => {
      return availableDepartments
        .map((department) => ({
          department,

          members:
            filteredMembers.filter(
              (member) =>
                member.department ===
                department.id,
            ),
        }))
        .filter(
          (group) =>
            group.members.length > 0,
        );
    }, [
      availableDepartments,
      filteredMembers,
    ]);

  const resetFilters = () => {
    setSearch("");
    setActiveDepartment("all");
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

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
            <UsersRound size={15} />
            Our Professionals
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Meet the Teams Behind Steelbuild&apos;s Delivery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Explore the professionals supporting engineering,
            project execution, detailing, customer service,
            quality assurance and site safety.
          </p>
        </motion.div>

        {members.length > 0 ? (
          <>
            <motion.div
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
                duration: 0.55,
              }}
              className="relative z-10 mt-14 rounded-[30px] border border-gray-200 bg-[#f8fafc] p-5 shadow-[0_18px_55px_rgba(27,63,104,0.07)] md:p-7"
            >
              <div className="relative mx-auto max-w-2xl">
                <Search
                  size={21}
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target
                        .value,
                    )
                  }
                  placeholder="Search by name, designation, department or skill..."
                  className="min-h-[58px] w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-12 text-base font-semibold text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() =>
                      setSearch("")
                    }
                    aria-label="Clear team search"
                    className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-gray-400 transition-all duration-300 hover:bg-primary-red hover:text-white"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveDepartment(
                      "all",
                    )
                  }
                  aria-pressed={
                    activeDepartment ===
                    "all"
                  }
                  className={`rounded-full border px-5 py-2.5 text-xs font-black transition-all duration-300 ${
                    activeDepartment ===
                    "all"
                      ? "border-primary-red bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]"
                      : "border-gray-200 bg-white text-primary-blue hover:border-primary-red/30 hover:text-primary-red"
                  }`}
                >
                  All Departments
                </button>

                {availableDepartments.map(
                  (department) => {
                    const active =
                      activeDepartment ===
                      department.id;

                    return (
                      <button
                        key={
                          department.id
                        }
                        type="button"
                        onClick={() =>
                          setActiveDepartment(
                            department.id,
                          )
                        }
                        aria-pressed={
                          active
                        }
                        className={`rounded-full border px-5 py-2.5 text-xs font-black transition-all duration-300 ${
                          active
                            ? "border-primary-red bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.22)]"
                            : "border-gray-200 bg-white text-primary-blue hover:border-primary-red/30 hover:text-primary-red"
                        }`}
                      >
                        {
                          department.shortName
                        }
                      </button>
                    );
                  },
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-gray-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm font-bold text-gray-500">
                  Showing{" "}
                  <span className="text-primary-blue">
                    {
                      filteredMembers.length
                    }
                  </span>{" "}
                  team members
                </p>

                {(search ||
                  activeDepartment !==
                    "all") && (
                  <button
                    type="button"
                    onClick={
                      resetFilters
                    }
                    className="inline-flex items-center gap-2 text-sm font-black text-primary-red transition-colors duration-300 hover:text-primary-blue"
                  >
                    <X size={16} />
                    Reset Filters
                  </button>
                )}
              </div>
            </motion.div>

            {groupedMembers.length >
            0 ? (
              <div className="relative z-10 mt-16 space-y-20">
                {groupedMembers.map(
                  ({
                    department,
                    members:
                      departmentMembers,
                  }) => (
                    <section
                      key={
                        department.id
                      }
                      id={
                        department.id
                      }
                      className="scroll-mt-32"
                    >
                      <div className="flex flex-col gap-5 border-b border-gray-200 pb-7 md:flex-row md:items-end md:justify-between">
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.24em] text-primary-red">
                            Steelbuild Department
                          </p>

                          <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-primary-blue md:text-4xl">
                            {
                              department.name
                            }
                          </h3>
                        </div>

                        <div className="inline-flex w-fit items-center gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] px-5 py-3">
                          <UsersRound
                            size={19}
                            className="text-primary-red"
                          />

                          <span className="text-sm font-black text-primary-blue">
                            {
                              departmentMembers.length
                            }{" "}
                            Team{" "}
                            {departmentMembers.length ===
                            1
                              ? "Member"
                              : "Members"}
                          </span>
                        </div>
                      </div>

                      <div className="mt-9 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
                        {departmentMembers.map(
                          (
                            member,
                            index,
                          ) => (
                            <motion.article
                              key={
                                member._id
                              }
                              id={
                                member.slug
                              }
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
                                margin:
                                  "-60px",
                              }}
                              transition={{
                                duration:
                                  0.5,
                                delay:
                                  index *
                                  0.05,
                              }}
                              className="group relative isolate overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_85px_rgba(27,63,104,0.14)]"
                            >
                              <div className="relative isolate flex min-h-[230px] items-center justify-center overflow-hidden bg-primary-blue p-7">
                                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

                                <div className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-primary-red/25 blur-[70px]" />

                                {/* {member.departmentHead ? (
                                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
                                    <BadgeCheck
                                      size={
                                        13
                                      }
                                      className="text-primary-red"
                                    />
                                    Department Head
                                  </span>
                                ) : member.featured ? (
                                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">
                                    <BadgeCheck
                                      size={
                                        13
                                      }
                                      className="text-primary-red"
                                    />
                                    Key Team Member
                                  </span>
                                ) : null} */}

                                <div className="relative z-10">
                                  {member
                                    .profileImage
                                    ?.url ? (
                                    <div className="relative h-36 w-36 overflow-hidden rounded-full border-[6px] border-white/15 bg-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.2)] transition-transform duration-500 group-hover:scale-105">
                                      <Image
                                        src={
                                          member
                                            .profileImage
                                            .url
                                        }
                                        alt={
                                          member
                                            .profileImage
                                            .alt ||
                                          member.name
                                        }
                                        fill
                                        sizes="144px"
                                        placeholder={
                                          member
                                            .profileImage
                                            .lqip
                                            ? "blur"
                                            : "empty"
                                        }
                                        blurDataURL={
                                          member
                                            .profileImage
                                            .lqip
                                        }
                                        className="object-cover"
                                      />
                                    </div>
                                  ) : (
                                    <div className="flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-white/15 bg-white/10 text-4xl font-black tracking-[-0.04em] text-white shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-xl transition-transform duration-500 group-hover:scale-105">
                                      {getInitials(
                                        member.name,
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>

                              <div className="p-7">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-red">
                                  {
                                    department.shortName
                                  }
                                </p>

                                <h4 className="mt-3 text-2xl font-black leading-tight tracking-[-0.035em] text-primary-blue">
                                  {
                                    member.name
                                  }
                                </h4>

                                <p className="mt-2 font-black text-primary-red">
                                  {
                                    member.designation
                                  }
                                </p>

                                {member.bio && (
                                  <p className="mt-5 text-sm font-medium leading-7 text-gray-600">
                                    {
                                      member.bio
                                    }
                                  </p>
                                )}

                                {member.skills.length >
                                  0 && (
                                  <div className="mt-5 flex flex-wrap gap-2">
                                    {member.skills
                                      .slice(
                                        0,
                                        4,
                                      )
                                      .map(
                                        (
                                          skill,
                                        ) => (
                                          <span
                                            key={
                                              skill
                                            }
                                            className="rounded-full bg-primary-blue/[0.05] px-3 py-2 text-[10px] font-black text-primary-blue"
                                          >
                                            {
                                              skill
                                            }
                                          </span>
                                        ),
                                      )}
                                  </div>
                                )}

                                <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-5">
                                  <UserRound
                                    size={
                                      18
                                    }
                                    className="text-primary-red"
                                  />

                                  <span className="text-xs font-black uppercase tracking-[0.12em] text-primary-blue">
                                    Steelbuild Professional
                                  </span>
                                </div>
                              </div>
                            </motion.article>
                          ),
                        )}
                      </div>
                    </section>
                  ),
                )}
              </div>
            ) : (
              <EmptySearchState
                onReset={
                  resetFilters
                }
              />
            )}
          </>
        ) : (
          <div className="relative z-10 mt-14 rounded-[30px] border border-gray-200 bg-white p-10 text-center shadow-[0_18px_55px_rgba(27,63,104,0.07)]">
            <UsersRound
              size={42}
              className="mx-auto text-primary-red"
            />

            <h3 className="mt-5 text-2xl font-black text-primary-blue">
              Team Profiles Will Be Added Soon
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm font-medium leading-7 text-gray-500">
              Steelbuild team member profiles and department information will appear here.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}

type EmptySearchStateProps = {
  onReset: () => void;
};

function EmptySearchState({
  onReset,
}: EmptySearchStateProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="relative z-10 mt-14 rounded-[30px] border border-gray-200 bg-white p-10 text-center shadow-[0_18px_55px_rgba(27,63,104,0.07)]"
    >
      <Search
        size={38}
        className="mx-auto text-primary-red"
      />

      <h3 className="mt-5 text-2xl font-black text-primary-blue">
        No Team Members Found
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-7 text-gray-500">
        Try another name, designation, department or skill.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="mt-7 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white transition-colors duration-300 hover:bg-primary-blue"
      >
        View All Team Members
      </button>
    </motion.div>
  );
}