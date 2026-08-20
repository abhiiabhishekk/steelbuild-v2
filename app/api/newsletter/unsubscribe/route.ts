import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import nodemailer from "nodemailer";

/* =========================================================
   SANITY CONFIG
========================================================= */

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  "production";

const sanityToken =
  process.env.SANITY_API_WRITE_TOKEN;

const sanityWriteClient = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: false,
  token: sanityToken,
});

/* =========================================================
   SITE CONFIG
========================================================= */

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://steelbuildinfra.com";

/* =========================================================
   SMTP CONFIG
========================================================= */

const smtpHost =
  process.env.SMTP_HOST;

const smtpPort =
  Number(
    process.env.SMTP_PORT || 465,
  );

const smtpSecure =
  process.env.SMTP_SECURE === "true";

const smtpUser =
  process.env.SMTP_USER;

const smtpPassword =
  process.env.SMTP_PASSWORD;

const mailFrom =
  process.env.MAIL_FROM ||
  smtpUser ||
  "info@steelbuildinfra.com";

/* =========================================================
   EMAIL VALIDATION
========================================================= */

const EMAIL_REGEX =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* =========================================================
   TRANSPORTER
========================================================= */

function getTransporter() {
  if (
    !smtpHost ||
    !smtpUser ||
    !smtpPassword
  ) {
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,

    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });
}

/* =========================================================
   UNSUBSCRIBE CONFIRMATION EMAIL
========================================================= */

async function sendUnsubscribeEmail(
  email: string,
) {
  const transporter =
    getTransporter();

  if (!transporter) {
    console.warn(
      "Unsubscribe email skipped because SMTP configuration is missing.",
    );

    return;
  }

  const resubscribeUrl =
    `${siteUrl}/newsletter/unsubscribe?email=${encodeURIComponent(
      email,
    )}`;

  const subject =
    "You have been unsubscribed from Steelbuild Insights";

  const text = `
Your subscription has been updated.

You have been unsubscribed from Steelbuild Insights.

You will no longer receive newsletter updates at:
${email}

Changed your mind?

You can resubscribe here:
${resubscribeUrl}

Steelbuild Infra Projects Limited
${siteUrl}
`.trim();

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>Subscription Updated</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f6f9;
    font-family:Arial, Helvetica, sans-serif;
    color:#1f2937;
  "
>
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="
      width:100%;
      background:#f4f6f9;
      padding:32px 16px;
    "
  >
    <tr>
      <td align="center">

        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            width:100%;
            max-width:640px;
            background:#ffffff;
            border-radius:18px;
            overflow:hidden;
            box-shadow:0 10px 35px rgba(27,63,104,0.08);
          "
        >

          <tr>
            <td
              style="
                background:#1b3f68;
                padding:34px 36px;
                text-align:center;
              "
            >
              <div
                style="
                  display:inline-block;
                  padding:7px 14px;
                  margin-bottom:18px;
                  border-radius:999px;
                  background:rgba(255,255,255,0.10);
                  color:#ffffff;
                  font-size:11px;
                  font-weight:700;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                Steelbuild Insights
              </div>

              <h1
                style="
                  margin:0;
                  color:#ffffff;
                  font-size:30px;
                  line-height:1.25;
                  font-weight:800;
                "
              >
                Subscription Updated
              </h1>

              <p
                style="
                  margin:14px auto 0;
                  max-width:480px;
                  color:#d7e1ec;
                  font-size:15px;
                  line-height:1.7;
                "
              >
                Your Steelbuild Insights newsletter preferences
                have been updated successfully.
              </p>
            </td>
          </tr>

          <tr>
            <td
              style="
                padding:38px 36px 18px;
              "
            >
              <h2
                style="
                  margin:0;
                  color:#1b3f68;
                  font-size:22px;
                  line-height:1.4;
                "
              >
                You have been unsubscribed
              </h2>

              <p
                style="
                  margin:16px 0 0;
                  color:#5f6b7a;
                  font-size:15px;
                  line-height:1.8;
                "
              >
                You will no longer receive Steelbuild Insights
                newsletter emails at:
              </p>

              <p
                style="
                  margin:10px 0 0;
                  color:#1b3f68;
                  font-size:15px;
                  font-weight:700;
                "
              >
                ${email}
              </p>
            </td>
          </tr>

          <tr>
            <td
              style="
                padding:10px 36px 20px;
              "
            >
              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  width:100%;
                  background:#f7f9fc;
                  border-radius:14px;
                "
              >
                <tr>
                  <td
                    style="
                      padding:24px;
                      text-align:center;
                    "
                  >
                    <p
                      style="
                        margin:0;
                        color:#1b3f68;
                        font-size:17px;
                        font-weight:800;
                      "
                    >
                      Changed your mind?
                    </p>

                    <p
                      style="
                        margin:10px 0 0;
                        color:#5f6b7a;
                        font-size:14px;
                        line-height:1.7;
                      "
                    >
                      You can reactivate your Steelbuild Insights
                      subscription at any time.
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
                padding:10px 36px 38px;
              "
            >
              <a
                href="${resubscribeUrl}"
                style="
                  display:inline-block;
                  background:#c21119;
                  color:#ffffff;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:800;
                  padding:15px 28px;
                  border-radius:12px;
                "
              >
                Resubscribe to Steelbuild Insights
              </a>
            </td>
          </tr>

          <tr>
            <td
              style="
                background:#f7f9fc;
                padding:26px 36px;
                text-align:center;
              "
            >
              <p
                style="
                  margin:0;
                  color:#1b3f68;
                  font-size:14px;
                  font-weight:800;
                "
              >
                Steelbuild Infra Projects Limited
              </p>

              <p
                style="
                  margin:8px 0 0;
                  color:#7b8794;
                  font-size:12px;
                  line-height:1.7;
                "
              >
                Pre-Engineered Buildings • Structural Steel •
                Industrial Infrastructure
              </p>

              <p
                style="
                  margin:10px 0 0;
                  font-size:11px;
                "
              >
                <a
                  href="${siteUrl}"
                  style="
                    color:#c21119;
                    text-decoration:none;
                    font-weight:700;
                  "
                >
                  steelbuildinfra.com
                </a>
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

  await transporter.sendMail({
    from: mailFrom,
    to: email,
    subject,
    text,
    html,
  });
}

/* =========================================================
   UNSUBSCRIBE API
========================================================= */

export async function POST(
  request: Request,
) {
  try {
    if (
      !projectId ||
      !dataset ||
      !sanityToken
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Newsletter service is temporarily unavailable.",
        },
        {
          status: 500,
        },
      );
    }

    const body =
      await request.json();

    const email =
      typeof body?.email === "string"
        ? body.email
            .trim()
            .toLowerCase()
        : "";

    if (
      !email ||
      email.length > 254 ||
      !EMAIL_REGEX.test(email)
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Invalid email address.",
        },
        {
          status: 400,
        },
      );
    }

    const subscriber =
      await sanityWriteClient.fetch<{
        _id: string;
        status?: string;
      } | null>(
        `*[
          _type == "newsletterSubscriber" &&
          email == $email
        ][0]{
          _id,
          status
        }`,
        {
          email,
        },
      );

    if (!subscriber) {
      return NextResponse.json(
        {
          success: true,
          alreadyUnsubscribed: true,
          canResubscribe: false,

          message:
            "This email is not currently subscribed.",
        },
        {
          status: 200,
        },
      );
    }

    if (
      subscriber.status ===
      "unsubscribed"
    ) {
      return NextResponse.json(
        {
          success: true,
          alreadyUnsubscribed: true,
          canResubscribe: true,

          message:
            "This email has already been unsubscribed.",
        },
        {
          status: 200,
        },
      );
    }

    await sanityWriteClient
      .patch(subscriber._id)
      .set({
        status:
          "unsubscribed",

        unsubscribedAt:
          new Date().toISOString(),

        consent:
          false,
      })
      .commit();

    let confirmationEmailSent =
      true;

    try {
      await sendUnsubscribeEmail(
        email,
      );
    } catch (emailError) {
      confirmationEmailSent =
        false;

      console.error(
        "Newsletter unsubscribe confirmation email failed:",
        emailError,
      );
    }

    return NextResponse.json(
      {
        success: true,
        canResubscribe: true,
        confirmationEmailSent,

        message:
          confirmationEmailSent
            ? "You have been unsubscribed from Steelbuild Insights. A confirmation email has been sent to your inbox."
            : "You have been unsubscribed from Steelbuild Insights.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "Newsletter unsubscribe error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "We couldn't process your unsubscribe request. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}