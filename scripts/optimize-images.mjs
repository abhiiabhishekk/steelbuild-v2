import fs from "node:fs/promises";
import path from "node:path";
import { spawn } from "node:child_process";

const PROJECT_ROOT = process.cwd();

const TARGET_DIRECTORY = path.join(
  PROJECT_ROOT,
  "public",
  "images",
  "projects",
);

const SUPPORTED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
]);

const MAX_DIMENSION = 2560;
const JPEG_QUALITY = 85;
const PNG_QUALITY = 90;
const MINIMUM_SAVING_PERCENT = 2;

let totalFiles = 0;
let optimizedFiles = 0;
let skippedFiles = 0;
let failedFiles = 0;

let originalTotalBytes = 0;
let finalTotalBytes = 0;

const failures = [];

function formatBytes(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB"];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  return `${(
    bytes / Math.pow(1024, index)
  ).toFixed(2)} ${units[index]}`;
}

function relativePath(filePath) {
  return path.relative(PROJECT_ROOT, filePath);
}

async function collectImages(directory) {
  const entries = await fs.readdir(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(
      directory,
      entry.name,
    );

    if (entry.isDirectory()) {
      files.push(
        ...(await collectImages(fullPath)),
      );
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const extension = path
      .extname(entry.name)
      .toLowerCase();

    if (SUPPORTED_EXTENSIONS.has(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

function runMagick(args) {
  return new Promise((resolve, reject) => {
    const process = spawn("magick", args, {
      windowsHide: true,
      stdio: ["ignore", "pipe", "pipe"],
    });

    let stderr = "";

    process.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    process.on("error", reject);

    process.on("close", (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          stderr.trim() ||
            `ImageMagick exited with code ${code}`,
        ),
      );
    });
  });
}

async function optimizeImage(
  imagePath,
  index,
  total,
) {
  totalFiles += 1;

  const extension = path
    .extname(imagePath)
    .toLowerCase();

  const originalStats =
    await fs.stat(imagePath);

  const originalSize =
    originalStats.size;

  originalTotalBytes += originalSize;

  const temporaryPath = `${imagePath}.tmp${extension}`;

  console.log("");
  console.log(
    `[${index}/${total}] ${relativePath(
      imagePath,
    )}`,
  );

  try {
    const commonArguments = [
      imagePath,
      "-auto-orient",
      "-strip",
      "-resize",
      `${MAX_DIMENSION}x${MAX_DIMENSION}>`,
      "-interlace",
      "Plane",
    ];

    if (
      extension === ".jpg" ||
      extension === ".jpeg"
    ) {
      await runMagick([
        ...commonArguments,
        "-sampling-factor",
        "4:2:0",
        "-quality",
        String(JPEG_QUALITY),
        temporaryPath,
      ]);
    } else {
      await runMagick([
        ...commonArguments,
        "-quality",
        String(PNG_QUALITY),
        "-define",
        "png:compression-level=9",
        temporaryPath,
      ]);
    }

    const optimizedStats =
      await fs.stat(temporaryPath);

    const optimizedSize =
      optimizedStats.size;

    const savedBytes =
      originalSize - optimizedSize;

    const savedPercentage =
      originalSize > 0
        ? (savedBytes / originalSize) * 100
        : 0;

    if (
      optimizedSize >= originalSize ||
      savedPercentage <
        MINIMUM_SAVING_PERCENT
    ) {
      await fs.unlink(temporaryPath);

      skippedFiles += 1;
      finalTotalBytes += originalSize;

      console.log(
        `SKIPPED: ${formatBytes(
          originalSize,
        )}`,
      );

      return;
    }

    await fs.rename(
      imagePath,
      `${imagePath}.original-temp`,
    );

    try {
      await fs.rename(
        temporaryPath,
        imagePath,
      );

      await fs.unlink(
        `${imagePath}.original-temp`,
      );
    } catch (error) {
      await fs.rename(
        `${imagePath}.original-temp`,
        imagePath,
      );

      throw error;
    }

    optimizedFiles += 1;
    finalTotalBytes += optimizedSize;

    console.log(
      `OPTIMIZED: ${formatBytes(
        originalSize,
      )} → ${formatBytes(
        optimizedSize,
      )}`,
    );

    console.log(
      `SAVED: ${formatBytes(
        savedBytes,
      )} (${savedPercentage.toFixed(1)}%)`,
    );
  } catch (error) {
    failedFiles += 1;
    finalTotalBytes += originalSize;

    try {
      await fs.unlink(temporaryPath);
    } catch {
      // Temporary file may not exist.
    }

    const message =
      error instanceof Error
        ? error.message
        : String(error);

    failures.push({
      file: relativePath(imagePath),
      error: message,
    });

    console.error(
      `FAILED: ${relativePath(imagePath)}`,
    );

    console.error(message);
  }
}

async function main() {
  console.log("");
  console.log(
    "STEELBUILD PROJECT IMAGE OPTIMIZER",
  );
  console.log(
    `Target: ${TARGET_DIRECTORY}`,
  );
  console.log(
    `Maximum size: ${MAX_DIMENSION}px`,
  );
  console.log(
    `JPEG quality: ${JPEG_QUALITY}`,
  );

  await fs.access(TARGET_DIRECTORY);

  const images =
    await collectImages(
      TARGET_DIRECTORY,
    );

  images.sort((a, b) =>
    a.localeCompare(b),
  );

  console.log(
    `${images.length} images found.`,
  );

  for (
    let index = 0;
    index < images.length;
    index += 1
  ) {
    await optimizeImage(
      images[index],
      index + 1,
      images.length,
    );
  }

  if (failures.length > 0) {
    await fs.writeFile(
      path.join(
        PROJECT_ROOT,
        "scripts",
        "image-optimization-failures.json",
      ),
      JSON.stringify(
        failures,
        null,
        2,
      ),
      "utf8",
    );
  }

  const totalSaved =
    originalTotalBytes -
    finalTotalBytes;

  const percentage =
    originalTotalBytes > 0
      ? (
          (totalSaved /
            originalTotalBytes) *
          100
        ).toFixed(1)
      : "0.0";

  console.log("");
  console.log(
    "======================================",
  );
  console.log(
    "PROJECT IMAGE OPTIMIZATION COMPLETED",
  );
  console.log(
    "======================================",
  );
  console.log(`Total: ${totalFiles}`);
  console.log(
    `Optimized: ${optimizedFiles}`,
  );
  console.log(`Skipped: ${skippedFiles}`);
  console.log(`Failed: ${failedFiles}`);
  console.log(
    `Original size: ${formatBytes(
      originalTotalBytes,
    )}`,
  );
  console.log(
    `Final size: ${formatBytes(
      finalTotalBytes,
    )}`,
  );
  console.log(
    `Saved: ${formatBytes(
      totalSaved,
    )} (${percentage}%)`,
  );
}

main().catch((error) => {
  console.error(
    error instanceof Error
      ? error.message
      : error,
  );

  process.exitCode = 1;
});