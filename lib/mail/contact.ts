import type {
  SentMessageInfo,
  Transporter,
} from "nodemailer";

import type { ContactFormData } from "@/lib/types/forms";
import { sendGmailAcknowledgement } from "@/lib/mail/gmail";
import { createAutoReplyShell } from "@/lib/mail/autoReplyShell";

import {
  createMailTransporter,
  getMailEnvironment,
} from "@/lib/mail/transporter";

import {
  createDetailRow,
  createMessageBox,
  escapeHtml,
} from "@/lib/mail/templates";

function getOptionalEnvironmentVariable(
  name: string,
): string | undefined {
  const value = process.env[name]?.trim();

  return value || undefined;
}

function createInternalEmailHtml(
  data: ContactFormData,
): string {
  const row = (label: string, value: string, type?: "email" | "phone") => {
    const safeLabel = escapeHtml(label);
    const safeValue = escapeHtml(value);

    const displayedValue =
      type === "email"
        ? `<a href="mailto:${safeValue}" style="color:#c21119;text-decoration:none;word-break:break-all;">${safeValue}</a>`
        : type === "phone"
          ? `<a href="tel:${safeValue}" style="color:#1b3f68;text-decoration:none;">${safeValue}</a>`
          : safeValue;

    return `
      <tr>
        <td
          width="34%"
          style="
            width:34%;
            padding:14px 12px;
            border-bottom:1px solid #e5e7eb;
            background:#f8fafc;
            color:#1b3f68;
            font-size:13px;
            font-weight:700;
            vertical-align:top;
          "
        >
          ${safeLabel}
        </td>
        <td
          width="66%"
          style="
            width:66%;
            padding:14px 12px;
            border-bottom:1px solid #e5e7eb;
            color:#374151;
            font-size:14px;
            line-height:1.7;
            vertical-align:top;
            overflow-wrap:anywhere;
            word-break:break-word;
          "
        >
          ${displayedValue}
        </td>
      </tr>
    `;
  };

  const submittedOn = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef2f7;">
          <tr>
            <td align="center" style="padding:24px 10px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"
                style="width:100%;max-width:720px;background:#ffffff;border:1px solid #dfe5ec;border-radius:20px;overflow:hidden;">
                <tr>
                  <td style="padding:26px 22px;background:#1b3f68;">

  <p style="
    margin:0 0 12px;
    color:#C21119;
    font-family:Arial,Helvetica,sans-serif;
    font-size:11px;
    font-weight:700;
    letter-spacing:1.4px;
    line-height:1.5;
  ">STEELBUILD INFRA PROJECTS</p>

  <table role="presentation"
    cellspacing="0" cellpadding="0" border="0"
    style="margin:0 0 13px;border-collapse:separate;">
    <tr>
      <td style="
        padding:7px 12px;
        background:#c21119;
        border-radius:16px;
        color:#ffffff;
        font-family:Arial,Helvetica,sans-serif;
        font-size:10px;
        font-weight:700;
        letter-spacing:0.8px;
        line-height:1.4;
      ">NEW ENQUIRY</td>
    </tr>
  </table>

  <h1 style="
    margin:0;
    color:#ffffff;
    font-family:Arial,Helvetica,sans-serif;
    font-size:25px;
    font-weight:700;
    line-height:1.3;
    overflow-wrap:break-word;
  ">New Contact Form Submission</h1>

                  </td>
                </tr>
                <tr>
                  <td style="padding:24px 16px;">
                    <p style="margin:0 0 20px;color:#4b5563;font-size:14px;line-height:1.8;">
                      A new enquiry has been submitted through the Steelbuild website.
                      Customer details and project requirements are provided below.
                    </p>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0"
                      border="0" style="width:100%;table-layout:fixed;border:1px solid #e5e7eb;border-collapse:collapse;">
                      ${row("Name", data.name)}
                      ${row("Company", data.company || "Not provided")}
                      ${row("Email", data.email, "email")}
                      ${row("Phone", data.phone, "phone")}
                    </table>

                    <div style="margin-top:24px;padding:18px;border-left:4px solid #c21119;background:#f7f9fc;border-radius:10px;">
                      <p style="margin:0 0 10px;color:#1b3f68;font-size:15px;font-weight:700;">
                        Project Requirements
                      </p>
                      <p style="margin:0;color:#374151;font-size:14px;line-height:1.8;overflow-wrap:anywhere;">
                        ${escapeHtml(data.message).replaceAll("\n", "<br />")}
                      </p>
                    </div>

                    <div style="margin-top:22px;padding:16px;background:#1b3f68;border-radius:10px;">
                      <p style="margin:0;color:#ffffff;font-size:12px;line-height:1.8;">
                        <strong>Submitted on:</strong> ${escapeHtml(submittedOn)}
                      </p>
                      <p style="margin:6px 0 0;color:#dbe5f0;font-size:12px;line-height:1.7;">
                        Reply directly to this email to contact the customer.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:20px;background:#f8fafc;border-top:1px solid #e5e7eb;">
                    <p style="margin:0;color:#6b7280;font-size:12px;line-height:1.7;">
                      This automated notification was generated from the Steelbuild website.
                    </p>
                    <p style="margin:7px 0 0;color:#1b3f68;font-size:12px;font-weight:700;">
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
}

function createAcknowledgementEmailHtml(
  data: ContactFormData,
): string {
  const content = `
    <p
      style="
        margin:0 0 18px;
        color:#1f2937;
        font-size:16px;
        line-height:1.8;
      "
    >
      Dear ${escapeHtml(data.name)},
    </p>

    <p
      style="
        margin:0 0 18px;
        color:#374151;
        font-size:15px;
        line-height:1.8;
      "
    >
      Thank you for contacting Steelbuild Infra Projects
      Limited.
    </p>

    <p
      style="
        margin:0 0 18px;
        color:#374151;
        font-size:15px;
        line-height:1.8;
      "
    >
      We have successfully received your enquiry. Our
      engineering and business development team will review
      your requirements and connect with you shortly.
    </p>

    <div
      style="
        margin:24px 0;
        padding:18px 20px;
        background:#f7f9fc;
        border-left:4px solid #c21119;
        border-radius:8px;
      "
    >
      <p
        style="
          margin:0;
          color:#1b3f68;
          font-size:14px;
          font-weight:700;
          line-height:1.7;
        "
      >
        Reference: Contact enquiry submitted through
        steelbuildinfra.com
      </p>
    </div>

    <p
      style="
        margin:0;
        color:#374151;
        font-size:15px;
        line-height:1.8;
      "
    >
      Regards,<br />
      <strong>Steelbuild Infra Projects Limited</strong><br />
      Driven By Commitment and Quality
    </p>
  `;

  return createAutoReplyShell({
    badge: "ENQUIRY RECEIVED",
    title: "We Have Received Your Enquiry",
    content,
  });
}

async function sendInternalNotification(
  transporter: Transporter,
  data: ContactFormData,
): Promise<SentMessageInfo> {
  const environment = getMailEnvironment();

  const receiverEmail =
    getOptionalEnvironmentVariable(
      "CONTACT_RECEIVER_EMAIL",
    ) ?? environment.user;

  const bccEmail = getOptionalEnvironmentVariable(
    "CONTACT_BCC_EMAIL",
  );

  return transporter.sendMail({
    from: environment.from,
    to: receiverEmail,
    bcc: bccEmail,
    replyTo: {
      name: data.name,
      address: data.email,
    },
    subject: `New Website Enquiry â€“ ${data.name}`,
    text: [
      "New enquiry received from steelbuildinfra.com.",
      "",
      `Name: ${data.name}`,
      `Company: ${data.company || "Not provided"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      "",
      "Project Requirements:",
      data.message,
      "",
      "Reply directly to this email to contact the visitor.",
    ].join("\n"),
    html: createInternalEmailHtml(data),
  });
}

async function sendVisitorAcknowledgement(
  data: ContactFormData,
) {
  const messageId = await sendGmailAcknowledgement({
    to: data.email,
    subject: "Thank You for Contacting Steelbuild Infra Projects",
    text: [
      "Dear " + data.name + ",",
      "",
      "Thank you for contacting Steelbuild Infra Projects Limited.",
      "We have received your enquiry and will review your requirements.",
      "",
      "Regards,",
      "Steelbuild Infra Projects Limited",
      "Driven By Commitment and Quality",
      "https://steelbuildinfra.com",
    ].join("\n"),
    html: createAcknowledgementEmailHtml(data),
  });

  return {
    messageId,
    accepted: [data.email],
    rejected: [],
    response: "Gmail API accepted",
  };
}

export async function sendContactEmails(
  data: ContactFormData,
): Promise<void> {
  const transporter = createMailTransporter();

  try {
    const internalResult =
      await sendInternalNotification(
        transporter,
        data,
      );

    console.log(
      "CONTACT INTERNAL EMAIL RESULT:",
      {
        messageId: internalResult.messageId,
        accepted: internalResult.accepted,
        rejected: internalResult.rejected,
        response: internalResult.response,
      },
    );

    /*
     * Visitor acknowledgement failing should not
     * invalidate the internal enquiry email.
     */
    try {
      const acknowledgementResult =
        await sendVisitorAcknowledgement(data);

      console.log(
        "CONTACT ACKNOWLEDGEMENT RESULT:",
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
        "Contact acknowledgement email failed:",
        acknowledgementError,
      );
    }
  } finally {
    transporter.close();
  }
}
