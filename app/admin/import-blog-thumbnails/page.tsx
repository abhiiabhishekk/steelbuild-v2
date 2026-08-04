"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ImageIcon,
  LoaderCircle,
  UploadCloud,
} from "lucide-react";

type ImportStatus =
  | "success"
  | "failed"
  | "skipped";

type ThumbnailImportResult = {
  id: string;
  title: string;
  slug: string;
  filename: string;
  status: ImportStatus;
  message: string;
  assetId?: string;
};

type ThumbnailImportResponse = {
  success: boolean;
  message: string;
  total?: number;
  successful?: number;
  failed?: number;
  skipped?: number;
  results?: ThumbnailImportResult[];
};

export default function BlogThumbnailImportPage() {
  const [isImporting, setIsImporting] =
    useState(false);

  const [response, setResponse] =
    useState<ThumbnailImportResponse | null>(
      null,
    );

  const runImport = async () => {
    const confirmed = window.confirm(
      "This will upload all local blog thumbnails to Sanity and replace the thumbnail field of matching blogs. Article content, SEO, titles, slugs, categories, authors and dates will remain unchanged. Continue?",
    );

    if (!confirmed) {
      return;
    }

    setIsImporting(true);
    setResponse(null);

    try {
      const request = await fetch(
        "/api/blog-thumbnail-import",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },
        },
      );

      const data =
        (await request.json()) as ThumbnailImportResponse;

      setResponse(data);
    } catch (error) {
      setResponse({
        success: false,

        message:
          error instanceof Error
            ? error.message
            : "Unable to run thumbnail import.",
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
              <ImageIcon size={26} />
            </div>

            <p className="mt-7 text-xs font-black uppercase tracking-[0.25em] text-red-300">
              Temporary Image Migration Utility
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-[-0.04em] md:text-5xl">
              Blog Thumbnail Import
            </h1>

            <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-white/75">
              Upload the existing local blog
              thumbnails to Sanity and connect
              each asset with its matching blog
              document.
            </p>
          </div>

          <div className="p-7 md:p-12">
            <div className="rounded-3xl border border-primary-blue/10 bg-[#f7f9fc] p-6">
              <h2 className="text-xl font-black text-primary-blue">
                Import behaviour
              </h2>

              <div className="mt-5 space-y-3 text-sm font-medium leading-7 text-gray-600">
                <p>
                  • Images are read from{" "}
                  <strong>
                    public/images/blogs
                  </strong>
                  .
                </p>

                <p>
                  • Folder and filename values are
                  read from{" "}
                  <strong>
                    data/blogs.ts
                  </strong>
                  .
                </p>

                <p>
                  • Each existing Sanity blog is
                  matched using its slug.
                </p>

                <p>
                  • The local image is uploaded as
                  a Sanity image asset.
                </p>

                <p>
                  • Only the thumbnail field is
                  replaced.
                </p>

                <p>
                  • Article content, SEO, title,
                  slug, category, author, tags,
                  dates and featured status remain
                  unchanged.
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

                  Importing Thumbnails...
                </>
              ) : (
                <>
                  <UploadCloud size={21} />

                  Import All Blog Thumbnails
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
                          ? "Thumbnail import completed"
                          : "Thumbnail import requires attention"}
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
                            {response.failed ??
                              0}
                          </span>

                          <span>
                            Skipped:{" "}
                            {response.skipped ??
                              0}
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
                        Thumbnail Import Results
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

                              <p className="mt-1 break-all text-xs font-bold text-gray-500">
                                {
                                  result.filename
                                }
                              </p>

                              <p className="mt-2 text-sm font-medium text-gray-600">
                                {result.message}
                              </p>

                              {result.assetId ? (
                                <p className="mt-2 break-all text-xs font-medium text-gray-400">
                                  Asset:{" "}
                                  {
                                    result.assetId
                                  }
                                </p>
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