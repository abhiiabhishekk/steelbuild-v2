import { NextResponse } from "next/server";

import { sendCareerMail } from "@/lib/mail/career";
import { rateLimit } from "@/lib/security/rate-limit";

import type {
  CareerApiResponse,
  CareerFormData,
  CareerResumeAttachment,
} from "@/lib/types/career";

import {
  validateCareerForm,
} from "@/lib/validation/career";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ========================================
// GOOGLE APPS SCRIPT WEB APP
// ========================================

const GOOGLE_SHEET_WEBAPP =
  "https://script.google.com/macros/s/AKfycbwCrR5xCdPaaGEy2zuIMhkj-sc57j01W2LdfGl2d3SBhCuGCXmoyH_WYWqz60BK7CXY/exec";

const MAX_RESUME_SIZE =
  10 * 1024 * 1024;

const ALLOWED_RESUME_EXTENSIONS =
  new Set([
    "pdf",
    "doc",
    "docx",
  ]);

const ALLOWED_RESUME_MIME_TYPES =
  new Set([
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/octet-stream",
  ]);

function createResponse(
  body: CareerApiResponse,
  status: number,
  headers?: HeadersInit,
) {
  return NextResponse.json(
    body,
    {
      status,
      headers,
    },
  );
}

function getClientIp(
  request: Request,
): string {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for",
    );

  if (forwardedFor) {
    const firstIp =
      forwardedFor
        .split(",")
        .map((ip) =>
          ip.trim(),
        )
        .find(Boolean);

    if (firstIp) {
      return firstIp;
    }
  }

  const realIp =
    request.headers.get(
      "x-real-ip",
    );

  if (realIp?.trim()) {
    return realIp.trim();
  }

  return "unknown";
}

function isMultipartRequest(
  request: Request,
): boolean {
  const contentType =
    request.headers.get(
      "content-type",
    ) ?? "";

  return contentType
    .toLowerCase()
    .includes(
      "multipart/form-data",
    );
}

function getFormText(
  formData: FormData,
  field: string,
): string {
  const value =
    formData.get(field);

  return typeof value ===
    "string"
    ? value.trim()
    : "";
}

function getFileExtension(
  fileName: string,
): string {
  const segments =
    fileName
      .toLowerCase()
      .split(".");

  return segments.length > 1
    ? segments.pop() ?? ""
    : "";
}

function sanitizeFileName(
  fileName: string,
): string {
  const cleanedName =
    fileName
      .replace(
        /[^\w.\-() ]+/g,
        "_",
      )
      .replace(/\s+/g, " ")
      .trim();

  return (
    cleanedName ||
    "candidate-resume"
  );
}

// ========================================
// BUILD CAREER FORM DATA
// ========================================

function buildCareerData(
  formData: FormData,
): CareerFormData {
  const applicationType =
    getFormText(
      formData,
      "applicationType",
    ) === "Specific Opening"
      ? "Specific Opening"
      : "General Application";

  return {
    fullName:
      getFormText(
        formData,
        "fullName",
      ),

    email:
      getFormText(
        formData,
        "email",
      ),

    phone:
      getFormText(
        formData,
        "phone",
      ),

    currentLocation:
      getFormText(
        formData,
        "currentLocation",
      ),

    department:
      getFormText(
        formData,
        "department",
      ),

    preferredRole:
      getFormText(
        formData,
        "preferredRole",
      ),

    experience:
      getFormText(
        formData,
        "experience",
      ),

    qualification:
      getFormText(
        formData,
        "qualification",
      ),

    currentCompany:
      getFormText(
        formData,
        "currentCompany",
      ),

    // NEW / REQUIRED CAREER DETAILS
    currentSalary:
      getFormText(
        formData,
        "currentSalary",
      ),

    expectedSalary:
      getFormText(
        formData,
        "expectedSalary",
      ),

    noticePeriod:
      getFormText(
        formData,
        "noticePeriod",
      ),

    portfolioUrl:
      getFormText(
        formData,
        "portfolioUrl",
      ),

    message:
      getFormText(
        formData,
        "message",
      ),

    applicationType,

    jobDocumentId:
      getFormText(
        formData,
        "jobDocumentId",
      ),

    jobId:
      getFormText(
        formData,
        "jobId",
      ),

    jobSlug:
      getFormText(
        formData,
        "jobSlug",
      ),

    jobTitle:
      getFormText(
        formData,
        "jobTitle",
      ),

    jobDepartment:
      getFormText(
        formData,
        "jobDepartment",
      ),
  };
}

// ========================================
// RESUME VALIDATION
// ========================================

function validateResume(
  file: File,
): string | null {
  if (!file.name.trim()) {
    return "Uploaded resume file name is invalid.";
  }

  const extension =
    getFileExtension(
      file.name,
    );

  if (
    !ALLOWED_RESUME_EXTENSIONS.has(
      extension,
    )
  ) {
    return "Please upload a PDF, DOC or DOCX resume.";
  }

  if (file.size <= 0) {
    return "The uploaded resume file is empty.";
  }

  if (
    file.size >
    MAX_RESUME_SIZE
  ) {
    return "Resume file size must be less than 10 MB.";
  }

  if (
    file.type &&
    !ALLOWED_RESUME_MIME_TYPES.has(
      file.type.toLowerCase(),
    )
  ) {
    return "The uploaded resume format is not supported.";
  }

  return null;
}

async function prepareResume(
  file: File,
): Promise<CareerResumeAttachment> {
  const arrayBuffer =
    await file.arrayBuffer();

  return {
    filename:
      sanitizeFileName(
        file.name,
      ),

    content:
      Buffer.from(
        arrayBuffer,
      ),

    contentType:
      file.type ||
      "application/octet-stream",
  };
}

// ========================================
// SAVE TO GOOGLE SHEET + GOOGLE DRIVE
// ========================================

async function saveCareerApplicationToGoogle(
  data: CareerFormData,
  resume: CareerResumeAttachment,
) {
  try {
    const resumeBase64 =
      resume.content.toString(
        "base64",
      );

    const response =
      await fetch(
        GOOGLE_SHEET_WEBAPP,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "text/plain;charset=utf-8",
          },

          body: JSON.stringify({
            applicationType:
              data.applicationType,

            jobDocumentId:
              data.jobDocumentId,

            jobId:
              data.jobId,

            jobSlug:
              data.jobSlug,

            jobTitle:
              data.jobTitle,

            jobDepartment:
              data.jobDepartment,

            fullName:
              data.fullName,

            email:
              data.email,

            phone:
              data.phone,

            currentLocation:
              data.currentLocation,

            department:
              data.department,

            preferredRole:
              data.preferredRole,

            experience:
              data.experience,

            qualification:
              data.qualification,

            currentCompany:
              data.currentCompany,

            // ========================================
            // SALARY / NOTICE / PORTFOLIO
            // ========================================

            currentSalary:
              data.currentSalary,

            expectedSalary:
              data.expectedSalary,

            noticePeriod:
              data.noticePeriod,

            portfolioUrl:
              data.portfolioUrl,

            message:
              data.message,

            // ========================================
            // RESUME
            // ========================================

            resumeFileName:
              resume.filename,

            resumeMimeType:
              resume.contentType,

            resumeBase64,
          }),
        },
      );

    const responseText =
      await response.text();

    if (!response.ok) {
      throw new Error(
        `Google Apps Script request failed with status ${response.status}: ${responseText}`,
      );
    }

    let result:
      | {
          success?: boolean;
          message?: string;
          cvLink?: string;
        }
      | null = null;

    try {
      result =
        JSON.parse(
          responseText,
        );
    } catch {
      throw new Error(
        `Google Apps Script returned invalid JSON: ${responseText}`,
      );
    }

    if (!result?.success) {
      throw new Error(
        result?.message ||
          "Google Apps Script could not save the career application.",
      );
    }

    console.log(
      "CAREER FORM: Google Sheet + Drive sync completed",
      {
        cvLink:
          result.cvLink,
      },
    );

    return result;
  } catch (error) {
    console.error(
      "CAREER FORM: Google Sheet + Drive sync failed:",
      error,
    );

    // Google Sheet/Drive failure should not
    // stop the HR email submission.
    return null;
  }
}

// ========================================
// POST
// ========================================

export async function POST(
  request: Request,
) {
  try {
    if (
      !isMultipartRequest(
        request,
      )
    ) {
      return createResponse(
        {
          success: false,
          message:
            "Invalid request format. Please submit the career form again.",
        },
        415,
      );
    }

    const clientIp =
      getClientIp(request);

    const rateLimitResult =
      rateLimit({
        identifier:
          `career:${clientIp}`,

        limit: 4,

        windowMs:
          15 * 60 * 1000,
      });

    if (
      !rateLimitResult.success
    ) {
      return createResponse(
        {
          success: false,
          message:
            "Too many career applications have been submitted. Please wait a few minutes and try again.",
        },
        429,
        {
          "Retry-After":
            String(
              rateLimitResult.retryAfter,
            ),
        },
      );
    }

    let submittedFormData:
      FormData;

    try {
      submittedFormData =
        await request.formData();
    } catch {
      return createResponse(
        {
          success: false,
          message:
            "The submitted career form could not be processed. Please refresh the page and try again.",
        },
        400,
      );
    }

    // ========================================
    // BUILD + VALIDATE FORM DATA
    // ========================================

    const careerData =
      buildCareerData(
        submittedFormData,
      );

    const validationResult =
      validateCareerForm(
        careerData,
      );

    if (
      !validationResult.success
    ) {
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

    // ========================================
    // RESUME
    // ========================================

    const resumeEntry =
      submittedFormData.get(
        "resume",
      );

    if (
      !(
        resumeEntry instanceof
        File
      )
    ) {
      return createResponse(
        {
          success: false,
          message:
            "Please upload your resume.",
          errors: {
            resume:
              "Please upload your resume.",
          },
        },
        400,
      );
    }

    const resumeError =
      validateResume(
        resumeEntry,
      );

    if (resumeError) {
      return createResponse(
        {
          success: false,
          message:
            "Please correct the uploaded resume file.",
          errors: {
            resume:
              resumeError,
          },
        },
        400,
      );
    }

    const resume =
      await prepareResume(
        resumeEntry,
      );

    console.log(
      "CAREER FORM: Starting email delivery",
      {
        applicationType:
          validationResult.data
            .applicationType,

        jobId:
          validationResult.data
            .jobId,

        jobTitle:
          validationResult.data
            .jobTitle,

        name:
          validationResult.data
            .fullName,

        email:
          validationResult.data
            .email,

        currentSalary:
          validationResult.data
            .currentSalary,

        expectedSalary:
          validationResult.data
            .expectedSalary,

        noticePeriod:
          validationResult.data
            .noticePeriod,

        portfolioUrl:
          validationResult.data
            .portfolioUrl,

        receiver:
          process.env
            .CAREER_RECEIVER_EMAIL,

        cc:
          process.env
            .CAREER_CC_EMAIL,

        bcc:
          process.env
            .CAREER_BCC_EMAIL,

        resume:
          resume.filename,
      },
    );

    // ========================================
    // 1. SEND HR EMAIL
    // ========================================

    const mailResult =
      await sendCareerMail({
        data:
          validationResult.data,
        resume,
      });

    console.log(
      "CAREER FORM: Email delivery completed",
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

    // ========================================
    // 2. GOOGLE SHEET + GOOGLE DRIVE
    // ========================================

    await saveCareerApplicationToGoogle(
      validationResult.data,
      resume,
    );

    // ========================================
    // SUCCESS
    // ========================================

    const successMessage =
      validationResult.data
        .applicationType ===
      "Specific Opening"
        ? `Thank you. Your application for ${validationResult.data.jobTitle} has been submitted successfully.`
        : "Thank you. Your resume has been submitted successfully. Our HR team will review your profile for suitable opportunities.";

    return createResponse(
      {
        success: true,
        message:
          successMessage,
      },
      200,
    );
  } catch (error) {
    console.error(
      "Career form submission failed:",
      error,
    );

    return createResponse(
      {
        success: false,
        message:
          "We could not submit your resume right now. Please try again or contact our HR team directly.",
      },
      500,
    );
  }
}

// ========================================
// GET NOT ALLOWED
// ========================================

export function GET() {
  return createResponse(
    {
      success: false,
      message:
        "Method not allowed.",
    },
    405,
    {
      Allow: "POST",
    },
  );
}