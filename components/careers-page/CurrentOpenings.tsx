"use client";

import {
  useMemo,
  useState,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Factory,
  Filter,
  MapPin,
  Search,
  UsersRound,
} from "lucide-react";

import Container from "@/components/layout/Container";

import type {
  SanityJobOpening,
} from "@/types/sanityJobOpening";

type CurrentOpeningsProps = {
  jobs: SanityJobOpening[];

  onApply: (
    job: SanityJobOpening,
  ) => void;

  onGeneralApply: () => void;
};

export default function CurrentOpenings({
  jobs,
  onApply,
  onGeneralApply,
}: CurrentOpeningsProps) {
  const [
    activeDepartment,
    setActiveDepartment,
  ] = useState("All");

  const [search, setSearch] =
    useState("");

  const departmentFilters =
    useMemo(() => {
      const departments = Array.from(
        new Set(
          jobs
            .map((job) =>
              job.department.trim(),
            )
            .filter(Boolean),
        ),
      ).sort((first, second) =>
        first.localeCompare(second),
      );

      return [
        "All",
        ...departments,
      ];
    }, [jobs]);

  const filteredJobs = useMemo(() => {
    const query =
      search.trim().toLowerCase();

    return jobs.filter((job) => {
      const departmentMatch =
        activeDepartment === "All" ||
        job.department ===
          activeDepartment;

      const searchMatch =
        !query ||
        job.title
          .toLowerCase()
          .includes(query) ||
        job.department
          .toLowerCase()
          .includes(query) ||
        job.location
          .toLowerCase()
          .includes(query) ||
        job.experience
          .toLowerCase()
          .includes(query) ||
        job.skills.some((skill) =>
          skill
            .toLowerCase()
            .includes(query),
        );

      return (
        departmentMatch &&
        searchMatch
      );
    });
  }, [
    activeDepartment,
    jobs,
    search,
  ]);

  return (
    <section
      id="open-positions"
      className="relative scroll-mt-28 overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.018)_1px,transparent_1px)] bg-[size:74px_74px]" />

      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-primary-red/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 h-[420px] w-[420px] rounded-full bg-primary-blue/10 blur-3xl" />

      <Container>
        <motion.div
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
            margin: "-100px",
          }}
          transition={{
            duration: 0.65,
          }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2 text-xs font-black uppercase tracking-[0.32em] text-primary-red">
            <BriefcaseBusiness
              size={15}
            />

            Current Openings
          </span>

          <h2 className="mt-7 text-4xl font-black leading-tight tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[58px]">
            Explore Opportunities at Steelbuild
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
            Discover opportunities across
            engineering, detailing,
            manufacturing, projects, quality,
            sales and corporate functions.
          </p>
        </motion.div>

        {jobs.length > 0 && (
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
            className="relative z-10 mt-14 rounded-[30px] border border-gray-200 bg-[#f8fafc] p-5 shadow-[0_18px_55px_rgba(27,63,104,0.07)] md:p-7"
          >
            <div className="grid gap-5 xl:grid-cols-[1fr_auto] xl:items-center">
              <div className="relative">
                <Search
                  size={20}
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-primary-red"
                />

                <input
                  type="search"
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value,
                    )
                  }
                  placeholder="Search by role, department, location or skill..."
                  className="min-h-[58px] w-full rounded-2xl border border-gray-200 bg-white py-4 pl-14 pr-5 text-base font-semibold text-primary-blue outline-none transition-all duration-300 placeholder:font-medium placeholder:text-gray-400 focus:border-primary-red focus:ring-4 focus:ring-primary-red/10"
                />
              </div>

              <div className="flex items-center gap-3 text-sm font-black text-primary-blue">
                <Filter
                  size={18}
                  className="text-primary-red"
                />

                {filteredJobs.length} Open Role
                {filteredJobs.length === 1
                  ? ""
                  : "s"}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {departmentFilters.map(
                (department) => {
                  const active =
                    department ===
                    activeDepartment;

                  return (
                    <button
                      key={department}
                      type="button"
                      onClick={() =>
                        setActiveDepartment(
                          department,
                        )
                      }
                      className={`rounded-full border px-4 py-2.5 text-xs font-black transition-all duration-300 ${
                        active
                          ? "border-primary-red bg-primary-red text-white shadow-[0_12px_28px_rgba(194,17,25,0.2)]"
                          : "border-gray-200 bg-white text-primary-blue hover:border-primary-red/30 hover:text-primary-red"
                      }`}
                    >
                      {department}
                    </button>
                  );
                },
              )}
            </div>
          </motion.div>
        )}

        {filteredJobs.length > 0 ? (
          <div className="relative z-10 mt-10 grid gap-6 lg:grid-cols-2">
            {filteredJobs.map(
              (job, index) => (
                <motion.article
                  key={job._id}
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
                    margin: "-60px",
                  }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index * 0.05,
                  }}
                  className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_rgba(27,63,104,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-primary-red/25 hover:shadow-[0_30px_80px_rgba(27,63,104,0.13)]"
                >
                  <div className="border-b border-gray-100 p-7 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
                        {job.department ===
                        "Manufacturing" ? (
                          <Factory
                            size={26}
                          />
                        ) : job.department ===
                            "Project Execution" ? (
                          <Building2
                            size={26}
                          />
                        ) : (
                          <BriefcaseBusiness
                            size={26}
                          />
                        )}
                      </div>

                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700">
                        <CheckCircle2
                          size={14}
                        />

                        Open Position
                      </span>
                    </div>

                    <p className="mt-6 text-[10px] font-black uppercase tracking-[0.22em] text-primary-red">
                      {job.department}
                    </p>

                    <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-primary-blue md:text-3xl">
                      {job.title}
                    </h3>

                    <p className="mt-4 text-sm font-medium leading-7 text-gray-600">
                      {job.description}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-7 md:p-8">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <JobMeta
                        icon={MapPin}
                        label="Location"
                        value={
                          job.location
                        }
                      />

                      <JobMeta
                        icon={Clock3}
                        label="Employment"
                        value={
                          job.employmentType
                        }
                      />

                      <JobMeta
                        icon={
                          CalendarDays
                        }
                        label="Experience"
                        value={
                          job.experience
                        }
                      />

                      <JobMeta
                        icon={
                          UsersRound
                        }
                        label="Department"
                        value={
                          job.department
                        }
                      />
                    </div>

                    {job.skills.length >
                      0 && (
                      <div className="mt-6 border-t border-gray-200 pt-6">
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-red">
                          Preferred Skills
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {job.skills.map(
                            (skill) => (
                              <span
                                key={
                                  skill
                                }
                                className="rounded-full border border-primary-blue/10 bg-primary-blue/[0.035] px-3 py-2 text-xs font-bold text-primary-blue"
                              >
                                {skill}
                              </span>
                            ),
                          )}
                        </div>
                      </div>
                    )}

                    <div className="mt-auto pt-7">
                      <button
                        type="button"
                        onClick={() =>
                          onApply(job)
                        }
                        className="group/button inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white shadow-[0_18px_40px_rgba(194,17,25,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue"
                      >
                        Apply for This Position

                        <ArrowUpRight
                          size={20}
                          className="transition-transform duration-300 group-hover/button:translate-x-1 group-hover/button:-translate-y-1"
                        />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ),
            )}
          </div>
        ) : (
          <motion.div
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="relative z-10 mt-10 rounded-[30px] border border-gray-200 bg-white p-10 text-center shadow-[0_18px_55px_rgba(27,63,104,0.07)]"
          >
            <BriefcaseBusiness
              size={38}
              className="mx-auto text-primary-red"
            />

            <h3 className="mt-5 text-2xl font-black text-primary-blue">
              {jobs.length === 0
                ? "No Current Openings"
                : "No Matching Openings Found"}
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm font-medium leading-7 text-gray-500">
              {jobs.length === 0
                ? "There are no active openings at the moment. You can still submit your resume for future opportunities."
                : "Try another department or search term. You can also submit your resume for future opportunities."}
            </p>

            <button
              type="button"
              onClick={
                onGeneralApply
              }
              className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white transition hover:bg-primary-blue"
            >
              Submit Your Resume

              <ArrowUpRight
                size={19}
              />
            </button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}

type JobMetaProps = {
  icon: typeof MapPin;
  label: string;
  value: string;
};

function JobMeta({
  icon: Icon,
  label,
  value,
}: JobMetaProps) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-[#f8fafc] p-4">
      <Icon
        size={18}
        className="mt-0.5 shrink-0 text-primary-red"
      />

      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-400">
          {label}
        </p>

        <p className="mt-1 text-sm font-black leading-6 text-primary-blue">
          {value}
        </p>
      </div>
    </div>
  );
}