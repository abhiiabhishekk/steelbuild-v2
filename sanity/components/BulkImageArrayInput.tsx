
"use client";

import {
  type ChangeEvent,
  useCallback,
  useRef,
  useState,
} from "react";

import {
  type ArrayOfObjectsInputProps,
  insert,
  setIfMissing,
  useClient,
} from "sanity";

import { apiVersion } from "@/sanity/env";

type UploadedGalleryImage = {
  _key: string;
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
};

const MAX_FILES_PER_UPLOAD = 100;

const ALLOWED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
]);

function createArrayItemKey(): string {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID().replace(/-/g, "").slice(0, 16);
  }

  return `${Date.now()}${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

export default function BulkImageArrayInput(
  props: ArrayOfObjectsInputProps,
) {
  const { onChange, readOnly, renderDefault } = props;

  const client = useClient({
    apiVersion,
  });

  const fileInputRef = useRef<HTMLInputElement | null>(
    null,
  );

  const [uploading, setUploading] = useState(false);
  const [uploadedCount, setUploadedCount] = useState(0);
  const [totalFiles, setTotalFiles] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] =
    useState("");

  const handleChooseFiles = useCallback(() => {
    if (uploading || readOnly) {
      return;
    }

    fileInputRef.current?.click();
  }, [readOnly, uploading]);

  const handleUpload = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = Array.from(
        event.target.files ?? [],
      );

      // Allow the same files to be selected again.
      event.target.value = "";

      if (selectedFiles.length === 0 || uploading) {
        return;
      }

      setErrorMessage("");
      setSuccessMessage("");

      if (selectedFiles.length > MAX_FILES_PER_UPLOAD) {
        setErrorMessage(
          `You can upload a maximum of ${MAX_FILES_PER_UPLOAD} images at one time.`,
        );
        return;
      }

      const unsupportedFiles = selectedFiles.filter(
        (file) => !ALLOWED_IMAGE_TYPES.has(file.type),
      );

      if (unsupportedFiles.length > 0) {
        setErrorMessage(
          "Only JPG, JPEG, PNG, WebP and GIF images are supported.",
        );
        return;
      }

      setUploading(true);
      setUploadedCount(0);
      setTotalFiles(selectedFiles.length);

      const uploadedImages: UploadedGalleryImage[] = [];

      try {
        // Upload images sequentially for stability.
        for (const file of selectedFiles) {
          const uploadedAsset = await client.assets.upload(
            "image",
            file,
            {
              filename: file.name,
              contentType: file.type || undefined,
            },
          );

          uploadedImages.push({
            _key: createArrayItemKey(),
            _type: "image",
            asset: {
              _type: "reference",
              _ref: uploadedAsset._id,
            },
          });

          setUploadedCount(uploadedImages.length);
        }

        if (uploadedImages.length === 0) {
          throw new Error("No images were uploaded.");
        }

        // Preserve existing gallery items.
        // Append all uploaded images in one patch.
        onChange([
          setIfMissing([]),
          insert(uploadedImages, "after", [-1]),
        ]);

        setSuccessMessage(
          `${uploadedImages.length} images uploaded and added to the gallery. Publish the exhibition to make them live.`,
        );
      } catch (error) {
        console.error(
          "Exhibition bulk image upload failed:",
          error,
        );

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "The selected images could not be uploaded. Please try again.",
        );
      } finally {
        setUploading(false);
      }
    },
    [client, onChange, uploading],
  );

  const progressPercentage =
    totalFiles > 0
      ? Math.round((uploadedCount / totalFiles) * 100)
      : 0;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Original Sanity gallery input */}
      {renderDefault(props)}

      {/* Custom bulk uploader */}
      <div
        style={{
          padding: "20px",
          border: "1px solid #dce3eb",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                margin: 0,
                fontSize: "15px",
                fontWeight: 700,
                color: "#102b49",
              }}
            >
              Bulk Gallery Upload
            </h3>

            <p
              style={{
                margin: "8px 0 0",
                fontSize: "13px",
                lineHeight: 1.6,
                color: "#64748b",
              }}
            >
              Select multiple exhibition images and upload
              them together.
            </p>
          </div>

          <button
            type="button"
            onClick={handleChooseFiles}
            disabled={uploading || Boolean(readOnly)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "11px 16px",
              border: "none",
              borderRadius: "7px",
              backgroundColor:
                uploading || readOnly
                  ? "#94a3b8"
                  : "#102b49",
              color: "#ffffff",
              fontSize: "13px",
              fontWeight: 700,
              cursor:
                uploading || readOnly
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            <span aria-hidden="true">↑</span>

            {uploading
              ? "Uploading Images..."
              : "Upload Multiple Images"}
          </button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.webp,.gif,image/jpeg,image/png,image/webp,image/gif"
          multiple
          disabled={uploading || Boolean(readOnly)}
          onChange={handleUpload}
          aria-label="Select exhibition images"
          style={{
            display: "none",
          }}
        />

        {/* Upload progress */}
        {uploading && (
          <div
            role="status"
            aria-live="polite"
            style={{
              marginTop: "20px",
              padding: "16px",
              borderRadius: "8px",
              backgroundColor: "#eff6ff",
              border: "1px solid #bfdbfe",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: "13px",
                fontWeight: 700,
                color: "#1e3a8a",
              }}
            >
              Uploading {uploadedCount} of {totalFiles}{" "}
              images
            </p>

            <div
              role="progressbar"
              aria-label="Image upload progress"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progressPercentage}
              style={{
                height: "8px",
                marginTop: "12px",
                borderRadius: "999px",
                backgroundColor: "#dbeafe",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progressPercentage}%`,
                  backgroundColor: "#2563eb",
                  borderRadius: "999px",
                  transition: "width 200ms ease",
                }}
              />
            </div>

            <p
              style={{
                margin: "10px 0 0",
                fontSize: "12px",
                color: "#475569",
              }}
            >
              {progressPercentage}% completed. Please do
              not close this document.
            </p>
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <div
            role="alert"
            style={{
              marginTop: "16px",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #fecaca",
              backgroundColor: "#fef2f2",
              color: "#991b1b",
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: 1.6,
            }}
          >
            {errorMessage}
          </div>
        )}

        {/* Success message */}
        {successMessage && !uploading && !errorMessage && (
          <div
            role="status"
            style={{
              marginTop: "16px",
              padding: "14px",
              borderRadius: "8px",
              border: "1px solid #bbf7d0",
              backgroundColor: "#f0fdf4",
              color: "#166534",
              fontSize: "13px",
              fontWeight: 600,
              lineHeight: 1.6,
            }}
          >
            {successMessage}
          </div>
        )}

        <p
          style={{
            margin: "18px 0 0",
            fontSize: "12px",
            lineHeight: 1.6,
            color: "#64748b",
          }}
        >
          Supported formats: JPG, JPEG, PNG, WebP and GIF.
          Maximum {MAX_FILES_PER_UPLOAD} images per upload.
        </p>
      </div>
    </div>
  );
}