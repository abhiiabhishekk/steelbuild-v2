"use client";

import {
  type ChangeEvent,
  useCallback,
  useRef,
  useState,
} from "react";

import {
  Box,
  Button,
  Card,
  Flex,
  Spinner,
  Stack,
  Text,
} from "@sanity/ui";

import { UploadIcon } from "@sanity/icons";

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
    return crypto
      .randomUUID()
      .replace(/-/g, "")
      .slice(0, 16);
  }

  return `${Date.now()}${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

export default function BulkImageArrayInput(
  props: ArrayOfObjectsInputProps,
) {
  const {
    onChange,
    readOnly,
    renderDefault,
  } = props;

  const client = useClient({
    apiVersion,
  });

  const fileInputRef =
    useRef<HTMLInputElement | null>(null);

  const [uploading, setUploading] =
    useState(false);

  const [uploadedCount, setUploadedCount] =
    useState(0);

  const [totalFiles, setTotalFiles] =
    useState(0);

  const [errorMessage, setErrorMessage] =
    useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  const handleChooseFiles =
    useCallback(() => {
      if (
        uploading ||
        readOnly
      ) {
        return;
      }

      fileInputRef.current?.click();
    }, [readOnly, uploading]);

  const handleUpload = useCallback(
    async (
      event: ChangeEvent<HTMLInputElement>,
    ) => {
      const selectedFiles = Array.from(
        event.target.files ?? [],
      );

      /*
       * Reset the input so the same files can be
       * selected again after removal or failure.
       */
      event.target.value = "";

      if (selectedFiles.length === 0) {
        return;
      }

      setErrorMessage("");
      setSuccessMessage("");

      if (
        selectedFiles.length >
        MAX_FILES_PER_UPLOAD
      ) {
        setErrorMessage(
          `You can upload a maximum of ${MAX_FILES_PER_UPLOAD} images at one time.`,
        );

        return;
      }

      const unsupportedFiles =
        selectedFiles.filter(
          (file) =>
            !ALLOWED_IMAGE_TYPES.has(
              file.type,
            ),
        );

      if (
        unsupportedFiles.length > 0
      ) {
        setErrorMessage(
          "Only JPG, JPEG, PNG, WebP and GIF images are supported.",
        );

        return;
      }

      setUploading(true);
      setUploadedCount(0);
      setTotalFiles(
        selectedFiles.length,
      );

      const uploadedImages:
        UploadedGalleryImage[] = [];

      try {
        /*
         * Images are uploaded sequentially.
         * This is more stable for large galleries
         * than starting every upload simultaneously.
         */
        for (
          const file of selectedFiles
        ) {
          const uploadedAsset =
            await client.assets.upload(
              "image",
              file,
              {
                filename: file.name,
                contentType:
                  file.type ||
                  undefined,
              },
            );

          uploadedImages.push({
            _key:
              createArrayItemKey(),

            _type: "image",

            asset: {
              _type: "reference",
              _ref:
                uploadedAsset._id,
            },
          });

          setUploadedCount(
            (currentCount) =>
              currentCount + 1,
          );
        }

        if (
          uploadedImages.length === 0
        ) {
          throw new Error(
            "No images were uploaded.",
          );
        }

        /*
         * Preserve existing gallery items and append
         * all uploaded images to the end in one patch.
         */
        onChange([
          setIfMissing([]),

          insert(
            uploadedImages,
            "after",
            [-1],
          ),
        ]);

        setSuccessMessage(
          `${uploadedImages.length} images uploaded and added to the gallery successfully. Publish the exhibition to make them live.`,
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
    [client, onChange],
  );

  const progressPercentage =
    totalFiles > 0
      ? Math.round(
          (uploadedCount /
            totalFiles) *
            100,
        )
      : 0;

  return (
    <Stack space={4}>
      {/* Default Sanity array input */}
      {renderDefault(props)}

      {/* Custom multiple-image uploader */}
      <Card
        padding={4}
        radius={3}
        border
        tone={
          errorMessage
            ? "critical"
            : successMessage
              ? "positive"
              : "primary"
        }
      >
        <Stack space={4}>
          <Flex
            align="center"
            justify="space-between"
            gap={4}
            wrap="wrap"
          >
            <Box>
              <Text
                size={1}
                weight="semibold"
              >
                Bulk Gallery Upload
              </Text>

              <Box marginTop={2}>
                <Text
                  size={1}
                  muted
                >
                  Select multiple exhibition
                  images and upload them
                  together.
                </Text>
              </Box>
            </Box>

            <Button
              type="button"
              icon={UploadIcon}
              text={
                uploading
                  ? "Uploading Images..."
                  : "Upload Multiple Images"
              }
              tone="primary"
              disabled={
                uploading ||
                Boolean(readOnly)
              }
              onClick={
                handleChooseFiles
              }
            />
          </Flex>

          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.png,.webp,.gif,image/jpeg,image/png,image/webp,image/gif"
            multiple
            disabled={
              uploading ||
              Boolean(readOnly)
            }
            onChange={handleUpload}
            style={{
              display: "none",
            }}
          />

          {uploading && (
            <Card
              padding={3}
              radius={2}
              tone="primary"
            >
              <Flex
                align="center"
                gap={3}
              >
                <Spinner />

                <Box>
                  <Text
                    size={1}
                    weight="semibold"
                  >
                    Uploading{" "}
                    {uploadedCount} of{" "}
                    {totalFiles} images
                  </Text>

                  <Box marginTop={2}>
                    <Text
                      size={1}
                      muted
                    >
                      {
                        progressPercentage
                      }
                      % completed. Please do
                      not close this document.
                    </Text>
                  </Box>
                </Box>
              </Flex>
            </Card>
          )}

          {errorMessage && (
            <Card
              padding={3}
              radius={2}
              tone="critical"
            >
              <Text
                size={1}
                weight="semibold"
              >
                {errorMessage}
              </Text>
            </Card>
          )}

          {successMessage &&
            !uploading &&
            !errorMessage && (
              <Card
                padding={3}
                radius={2}
                tone="positive"
              >
                <Text
                  size={1}
                  weight="semibold"
                >
                  {successMessage}
                </Text>
              </Card>
            )}

          <Text
            size={1}
            muted
          >
            Supported formats: JPG, JPEG,
            PNG, WebP and GIF. Maximum{" "}
            {MAX_FILES_PER_UPLOAD} images per
            upload.
          </Text>
        </Stack>
      </Card>
    </Stack>
  );
}