import type {
  SentMessageInfo,
  Transporter,
} from "nodemailer";

import type { ContactFormData } from "@/lib/types/forms";

import {
  createMailTransporter,
  getMailEnvironment,
} from "@/lib/mail/transporter";

import {
  createDetailRow,
  createEmailShell,
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
  const detailsTable = `
    <table
      role="presentation"
      style="width:100%;border-collapse:collapse;"
    >
      ${createDetailRow("Name", data.name)}

      ${createDetailRow(
        "Company",
        data.company || "Not provided",
      )}

      ${createDetailRow("Email", data.email, {
        email: true,
      })}

      ${createDetailRow("Phone", data.phone, {
        phone: true,
      })}
    </table>
  `;

  const content = `
    ${detailsTable}

    ${createMessageBox(
      "Project Requirements",
      data.message,
    )}

    <p
      style="
        margin:28px 0 0;
        color:#6b7280;
        font-size:13px;
        line-height:1.7;
      "
    >
      Reply directly to this email to contact
      <strong>${escapeHtml(data.name)}</strong>.
    </p>
  `;

  return createEmailShell({
    eyebrow: "Steelbuild Website Enquiry",
    title: "New Contact Form Submission",
    content,
  });
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

  return createEmailShell({
    eyebrow: "Thank You",
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
    subject: `New Website Enquiry – ${data.name}`,
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
  transporter: Transporter,
  data: ContactFormData,
): Promise<SentMessageInfo> {
  const environment = getMailEnvironment();

  return transporter.sendMail({
    from: environment.from,
    to: {
      name: data.name,
      address: data.email,
    },
    replyTo:
      process.env.CONTACT_RECEIVER_EMAIL?.trim() ||
      environment.user,
    subject:
      "Thank You for Contacting Steelbuild Infra Projects",
    text: [
      `Dear ${data.name},`,
      "",
      "Thank you for contacting Steelbuild Infra Projects Limited.",
      "",
      "We have successfully received your enquiry. Our engineering and business development team will review your requirements and connect with you shortly.",
      "",
      "Regards,",
      "Steelbuild Infra Projects Limited",
      "Driven By Commitment and Quality",
      "steelbuildinfra.com",
    ].join("\n"),
    html: createAcknowledgementEmailHtml(data),
  });
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
        await sendVisitorAcknowledgement(
          transporter,
          data,
        );

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