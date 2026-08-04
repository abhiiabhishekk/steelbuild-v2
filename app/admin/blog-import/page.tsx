"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Database,
  LoaderCircle,
  UploadCloud,
} from "lucide-react";

import { notFound } from "next/navigation";

const ENABLE_IMPORT_TOOLS =
  process.env.NEXT_PUBLIC_ENABLE_IMPORT_TOOLS === "true";

if (!ENABLE_IMPORT_TOOLS) {
  notFound();
}

type ImportResult = {
  id: string;
  title: string;
  status: "success" | "failed";
  message: string;
};

type ImportResponse = {
  success: boolean;
  message: string;
  total?: number;
  successful?: number;
  failed?: number;
  results?: ImportResult[];
};

export default function BlogImportPage() {
  const [isImporting, setIsImporting] =
    useState(false);

  const [response, setResponse] =
    useState<ImportResponse | null>(null);

  const runImport = async () => {
    const confirmed = window.confirm(
      "This will import or update all blogs in Sanity. Existing manually pasted article content will be preserved. Continue?",
    );

    if (!confirmed) {
      return;
    }

    setIsImporting(true);
    setResponse(null);

    try {
      const result = await fetch(
        "/api/blog-import",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },
        },
      );

      const data =
        (await result.json()) as ImportResponse;

      setResponse(data);
    } catch (error) {
      setResponse({
        success: false,

        message:
          error instanceof Error
            ? error.message
            : "Unable to run blog import.",
      });
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_24px_80px_rgba(27,63,104,0.12)]">
          <div className="bg-primary-blue px-7 py-10 text-white md:px-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-red">
              <Database size={26} />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-red-300">
              Temporary Migration Utility
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">
              Steelbuild Blog Import
            </h1>

            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/75">
              Import the existing Steelbuild blog
              metadata, categories, author
              references, SEO fields and available
              thumbnails into Sanity CMS.
            </p>
          </div>

          <div className="p-7 md:p-12">
            <div className="rounded-3xl border border-primary-blue/10 bg-[#f7f9fc] p-6">
              <h2 className="text-xl font-black text-primary-blue">
                Import behaviour
              </h2>

              <div className="mt-5 space-y-3 text-sm font-medium leading-7 text-gray-600">
                <p>
                  • Existing titles, slugs, dates,
                  categories, tags and SEO fields
                  will be imported.
                </p>

                <p>
                  • Existing Sanity article content
                  will not be overwritten.
                </p>

                <p>
                  • Available local thumbnails will
                  be uploaded to Sanity.
                </p>

                <p>
                  • The temporary Test Blogs
                  document will be removed.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={runImport}
              disabled={isImporting}
              className="mt-8 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-primary-red px-8 py-4 font-black text-white shadow-[0_18px_45px_rgba(194,17,25,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-primary-blue disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
            >
              {isImporting ? (
                <>
                  <LoaderCircle
                    size={21}
                    className="animate-spin"
                  />
                  Importing Blogs...
                </>
              ) : (
                <>
                  <UploadCloud size={21} />
                  Import All Blogs
                </>
              )}
            </button>

            {response ? (
              <div className="mt-8">
                <div
                  className={`rounded-3xl border p-6 ${
                    response.success
                      ? "border-green-200 bg-green-50"
                      : "border-red-200 bg-red-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {response.success ? (
                      <CheckCircle2
                        className="mt-0.5 shrink-0 text-green-600"
                        size={22}
                      />
                    ) : (
                      <AlertCircle
                        className="mt-0.5 shrink-0 text-red-600"
                        size={22}
                      />
                    )}

                    <div>
                      <h2
                        className={`font-black ${
                          response.success
                            ? "text-green-800"
                            : "text-red-800"
                        }`}
                      >
                        {response.success
                          ? "Import completed"
                          : "Import requires attention"}
                      </h2>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-700">
                        {response.message}
                      </p>

                      {typeof response.total ===
                      "number" ? (
                        <div className="mt-4 flex flex-wrap gap-4 text-sm font-black text-primary-blue">
                          <span>
                            Total: {response.total}
                          </span>

                          <span>
                            Successful:{" "}
                            {response.successful ??
                              0}
                          </span>

                          <span>
                            Failed:{" "}
                            {response.failed ?? 0}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {response.results?.length ? (
                  <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200">
                    <div className="border-b border-gray-200 bg-primary-blue px-6 py-4">
                      <h2 className="font-black text-white">
                        Import Results
                      </h2>
                    </div>

                    <div className="max-h-[520px] divide-y divide-gray-200 overflow-y-auto">
                      {response.results.map(
                        (result) => (
                          <div
                            key={`${result.id}-${result.title}`}
                            className="flex items-start gap-4 px-6 py-5"
                          >
                            {result.status ===
                            "success" ? (
                              <CheckCircle2
                                size={19}
                                className="mt-0.5 shrink-0 text-green-600"
                              />
                            ) : (
                              <AlertCircle
                                size={19}
                                className="mt-0.5 shrink-0 text-red-600"
                              />
                            )}

                            <div>
                              <p className="font-black text-primary-blue">
                                {result.id}.{" "}
                                {result.title}
                              </p>

                              <p className="mt-1 text-sm font-medium text-gray-600">
                                {result.message}
                              </p>
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}