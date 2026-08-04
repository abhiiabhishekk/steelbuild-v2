import type {
  Address,
  Attachment,
} from "nodemailer/lib/mailer";

import {
  createMailTransporter,
  getMailEnvironment,
} from "@/lib/mail/transporter";

type EmailRecipient =
  | string
  | Address
  | Array<string | Address>;

type SendWebsiteMailOptions = {
  to: EmailRecipient;
  cc?: EmailRecipient;
  bcc?: EmailRecipient;
  replyTo?: EmailRecipient;
  subject: string;
  text: string;
  html: string;
  attachments?: Attachment[];
};

export async function sendWebsiteMail({
  to,
  cc,
  bcc,
  replyTo,
  subject,
  text,
  html,
  attachments,
}: SendWebsiteMailOptions) {
  const environment = getMailEnvironment();
  const transporter = createMailTransporter();

  try {
    const result = await transporter.sendMail({
      from: environment.from,
      to,
      cc,
      bcc,
      replyTo,
      subject,
      text,
      html,
      attachments,
    });

    console.log("SMTP EMAIL RESULT:", {
      messageId: result.messageId,
      accepted: result.accepted,
      rejected: result.rejected,
      response: result.response,
      envelope: result.envelope,
    });

    if (
      Array.isArray(result.rejected) &&
      result.rejected.length > 0
    ) {
      throw new Error(
        `SMTP rejected recipient(s): ${result.rejected.join(
          ", ",
        )}`,
      );
    }

    return result;
  } finally {
    transporter.close();
  }
}