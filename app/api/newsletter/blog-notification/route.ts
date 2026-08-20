import {
  createHash,
} from "crypto";

import {
  NextResponse,
} from "next/server";

import {
  createClient,
} from "@sanity/client";

import nodemailer from "nodemailer";

import {
  BLOG_NEWSLETTER_NOTIFICATION_QUERY,
} from "@/sanity/lib/queries";

/* =========================================================
   CONFIG
========================================================= */

const SITE_URL =
  (
    process.env
      .NEXT_PUBLIC_SITE_URL ||
    "https://steelbuildinfra.com"
  ).replace(
    /\/$/,
    "",
  );

const projectId =
  process.env
    .NEXT_PUBLIC_SANITY_PROJECT_ID;

const dataset =
  process.env
    .NEXT_PUBLIC_SANITY_DATASET ||
  "production";

const sanityToken =
  process.env
    .SANITY_API_WRITE_TOKEN;

const webhookSecret =
  process.env
    .NEWSLETTER_NOTIFICATION_SECRET;

/* =========================================================
   SMTP
========================================================= */

const smtpHost =
  process.env.SMTP_HOST;

const smtpPort =
  Number(
    process.env.SMTP_PORT ||
      465,
  );

const smtpSecure =
  process.env.SMTP_SECURE ===
  "true";

const smtpUser =
  process.env.SMTP_USER;

const smtpPassword =
  process.env.SMTP_PASSWORD;

const mailFrom =
  process.env.MAIL_FROM ||
  smtpUser ||
  "website@steelbuildinfra.com";

/* =========================================================
   SANITY CLIENT
========================================================= */

const sanityWriteClient =
  createClient({
    projectId,
    dataset,

    apiVersion:
      "2025-01-01",

    useCdn: false,

    token:
      sanityToken,
  });

/* =========================================================
   TYPES
========================================================= */

type Subscriber = {
  _id: string;

  email: string;
};

type BlogNotificationData = {
  _id: string;

  title: string;

  slug?: string;

  excerpt?: string;

  publishedAt?: string;

  category?: string;

  author?: string;

  featuredImage?: {
    asset?: {
      _id?: string;

      url?: string;
    };

    alt?: string;
  };

  newsletterTitle?: string;

  newsletterSummary?: string;

  sendNewsletterNotification?: boolean;

  newsletterNotificationSent?: boolean;

  newsletterNotificationSentAt?: string;
};

type RequestBody = {
  blogId?: string;
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
    host:
      smtpHost,

    port:
      smtpPort,

    secure:
      smtpSecure,

    auth: {
      user:
        smtpUser,

      pass:
        smtpPassword,
    },
  });
}

/* =========================================================
   HTML ESCAPE
========================================================= */

function escapeHtml(
  value?: string,
) {
  return String(
    value || "",
  )
    .replaceAll(
      "&",
      "&amp;",
    )
    .replaceAll(
      "<",
      "&lt;",
    )
    .replaceAll(
      ">",
      "&gt;",
    )
    .replaceAll(
      '"',
      "&quot;",
    )
    .replaceAll(
      "'",
      "&#039;",
    );
}

/* =========================================================
   DELIVERY ID
========================================================= */

function getDeliveryId(
  blogDocumentId: string,
  email: string,
) {
  const hash =
    createHash(
      "sha256",
    )
      .update(
        `${blogDocumentId}:${email}`,
      )
      .digest("hex")
      .slice(
        0,
        32,
      );

  return `newsletter.blog.${hash}`;
}

/* =========================================================
   BLOG EMAIL
========================================================= */

async function sendBlogEmail({
  subscriber,
  blog,
}: {
  subscriber: Subscriber;

  blog: BlogNotificationData;
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

  const title =
    blog.newsletterTitle?.trim() ||
    blog.title;

  const summary =
    blog.newsletterSummary?.trim() ||
    blog.excerpt?.trim() ||
    "Read the latest engineering and industry insight from Steelbuild Infra Projects Limited.";

  const category =
    blog.category ||
    "Steelbuild Insights";

  const author =
    blog.author ||
    "Steelbuild Editorial Team";

  const articleUrl =
    `${SITE_URL}/blog/${blog.slug}`;

  const unsubscribeUrl =
    `${SITE_URL}/newsletter/unsubscribe?email=${encodeURIComponent(
      email,
    )}`;

  const imageUrl =
    blog.featuredImage
      ?.asset
      ?.url;

  const safeTitle =
    escapeHtml(
      title,
    );

  const safeSummary =
    escapeHtml(
      summary,
    );

  const safeCategory =
    escapeHtml(
      category,
    );

  const safeAuthor =
    escapeHtml(
      author,
    );

  const safeImageAlt =
    escapeHtml(
      blog.featuredImage
        ?.alt ||
        title,
    );

  const subject =
    `New Article: ${title} | Steelbuild Insights`;

  /* =======================================================
     PLAIN TEXT
  ======================================================= */

  const text = `
NEW STEELBUILD INSIGHT

${title}

${summary}

Category: ${category}
Author: ${author}

Read Article:
${articleUrl}

Steelbuild Infra Projects Limited
Pre-Engineered Buildings • Structural Steel • Industrial Infrastructure

You are receiving this email because you are subscribed to Steelbuild Insights.

Unsubscribe:
${unsubscribeUrl}
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

  <title>${safeTitle}</title>
</head>

<body
  style="
    margin:0;
    padding:0;
    background:#f4f6f9;
    font-family:Arial,Helvetica,sans-serif;
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

<!-- =========================================
     HEADER
========================================== -->

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
    New Article
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
<!-- =========================================
     IMAGE
========================================== -->

<tr>
<td>

  <img
    src="${imageUrl}"
    alt="${safeImageAlt}"
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

<!-- =========================================
     ARTICLE
========================================== -->

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
    ${safeCategory}
  </p>

  <h2
    style="
      margin:10px 0 0;
      color:#1b3f68;
      font-size:22px;
      line-height:1.4;
      font-weight:800;
    "
  >
    Latest Engineering & Industry Insight
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

  <p
    style="
      margin:16px 0 0;
      color:#7b8794;
      font-size:12px;
      line-height:1.7;
    "
  >
    By ${safeAuthor}
  </p>

</td>
</tr>

<!-- =========================================
     CTA
========================================== -->

<tr>
<td
  align="center"
  style="
    padding:26px 36px 38px;
  "
>

  <a
    href="${articleUrl}"
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
    Read Article
  </a>

</td>
</tr>

<!-- =========================================
     FOOTER
========================================== -->

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
      href="${SITE_URL}"
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
    from:
      mailFrom,

    to:
      email,

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
        length:
          Math.min(
            limit,
            queue.length,
          ),
      },

      async () => {
        while (
          queue.length >
          0
        ) {
          const item =
            queue.shift();

          if (!item) {
            return;
          }

          await worker(
            item,
          );
        }
      },
    );

  await Promise.all(
    workers,
  );
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

    if (!webhookSecret) {
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
      webhookSecret
    ) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Unauthorized.",
        },
        {
          status: 401,
        },
      );
    }

    /* =====================================================
       ENVIRONMENT CHECK
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
       BODY
    ===================================================== */

    const body =
      (await request.json()) as RequestBody;

    const rawBlogId =
      typeof body?.blogId ===
      "string"
        ? body.blogId.trim()
        : "";

    const cleanBlogId =
      rawBlogId.replace(
        /^drafts\./,
        "",
      );

    if (!cleanBlogId) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Blog document ID is required.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       FETCH BLOG
    ===================================================== */

    const blog =
      await sanityWriteClient.fetch<
        BlogNotificationData | null
      >(
        BLOG_NEWSLETTER_NOTIFICATION_QUERY,

        {
          blogId:
            cleanBlogId,
        },
      );

    if (!blog) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Published blog article was not found.",
        },
        {
          status: 404,
        },
      );
    }

    if (!blog.slug) {
      return NextResponse.json(
        {
          success: false,

          message:
            "Blog article does not have a valid slug.",
        },
        {
          status: 400,
        },
      );
    }

    /* =====================================================
       NOTIFICATION ENABLED?
    ===================================================== */

    if (
      !blog.sendNewsletterNotification
    ) {
      return NextResponse.json(
        {
          success: true,

          skipped: true,

          message:
            "Blog newsletter notification is disabled.",
        },
        {
          status: 200,
        },
      );
    }

    /* =====================================================
       ALREADY COMPLETED?
    ===================================================== */

    if (
      blog.newsletterNotificationSent
    ) {
      return NextResponse.json(
        {
          success: true,

          skipped: true,

          message:
            "Blog newsletter notification has already been sent.",
        },
        {
          status: 200,
        },
      );
    }

    /* =====================================================
       ACTIVE CONSENTED SUBSCRIBERS
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
      subscribers.length ===
      0
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
       DELIVERY
    ===================================================== */

    let sentCount = 0;

    let skippedCount = 0;

    let failedCount = 0;

    const failedRecipients:
      string[] = [];

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
          skippedCount +=
            1;

          return;
        }

        const deliveryId =
          getDeliveryId(
            blog._id,
            email,
          );

        try {
          /* =============================================
             DUPLICATE CHECK
          ============================================= */

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
            skippedCount +=
              1;

            return;
          }

          /* =============================================
             SEND
          ============================================= */

          await sendBlogEmail({
            subscriber,
            blog,
          });

          /* =============================================
             RECORD SUCCESS
          ============================================= */

          await sanityWriteClient
            .createOrReplace({
              _id:
                deliveryId,

              _type:
                "newsletterDelivery",

              contentType:
                "blog",

              contentId:
                blog._id,

              subscriberId:
                subscriber._id,

              email,

              sentAt:
                new Date().toISOString(),
            });

          sentCount +=
            1;
        } catch (error) {
          failedCount +=
            1;

          failedRecipients.push(
            email,
          );

          console.error(
            `Blog newsletter failed for ${email}:`,
            error,
          );
        }
      },
    );

    /* =====================================================
       ONLY MARK COMPLETE IF ALL DELIVERIES SUCCEEDED
    ===================================================== */

    if (
      failedCount === 0
    ) {
      await sanityWriteClient
        .patch(
          blog._id,
        )
        .set({
          newsletterNotificationSent:
            true,

          newsletterNotificationSentAt:
            new Date().toISOString(),

          sendNewsletterNotification:
            false,
        })
        .commit();
    }

    /* =====================================================
       PARTIAL FAILURE
    ===================================================== */

    if (
      failedCount >
      0
    ) {
      return NextResponse.json(
        {
          success: false,

          partial: true,

          sentCount,

          skippedCount,

          failedCount,

          failedRecipients,

          message:
            "Blog newsletter was partially sent. Successful recipients are protected from duplicate delivery and failed recipients can be retried safely.",
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
          `Blog newsletter sent successfully to ${sentCount} subscriber${sentCount === 1 ? "" : "s"}.`,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(
      "Blog newsletter notification error:",
      error,
    );

    return NextResponse.json(
      {
        success: false,

        message:
          "Blog newsletter notification could not be completed.",
      },
      {
        status: 500,
      },
    );
  }
}