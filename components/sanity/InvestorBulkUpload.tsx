
"use client";

import { useRef, useState } from "react";
import { useClient } from "sanity";
import {
  AlertCircle,
  CheckCircle2,
  FileText,
  Loader2,
  UploadCloud,
  X,
} from "lucide-react";

const categories = [
  { title: "Announcements", value: "announcements" },
  {
    title: "Annual Return and Reports",
    value: "annual-return-and-reports",
  },
  {
    title: "Board and Committees",
    value: "board-and-committees",
  },
  {
    title: "Corporate Social Responsibility",
    value: "corporate-social-responsibility",
  },
  {
    title: "Policies and Code of Conduct",
    value: "policies-and-code-of-conduct",
  },
  {
    title: "Material Documents",
    value: "material-documents",
  },
  {
    title: "Material Contracts",
    value: "material-contracts",
  },
  {
    title: "Advertisements",
    value: "advertisements",
  },
  {
    title: "Offer Documents",
    value: "offer-documents",
  },
  {
    title: "Shareholding Pattern",
    value: "shareholding-pattern",
  },
  {
    title: "Group Companies, Subsidiaries and Associates",
    value: "group-companies",
  },
  {
    title: "Investors Grievance Redressal Details",
    value: "investors-grievance",
  },
  {
    title: "Notice and Meetings",
    value: "notice-and-meetings",
  },
];

const subcategories: Record<
  string,
  { title: string; value: string }[]
> = {
  announcements: [
    {
      title: "Intimation to Stock Exchange",
      value: "intimation-to-stock-exchange",
    },
    {
      title: "Press Release",
      value: "press-release",
    },
  ],
  "annual-return-and-reports": [
    {
      title: "Annual Reports",
      value: "annual-reports",
    },
    {
      title: "Annual Returns",
      value: "annual-returns",
    },
  ],
};

type UploadStatus =
  | "pending"
  | "uploading"
  | "completed"
  | "failed";

type UploadItem = {
  id: string;
  file: File;
  title: string;
  status: UploadStatus;
  error?: string;
  assetId?: string;
};

type Notice = {
  type: "success" | "error" | "warning";
  message: string;
};

function getDocumentTitle(filename: string) {
  return filename
    .replace(/\.pdf$/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getErrorMessage(error: unknown) {
  return error instanceof Error
    ? error.message
    : "An unexpected error occurred.";
}

export default function InvestorBulkUpload() {
  const client = useClient({
    apiVersion: "2025-01-01",
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const uploadingRef = useRef(false);

  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [financialYear, setFinancialYear] = useState("");
  const [documentDate, setDocumentDate] = useState("");
  const [displayOrder, setDisplayOrder] = useState(100);

  const [items, setItems] = useState<UploadItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [notice, setNotice] = useState<Notice | null>(null);

  const completed = items.filter(
    (item) => item.status === "completed",
  ).length;

  const failed = items.filter(
    (item) => item.status === "failed",
  ).length;

  const pending = items.filter(
    (item) =>
      item.status === "pending" ||
      item.status === "failed",
  ).length;

  const availableSubcategories =
    subcategories[category] ?? [];

  function showNotice(
    type: Notice["type"],
    message: string,
  ) {
    setNotice({ type, message });
  }

  function addFiles(selectedFiles: FileList | null) {
    if (!selectedFiles || uploadingRef.current) return;

    const files = Array.from(selectedFiles);

    const validFiles = files.filter(
      (file) =>
        file.type === "application/pdf" ||
        file.name.toLowerCase().endsWith(".pdf"),
    );

    const newItems: UploadItem[] = validFiles.map(
      (file) => ({
        id: crypto.randomUUID(),
        file,
        title: getDocumentTitle(file.name),
        status: "pending",
      }),
    );

    setItems((previous) => [...previous, ...newItems]);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    if (validFiles.length !== files.length) {
      showNotice(
        "warning",
        "Some files were skipped. Only PDF files are supported.",
      );
    } else {
      setNotice(null);
    }
  }

  function updateItem(
    id: string,
    updates: Partial<UploadItem>,
  ) {
    setItems((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, ...updates }
          : item,
      ),
    );
  }

  async function uploadSingleFile(
    item: UploadItem,
    order: number,
    settings: {
      category: string;
      subcategory: string;
      financialYear: string;
      documentDate: string;
    },
  ): Promise<boolean> {
    updateItem(item.id, {
      status: "uploading",
      error: undefined,
    });

    let assetId = item.assetId;

    try {
      // Reuse an uploaded asset when retrying a failed
      // document creation, rather than uploading it twice.
      if (!assetId) {
        const asset = await client.assets.upload(
          "file",
          item.file,
          {
            filename: item.file.name,
            contentType: "application/pdf",
          },
        );

        assetId = asset._id;

        updateItem(item.id, {
          assetId,
        });
      }

      // Stable document ID prevents duplicate documents
      // if a failed item needs to be retried.
      await client.createIfNotExists({
        _id: `investorDocument.${item.id}`,
        _type: "investorDocument",
        title: item.title.trim(),
        category: settings.category,

        ...(settings.subcategory
          ? { subcategory: settings.subcategory }
          : {}),

        ...(settings.financialYear
          ? { financialYear: settings.financialYear }
          : {}),

        ...(settings.documentDate
          ? { documentDate: settings.documentDate }
          : {}),

        file: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: assetId,
          },
        },

        displayOrder: order,
        isPublished: true,
      });

      updateItem(item.id, {
        status: "completed",
        error: undefined,
      });

      return true;
    } catch (error) {
      updateItem(item.id, {
        status: "failed",
        error: getErrorMessage(error),
      });

      return false;
    }
  }

  async function startUpload() {
    if (uploadingRef.current) return;

    if (!category) {
      showNotice(
        "error",
        "Please select a document category.",
      );
      return;
    }

    if (
      availableSubcategories.length > 0 &&
      !subcategory
    ) {
      showNotice(
        "error",
        "Please select a subcategory.",
      );
      return;
    }

    const queue = items.filter(
      (item) =>
        item.status === "pending" ||
        item.status === "failed",
    );

    if (queue.length === 0) {
      showNotice(
        "warning",
        "Please select PDF files to upload.",
      );
      return;
    }

    const invalidTitle = queue.some(
      (item) => !item.title.trim(),
    );

    if (invalidTitle) {
      showNotice(
        "error",
        "Every PDF must have a document title.",
      );
      return;
    }

    const settings = {
      category,
      subcategory,
      financialYear: financialYear.trim(),
      documentDate,
    };

    uploadingRef.current = true;
    setUploading(true);
    setNotice(null);

    let successCount = 0;
    let failureCount = 0;
    let nextIndex = 0;

    // Maximum three concurrent uploads.
    // This also works for queues of 50–100+ PDFs.
    async function worker() {
      while (nextIndex < queue.length) {
        const index = nextIndex++;
        const item = queue[index];

        const success = await uploadSingleFile(
          item,
          displayOrder + index,
          settings,
        );

        if (success) {
          successCount++;
        } else {
          failureCount++;
        }
      }
    }

    try {
      await Promise.all(
        Array.from(
          {
            length: Math.min(3, queue.length),
          },
          () => worker(),
        ),
      );

      showNotice(
        failureCount === 0
          ? "success"
          : "warning",
        `${successCount} uploaded, ${failureCount} failed.`,
      );
    } catch (error) {
      showNotice(
        "error",
        getErrorMessage(error),
      );
    } finally {
      uploadingRef.current = false;
      setUploading(false);
    }
  }

  const fieldClass =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#c21119]";

  return (
    <main className="min-h-screen bg-[#f7f9fc] p-5 md:p-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#c21119]">
            Steelbuild Investor Relations
          </p>

          <h1 className="mt-3 text-3xl font-black text-[#1b3f68]">
            Bulk PDF Upload
          </h1>

          <p className="mt-3 text-sm text-gray-600">
            Upload multiple investor documents into
            your selected category.
          </p>
        </div>

        {notice && (
          <div
            role="alert"
            className={`mb-6 flex items-start justify-between gap-4 rounded-xl border p-4 text-sm ${
              notice.type === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : notice.type === "error"
                  ? "border-red-200 bg-red-50 text-red-800"
                  : "border-amber-200 bg-amber-50 text-amber-800"
            }`}
          >
            <div className="flex items-center gap-3">
              {notice.type === "success" ? (
                <CheckCircle2
                  size={20}
                  className="shrink-0"
                />
              ) : (
                <AlertCircle
                  size={20}
                  className="shrink-0"
                />
              )}

              <span className="font-semibold">
                {notice.message}
              </span>
            </div>

            <button
              type="button"
              onClick={() => setNotice(null)}
              aria-label="Dismiss notification"
            >
              <X size={18} />
            </button>
          </div>
        )}

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Document Category *
              </span>

              <select
                className={fieldClass}
                value={category}
                disabled={uploading}
                onChange={(event) => {
                  setCategory(event.target.value);
                  setSubcategory("");
                }}
              >
                <option value="">
                  Select category
                </option>

                {categories.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.title}
                  </option>
                ))}
              </select>
            </label>

            {availableSubcategories.length > 0 && (
              <label className="block">
                <span className="mb-2 block text-sm font-bold">
                  Subcategory *
                </span>

                <select
                  className={fieldClass}
                  value={subcategory}
                  disabled={uploading}
                  onChange={(event) =>
                    setSubcategory(event.target.value)
                  }
                >
                  <option value="">
                    Select subcategory
                  </option>

                  {availableSubcategories.map(
                    (option) => (
                      <option
                        key={option.value}
                        value={option.value}
                      >
                        {option.title}
                      </option>
                    ),
                  )}
                </select>
              </label>
            )}

            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Financial Year
              </span>

              <input
                className={fieldClass}
                placeholder="2025-26"
                value={financialYear}
                disabled={uploading}
                onChange={(event) =>
                  setFinancialYear(event.target.value)
                }
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Document Date
              </span>

              <input
                type="date"
                className={fieldClass}
                value={documentDate}
                disabled={uploading}
                onChange={(event) =>
                  setDocumentDate(event.target.value)
                }
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold">
                Starting Display Order
              </span>

              <input
                type="number"
                className={fieldClass}
                value={displayOrder}
                disabled={uploading}
                onChange={(event) =>
                  setDisplayOrder(
                    Number(event.target.value),
                  )
                }
              />
            </label>
          </div>

          <div className="mt-8">
            <input
              ref={inputRef}
              type="file"
              accept=".pdf,application/pdf"
              multiple
              disabled={uploading}
              className="hidden"
              onChange={(event) =>
                addFiles(event.target.files)
              }
            />

            <button
              type="button"
              disabled={uploading}
              onClick={() =>
                inputRef.current?.click()
              }
              className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-[#f8fafc] px-6 py-12 transition hover:border-[#c21119] disabled:opacity-50"
            >
              <UploadCloud
                size={42}
                className="text-[#1b3f68]"
              />

              <span className="mt-4 text-lg font-black text-[#1b3f68]">
                Select PDF Files
              </span>

              <span className="mt-2 text-sm text-gray-500">
                Select 25, 50, 100 or more PDFs
              </span>
            </button>
          </div>

          {items.length > 0 && (
            <div className="mt-8">
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-black text-[#1b3f68]">
                  Selected Files ({items.length})
                </h2>

                <div className="flex flex-wrap gap-3 text-xs font-bold">
                  <span className="text-gray-600">
                    {pending} Pending
                  </span>

                  <span className="text-green-700">
                    {completed} Completed
                  </span>

                  <span className="text-red-700">
                    {failed} Failed
                  </span>
                </div>
              </div>

              <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full bg-[#c21119] transition-all duration-300"
                  style={{
                    width: `${
                      items.length
                        ? (completed / items.length) * 100
                        : 0
                    }%`,
                  }}
                />
              </div>

              <div className="max-h-[450px] space-y-3 overflow-y-auto">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 rounded-xl border border-gray-200 p-4"
                  >
                    <FileText
                      size={22}
                      className="mt-2 shrink-0 text-[#c21119]"
                    />

                    <div className="min-w-0 flex-1">
                      <input
                        value={item.title}
                        disabled={
                          uploading ||
                          item.status === "completed"
                        }
                        onChange={(event) =>
                          updateItem(item.id, {
                            title: event.target.value,
                          })
                        }
                        className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm font-bold"
                      />

                      <p className="mt-2 break-all text-xs text-gray-500">
                        {item.file.name}
                      </p>

                      <p className="mt-2 text-xs font-semibold capitalize text-gray-600">
                        {item.status}
                      </p>

                      {item.error && (
                        <p className="mt-2 break-words text-xs text-red-700">
                          {item.error}
                        </p>
                      )}
                    </div>

                    {item.status === "completed" ? (
                      <CheckCircle2
                        size={21}
                        className="mt-2 shrink-0 text-green-600"
                      />
                    ) : item.status === "uploading" ? (
                      <Loader2
                        size={21}
                        className="mt-2 shrink-0 animate-spin text-[#1b3f68]"
                      />
                    ) : (
                      <button
                        type="button"
                        disabled={uploading}
                        onClick={() =>
                          setItems((previous) =>
                            previous.filter(
                              (entry) =>
                                entry.id !== item.id,
                            ),
                          )
                        }
                        className="mt-2 text-gray-400 hover:text-red-600 disabled:opacity-50"
                        aria-label="Remove file"
                      >
                        <X size={20} />
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                type="button"
                disabled={
                  uploading ||
                  !category ||
                  pending === 0
                }
                onClick={startUpload}
                className="mt-7 flex w-full items-center justify-center gap-3 rounded-xl bg-[#c21119] px-6 py-4 text-sm font-black text-white transition hover:bg-[#a80e15] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {uploading ? (
                  <>
                    <Loader2
                      size={19}
                      className="animate-spin"
                    />
                    Uploading Documents...
                  </>
                ) : (
                  <>
                    <UploadCloud size={19} />
                    Upload Documents
                  </>
                )}
              </button>

              <p className="mt-3 text-center text-xs text-gray-500">
                Uploaded documents are published
                automatically and marked to show on
                the website.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}