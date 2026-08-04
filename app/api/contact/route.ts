import { NextResponse } from "next/server";

import { sendContactEmails } from "@/lib/mail/contact";
import { rateLimit } from "@/lib/security/rate-limit";
import type { ContactApiResponse } from "@/lib/types/forms";
import { validateContactForm } from "@/lib/validation/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

function isJsonRequest(request: Request): boolean {
  const contentType =
    request.headers.get("content-type") ?? "";

  return contentType
    .toLowerCase()
    .includes("application/json");
}

function createResponse(
  body: ContactApiResponse,
  status: number,
  headers?: HeadersInit,
) {
  return NextResponse.json(body, {
    status,
    headers,
  });
}

export async function POST(request: Request) {
  try {
    if (!isJsonRequest(request)) {
      return createResponse(
        {
          success: false,
          message:
            "Invalid request format. Please submit the form again.",
        },
        415,
      );
    }

    const clientIp = getClientIp(request);

    const rateLimitResult = rateLimit({
      identifier: `contact:${clientIp}`,
      limit: 5,
      windowMs: 15 * 60 * 1000,
    });

    if (!rateLimitResult.success) {
      return createResponse(
        {
          success: false,
          message:
            "Too many enquiries have been submitted. Please wait a few minutes and try again.",
        },
        429,
        {
          "Retry-After": String(
            rateLimitResult.retryAfter,
          ),
        },
      );
    }

    let requestBody: unknown;

    try {
      requestBody = await request.json();
    } catch {
      return createResponse(
        {
          success: false,
          message:
            "Invalid form data. Please refresh the page and try again.",
        },
        400,
      );
    }

    const validationResult =
      validateContactForm(requestBody);

    if (!validationResult.success) {
      return createResponse(
        {
          success: false,
          message:
            "Please correct the highlighted fields.",
          errors: validationResult.errors,
        },
        400,
      );
    }

    const formData = validationResult.data;

    console.log(
      "CONTACT FORM: Starting email delivery",
      {
        name: formData.name,
        email: formData.email,
        recipients:
          process.env.CONTACT_RECEIVER_EMAIL,
        bcc: process.env.CONTACT_BCC_EMAIL,
      },
    );

    /*
     * Do not return success before this function completes.
     * If SMTP fails, it will throw an error and the API will
     * return status 500 from the catch block below.
     */
    await sendContactEmails(formData);

    console.log(
      "CONTACT FORM: Email delivery completed",
    );

    return createResponse(
      {
        success: true,
        message:
          "Thank you. Your enquiry has been submitted successfully. Our team will contact you shortly.",
      },
      200,
    );
  } catch (error) {
    console.error(
      "Contact form submission failed:",
      error,
    );

    return createResponse(
      {
        success: false,
        message:
          "We could not submit your enquiry right now. Please try again or contact us directly.",
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