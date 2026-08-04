import type { Attachment } from "nodemailer/lib/mailer";

import { sendWebsiteMail } from "@/lib/mail";
import type { QuoteFormData } from "@/lib/types/quote";

type SendQuoteMailInput = {
  data: QuoteFormData;
  attachment?: Attachment;
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

const createQuoteEmailHtml = (
  data: QuoteFormData,
  hasAttachment: boolean,
) => {
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
          New Request for Quotation
        </title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background: #eef2f7;
          font-family:
            Arial,
            Helvetica,
            sans-serif;
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
                        <td
                          style="
                            color: #ffffff;
                            vertical-align: middle;
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
                            Steelbuild Infra Projects
                          </p>

                          <h1
                            style="
                              margin: 8px 0 0;
                              color: #ffffff;
                              font-size: 28px;
                              line-height: 1.25;
                            "
                          >
                            New Request for Quotation
                          </h1>
                        </td>

                        <td
                          align="right"
                          style="
                            vertical-align: middle;
                          "
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
                            Website Lead
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 30px;
                    "
                  >
                    <p
                      style="
                        margin: 0 0 22px;
                        color: #4b5563;
                        font-size: 15px;
                        line-height: 1.8;
                      "
                    >
                      A new project quotation request has been
                      submitted through the Steelbuild website.
                      The complete customer and project details are
                      provided below.
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
                          background: #f8fafc;
                          border-bottom: 1px solid #e5e7eb;
                        "
                      >
                        <h2
                          style="
                            margin: 0;
                            color: #1b3f68;
                            font-size: 18px;
                          "
                        >
                          Customer Details
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
                          label: "Full Name",
                          value: data.fullName,
                        })}

                        ${createDetailRow({
                          label: "Company Name",
                          value: data.companyName,
                        })}

                        ${createDetailRow({
                          label: "Email Address",
                          value: data.email,
                        })}

                        ${createDetailRow({
                          label: "Phone Number",
                          value: data.phone,
                        })}
                      </table>
                    </div>

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
                          background: #f8fafc;
                          border-bottom: 1px solid #e5e7eb;
                        "
                      >
                        <h2
                          style="
                            margin: 0;
                            color: #1b3f68;
                            font-size: 18px;
                          "
                        >
                          Project Information
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
                          label: "Project Location",
                          value: data.projectLocation,
                        })}

                        ${createDetailRow({
                          label: "Industry",
                          value: data.industry,
                        })}

                        ${createDetailRow({
                          label: "Project Type",
                          value: data.projectType,
                        })}

                        ${createDetailRow({
                          label: "Approximate Area",
                          value: data.approximateArea,
                        })}

                        ${createDetailRow({
                          label: "Building Width",
                          value: data.buildingWidth,
                        })}

                        ${createDetailRow({
                          label: "Building Length",
                          value: data.buildingLength,
                        })}

                        ${createDetailRow({
                          label: "Clear Height",
                          value: data.clearHeight,
                        })}

                        ${createDetailRow({
                          label: "Crane Required",
                          value: data.craneRequired,
                        })}

                        ${createDetailRow({
                          label: "Mezzanine Required",
                          value: data.mezzanineRequired,
                        })}

                        ${createDetailRow({
                          label: "Roofing Requirement",
                          value: data.roofingRequirement,
                        })}

                        ${createDetailRow({
                          label: "Expected Timeline",
                          value: data.timeline,
                        })}

                        ${createDetailRow({
                          label: "Attachment",
                          value: hasAttachment
                            ? "Supporting project file attached"
                            : "No file uploaded",
                        })}
                      </table>
                    </div>

                    <div
                      style="
                        padding: 22px;
                        border: 1px solid
                          rgba(194, 17, 25, 0.18);
                        border-radius: 18px;
                        background:
                          rgba(194, 17, 25, 0.04);
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
                        Project Requirement
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
                        ${formatValue(
                          data.projectDescription,
                        )}
                      </p>
                    </div>

                    <table
                      role="presentation"
                      width="100%"
                      cellspacing="0"
                      cellpadding="0"
                      border="0"
                      style="
                        margin-top: 24px;
                      "
                    >
                      <tr>
                        <td
                          style="
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
                            <strong>
                              Submitted on:
                            </strong>
                            ${escapeHtml(submittedOn)}
                          </p>

                          <p
                            style="
                              margin: 6px 0 0;
                              color:
                                rgba(255,255,255,0.72);
                              font-size: 12px;
                              line-height: 1.7;
                            "
                          >
                            Reply directly to this email to
                            contact the customer at
                            ${escapeHtml(data.email)}.
                          </p>
                        </td>
                      </tr>
                    </table>
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
                      from the Steelbuild Infra Projects website.
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

const createQuoteEmailText = (
  data: QuoteFormData,
  hasAttachment: boolean,
) => {
  return `
NEW REQUEST FOR QUOTATION
Steelbuild Infra Projects

CUSTOMER DETAILS

Full Name:
${formatPlainValue(data.fullName)}

Company Name:
${formatPlainValue(data.companyName)}

Email Address:
${formatPlainValue(data.email)}

Phone Number:
${formatPlainValue(data.phone)}

PROJECT INFORMATION

Project Location:
${formatPlainValue(data.projectLocation)}

Industry:
${formatPlainValue(data.industry)}

Project Type:
${formatPlainValue(data.projectType)}

Approximate Area:
${formatPlainValue(data.approximateArea)}

Building Width:
${formatPlainValue(data.buildingWidth)}

Building Length:
${formatPlainValue(data.buildingLength)}

Clear Height:
${formatPlainValue(data.clearHeight)}

Crane Required:
${formatPlainValue(data.craneRequired)}

Mezzanine Required:
${formatPlainValue(data.mezzanineRequired)}

Roofing Requirement:
${formatPlainValue(data.roofingRequirement)}

Expected Timeline:
${formatPlainValue(data.timeline)}

Attachment:
${
  hasAttachment
    ? "Supporting project file attached"
    : "No file uploaded"
}

PROJECT REQUIREMENT

${formatPlainValue(data.projectDescription)}

Submitted On:
${getSubmittedDate()}

Reply directly to this email to contact:
${data.email}

Steelbuild Infra Projects Limited
https://steelbuildinfra.com
  `.trim();
};

const createQuoteAcknowledgementHtml = (
  data: QuoteFormData,
): string => {
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
          Quotation Request Received
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
                  max-width:720px;
                  overflow:hidden;
                  border:1px solid #dfe5ec;
                  border-radius:24px;
                  background:#ffffff;
                  box-shadow:
                    0 18px 55px
                    rgba(27,63,104,0.12);
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
                      Steelbuild Infra Projects
                    </p>

                    <h1
                      style="
                        margin:9px 0 0;
                        color:#ffffff;
                        font-size:28px;
                        line-height:1.3;
                      "
                    >
                      Your Quotation Request Has Been Received
                    </h1>
                  </td>
                </tr>

                <tr>
                  <td style="padding:32px 30px;">
                    <p
                      style="
                        margin:0 0 18px;
                        color:#1b3f68;
                        font-size:17px;
                        font-weight:700;
                        line-height:1.8;
                      "
                    >
                      Dear ${escapeHtml(data.fullName)},
                    </p>

                    <p
                      style="
                        margin:0 0 18px;
                        color:#374151;
                        font-size:15px;
                        line-height:1.8;
                      "
                    >
                      Thank you for sharing your project
                      requirement with Steelbuild Infra Projects
                      Limited.
                    </p>

                    <p
                      style="
                        margin:0 0 22px;
                        color:#374151;
                        font-size:15px;
                        line-height:1.8;
                      "
                    >
                      We have successfully received your quotation
                      request. Our engineering and commercial teams
                      will review the submitted information and
                      contact you for the next discussion.
                    </p>

                    <div
                      style="
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
                          Submitted Requirement Summary
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
                          label: "Company",
                          value: data.companyName,
                        })}

                        ${createDetailRow({
                          label: "Project Location",
                          value: data.projectLocation,
                        })}

                        ${createDetailRow({
                          label: "Industry",
                          value: data.industry,
                        })}

                        ${createDetailRow({
                          label: "Project Type",
                          value: data.projectType,
                        })}

                        ${createDetailRow({
                          label: "Approximate Area",
                          value: data.approximateArea,
                        })}

                        ${createDetailRow({
                          label: "Expected Timeline",
                          value: data.timeline,
                        })}
                      </table>
                    </div>

                    <div
                      style="
                        margin-top:24px;
                        padding:20px;
                        border-left:4px solid #c21119;
                        border-radius:12px;
                        background:#f7f9fc;
                      "
                    >
                      <p
                        style="
                          margin:0;
                          color:#1b3f68;
                          font-size:14px;
                          font-weight:700;
                          line-height:1.8;
                        "
                      >
                        Reference: Quotation request submitted
                        through steelbuildinfra.com
                      </p>
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
                        Steelbuild Infra Projects Limited
                      </strong>

                      <br />

                      Driven By Commitment and Quality
                    </p>
                  </td>
                </tr>

                <tr>
                  <td
                    align="center"
                    style="
                      padding:22px 30px;
                      border-top:1px solid #e5e7eb;
                      background:#f8fafc;
                    "
                  >
                    <p
                      style="
                        margin:0;
                        color:#6b7280;
                        font-size:12px;
                        line-height:1.7;
                      "
                    >
                      This is an automated acknowledgement of your
                      quotation request.
                    </p>

                    <p
                      style="
                        margin:5px 0 0;
                        color:#1b3f68;
                        font-size:12px;
                        font-weight:700;
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

const createQuoteAcknowledgementText = (
  data: QuoteFormData,
): string => {
  return `
Dear ${data.fullName},

Thank you for sharing your project requirement with Steelbuild Infra Projects Limited.

We have successfully received your quotation request. Our engineering and commercial teams will review the submitted information and contact you for the next discussion.

SUBMITTED REQUIREMENT SUMMARY

Company:
${formatPlainValue(data.companyName)}

Project Location:
${formatPlainValue(data.projectLocation)}

Industry:
${formatPlainValue(data.industry)}

Project Type:
${formatPlainValue(data.projectType)}

Approximate Area:
${formatPlainValue(data.approximateArea)}

Expected Timeline:
${formatPlainValue(data.timeline)}

Reference:
Quotation request submitted through steelbuildinfra.com

Regards,
Steelbuild Infra Projects Limited
Driven By Commitment and Quality
https://steelbuildinfra.com
  `.trim();
};

export async function sendQuoteMail({
  data,
  attachment,
}: SendQuoteMailInput) {
  const attachments = attachment
    ? [attachment]
    : undefined;

  const subject = [
    "New Request for Quotation",
    data.companyName || data.fullName,
    data.projectLocation,
  ]
    .filter(Boolean)
    .join(" | ");

  /*
   * Internal notification is essential.
   * If this email fails, the API will return an error.
   */
  const internalResult =
    await sendWebsiteMail({
      to:
        process.env.QUOTE_RECEIVER_EMAIL ||
        "info@steelbuildinfra.com,va@steelbuildinfra.com",

      bcc:
        process.env.QUOTE_BCC_EMAIL ||
        "digital@steelbuildinfra.com",

      replyTo: data.email,

      subject,

      html: createQuoteEmailHtml(
        data,
        Boolean(attachment),
      ),

      text: createQuoteEmailText(
        data,
        Boolean(attachment),
      ),

      attachments,
    });

  console.log(
    "QUOTE INTERNAL EMAIL RESULT:",
    {
      messageId: internalResult.messageId,
      accepted: internalResult.accepted,
      rejected: internalResult.rejected,
      response: internalResult.response,
    },
  );

  /*
   * Customer acknowledgement is sent separately.
   * Its failure will not invalidate an internal
   * quotation request already delivered successfully.
   */
  try {
    const acknowledgementResult =
      await sendWebsiteMail({
        to: {
          name: data.fullName,
          address: data.email,
        },

        replyTo:
          process.env.QUOTE_RECEIVER_EMAIL?.split(
            ",",
          )[0]?.trim() ||
          "info@steelbuildinfra.com",

        subject:
          "We Have Received Your Quotation Request | Steelbuild Infra Projects",

        html:
          createQuoteAcknowledgementHtml(
            data,
          ),

        text:
          createQuoteAcknowledgementText(
            data,
          ),
      });

    console.log(
      "QUOTE ACKNOWLEDGEMENT RESULT:",
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
      "Quote acknowledgement email failed:",
      acknowledgementError,
    );
  }

  return internalResult;
}