import { NextResponse } from "next/server";

import { sendQuoteMail } from "@/lib/mail/quote";
import { rateLimit } from "@/lib/security/rate-limit";
import type {
  QuoteApiResponse,
  QuoteFormData,
} from "@/lib/types/quote";
import { validateQuoteForm } from "@/lib/validation/quote";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_FILE_SIZE = 25 * 1024 * 1024;

const ALLOWED_FILE_EXTENSIONS = new Set([
  "pdf",
  "dwg",
  "dxf",
  "zip",
  "rar",
  "jpg",
  "jpeg",
  "png",
]);

const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/zip",
  "application/x-zip-compressed",
  "application/x-rar-compressed",
  "application/vnd.rar",
  "application/octet-stream",
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/acad",
  "application/x-acad",
  "application/autocad_dwg",
  "image/vnd.dwg",
  "image/x-dwg",
  "application/dwg",
  "application/x-dwg",
  "application/dxf",
  "application/x-dxf",
  "image/vnd.dxf",
]);

type QuoteAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

function createResponse(
  body: QuoteApiResponse,
  status: number,
  headers?: HeadersInit,
) {
  return NextResponse.json(body, {
    status,
    headers,
  });
}

function getClientIp(request: Request): string {
  const forwardedFor =
    request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const firstIp = forwardedFor
      .split(",")
      .map((ip) => ip.trim())
      .find(Boolean);

    if (firstIp) {
      return firstIp;
    }
  }

  const realIp =
    request.headers.get("x-real-ip");

  if (realIp?.trim()) {
    return realIp.trim();
  }

  return "unknown";
}

function isMultipartRequest(
  request: Request,
): boolean {
  const contentType =
    request.headers.get("content-type") ?? "";

  return contentType
    .toLowerCase()
    .includes("multipart/form-data");
}

function getFormText(
  formData: FormData,
  field: string,
): string {
  const value = formData.get(field);

  return typeof value === "string"
    ? value.trim()
    : "";
}

function getFileExtension(
  fileName: string,
): string {
  const segments = fileName
    .toLowerCase()
    .split(".");

  return segments.length > 1
    ? segments.pop() ?? ""
    : "";
}

function sanitizeFileName(
  fileName: string,
): string {
  const cleanedName = fileName
    .replace(/[^\w.\-() ]+/g, "_")
    .replace(/\s+/g, " ")
    .trim();

  return cleanedName || "project-attachment";
}

function validateAttachment(
  file: File,
): string | null {
  if (!file.name.trim()) {
    return "Uploaded file name is invalid.";
  }

  const extension =
    getFileExtension(file.name);

  if (
    !ALLOWED_FILE_EXTENSIONS.has(extension)
  ) {
    return "Please upload PDF, DWG, DXF, ZIP, RAR, JPG or PNG files only.";
  }

  if (file.size <= 0) {
    return "The uploaded file is empty.";
  }

  if (file.size > MAX_FILE_SIZE) {
    return "File size must be less than 25 MB.";
  }

  /*
   * Browsers and operating systems sometimes report
   * DWG, DXF, ZIP or RAR files as application/octet-stream.
   * Therefore, extension validation is also required.
   */
  if (
    file.type &&
    !ALLOWED_MIME_TYPES.has(
      file.type.toLowerCase(),
    )
  ) {
    return "The uploaded file format is not supported.";
  }

  return null;
}

function buildQuoteData(
  formData: FormData,
): QuoteFormData {
  return {
    fullName: getFormText(
      formData,
      "fullName",
    ),

    companyName: getFormText(
      formData,
      "companyName",
    ),

    email: getFormText(
      formData,
      "email",
    ),

    phone: getFormText(
      formData,
      "phone",
    ),

    projectLocation: getFormText(
      formData,
      "projectLocation",
    ),

    industry: getFormText(
      formData,
      "industry",
    ),

    projectType: getFormText(
      formData,
      "projectType",
    ),

    approximateArea: getFormText(
      formData,
      "approximateArea",
    ),

    buildingWidth: getFormText(
      formData,
      "buildingWidth",
    ),

    buildingLength: getFormText(
      formData,
      "buildingLength",
    ),

    clearHeight: getFormText(
      formData,
      "clearHeight",
    ),

    craneRequired: getFormText(
      formData,
      "craneRequired",
    ),

    mezzanineRequired: getFormText(
      formData,
      "mezzanineRequired",
    ),

    roofingRequirement: getFormText(
      formData,
      "roofingRequirement",
    ),

    timeline: getFormText(
      formData,
      "timeline",
    ),

    projectDescription: getFormText(
      formData,
      "projectDescription",
    ),

    website: getFormText(
      formData,
      "website",
    ),
  };
}

async function prepareAttachment(
  file: File,
): Promise<QuoteAttachment> {
  const arrayBuffer =
    await file.arrayBuffer();

  return {
    filename: sanitizeFileName(
      file.name,
    ),

    content: Buffer.from(arrayBuffer),

    contentType:
      file.type ||
      "application/octet-stream",
  };
}

export async function POST(
  request: Request,
) {
  try {
    if (!isMultipartRequest(request)) {
      return createResponse(
        {
          success: false,
          message:
            "Invalid request format. Please submit the quotation form again.",
        },
        415,
      );
    }

    const clientIp =
      getClientIp(request);

    const rateLimitResult = rateLimit({
      identifier: `request-quote:${clientIp}`,
      limit: 4,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimitResult.success) {
      return createResponse(
        {
          success: false,
          message:
            "Too many quotation requests have been submitted. Please wait a few minutes and try again.",
        },
        429,
        {
          "Retry-After": String(
            rateLimitResult.retryAfter,
          ),
        },
      );
    }

    let submittedFormData: FormData;

    try {
      submittedFormData =
        await request.formData();
    } catch {
      return createResponse(
        {
          success: false,
          message:
            "The submitted form data could not be processed. Please refresh the page and try again.",
        },
        400,
      );
    }

    const quoteData =
      buildQuoteData(
        submittedFormData,
      );

    const validationResult =
      validateQuoteForm(quoteData);

    if (!validationResult.success) {
      return createResponse(
        {
          success: false,
          message:
            "Please correct the highlighted fields.",
          errors:
            validationResult.errors,
        },
        400,
      );
    }

    const attachmentEntry =
      submittedFormData.get(
        "attachment",
      );

    let attachment:
      | QuoteAttachment
      | undefined;

    if (
      attachmentEntry instanceof File &&
      attachmentEntry.size > 0
    ) {
      const attachmentError =
        validateAttachment(
          attachmentEntry,
        );

      if (attachmentError) {
        return createResponse(
          {
            success: false,
            message:
              "Please correct the uploaded project file.",
            errors: {
              attachment:
                attachmentError,
            },
          },
          400,
        );
      }

      attachment =
        await prepareAttachment(
          attachmentEntry,
        );
    }

    console.log(
      "QUOTE FORM: Starting email delivery",
      {
        name:
          validationResult.data.fullName,
        email:
          validationResult.data.email,
        recipients:
          process.env.QUOTE_RECEIVER_EMAIL,
        bcc:
          process.env.QUOTE_BCC_EMAIL,
        attachment:
          Boolean(attachment),
      },
    );

    /*
     * Success will only be returned after Nodemailer
     * confirms SMTP delivery.
     */
    const mailResult = await sendQuoteMail({
      data: validationResult.data,
      attachment,
    });

    console.log(
      "QUOTE FORM: Email delivery completed",
      {
        messageId:
          mailResult.messageId,
        accepted:
          mailResult.accepted,
        rejected:
          mailResult.rejected,
        response:
          mailResult.response,
      },
    );

    return createResponse(
      {
        success: true,
        message:
          "Thank you. Your project requirement has been submitted successfully. Our team will review it and contact you shortly.",
      },
      200,
    );
  } catch (error) {
    console.error(
      "Request quote submission failed:",
      error,
    );

    return createResponse(
      {
        success: false,
        message:
          "We could not submit your quotation request right now. Please try again or contact our team directly.",
      },
      500,
    );
  }
}

export function GET() {
  return createResponse(
    {
      success: false,
      message: "Method not allowed.",
    },
    405,
    {
      Allow: "POST",
    },
  );
}