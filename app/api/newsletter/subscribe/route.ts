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
   EMAIL TRANSPORTER
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
   CONFIRMATION EMAIL
========================================================= */

async function sendConfirmationEmail(
  email: string,
) {
  const transporter =
    getTransporter();

  if (!transporter) {
    console.warn(
      "Newsletter confirmation email skipped because SMTP configuration is missing.",
    );

    return;
  }

  /*
   * This link will be shown at the bottom
   * of the newsletter confirmation email.
   */

  const unsubscribeUrl =
    `${siteUrl}/newsletter/unsubscribe?email=${encodeURIComponent(
      email,
    )}`;

  const subject =
    "Welcome to Steelbuild Insights";

  /* =======================================================
     PLAIN TEXT EMAIL
  ======================================================= */

  const text = `
Thank you for subscribing to Steelbuild Insights.

You will receive updates and insights on:

- Pre-Engineered Buildings
- Industrial Construction
- Engineering
- Manufacturing
- Roofing & Cladding
- Industrial Infrastructure

Steelbuild Infra Projects Limited
${siteUrl}

If you no longer wish to receive Steelbuild Insights, you can unsubscribe here:

${unsubscribeUrl}

If you did not request this subscription, please use the unsubscribe link above.
`.trim();

  /* =======================================================
     HTML EMAIL
  ======================================================= */

  const html = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>
    Welcome to Steelbuild Insights
  </title>
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

          <!-- ===========================================
               HEADER
          ============================================ -->

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
                Welcome to Steelbuild Insights
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
                Engineering knowledge, industrial trends and
                Pre-Engineered Building insights from
                Steelbuild Infra Projects Limited.
              </p>

            </td>

          </tr>

          <!-- ===========================================
               CONTENT
          ============================================ -->

          <tr>

            <td
              style="
                padding:38px 36px 12px;
              "
            >

              <p
                style="
                  margin:0;
                  font-size:17px;
                  line-height:1.7;
                  color:#374151;
                "
              >
                Thank you for subscribing.
              </p>

              <p
                style="
                  margin:14px 0 0;
                  font-size:15px;
                  line-height:1.8;
                  color:#5f6b7a;
                "
              >
                You are now subscribed to receive selected updates,
                articles and insights from Steelbuild on
                Pre-Engineered Buildings, industrial construction,
                engineering and manufacturing.
              </p>

            </td>

          </tr>

          <!-- ===========================================
               TOPICS
          ============================================ -->

          <tr>

            <td
              style="
                padding:18px 36px 10px;
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
                    "
                  >

                    <p
  style="
    margin:0 0 14px;
    color:#1b3f68;
    font-size:16px;
    font-weight:800;
  "
>
  What you can expect
</p>

<p
  style="
    margin:0;
    color:#5f6b7a;
    font-size:14px;
    line-height:2;
  "
>
  • New and important PEB projects<br />
  • Engineering and industry insights<br />
  • Major company developments<br />
  • Manufacturing updates<br />
  • Product and solution announcements<br />
  • Important exhibitions and events
</p>

                  </td>

                </tr>

              </table>

            </td>

          </tr>

          <!-- ===========================================
               CTA
          ============================================ -->

          <tr>

            <td
              align="center"
              style="
                padding:26px 36px 36px;
              "
            >

              <a
                href="${siteUrl}/blog"
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
                Explore Steelbuild Insights
              </a>

            </td>

          </tr>

          <!-- ===========================================
               FOOTER
          ============================================ -->

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
                  margin:12px 0 0;
                  color:#9aa4af;
                  font-size:11px;
                  line-height:1.7;
                "
              >
                You received this email because this address
                was subscribed to Steelbuild Insights.
              </p>

              <!-- =======================================
                   WEBSITE
              ======================================== -->

              <p
                style="
                  margin:8px 0 0;
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

              <!-- =======================================
                   UNSUBSCRIBE
              ======================================== -->

              <p
                style="
                  margin:14px 0 0;
                  font-size:11px;
                  line-height:1.6;
                "
              >

                <a
                  href="${unsubscribeUrl}"
                  style="
                    color:#7b8794;
                    text-decoration:underline;
                    font-weight:600;
                  "
                >
                  Unsubscribe from Steelbuild Insights
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

  /* =======================================================
     SEND EMAIL
  ======================================================= */

  await transporter.sendMail({
    from: mailFrom,
    to: email,
    subject,
    text,
    html,
  });
}

/* =========================================================
   API ROUTE
========================================================= */

export async function POST(
  request: Request,
) {
  try {
    /* =====================================================
       SANITY ENV CHECK
    ===================================================== */

    if (
      !projectId ||
      !dataset ||
      !sanityToken
    ) {
      console.error(
        "Newsletter subscription Sanity environment variables are missing.",
      );

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

    /* =====================================================
       REQUEST BODY
    ===================================================== */

    const body =
      await request.json();

    const email =
      typeof body?.email === "string"
        ? body.email
            .trim()
            .toLowerCase()
        : "";

    /* =====================================================
       VALIDATION
    ===================================================== */

    if (!email) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Please enter your email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (
      email.length > 254 ||
      !EMAIL_REGEX.test(email)
    ) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       DUPLICATE CHECK
    ===================================================== */

    const existingSubscriber =
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

    /* =====================================================
       EXISTING SUBSCRIBER
    ===================================================== */

    if (existingSubscriber) {
      /*
       * Reactivate previously unsubscribed subscriber.
       */

      if (
        existingSubscriber.status ===
        "unsubscribed"
      ) {
        await sanityWriteClient
          .patch(
            existingSubscriber._id,
          )
          .set({
            status:
              "active",

            subscribedAt:
              new Date().toISOString(),

            consent:
              true,

            source:
              "Blog Newsletter",
          })
          .unset([
            "unsubscribedAt",
          ])
          .commit();

        /*
         * Send welcome email again because
         * the subscription has been reactivated.
         */

        try {
          await sendConfirmationEmail(
            email,
          );
        } catch (emailError) {
          console.error(
            "Newsletter confirmation email failed after reactivation:",
            emailError,
          );
        }

        return NextResponse.json(
          {
            success: true,

            message:
              "Welcome back! Your newsletter subscription has been reactivated.",
          },
          {
            status: 200,
          },
        );
      }

      /*
       * Already active.
       *
       * Do not send another welcome email.
       */

      return NextResponse.json(
        {
          success: true,

          alreadySubscribed:
            true,

          message:
            "This email is already subscribed to Steelbuild Insights.",
        },
        {
          status: 200,
        },
      );
    }

    /* =====================================================
       CREATE SUBSCRIBER
    ===================================================== */

    await sanityWriteClient.create({
      _type:
        "newsletterSubscriber",

      email,

      status:
        "active",

      source:
        "Blog Newsletter",

      subscribedAt:
        new Date().toISOString(),

      consent:
        true,
    });

    /* =====================================================
       SEND CONFIRMATION EMAIL
    ===================================================== */

    let confirmationEmailSent =
      true;

    try {
      await sendConfirmationEmail(
        email,
      );
    } catch (emailError) {
      confirmationEmailSent =
        false;

      console.error(
        "Newsletter confirmation email failed:",
        emailError,
      );
    }

    /*
     * Subscriber has already successfully
     * been stored in Sanity.
     *
     * Therefore a temporary SMTP failure
     * should not cancel the subscription.
     */

    return NextResponse.json(
      {
        success: true,

        confirmationEmailSent,

        message:
          confirmationEmailSent
            ? "Thank you! You're subscribed to Steelbuild Insights. A confirmation email has been sent to your inbox."
            : "Thank you! You're subscribed to Steelbuild Insights.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(
      "Newsletter subscription error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "We couldn't complete your subscription. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}