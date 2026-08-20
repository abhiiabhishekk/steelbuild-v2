import { createHash } from "crypto";

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
  (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://steelbuildinfra.com"
  ).replace(/\/$/, "");

/* =========================================================
   WEBHOOK SECURITY
========================================================= */

const notificationSecret =
  process.env.NEWSLETTER_NOTIFICATION_SECRET;

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
   TYPES
========================================================= */

type Subscriber = {
  _id: string;
  email: string;
};

type ProjectNewsletterData = {
  _id: string;

  projectId?: string;

  name: string;
  slug: string;

  clientName?: string;

  category?: string;
  status?: string;

  location?: string;
  area?: string;
  tonnage?: string;

  shortDescription?: string;

  newsletterTitle?: string;
  newsletterSummary?: string;

  sendNewsletterNotification?: boolean;
  newsletterNotificationSent?: boolean;

  newsletterNotificationSentAt?: string;

  coverImage?: {
    asset?: {
      url?: string;
    };

    alt?: string;
  };
};

type RequestBody = {
  projectId?: string;
};

/* =========================================================
   SMTP TRANSPORTER
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
   HTML ESCAPE
========================================================= */

function escapeHtml(
  value?: string,
) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   DELIVERY DOCUMENT ID
========================================================= */

function getDeliveryId(
  projectDocumentId: string,
  email: string,
) {
  const hash =
    createHash("sha256")
      .update(
        `${projectDocumentId}:${email}`,
      )
      .digest("hex")
      .slice(0, 32);

  return `newsletter.project.${hash}`;
}

/* =========================================================
   EMAIL TEMPLATE
========================================================= */

async function sendProjectEmail({
  subscriber,
  project,
}: {
  subscriber: Subscriber;
  project: ProjectNewsletterData;
}) {
  const transporter =
    getTransporter();

  if (!transporter) {
    throw new Error(
      "SMTP configuration is missing.",
    );
  }

  const email =
    subscriber.email
      .trim()
      .toLowerCase();

  const projectUrl =
    `${siteUrl}/projects/${project.slug}`;

  const unsubscribeUrl =
    `${siteUrl}/newsletter/unsubscribe?email=${encodeURIComponent(
      email,
    )}`;

  const title =
    project.newsletterTitle?.trim() ||
    project.name;

  const summary =
    project.newsletterSummary?.trim() ||
    project.shortDescription?.trim() ||
    `Explore this ${project.category || "Pre-Engineered Building"} project by Steelbuild Infra Projects Limited.`;

  const subject =
    `New Project: ${title} | Steelbuild Insights`;

  const text = `
NEW PROJECT

${title}

${summary}

${project.location ? `Location: ${project.location}` : ""}
${project.category ? `Category: ${project.category}` : ""}
${project.area ? `Area: ${project.area}` : ""}
${project.tonnage ? `Tonnage: ${project.tonnage}` : ""}
${project.status ? `Status: ${project.status}` : ""}

View Project:
${projectUrl}

Steelbuild Infra Projects Limited
Pre-Engineered Buildings • Structural Steel • Industrial Infrastructure

You are receiving this email because you are subscribed to Steelbuild Insights.

Unsubscribe:
${unsubscribeUrl}
`.trim();

  const safeTitle =
    escapeHtml(title);

  const safeSummary =
    escapeHtml(summary);

  const safeLocation =
    escapeHtml(project.location);

  const safeCategory =
    escapeHtml(project.category);

  const safeArea =
    escapeHtml(project.area);

  const safeTonnage =
    escapeHtml(project.tonnage);

  const safeStatus =
    escapeHtml(project.status);

  const imageUrl =
    project.coverImage?.asset?.url;

  const imageAlt =
    escapeHtml(
      project.coverImage?.alt ||
        project.name,
    );

  const detailRows = [
    project.location
      ? {
          label: "Location",
          value: safeLocation,
        }
      : null,

    project.category
      ? {
          label: "Category",
          value: safeCategory,
        }
      : null,

    project.area
      ? {
          label: "Area",
          value: safeArea,
        }
      : null,

    project.tonnage
      ? {
          label: "Tonnage",
          value: safeTonnage,
        }
      : null,

    project.status
      ? {
          label: "Status",
          value: safeStatus,
        }
      : null,
  ].filter(
    (
      item,
    ): item is {
      label: string;
      value: string;
    } => Boolean(item),
  );

  const detailsHtml =
    detailRows
      .map(
        (item) => `
          <tr>
            <td
              style="
                width:38%;
                padding:10px 12px;
                border-bottom:1px solid #e5e7eb;
                color:#7b8794;
                font-size:13px;
                font-weight:700;
              "
            >
              ${item.label}
            </td>

            <td
              style="
                padding:10px 12px;
                border-bottom:1px solid #e5e7eb;
                color:#1b3f68;
                font-size:13px;
                font-weight:800;
              "
            >
              ${item.value}
            </td>
          </tr>
        `,
      )
      .join("");

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>${safeTitle}</title>
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
            max-width:660px;
            background:#ffffff;
            border-radius:18px;
            overflow:hidden;
            box-shadow:0 10px 35px rgba(27,63,104,0.08);
          "
        >

          <!-- HEADER -->

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

              <p
                style="
                  margin:0 0 10px;
                  color:#ffccd0;
                  font-size:11px;
                  font-weight:800;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                New Project
              </p>

              <h1
                style="
                  margin:0;
                  color:#ffffff;
                  font-size:30px;
                  line-height:1.3;
                  font-weight:800;
                "
              >
                ${safeTitle}
              </h1>
            </td>
          </tr>

          ${
            imageUrl
              ? `
          <!-- PROJECT IMAGE -->

          <tr>
            <td>
              <img
                src="${imageUrl}"
                alt="${imageAlt}"
                width="660"
                style="
                  display:block;
                  width:100%;
                  max-width:660px;
                  height:auto;
                  border:0;
                "
              />
            </td>
          </tr>
          `
              : ""
          }

          <!-- INTRO -->

          <tr>
            <td
              style="
                padding:34px 36px 16px;
              "
            >
              <p
                style="
                  margin:0;
                  color:#c21119;
                  font-size:11px;
                  font-weight:800;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                Project Announcement
              </p>

              <h2
                style="
                  margin:10px 0 0;
                  color:#1b3f68;
                  font-size:23px;
                  line-height:1.4;
                  font-weight:800;
                "
              >
                Engineering Excellence in Action
              </h2>

              <p
                style="
                  margin:14px 0 0;
                  color:#5f6b7a;
                  font-size:15px;
                  line-height:1.8;
                "
              >
                ${safeSummary}
              </p>
            </td>
          </tr>

          ${
            detailRows.length > 0
              ? `
          <!-- PROJECT DETAILS -->

          <tr>
            <td
              style="
                padding:18px 36px 8px;
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
                  overflow:hidden;
                "
              >
                ${detailsHtml}
              </table>
            </td>
          </tr>
          `
              : ""
          }

          <!-- CTA -->

          <tr>
            <td
              align="center"
              style="
                padding:28px 36px 38px;
              "
            >
              <a
                href="${projectUrl}"
                style="
                  display:inline-block;
                  background:#c21119;
                  color:#ffffff;
                  text-decoration:none;
                  font-size:14px;
                  font-weight:800;
                  padding:15px 30px;
                  border-radius:12px;
                "
              >
                View Project
              </a>
            </td>
          </tr>

          <!-- FOOTER -->

          <tr>
            <td
              style="
                background:#f7f9fc;
                padding:28px 36px;
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
                You are receiving this email because you are
                subscribed to Steelbuild Insights.
              </p>

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

              <p
                style="
                  margin:12px 0 0;
                  font-size:11px;
                "
              >
                <a
                  href="${unsubscribeUrl}"
                  style="
                    color:#6b7280;
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

  await transporter.sendMail({
    from: mailFrom,
    to: email,
    subject,
    text,
    html,
  });
}

/* =========================================================
   CONCURRENCY HELPER
========================================================= */

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  worker: (
    item: T,
  ) => Promise<void>,
) {
  const queue =
    [...items];

  const workers =
    Array.from(
      {
        length: Math.min(
          limit,
          queue.length,
        ),
      },
      async () => {
        while (
          queue.length > 0
        ) {
          const item =
            queue.shift();

          if (!item) {
            return;
          }

          await worker(item);
        }
      },
    );

  await Promise.all(workers);
}

/* =========================================================
   POST
========================================================= */

export async function POST(
  request: Request,
) {
  try {
    /* =====================================================
       SECURITY
    ===================================================== */

    if (!notificationSecret) {
      console.error(
        "NEWSLETTER_NOTIFICATION_SECRET is missing.",
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Newsletter notification service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const providedSecret =
      request.headers.get(
        "x-newsletter-secret",
      );

    if (
      providedSecret !==
      notificationSecret
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized.",
        },
        {
          status: 401,
        },
      );
    }

    /* =====================================================
       ENV CHECK
    ===================================================== */

    if (
      !projectId ||
      !dataset ||
      !sanityToken
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Sanity configuration is missing.",
        },
        {
          status: 500,
        },
      );
    }

    if (
      !smtpHost ||
      !smtpUser ||
      !smtpPassword
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "SMTP configuration is missing.",
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
      (await request.json()) as RequestBody;

    const rawProjectId =
      typeof body?.projectId ===
      "string"
        ? body.projectId.trim()
        : "";

    const cleanProjectId =
      rawProjectId.replace(
        /^drafts\./,
        "",
      );

    if (!cleanProjectId) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Project document ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       FETCH PROJECT
    ===================================================== */

    const project =
      await sanityWriteClient.fetch<
        ProjectNewsletterData | null
      >(
        `*[
          _type == "project" &&
          _id == $projectId &&
          defined(slug.current) &&
          coalesce(active, true) == true
        ][0]{
          _id,
          projectId,
          name,
          "slug": slug.current,
          clientName,
          category,
          "status": coalesce(
            status,
            "Completed"
          ),
          location,
          area,
          tonnage,
          shortDescription,
          newsletterTitle,
          newsletterSummary,
          "sendNewsletterNotification":
            coalesce(
              sendNewsletterNotification,
              false
            ),
          "newsletterNotificationSent":
            coalesce(
              newsletterNotificationSent,
              false
            ),
          newsletterNotificationSentAt,

          coverImage {
            asset-> {
              url
            },

            alt
          }
        }`,
        {
          projectId:
            cleanProjectId,
        },
      );

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Published active project was not found.",
        },
        {
          status: 404,
        },
      );
    }

    /* =====================================================
       NEWSLETTER FLAG CHECK
    ===================================================== */

    if (
      !project.sendNewsletterNotification
    ) {
      return NextResponse.json(
        {
          success: true,
          skipped: true,

          message:
            "Project newsletter notification is disabled.",
        },
        {
          status: 200,
        },
      );
    }

    /* =====================================================
       ALREADY COMPLETED
    ===================================================== */

    if (
      project.newsletterNotificationSent
    ) {
      return NextResponse.json(
        {
          success: true,
          skipped: true,

          message:
            "Project newsletter notification has already been sent.",
        },
        {
          status: 200,
        },
      );
    }

    /* =====================================================
       ACTIVE SUBSCRIBERS
    ===================================================== */

    const subscribers =
      await sanityWriteClient.fetch<
        Subscriber[]
      >(
        `*[
          _type == "newsletterSubscriber" &&
          status == "active" &&
          consent == true &&
          defined(email)
        ]{
          _id,
          email
        }`,
      );

    if (
      subscribers.length === 0
    ) {
      return NextResponse.json(
        {
          success: true,
          skipped: true,

          message:
            "There are currently no active newsletter subscribers.",
        },
        {
          status: 200,
        },
      );
    }

    /* =====================================================
       SEND EMAILS
    ===================================================== */

    let sentCount = 0;
    let skippedCount = 0;
    let failedCount = 0;

    const failures: string[] =
      [];

    await runWithConcurrency(
      subscribers,
      5,

      async (
        subscriber,
      ) => {
        const email =
          subscriber.email
            ?.trim()
            .toLowerCase();

        if (!email) {
          skippedCount += 1;

          return;
        }

        const deliveryId =
          getDeliveryId(
            project._id,
            email,
          );

        try {
          /*
           * Check whether this subscriber
           * has already received this
           * project announcement.
           */

          const existingDelivery =
            await sanityWriteClient.fetch<{
              _id: string;
            } | null>(
              `*[
                _type == "newsletterDelivery" &&
                _id == $deliveryId
              ][0]{
                _id
              }`,
              {
                deliveryId,
              },
            );

          if (
            existingDelivery
          ) {
            skippedCount += 1;

            return;
          }

          /*
           * Send personalized email.
           */

          await sendProjectEmail({
            subscriber,
            project,
          });

          /*
           * Record successful delivery.
           *
           * This prevents duplicate emails
           * if the webhook/API runs again.
           */

          await sanityWriteClient.createOrReplace({
            _id: deliveryId,

            _type:
              "newsletterDelivery",

            contentType:
              "project",

            contentId:
              project._id,

            subscriberId:
              subscriber._id,

            email,

            sentAt:
              new Date().toISOString(),
          });

          sentCount += 1;
        } catch (error) {
          failedCount += 1;

          failures.push(email);

          console.error(
            `Project newsletter failed for ${email}:`,
            error,
          );
        }
      },
    );

    /* =====================================================
       COMPLETE ONLY WHEN NO FAILURES
    ===================================================== */

    if (failedCount === 0) {
      await sanityWriteClient
        .patch(project._id)
        .set({
          newsletterNotificationSent:
            true,

          newsletterNotificationSentAt:
            new Date().toISOString(),

          /*
           * Turn trigger off after
           * successful delivery.
           */

          sendNewsletterNotification:
            false,
        })
        .commit();
    }

    /* =====================================================
       PARTIAL FAILURE
    ===================================================== */

    if (failedCount > 0) {
      return NextResponse.json(
        {
          success: false,

          partial: true,

          sentCount,
          skippedCount,
          failedCount,

          message:
            "Project newsletter was partially sent. Successful recipients are protected from duplicate delivery on retry.",

          failedRecipients:
            failures,
        },
        {
          status: 500,
        },
      );
    }

    /* =====================================================
       SUCCESS
    ===================================================== */

    return NextResponse.json(
      {
        success: true,

        sentCount,
        skippedCount,
        failedCount,

        message:
          `Project newsletter sent successfully to ${sentCount} subscriber${sentCount === 1 ? "" : "s"}.`,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "Project newsletter notification error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Project newsletter notification could not be completed.",
      },
      {
        status: 500,
      },
    );
  }
}