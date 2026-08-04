import nodemailer from "nodemailer";

function getRequiredEnvironmentVariable(
  name: string,
): string {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`,
    );
  }

  return value;
}

function parseBoolean(
  value: string | undefined,
  defaultValue: boolean,
): boolean {
  if (!value) {
    return defaultValue;
  }

  return value.trim().toLowerCase() === "true";
}

export function getMailEnvironment() {
  const host =
    getRequiredEnvironmentVariable("SMTP_HOST");

  const user =
    getRequiredEnvironmentVariable("SMTP_USER");

  const password =
    getRequiredEnvironmentVariable(
      "SMTP_PASSWORD",
    );

  const port = Number(
    process.env.SMTP_PORT ?? "465",
  );

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error(
      "SMTP_PORT must be a valid positive number.",
    );
  }

  const secure = parseBoolean(
    process.env.SMTP_SECURE,
    port === 465,
  );

  const from =
    process.env.MAIL_FROM?.trim() ||
    `Steelbuild Website <${user}>`;

  return {
    host,
    port,
    secure,
    user,
    password,
    from,
  };
}

export function createMailTransporter() {
  const environment = getMailEnvironment();

  return nodemailer.createTransport({
    host: environment.host,
    port: environment.port,
    secure: environment.secure,
    auth: {
      user: environment.user,
      pass: environment.password,
    },
    pool: true,
    maxConnections: 3,
    maxMessages: 100,
  });
}

export async function verifyMailConnection(): Promise<void> {
  const transporter = createMailTransporter();

  try {
    await transporter.verify();
  } finally {
    transporter.close();
  }
}