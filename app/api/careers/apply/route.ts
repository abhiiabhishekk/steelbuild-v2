import {
  NextResponse,
} from "next/server";

export const runtime =
  "nodejs";

export const dynamic =
  "force-dynamic";

export async function POST(
  request: Request,
) {
  try {
    const incomingFormData =
      await request.formData();

    const forwardedFormData =
      new FormData();

    const getText = (
      key: string,
    ) => {
      const value =
        incomingFormData.get(
          key,
        );

      return typeof value ===
        "string"
        ? value.trim()
        : "";
    };

    const position =
      getText("position");

    const fields = [
      "fullName",
      "email",
      "phone",
      "currentLocation",
      "currentCompany",
      "experience",
      "qualification",
      "currentSalary",
      "expectedSalary",
      "noticePeriod",
      "portfolioUrl",
      "message",
    ];

    for (
      const field of fields
    ) {
      forwardedFormData.append(
        field,
        getText(field),
      );
    }

    forwardedFormData.append(
      "department",
      "Other",
    );

    forwardedFormData.append(
      "preferredRole",
      position,
    );

    forwardedFormData.append(
      "applicationType",
      "General Application",
    );

    forwardedFormData.append(
      "jobDocumentId",
      "",
    );

    forwardedFormData.append(
      "jobId",
      "",
    );

    forwardedFormData.append(
      "jobSlug",
      "",
    );

    forwardedFormData.append(
      "jobTitle",
      "",
    );

    forwardedFormData.append(
      "jobDepartment",
      "",
    );

    const resume =
      incomingFormData.get(
        "resume",
      );

    if (
      resume instanceof File
    ) {
      forwardedFormData.append(
        "resume",
        resume,
        resume.name,
      );
    }

    const origin =
      new URL(request.url)
        .origin;

    const response =
      await fetch(
        `${origin}/api/careers`,
        {
          method: "POST",
          body:
            forwardedFormData,
          headers: {
            "x-forwarded-for":
              request.headers.get(
                "x-forwarded-for",
              ) ?? "",
            "x-real-ip":
              request.headers.get(
                "x-real-ip",
              ) ?? "",
          },
        },
      );

    const responseText =
      await response.text();

    let responseBody:
      unknown;

    try {
      responseBody =
        JSON.parse(
          responseText,
        );
    } catch {
      responseBody = {
        success: false,
        message:
          "An unexpected response was received from the career application service.",
      };
    }

    return NextResponse.json(
      responseBody,
      {
        status:
          response.status,
      },
    );
  } catch (error) {
    console.error(
      "Job application forwarding failed:",
      error,
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "We could not submit your application right now. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}

export function GET() {
  return NextResponse.json(
    {
      success: false,
      message:
        "Method not allowed.",
    },
    {
      status: 405,
      headers: {
        Allow: "POST",
      },
    },
  );
}