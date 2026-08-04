"use client";

import { useRef, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Database,
  ImageIcon,
  LoaderCircle,
  Pause,
  Play,
  RefreshCcw,
} from "lucide-react";

import { projects } from "@/data/projects";

type ProjectImportStatus =
  | "success"
  | "failed"
  | "pending";

type ProjectImportResult = {
  success: boolean;

  projectId: string;

  title: string;

  slug: string;

  status: ProjectImportStatus;

  message: string;

  uploadedImages?: number;

  reusedImages?: number;
};

const wait = (
  milliseconds: number,
) =>
  new Promise((resolve) => {
    window.setTimeout(
      resolve,
      milliseconds,
    );
  });

export default function ProjectImportPage() {
  const [isImporting, setIsImporting] =
    useState(false);

  const [isPaused, setIsPaused] =
    useState(false);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [results, setResults] = useState<
    ProjectImportResult[]
  >([]);

  const pauseRef = useRef(false);

  const totalProjects =
    projects.length;

  const successfulCount =
    results.filter(
      (result) =>
        result.status === "success",
    ).length;

  const failedCount =
    results.filter(
      (result) =>
        result.status === "failed",
    ).length;

  const processedCount =
    successfulCount + failedCount;

  const progressPercentage =
    totalProjects > 0
      ? Math.round(
          (processedCount /
            totalProjects) *
            100,
        )
      : 0;

  const togglePause = () => {
    const nextPaused =
      !pauseRef.current;

    pauseRef.current =
      nextPaused;

    setIsPaused(nextPaused);
  };

  const resetImport = () => {
    if (isImporting) {
      return;
    }

    setResults([]);
    setCurrentIndex(0);
    setIsPaused(false);
    pauseRef.current = false;
  };

  const runImport = async () => {
    const confirmed =
      window.confirm(
        "This will import or update all 84 projects and upload their cover and gallery images to Sanity. Existing project descriptions and SEO fields will be preserved where already available. Continue?",
      );

    if (!confirmed) {
      return;
    }

    setIsImporting(true);
    setIsPaused(false);
    pauseRef.current = false;

    const previouslySuccessfulIds =
      new Set(
        results
          .filter(
            (result) =>
              result.status ===
              "success",
          )
          .map(
            (result) =>
              result.projectId,
          ),
      );

    try {
      for (
        let index = 0;
        index < projects.length;
        index += 1
      ) {
        const project =
          projects[index];

        setCurrentIndex(index);

        if (
          previouslySuccessfulIds.has(
            project.id,
          )
        ) {
          continue;
        }

        while (pauseRef.current) {
          await wait(500);
        }

        try {
          const request =
            await fetch(
              "/api/project-import",
              {
                method: "POST",

                headers: {
                  "Content-Type":
                    "application/json",
                },

                body: JSON.stringify({
                  projectId:
                    project.id,
                }),
              },
            );

          const data =
            (await request.json()) as ProjectImportResult;

          setResults(
            (currentResults) => {
              const withoutCurrent =
                currentResults.filter(
                  (result) =>
                    result.projectId !==
                    project.id,
                );

              return [
                ...withoutCurrent,
                data,
              ].sort(
                (first, second) =>
                  Number(
                    first.projectId,
                  ) -
                  Number(
                    second.projectId,
                  ),
              );
            },
          );
        } catch (error) {
          const failedResult: ProjectImportResult =
            {
              success: false,

              projectId:
                project.id,

              title:
                project.name,

              slug:
                project.slug,

              status: "failed",

              message:
                error instanceof Error
                  ? error.message
                  : "Unable to import this project.",
            };

          setResults(
            (currentResults) => {
              const withoutCurrent =
                currentResults.filter(
                  (result) =>
                    result.projectId !==
                    project.id,
                );

              return [
                ...withoutCurrent,
                failedResult,
              ].sort(
                (first, second) =>
                  Number(
                    first.projectId,
                  ) -
                  Number(
                    second.projectId,
                  ),
              );
            },
          );
        }

        /*
         * Small delay reduces pressure on
         * Sanity API and browser requests.
         */
        await wait(250);
      }
    } finally {
      setCurrentIndex(
        projects.length,
      );

      setIsImporting(false);
      setIsPaused(false);
      pauseRef.current = false;
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_24px_80px_rgba(27,63,104,0.12)]">
          <div className="bg-primary-blue px-7 py-10 text-white md:px-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red">
              <Database size={26} />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-red-300">
              Temporary Project Migration Utility
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">
              Sanity Project Import
            </h1>

            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/75">
              Import the existing Steelbuild
              project portfolio and upload every
              cover and gallery image to Sanity
              CMS one project at a time.
            </p>
          </div>

          <div className="p-7 md:p-12">
            <div className="rounded-3xl border border-primary-blue/10 bg-[#f7f9fc] p-6">
              <h2 className="text-xl font-black text-primary-blue">
                Import behaviour
              </h2>

              <div className="mt-5 space-y-3 text-sm font-medium leading-7 text-gray-600">
                <p>
                  • Total projects:{" "}
                  <strong>
                    {totalProjects}
                  </strong>
                  .
                </p>

                <p>
                  • Projects are imported
                  sequentially to reduce timeout
                  and API pressure.
                </p>

                <p>
                  • Existing Sanity documents are
                  matched using deterministic IDs
                  such as{" "}
                  <strong>
                    project-001
                  </strong>
                  .
                </p>

                <p>
                  • Re-running the importer will
                  update matching projects rather
                  than create duplicate documents.
                </p>

                <p>
                  • Existing uploaded image assets
                  are reused when their original
                  filenames match.
                </p>

                <p>
                  • Existing descriptions and SEO
                  values are preserved when
                  already present.
                </p>
              </div>
            </div>

            {/* Progress */}

            <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-[0_14px_42px_rgba(27,63,104,0.06)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-primary-red">
                    Import Progress
                  </p>

                  <p className="mt-2 text-2xl font-black text-primary-blue">
                    {processedCount} of{" "}
                    {totalProjects} projects
                  </p>
                </div>

                <p className="text-3xl font-black text-primary-blue">
                  {progressPercentage}%
                </p>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-primary-red transition-all duration-500"
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                />
              </div>

              {isImporting &&
              currentIndex <
                totalProjects ? (
                <div className="mt-5 flex items-center gap-3 text-sm font-bold text-gray-600">
                  <LoaderCircle
                    size={18}
                    className="animate-spin text-primary-red"
                  />

                  Processing{" "}
                  {
                    projects[currentIndex]
                      ?.id
                  }
                  .{" "}
                  {
                    projects[currentIndex]
                      ?.name
                  }
                </div>
              ) : null}

              <div className="mt-5 flex flex-wrap gap-5 text-sm font-black">
                <span className="text-green-700">
                  Successful:{" "}
                  {successfulCount}
                </span>

                <span className="text-red-700">
                  Failed: {failedCount}
                </span>

                <span className="text-primary-blue">
                  Remaining:{" "}
                  {Math.max(
                    totalProjects -
                      processedCount,
                    0,
                  )}
                </span>
              </div>
            </div>

            {/* Controls */}

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={runImport}
                disabled={isImporting}
                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black text-white shadow-[0_18px_45px_rgba(194,17,25,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-55"
              >
                {isImporting ? (
                  <>
                    <LoaderCircle
                      size={20}
                      className="animate-spin"
                    />

                    Import Running...
                  </>
                ) : (
                  <>
                    <Play size={20} />

                    {processedCount > 0
                      ? "Resume Project Import"
                      : "Import All Projects"}
                  </>
                )}
              </button>

              {isImporting ? (
                <button
                  type="button"
                  onClick={togglePause}
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-primary-blue/15 bg-white px-7 py-4 font-black text-primary-blue transition-all duration-300 hover:-translate-y-1 hover:border-primary-blue hover:bg-primary-blue hover:text-white"
                >
                  {isPaused ? (
                    <>
                      <Play size={20} />
                      Continue
                    </>
                  ) : (
                    <>
                      <Pause size={20} />
                      Pause
                    </>
                  )}
                </button>
              ) : null}

              {!isImporting &&
              processedCount > 0 ? (
                <button
                  type="button"
                  onClick={resetImport}
                  className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-white px-7 py-4 font-black text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-primary-red hover:text-primary-red"
                >
                  <RefreshCcw size={19} />
                  Reset Results
                </button>
              ) : null}
            </div>

            {/* Results */}

            {results.length > 0 ? (
              <div className="mt-8 overflow-hidden rounded-3xl border border-gray-200">
                <div className="flex items-center justify-between gap-4 bg-primary-blue px-6 py-5">
                  <h2 className="font-black text-white">
                    Project Import Results
                  </h2>

                  <span className="text-sm font-black text-white/70">
                    {results.length} processed
                  </span>
                </div>

                <div className="max-h-[620px] divide-y divide-gray-200 overflow-y-auto">
                  {results.map(
                    (result) => (
                      <div
                        key={
                          result.projectId
                        }
                        className="flex items-start gap-4 px-6 py-5"
                      >
                        {result.status ===
                        "success" ? (
                          <CheckCircle2
                            size={20}
                            className="mt-0.5 shrink-0 text-green-600"
                          />
                        ) : (
                          <AlertCircle
                            size={20}
                            className="mt-0.5 shrink-0 text-red-600"
                          />
                        )}

                        <div className="min-w-0">
                          <p className="font-black text-primary-blue">
                            {
                              result.projectId
                            }
                            . {result.title}
                          </p>

                          <p className="mt-1 break-all text-xs font-bold text-gray-400">
                            /projects/
                            {result.slug}
                          </p>

                          <p className="mt-2 text-sm font-medium leading-6 text-gray-600">
                            {
                              result.message
                            }
                          </p>

                          {result.status ===
                          "success" ? (
                            <div className="mt-3 flex flex-wrap gap-4 text-xs font-black text-gray-500">
                              <span className="inline-flex items-center gap-2">
                                <ImageIcon
                                  size={14}
                                  className="text-primary-red"
                                />

                                Uploaded:{" "}
                                {result.uploadedImages ??
                                  0}
                              </span>

                              <span>
                                Reused:{" "}
                                {result.reusedImages ??
                                  0}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}