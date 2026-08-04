import type {
  Attachment,
} from "nodemailer/lib/mailer";

import {
  sendWebsiteMail,
} from "@/lib/mail";

import type {
  CareerFormData,
  CareerResumeAttachment,
} from "@/lib/types/career";

type SendCareerMailInput = {
  data: CareerFormData;
  resume: CareerResumeAttachment;
};

function escapeHtml(
  value: string,
): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatValue(
  value?: string,
): string {
  const cleaned =
    value?.trim();

  return cleaned
    ? escapeHtml(cleaned)
    : "Not provided";
}

function formatPlainValue(
  value?: string,
): string {
  return (
    value?.trim() ||
    "Not provided"
  );
}

function getSubmittedDate() {
  return new Intl.DateTimeFormat(
    "en-IN",
    {
      dateStyle: "full",
      timeStyle: "short",
      timeZone:
        "Asia/Kolkata",
    },
  ).format(new Date());
}

function createDetailRow(
  label: string,
  value?: string,
) {
  return `
    <tr>
      <td
        style="
          width:38%;
          padding:14px 16px;
          border-bottom:1px solid #e5e7eb;
          background:#f8fafc;
          color:#1b3f68;
          font-size:13px;
          font-weight:700;
          vertical-align:top;
        "
      >
        ${escapeHtml(label)}
      </td>

      <td
        style="
          padding:14px 16px;
          border-bottom:1px solid #e5e7eb;
          color:#4b5563;
          font-size:14px;
          line-height:1.7;
          vertical-align:top;
        "
      >
        ${formatValue(value)}
      </td>
    </tr>
  `;
}

function createCareerEmailHtml(
  data: CareerFormData,
  resumeFileName: string,
) {
  const specificOpening =
    data.applicationType ===
    "Specific Opening";

  const applicationRows =
    specificOpening
      ? `
        ${createDetailRow(
          "Application Type",
          data.applicationType,
        )}

        ${createDetailRow(
          "Job ID",
          data.jobId,
        )}

        ${createDetailRow(
          "Applied Position",
          data.jobTitle,
        )}

        ${createDetailRow(
          "Job Department",
          data.jobDepartment,
        )}

        ${createDetailRow(
          "Job Slug",
          data.jobSlug,
        )}

        ${createDetailRow(
          "Sanity Document ID",
          data.jobDocumentId,
        )}
      `
      : `
        ${createDetailRow(
          "Application Type",
          data.applicationType,
        )}
      `;

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <title>
          New Career Application
        </title>
      </head>

      <body
        style="
          margin:0;
          padding:0;
          background:#eef2f7;
          font-family:Arial,Helvetica,sans-serif;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="background:#eef2f7;"
        >
          <tr>
            <td
              align="center"
              style="padding:32px 14px;"
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  max-width:760px;
                  overflow:hidden;
                  border:1px solid #dfe5ec;
                  border-radius:24px;
                  background:#ffffff;
                "
              >
                <tr>
                  <td
                    style="
                      padding:28px 30px;
                      background:#1b3f68;
                    "
                  >
                    <p
                      style="
                        margin:0;
                        color:#c21119;
                        font-size:11px;
                        font-weight:700;
                        letter-spacing:2.5px;
                        text-transform:uppercase;
                      "
                    >
                      Steelbuild Careers
                    </p>

                    <h1
                      style="
                        margin:8px 0 0;
                        color:#ffffff;
                        font-size:28px;
                        line-height:1.25;
                      "
                    >
                      ${
                        specificOpening
                          ? "New Job Application"
                          : "New General Career Application"
                      }
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td
                    style="padding:30px;"
                  >
                    <div
                      style="
                        margin-bottom:24px;
                        overflow:hidden;
                        border:1px solid #e5e7eb;
                        border-radius:18px;
                      "
                    >
                      <div
                        style="
                          padding:16px 18px;
                          border-bottom:1px solid #e5e7eb;
                          background:#f8fafc;
                        "
                      >
                        <h2
                          style="
                            margin:0;
                            color:#1b3f68;
                            font-size:18px;
                          "
                        >
                          Application Reference
                        </h2>
                      </div>

                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        ${applicationRows}
                      </table>
                    </div>

                    <div
                      style="
                        margin-bottom:24px;
                        overflow:hidden;
                        border:1px solid #e5e7eb;
                        border-radius:18px;
                      "
                    >
                      <div
                        style="
                          padding:16px 18px;
                          border-bottom:1px solid #e5e7eb;
                          background:#f8fafc;
                        "
                      >
                        <h2
                          style="
                            margin:0;
                            color:#1b3f68;
                            font-size:18px;
                          "
                        >
                          Candidate Details
                        </h2>
                      </div>

                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        ${createDetailRow(
                          "Full Name",
                          data.fullName,
                        )}

                        ${createDetailRow(
                          "Email Address",
                          data.email,
                        )}

                        ${createDetailRow(
                          "Phone Number",
                          data.phone,
                        )}

                        ${createDetailRow(
                          "Current Location",
                          data.currentLocation,
                        )}

                        ${createDetailRow(
                          "Preferred Department",
                          data.department,
                        )}

                        ${createDetailRow(
                          "Preferred Role",
                          data.preferredRole,
                        )}

                        ${createDetailRow(
                          "Total Experience",
                          data.experience,
                        )}

                        ${createDetailRow(
                          "Highest Qualification",
                          data.qualification,
                        )}

                        ${createDetailRow(
                          "Current / Previous Company",
                          data.currentCompany,
                        )}

                        ${createDetailRow(
                          "Resume Attachment",
                          resumeFileName,
                        )}
                      </table>
                    </div>

                    <div
                      style="
                        padding:22px;
                        border:1px solid rgba(194,17,25,0.18);
                        border-radius:18px;
                        background:rgba(194,17,25,0.04);
                      "
                    >
                      <p
                        style="
                          margin:0 0 10px;
                          color:#c21119;
                          font-size:11px;
                          font-weight:700;
                          letter-spacing:2px;
                          text-transform:uppercase;
                        "
                      >
                        Professional Summary
                      </p>

                      <p
                        style="
                          margin:0;
                          color:#1b3f68;
                          font-size:15px;
                          font-weight:600;
                          line-height:1.8;
                          white-space:pre-line;
                        "
                      >
                        ${formatValue(
                          data.message,
                        )}
                      </p>
                    </div>

                    <div
                      style="
                        margin-top:24px;
                        padding:18px;
                        border-radius:16px;
                        background:#1b3f68;
                        color:#ffffff;
                      "
                    >
                      <p
                        style="
                          margin:0;
                          font-size:13px;
                          line-height:1.7;
                        "
                      >
                        <strong>
                          Submitted on:
                        </strong>

                        ${escapeHtml(
                          getSubmittedDate(),
                        )}
                      </p>

                      <p
                        style="
                          margin:6px 0 0;
                          color:rgba(255,255,255,0.72);
                          font-size:12px;
                          line-height:1.7;
                        "
                      >
                        Reply directly to this email to contact
                        ${escapeHtml(
                          data.fullName,
                        )}.
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function createCareerEmailText(
  data: CareerFormData,
  resumeFileName: string,
) {
  return `
NEW CAREER APPLICATION
Steelbuild Infra Projects Limited

APPLICATION REFERENCE

Application Type:
${data.applicationType}

Job ID:
${formatPlainValue(data.jobId)}

Applied Position:
${formatPlainValue(data.jobTitle)}

Job Department:
${formatPlainValue(data.jobDepartment)}

Job Slug:
${formatPlainValue(data.jobSlug)}

Sanity Document ID:
${formatPlainValue(data.jobDocumentId)}

CANDIDATE DETAILS

Full Name:
${formatPlainValue(data.fullName)}

Email:
${formatPlainValue(data.email)}

Phone:
${formatPlainValue(data.phone)}

Current Location:
${formatPlainValue(data.currentLocation)}

Preferred Department:
${formatPlainValue(data.department)}

Preferred Role:
${formatPlainValue(data.preferredRole)}

Experience:
${formatPlainValue(data.experience)}

Qualification:
${formatPlainValue(data.qualification)}

Current / Previous Company:
${formatPlainValue(data.currentCompany)}

Resume:
${resumeFileName}

PROFESSIONAL SUMMARY

${formatPlainValue(data.message)}

Submitted On:
${getSubmittedDate()}
  `.trim();
}

function createAcknowledgementHtml(
  data: CareerFormData,
) {
  const specificOpening =
    data.applicationType ===
    "Specific Opening";

  return `
    <!doctype html>
    <html lang="en">
      <body
        style="
          margin:0;
          padding:0;
          background:#eef2f7;
          font-family:Arial,Helvetica,sans-serif;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
        >
          <tr>
            <td
              align="center"
              style="padding:32px 14px;"
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  max-width:720px;
                  border:1px solid #dfe5ec;
                  border-radius:24px;
                  background:#ffffff;
                  overflow:hidden;
                "
              >
                <tr>
                  <td
                    style="
                      padding:30px;
                      background:#1b3f68;
                    "
                  >
                    <p
                      style="
                        margin:0;
                        color:#c21119;
                        font-size:11px;
                        font-weight:700;
                        letter-spacing:2.5px;
                        text-transform:uppercase;
                      "
                    >
                      Steelbuild Careers
                    </p>

                    <h1
                      style="
                        margin:9px 0 0;
                        color:#ffffff;
                        font-size:28px;
                      "
                    >
                      ${
                        specificOpening
                          ? "Your Application Has Been Received"
                          : "We Have Received Your Resume"
                      }
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td
                    style="padding:32px 30px;"
                  >
                    <p
                      style="
                        margin:0 0 18px;
                        color:#1b3f68;
                        font-size:17px;
                        font-weight:700;
                      "
                    >
                      Dear ${escapeHtml(
                        data.fullName,
                      )},
                    </p>

                    <p
                      style="
                        margin:0 0 18px;
                        color:#374151;
                        font-size:15px;
                        line-height:1.8;
                      "
                    >
                      ${
                        specificOpening
                          ? `Thank you for applying for <strong>${escapeHtml(
                              data.jobTitle,
                            )}</strong> at Steelbuild Infra Projects Limited.`
                          : "Thank you for sharing your profile with Steelbuild Infra Projects Limited."
                      }
                    </p>

                    <p
                      style="
                        margin:0 0 22px;
                        color:#374151;
                        font-size:15px;
                        line-height:1.8;
                      "
                    >
                      Your application and resume have been received successfully. Our HR team will review your profile according to the relevant role and organizational requirements.
                    </p>

                    <div
                      style="
                        overflow:hidden;
                        border:1px solid #e5e7eb;
                        border-radius:18px;
                      "
                    >
                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        ${createDetailRow(
                          "Application Type",
                          data.applicationType,
                        )}

                        ${createDetailRow(
                          "Position",
                          specificOpening
                            ? data.jobTitle
                            : data.preferredRole,
                        )}

                        ${createDetailRow(
                          "Department",
                          specificOpening
                            ? data.jobDepartment
                            : data.department,
                        )}

                        ${createDetailRow(
                          "Experience",
                          data.experience,
                        )}
                      </table>
                    </div>

                    <p
                      style="
                        margin:26px 0 0;
                        color:#374151;
                        font-size:15px;
                        line-height:1.8;
                      "
                    >
                      Regards,<br />

                      <strong>
                        Human Resources
                      </strong><br />

                      Steelbuild Infra Projects Limited
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
}

function createAcknowledgementText(
  data: CareerFormData,
) {
  const position =
    data.applicationType ===
    "Specific Opening"
      ? data.jobTitle
      : data.preferredRole;

  return `
Dear ${data.fullName},

Thank you for your interest in Steelbuild Infra Projects Limited.

Your application and resume have been received successfully.

Application Type:
${data.applicationType}

Position:
${formatPlainValue(position)}

Department:
${formatPlainValue(
  data.applicationType ===
    "Specific Opening"
    ? data.jobDepartment
    : data.department,
)}

Experience:
${formatPlainValue(data.experience)}

Our HR team will review your profile according to the relevant role and organizational requirements.

Regards,
Human Resources
Steelbuild Infra Projects Limited
https://steelbuildinfra.com
  `.trim();
}

export async function sendCareerMail({
  data,
  resume,
}: SendCareerMailInput) {
  const attachment:
    Attachment = {
    filename:
      resume.filename,

    content:
      resume.content,

    contentType:
      resume.contentType,
  };

  const subject = [
    data.applicationType ===
    "Specific Opening"
      ? "New Job Application"
      : "New General Career Application",

    data.applicationType ===
    "Specific Opening"
      ? data.jobTitle
      : data.preferredRole,

    data.fullName,
  ]
    .filter(Boolean)
    .join(" | ");

  const internalResult =
    await sendWebsiteMail({
      to:
        process.env
          .CAREER_RECEIVER_EMAIL ||
        "hr@steelbuildinfra.com",

      cc:
        process.env
          .CAREER_CC_EMAIL ||
        "info@steelbuildinfra.com,va@steelbuildinfra.com",

      bcc:
        process.env
          .CAREER_BCC_EMAIL ||
        "digital@steelbuildinfra.com",

      replyTo:
        data.email,

      subject,

      html:
        createCareerEmailHtml(
          data,
          resume.filename,
        ),

      text:
        createCareerEmailText(
          data,
          resume.filename,
        ),

      attachments: [
        attachment,
      ],
    });

  try {
    await sendWebsiteMail({
      to: {
        name:
          data.fullName,

        address:
          data.email,
      },

      replyTo:
        process.env
          .CAREER_RECEIVER_EMAIL ||
        "hr@steelbuildinfra.com",

      subject:
        data.applicationType ===
        "Specific Opening"
          ? `Application Received: ${data.jobTitle} | Steelbuild Infra Projects`
          : "We Have Received Your Resume | Steelbuild Infra Projects",

      html:
        createAcknowledgementHtml(
          data,
        ),

      text:
        createAcknowledgementText(
          data,
        ),
    });
  } catch (
    acknowledgementError
  ) {
    console.error(
      "Career acknowledgement email failed:",
      acknowledgementError,
    );
  }

  return internalResult;
}