"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  LoaderCircle,
  UploadCloud,
} from "lucide-react";

type ImportResult = {
  id: string;
  title: string;
  filename?: string;
  slug?: string;
  status: "success" | "failed";
  message: string;
  blockCount?: number;
  warnings?: string[];
};

type ImportResponse = {
  success: boolean;
  message: string;
  total?: number;
  successful?: number;
  failed?: number;
  results?: ImportResult[];
};

export default function BlogContentImportPage() {
  const [isImporting, setIsImporting] =
    useState(false);

  const [response, setResponse] =
    useState<ImportResponse | null>(null);

  const runImport = async () => {
    const confirmed = window.confirm(
      "This will replace the content field of matching Sanity blog documents using DOCX files from content/blogs. Blog metadata, SEO, categories, tags, author, thumbnails, dates and slugs will remain unchanged. Continue?",
    );

    if (!confirmed) {
      return;
    }

    setIsImporting(true);
    setResponse(null);

    try {
      const request = await fetch(
        "/api/blog-content-import",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
        },
      );

      const data =
        (await request.json()) as ImportResponse;

      setResponse(data);
    } catch (error) {
      setResponse({
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Unable to run blog content import.",
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
              <FileText size={26} />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-red-300">
              Temporary Content Migration Utility
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">
              DOCX Blog Content Import
            </h1>

            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/75">
              Convert all Word documents from
              content/blogs into Sanity Portable
              Text and update the matching blog
              documents using their three-digit
              IDs and existing slugs.
            </p>
          </div>

          <div className="p-7 md:p-12">
            <div className="rounded-3xl border border-primary-blue/10 bg-[#f7f9fc] p-6">
              <h2 className="text-xl font-black text-primary-blue">
                Import behaviour
              </h2>

              <div className="mt-5 space-y-3 text-sm font-medium leading-7 text-gray-600">
                <p>
                  • Files are read from{" "}
                  <strong>
                    content/blogs
                  </strong>
                  .
                </p>

                <p>
                  • Filename IDs such as 001,
                  002 and 040 are matched with
                  records in data/blogs.ts.
                </p>

                <p>
                  • Headings, paragraphs, bold,
                  italic, links, lists and tables
                  are converted into safe Portable
                  Text blocks.
                </p>

                <p>
                  • Existing article content will
                  be replaced by the content from
                  the matching DOCX file.
                </p>

                <p>
                  • Title, slug, category, author,
                  tags, SEO, dates, featured status
                  and thumbnail will not be
                  modified.
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
                  Importing Blog Contents...
                </>
              ) : (
                <>
                  <UploadCloud size={21} />
                  Import All Blog Contents
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
                          ? "Content import completed"
                          : "Content import requires attention"}
                      </h2>

                      <p className="mt-2 text-sm font-medium leading-6 text-gray-700">
                        {response.message}
                      </p>

                      {typeof response.total ===
                      "number" ? (
                        <div className="mt-4 flex flex-wrap gap-4 text-sm font-black text-primary-blue">
                          <span>
                            Total:{" "}
                            {response.total}
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
                        Content Import Results
                      </h2>
                    </div>

                    <div className="max-h-[560px] divide-y divide-gray-200 overflow-y-auto">
                      {response.results.map(
                        (result) => (
                          <div
                            key={`${result.id}-${result.filename}`}
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

                            <div className="min-w-0">
                              <p className="font-black text-primary-blue">
                                {result.id}.{" "}
                                {result.title}
                              </p>

                              {result.filename ? (
                                <p className="mt-1 break-all text-xs font-bold text-gray-500">
                                  {
                                    result.filename
                                  }
                                </p>
                              ) : null}

                              <p className="mt-2 text-sm font-medium text-gray-600">
                                {result.message}
                              </p>

                              {result.warnings
                                ?.length ? (
                                <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                                  <p className="text-xs font-black uppercase tracking-wide text-amber-800">
                                    DOCX warnings
                                  </p>

                                  {result.warnings.map(
                                    (
                                      warning,
                                      warningIndex,
                                    ) => (
                                      <p
                                        key={`${result.id}-${warningIndex}`}
                                        className="mt-1 text-xs font-medium text-amber-700"
                                      >
                                        • {warning}
                                      </p>
                                    ),
                                  )}
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
            ) : null}
          </div>
        </div>
      </div>
    </main>
  );
}