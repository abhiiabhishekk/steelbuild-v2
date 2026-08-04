import type { Attachment } from "nodemailer/lib/mailer";

import { sendWebsiteMail } from "@/lib/mail";
import type {
  JobApplicationData,
  JobApplicationResume,
} from "@/lib/types/jobApplication";

type SendJobApplicationMailInput = {
  data: JobApplicationData;
  resume: JobApplicationResume;
};

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const formatValue = (
  value?: string,
): string => {
  const cleanedValue = value?.trim();

  return cleanedValue
    ? escapeHtml(cleanedValue)
    : "Not provided";
};

const formatPlainValue = (
  value?: string,
): string => {
  const cleanedValue = value?.trim();

  return cleanedValue || "Not provided";
};

const getSubmittedDate = () =>
  new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

const createDetailRow = ({
  label,
  value,
}: {
  label: string;
  value?: string;
}) => `
  <tr>
    <td
      style="
        width: 38%;
        padding: 14px 16px;
        border-bottom: 1px solid #e5e7eb;
        background: #f8fafc;
        color: #1b3f68;
        font-size: 13px;
        font-weight: 700;
        vertical-align: top;
      "
    >
      ${escapeHtml(label)}
    </td>

    <td
      style="
        padding: 14px 16px;
        border-bottom: 1px solid #e5e7eb;
        color: #4b5563;
        font-size: 14px;
        line-height: 1.7;
        vertical-align: top;
      "
    >
      ${formatValue(value)}
    </td>
  </tr>
`;

const createInternalEmailHtml = (
  data: JobApplicationData,
  resumeFileName: string,
): string => {
  const submittedOn = getSubmittedDate();

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
          New Job Application
        </title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background: #eef2f7;
          font-family: Arial, Helvetica, sans-serif;
        "
      >
        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="background: #eef2f7;"
        >
          <tr>
            <td
              align="center"
              style="padding: 32px 14px;"
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  max-width: 760px;
                  overflow: hidden;
                  border: 1px solid #dfe5ec;
                  border-radius: 24px;
                  background: #ffffff;
                  box-shadow:
                    0 18px 55px
                    rgba(27, 63, 104, 0.12);
                "
              >
                <tr>
                  <td
                    style="
                      padding: 28px 30px;
                      background: #1b3f68;
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
                        <td>
                          <p
                            style="
                              margin: 0;
                              color: #c21119;
                              font-size: 11px;
                              font-weight: 700;
                              letter-spacing: 2.5px;
                              text-transform: uppercase;
                            "
                          >
                            Steelbuild Careers
                          </p>

                          <h1
                            style="
                              margin: 8px 0 0;
                              color: #ffffff;
                              font-size: 28px;
                              line-height: 1.25;
                            "
                          >
                            New Job Application
                          </h1>
                        </td>

                        <td
                          align="right"
                          style="vertical-align: middle;"
                        >
                          <div
                            style="
                              display: inline-block;
                              padding: 10px 14px;
                              border-radius: 999px;
                              background: #c21119;
                              color: #ffffff;
                              font-size: 11px;
                              font-weight: 700;
                              letter-spacing: 1.5px;
                              text-transform: uppercase;
                            "
                          >
                            Specific Position
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 30px;">
                    <p
                      style="
                        margin: 0 0 22px;
                        color: #4b5563;
                        font-size: 15px;
                        line-height: 1.8;
                      "
                    >
                      A candidate has applied for a specific
                      position through the Steelbuild careers
                      page.
                    </p>

                    <div
                      style="
                        margin-bottom: 24px;
                        overflow: hidden;
                        border: 1px solid #e5e7eb;
                        border-radius: 18px;
                      "
                    >
                      <div
                        style="
                          padding: 16px 18px;
                          border-bottom: 1px solid #e5e7eb;
                          background: #f8fafc;
                        "
                      >
                        <h2
                          style="
                            margin: 0;
                            color: #1b3f68;
                            font-size: 18px;
                          "
                        >
                          Application Details
                        </h2>
                      </div>

                      <table
                        role="presentation"
                        width="100%"
                        cellspacing="0"
                        cellpadding="0"
                        border="0"
                      >
                        ${createDetailRow({
                          label: "Applied Position",
                          value: data.position,
                        })}

                        ${createDetailRow({
                          label: "Full Name",
                          value: data.fullName,
                        })}

                        ${createDetailRow({
                          label: "Email Address",
                          value: data.email,
                        })}

                        ${createDetailRow({
                          label: "Phone Number",
                          value: data.phone,
                        })}

                        ${createDetailRow({
                          label: "Current Location",
                          value: data.currentLocation,
                        })}

                        ${createDetailRow({
                          label: "Current Company",
                          value: data.currentCompany,
                        })}

                        ${createDetailRow({
                          label: "Total Experience",
                          value: data.experience,
                        })}

                        ${createDetailRow({
                          label: "Highest Qualification",
                          value: data.qualification,
                        })}

                        ${createDetailRow({
                          label: "Current Salary",
                          value: data.currentSalary,
                        })}

                        ${createDetailRow({
                          label: "Expected Salary",
                          value: data.expectedSalary,
                        })}

                        ${createDetailRow({
                          label: "Notice Period",
                          value: data.noticePeriod,
                        })}

                        ${createDetailRow({
                          label: "Portfolio / LinkedIn",
                          value: data.portfolioUrl,
                        })}

                        ${createDetailRow({
                          label: "Resume Attachment",
                          value: resumeFileName,
                        })}
                      </table>
                    </div>

                    <div
                      style="
                        padding: 22px;
                        border: 1px solid rgba(194,17,25,0.18);
                        border-radius: 18px;
                        background: rgba(194,17,25,0.04);
                      "
                    >
                      <p
                        style="
                          margin: 0 0 10px;
                          color: #c21119;
                          font-size: 11px;
                          font-weight: 700;
                          letter-spacing: 2px;
                          text-transform: uppercase;
                        "
                      >
                        Cover Note
                      </p>

                      <p
                        style="
                          margin: 0;
                          color: #1b3f68;
                          font-size: 15px;
                          font-weight: 600;
                          line-height: 1.8;
                          white-space: pre-line;
                        "
                      >
                        ${formatValue(data.message)}
                      </p>
                    </div>

                    <div
                      style="
                        margin-top: 24px;
                        padding: 18px;
                        border-radius: 16px;
                        background: #1b3f68;
                        color: #ffffff;
                      "
                    >
                      <p
                        style="
                          margin: 0;
                          color: #ffffff;
                          font-size: 13px;
                          line-height: 1.7;
                        "
                      >
                        <strong>Submitted on:</strong>
                        ${escapeHtml(submittedOn)}
                      </p>

                      <p
                        style="
                          margin: 6px 0 0;
                          color: rgba(255,255,255,0.72);
                          font-size: 12px;
                          line-height: 1.7;
                        "
                      >
                        Reply directly to this email to contact
                        ${escapeHtml(data.fullName)} at
                        ${escapeHtml(data.email)}.
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td
                    align="center"
                    style="
                      padding: 22px 30px;
                      border-top: 1px solid #e5e7eb;
                      background: #f8fafc;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        color: #6b7280;
                        font-size: 12px;
                        line-height: 1.7;
                      "
                    >
                      This automated notification was generated
                      from the Steelbuild job application page.
                    </p>

                    <p
                      style="
                        margin: 5px 0 0;
                        color: #1b3f68;
                        font-size: 12px;
                        font-weight: 700;
                      "
                    >
                      steelbuildinfra.com
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
};

const createInternalEmailText = (
  data: JobApplicationData,
  resumeFileName: string,
): string => `
NEW JOB APPLICATION
Steelbuild Infra Projects Limited

APPLIED POSITION:
${formatPlainValue(data.position)}

CANDIDATE DETAILS

Full Name:
${formatPlainValue(data.fullName)}

Email Address:
${formatPlainValue(data.email)}

Phone Number:
${formatPlainValue(data.phone)}

Current Location:
${formatPlainValue(data.currentLocation)}

Current Company:
${formatPlainValue(data.currentCompany)}

Total Experience:
${formatPlainValue(data.experience)}

Highest Qualification:
${formatPlainValue(data.qualification)}

Current Salary:
${formatPlainValue(data.currentSalary)}

Expected Salary:
${formatPlainValue(data.expectedSalary)}

Notice Period:
${formatPlainValue(data.noticePeriod)}

Portfolio / LinkedIn:
${formatPlainValue(data.portfolioUrl)}

Resume Attachment:
${resumeFileName}

COVER NOTE

${formatPlainValue(data.message)}

Submitted On:
${getSubmittedDate()}

Reply directly to this email to contact:
${data.email}

Steelbuild Infra Projects Limited
https://steelbuildinfra.com
`.trim();

const createAcknowledgementHtml = (
  data: JobApplicationData,
): string => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <title>
        Job Application Received
      </title>
    </head>

    <body
      style="
        margin: 0;
        padding: 0;
        background: #eef2f7;
        font-family: Arial, Helvetica, sans-serif;
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
            style="padding: 32px 14px;"
          >
            <table
              role="presentation"
              width="100%"
              cellspacing="0"
              cellpadding="0"
              border="0"
              style="
                max-width: 720px;
                overflow: hidden;
                border: 1px solid #dfe5ec;
                border-radius: 24px;
                background: #ffffff;
                box-shadow:
                  0 18px 55px
                  rgba(27,63,104,0.12);
              "
            >
              <tr>
                <td
                  style="
                    padding: 30px;
                    background: #1b3f68;
                  "
                >
                  <p
                    style="
                      margin: 0;
                      color: #c21119;
                      font-size: 11px;
                      font-weight: 700;
                      letter-spacing: 2.5px;
                      text-transform: uppercase;
                    "
                  >
                    Steelbuild Careers
                  </p>

                  <h1
                    style="
                      margin: 9px 0 0;
                      color: #ffffff;
                      font-size: 28px;
                      line-height: 1.3;
                    "
                  >
                    Your Job Application Has Been Received
                  </h1>
                </td>
              </tr>

              <tr>
                <td style="padding: 32px 30px;">
                  <p
                    style="
                      margin: 0 0 18px;
                      color: #1b3f68;
                      font-size: 17px;
                      font-weight: 700;
                      line-height: 1.8;
                    "
                  >
                    Dear ${escapeHtml(data.fullName)},
                  </p>

                  <p
                    style="
                      margin: 0 0 18px;
                      color: #374151;
                      font-size: 15px;
                      line-height: 1.8;
                    "
                  >
                    Thank you for applying for the position of
                    <strong>${escapeHtml(data.position)}</strong>
                    at Steelbuild Infra Projects Limited.
                  </p>

                  <p
                    style="
                      margin: 0 0 22px;
                      color: #374151;
                      font-size: 15px;
                      line-height: 1.8;
                    "
                  >
                    Your application and resume have been received
                    successfully. Our HR team will review your
                    profile against the requirements of the role.
                    Shortlisted candidates may be contacted for
                    further discussion.
                  </p>

                  <div
                    style="
                      overflow: hidden;
                      border: 1px solid #e5e7eb;
                      border-radius: 18px;
                    "
                  >
                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                    >
                      ${createDetailRow({
                        label: "Applied Position",
                        value: data.position,
                      })}

                      ${createDetailRow({
                        label: "Experience",
                        value: data.experience,
                      })}

                      ${createDetailRow({
                        label: "Current Location",
                        value: data.currentLocation,
                      })}
                    </table>
                  </div>

                  <div
                    style="
                      margin-top: 24px;
                      padding: 20px;
                      border-left: 4px solid #c21119;
                      border-radius: 12px;
                      background: #f7f9fc;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        color: #1b3f68;
                        font-size: 14px;
                        font-weight: 700;
                        line-height: 1.8;
                      "
                    >
                      Submission of an application does not
                      guarantee selection, an interview or
                      employment.
                    </p>
                  </div>

                  <p
                    style="
                      margin: 26px 0 0;
                      color: #374151;
                      font-size: 15px;
                      line-height: 1.8;
                    "
                  >
                    Regards,<br />

                    <strong>Human Resources</strong><br />

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

const createAcknowledgementText = (
  data: JobApplicationData,
): string => `
Dear ${data.fullName},

Thank you for applying for the position of ${data.position} at Steelbuild Infra Projects Limited.

Your application and resume have been received successfully. Our HR team will review your profile against the requirements of the role. Shortlisted candidates may be contacted for further discussion.

Applied Position:
${formatPlainValue(data.position)}

Experience:
${formatPlainValue(data.experience)}

Current Location:
${formatPlainValue(data.currentLocation)}

Submission of an application does not guarantee selection, an interview or employment.

Regards,
Human Resources
Steelbuild Infra Projects Limited
https://steelbuildinfra.com
`.trim();

export async function sendJobApplicationMail({
  data,
  resume,
}: SendJobApplicationMailInput) {
  const attachment: Attachment = {
    filename: resume.filename,
    content: resume.content,
    contentType: resume.contentType,
  };

  const subject = [
    "New Job Application",
    data.position,
    data.fullName,
  ]
    .filter(Boolean)
    .join(" | ");

  const internalResult =
    await sendWebsiteMail({
      to:
        process.env.CAREER_RECEIVER_EMAIL ||
        "hr@steelbuildinfra.com",

      cc:
        process.env.CAREER_CC_EMAIL ||
        "info@steelbuildinfra.com,va@steelbuildinfra.com",

      bcc:
        process.env.CAREER_BCC_EMAIL ||
        "digital@steelbuildinfra.com",

      replyTo: data.email,

      subject,

      html: createInternalEmailHtml(
        data,
        resume.filename,
      ),

      text: createInternalEmailText(
        data,
        resume.filename,
      ),

      attachments: [attachment],
    });

  console.log(
    "JOB APPLICATION INTERNAL EMAIL RESULT:",
    {
      messageId: internalResult.messageId,
      accepted: internalResult.accepted,
      rejected: internalResult.rejected,
      response: internalResult.response,
    },
  );

  try {
    const acknowledgementResult =
      await sendWebsiteMail({
        to: {
          name: data.fullName,
          address: data.email,
        },

        replyTo:
          process.env.CAREER_RECEIVER_EMAIL ||
          "hr@steelbuildinfra.com",

        subject:
          `Application Received: ${data.position} | Steelbuild Infra Projects`,

        html: createAcknowledgementHtml(data),

        text: createAcknowledgementText(data),
      });

    console.log(
      "JOB APPLICATION ACKNOWLEDGEMENT RESULT:",
      {
        messageId:
          acknowledgementResult.messageId,
        accepted:
          acknowledgementResult.accepted,
        rejected:
          acknowledgementResult.rejected,
        response:
          acknowledgementResult.response,
      },
    );
  } catch (acknowledgementError) {
    console.error(
      "Job application acknowledgement email failed:",
      acknowledgementError,
    );
  }

  return internalResult;
}