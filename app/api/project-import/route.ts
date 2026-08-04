import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";

import { createClient } from "@sanity/client";
import { NextRequest, NextResponse } from "next/server";

import { projects } from "@/data/projects";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 300;

type ExistingImage = {
  _key?: string;
  asset?: {
    _ref?: string;
    originalFilename?: string;
  };
};

type ExistingProjectDocument = {
  _id: string;

  coverImage?: ExistingImage;

  gallery?: ExistingImage[];
};

type UploadedImageReference = {
  _key: string;
  _type: "image";

  asset: {
    _type: "reference";
    _ref: string;
  };

  alt: string;
};

type ProjectImportResult = {
  success: boolean;
  projectId: string;
  title: string;
  slug: string;
  status: "success" | "failed";
  message: string;
  uploadedImages?: number;
  reusedImages?: number;
};

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ??
  "production";

const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION ??
  "2025-01-01";

const token =
  process.env.SANITY_API_WRITE_TOKEN;

const sanityClient = createClient({
  projectId: projectId ?? "",
  dataset,
  apiVersion,
  token,
  useCdn: false,
  perspective: "published",
});

const createKey = (): string =>
  crypto
    .randomUUID()
    .replaceAll("-", "")
    .slice(0, 20);

const getContentType = (
  filename: string,
): string => {
  const extension = path
    .extname(filename)
    .toLowerCase();

  switch (extension) {
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";

    case ".png":
      return "image/png";

    case ".webp":
      return "image/webp";

    case ".gif":
      return "image/gif";

    default:
      return "application/octet-stream";
  }
};

const getLocalImagePath = (
  publicImagePath: string,
): string => {
  const cleanPath =
    publicImagePath.replace(/^\/+/, "");

  return path.join(
    process.cwd(),
    "public",
    cleanPath.replace(/^public[\\/]/, ""),
  );
};

const validateEnvironment = () => {
  const missing: string[] = [];

  if (!projectId) {
    missing.push(
      "NEXT_PUBLIC_SANITY_PROJECT_ID",
    );
  }

  if (!dataset) {
    missing.push(
      "NEXT_PUBLIC_SANITY_DATASET",
    );
  }

  if (!token) {
    missing.push(
      "SANITY_API_WRITE_TOKEN",
    );
  }

  return missing;
};

const uploadImageAsset = async ({
  localPath,
  filename,
}: {
  localPath: string;
  filename: string;
}) => {
  const imageBuffer =
    await fs.readFile(localPath);

  if (imageBuffer.length === 0) {
    throw new Error(
      `Image file is empty: ${filename}`,
    );
  }

  return sanityClient.assets.upload(
    "image",
    imageBuffer,
    {
      filename,
      contentType:
        getContentType(filename),
    },
  );
};

const createImageReference = ({
  assetId,
  alt,
}: {
  assetId: string;
  alt: string;
}): UploadedImageReference => ({
  _key: createKey(),
  _type: "image",

  asset: {
    _type: "reference",
    _ref: assetId,
  },

  alt,
});

const getExistingAssetByFilename = (
  images: ExistingImage[],
  filename: string,
): string | undefined => {
  const matchingImage = images.find(
    (image) =>
      image.asset?.originalFilename ===
      filename,
  );

  return matchingImage?.asset?._ref;
};

export async function POST(
  request: NextRequest,
) {
  const missingVariables =
    validateEnvironment();

  if (missingVariables.length > 0) {
    return NextResponse.json(
      {
        success: false,
        message: `Missing environment variables: ${missingVariables.join(
          ", ",
        )}`,
      },
      {
        status: 500,
      },
    );
  }

  let requestBody: {
    projectId?: string;
  };

  try {
    requestBody =
      (await request.json()) as {
        projectId?: string;
      };
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          "Invalid project import request.",
      },
      {
        status: 400,
      },
    );
  }

  const requestedProjectId =
    requestBody.projectId?.trim();

  if (!requestedProjectId) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Project ID is required.",
      },
      {
        status: 400,
      },
    );
  }

  const project = projects.find(
    (item) =>
      item.id === requestedProjectId,
  );

  if (!project) {
    return NextResponse.json(
      {
        success: false,
        projectId: requestedProjectId,
        message:
          "Project was not found in data/projects.ts.",
      },
      {
        status: 404,
      },
    );
  }

  const sanityDocumentId =
    `project-${project.id}`;

  try {
    const existingDocument =
      await sanityClient.fetch<ExistingProjectDocument | null>(
        `*[
          _type == "project" &&
          _id == $documentId
        ][0]{
          _id,

          coverImage{
            _key,

            asset->{
              "_ref": _id,
              originalFilename
            }
          },

          gallery[]{
            _key,

            asset->{
              "_ref": _id,
              originalFilename
            }
          }
        }`,
        {
          documentId:
            sanityDocumentId,
        },
      );

    const existingImages: ExistingImage[] =
      [
        ...(existingDocument
          ?.coverImage
          ? [
              existingDocument.coverImage,
            ]
          : []),

        ...(existingDocument?.gallery ??
          []),
      ];

    let uploadedImages = 0;
    let reusedImages = 0;

    const imageReferences =
      new Map<
        string,
        UploadedImageReference
      >();

    for (
      let imageIndex = 0;
      imageIndex <
      project.gallery.length;
      imageIndex += 1
    ) {
      const publicImagePath =
        project.gallery[imageIndex];

      const filename =
        path.basename(
          publicImagePath,
        );

      const localPath =
        getLocalImagePath(
          publicImagePath,
        );

      try {
        await fs.access(localPath);
      } catch {
        throw new Error(
          `Local image not found: ${publicImagePath}`,
        );
      }

      const existingAssetId =
        getExistingAssetByFilename(
          existingImages,
          filename,
        );

      if (existingAssetId) {
        imageReferences.set(
          filename,
          createImageReference({
            assetId:
              existingAssetId,

            alt:
              imageIndex === 0
                ? `${project.name} project cover image`
                : `${project.name} project gallery image ${imageIndex}`,
          }),
        );

        reusedImages += 1;
        continue;
      }

      const uploadedAsset =
        await uploadImageAsset({
          localPath,
          filename,
        });

      imageReferences.set(
        filename,
        createImageReference({
          assetId:
            uploadedAsset._id,

          alt:
            imageIndex === 0
              ? `${project.name} project cover image`
              : `${project.name} project gallery image ${imageIndex}`,
        }),
      );

      uploadedImages += 1;
    }

    const coverFilename =
      path.basename(project.image);

    const coverImage =
      imageReferences.get(
        coverFilename,
      );

    if (!coverImage) {
      throw new Error(
        "Cover image reference could not be created.",
      );
    }

    const gallery =
      project.gallery.map(
        (
          publicImagePath,
          imageIndex,
        ) => {
          const filename =
            path.basename(
              publicImagePath,
            );

          const imageReference =
            imageReferences.get(
              filename,
            );

          if (!imageReference) {
            throw new Error(
              `Gallery image reference missing: ${filename}`,
            );
          }

          return {
            ...imageReference,

            _key: createKey(),

            alt:
              imageIndex === 0
                ? `${project.name} project cover image`
                : `${project.name} project gallery image ${imageIndex}`,
          };
        },
      );

    const shortDescription =
      `${project.name} is a completed ${project.category} Pre-Engineered Building project delivered by Steelbuild Infra Projects Limited in ${project.location}. The project covers ${project.area} with approximately ${project.tonnage} of structural steel.`;

    const seoTitle =
      `${project.name} PEB Project in ${project.location}`;

    const seoDescription =
      `${project.name} is a completed ${project.category} PEB project by Steelbuild Infra Projects Limited in ${project.location}. Area: ${project.area}. Tonnage: ${project.tonnage}.`;

    await sanityClient.createIfNotExists({
      _id: sanityDocumentId,
      _type: "project",

      projectId: project.id,

      name: project.name,

      slug: {
        _type: "slug",
        current: project.slug,
      },

      category: project.category,

      status: "Completed",

      location: project.location,

      area: project.area,

      tonnage: project.tonnage,

      featured:
        project.featured ?? false,

      active: true,

      displayOrder:
        Number(project.id),

      publishedAt:
        new Date().toISOString(),
    });

    await sanityClient
      .patch(sanityDocumentId)
      .set({
        projectId: project.id,

        name: project.name,

        clientName:
          project.name,

        slug: {
          _type: "slug",
          current:
            project.slug,
        },

        category:
          project.category,

        status: "Completed",

        location:
          project.location,

        area: project.area,

        tonnage:
          project.tonnage,

        featured:
          project.featured ??
          false,

        active: true,

        displayOrder:
          Number(project.id),

        coverImage,

        gallery,
      })
      .setIfMissing({
        shortDescription,

        seoTitle,

        seoDescription,

        seoKeywords: [
          project.name,
          `${project.category} project`,
          `PEB project in ${project.location}`,
          "Steelbuild Infra Projects",
          "Pre-Engineered Building project",
        ],

        publishedAt:
          new Date().toISOString(),
      })
      .commit({
        autoGenerateArrayKeys: true,
      });

    const result: ProjectImportResult =
      {
        success: true,

        projectId:
          project.id,

        title:
          project.name,

        slug:
          project.slug,

        status: "success",

        uploadedImages,

        reusedImages,

        message:
          uploadedImages > 0
            ? `Project imported successfully. ${uploadedImages} images uploaded and ${reusedImages} existing images reused.`
            : `Project updated successfully. All ${reusedImages} images were reused.`,
      };

    return NextResponse.json(
      result,
      {
        status: 200,
      },
    );
  } catch (error) {
    const result: ProjectImportResult =
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
            : "Unknown project import error.",
      };

    return NextResponse.json(
      result,
      {
        status: 500,
      },
    );
  }
}