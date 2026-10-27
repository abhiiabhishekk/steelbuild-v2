
import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";
import { google } from "googleapis";

const SENDER = "digital@steelbuildinfra.com";

type GmailMessage = {
  to: string;
  subject: string;
  text: string;
  html: string;
};

function encodeHeader(value: string): string {
  return `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;
}

function validateAddress(address: string): string {
  const value = address.trim();

  if (
    !/^[^\s@<>,\r\n]+@[^\s@<>,\r\n]+\.[^\s@<>,\r\n]+$/.test(value)
  ) {
    throw new Error("Invalid recipient email address.");
  }

  return value;
}

async function getRefreshToken(): Promise<string> {
  const configured = process.env.GOOGLE_REFRESH_TOKEN?.trim();

  if (configured) return configured;

  if (process.env.NODE_ENV !== "development") {
    throw new Error("GOOGLE_REFRESH_TOKEN is not configured.");
  }

  const file = path.join(
    process.cwd(),
    ".google-oauth-token.json",
  );

  const contents = await readFile(file, "utf8");
  const parsed: unknown = JSON.parse(contents);

  if (
    typeof parsed !== "object" ||
    parsed === null ||
    !("refresh_token" in parsed) ||
    typeof parsed.refresh_token !== "string" ||
    !parsed.refresh_token
  ) {
    throw new Error("Google refresh token is missing.");
  }

  return parsed.refresh_token;
}

export async function sendGmailAcknowledgement({
  to,
  subject,
  text,
  html,
}: GmailMessage): Promise<string> {
  const clientId = process.env.GOOGLE_CLIENT_ID?.trim();
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET?.trim();

  if (!clientId || !clientSecret) {
    throw new Error("Google OAuth configuration is missing.");
  }

  const recipient = validateAddress(to);
  const refreshToken = await getRefreshToken();

  const auth = new google.auth.OAuth2(
    clientId,
    clientSecret,
  );

  auth.setCredentials({
    refresh_token: refreshToken,
  });

  const gmail = google.gmail({
    version: "v1",
    auth,
  });

  const boundary = `steelbuild_${crypto.randomUUID()}`;

  const headers = [
    `From: Steelbuild Infra Projects Limited <${SENDER}>`,
    `To: ${recipient}`,
    `Bcc: info@steelbuildinfra.com, va@steelbuildinfra.com`,
    `Reply-To: ${SENDER}`,
    `Subject: ${encodeHeader(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ];

  const mime = [
    ...headers,
    "",
    `--${boundary}`,
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(text, "utf8").toString("base64"),
    `--${boundary}`,
    "Content-Type: text/html; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(html, "utf8").toString("base64"),
    `--${boundary}--`,
    "",
  ].join("\r\n");

  const result = await gmail.users.messages.send({
    userId: "me",
    requestBody: {
      raw: Buffer.from(mime, "utf8").toString("base64url"),
    },
  });

  if (!result.data.id) {
    throw new Error("Gmail API returned no message ID.");
  }

  return result.data.id;
}
