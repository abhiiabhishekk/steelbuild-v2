function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function createEmailShell({
  title,
  eyebrow,
  content,
}: {
  title: string;
  eyebrow: string;
  content: string;
}): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>${escapeHtml(title)}</title>
      </head>

      <body
        style="
          margin:0;
          padding:0;
          background:#f4f6f8;
          font-family:Arial,Helvetica,sans-serif;
          color:#1f2937;
        "
      >
        <div
          style="
            width:100%;
            padding:32px 16px;
            box-sizing:border-box;
            background:#f4f6f8;
          "
        >
          <div
            style="
              max-width:680px;
              margin:0 auto;
              overflow:hidden;
              background:#ffffff;
              border:1px solid #e5e7eb;
              border-radius:18px;
            "
          >
            <div
              style="
                padding:28px 32px;
                background:#1b3f68;
              "
            >
              <p
                style="
                  margin:0 0 8px;
                  color:#ffffff;
                  font-size:12px;
                  font-weight:700;
                  line-height:1.5;
                  letter-spacing:2px;
                  text-transform:uppercase;
                "
              >
                ${escapeHtml(eyebrow)}
              </p>

              <h1
                style="
                  margin:0;
                  color:#ffffff;
                  font-size:26px;
                  line-height:1.3;
                "
              >
                ${escapeHtml(title)}
              </h1>
            </div>

            <div style="padding:32px">
              ${content}
            </div>

            <div
              style="
                padding:18px 32px;
                background:#f7f9fc;
                border-top:1px solid #e5e7eb;
              "
            >
              <p
                style="
                  margin:0;
                  color:#8f8f8f;
                  font-size:12px;
                  line-height:1.6;
                  text-align:center;
                "
              >
                Steelbuild Infra Projects Limited<br />
                Driven By Commitment and Quality<br />
                steelbuildinfra.com
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function createDetailRow(
  label: string,
  value: string,
  options?: {
    email?: boolean;
    phone?: boolean;
  },
): string {
  const safeLabel = escapeHtml(label);
  const safeValue = escapeHtml(value);

  let renderedValue = safeValue;

  if (options?.email) {
    renderedValue = `
      <a
        href="mailto:${safeValue}"
        style="color:#c21119;text-decoration:none;"
      >
        ${safeValue}
      </a>
    `;
  }

  if (options?.phone) {
    renderedValue = `
      <a
        href="tel:${safeValue}"
        style="color:#1b3f68;text-decoration:none;"
      >
        ${safeValue}
      </a>
    `;
  }

  return `
    <tr>
      <td
        style="
          width:155px;
          padding:13px 0;
          color:#6b7280;
          font-size:14px;
          font-weight:700;
          vertical-align:top;
          border-bottom:1px solid #eeeeee;
        "
      >
        ${safeLabel}
      </td>

      <td
        style="
          padding:13px 0;
          color:#111827;
          font-size:14px;
          line-height:1.6;
          vertical-align:top;
          border-bottom:1px solid #eeeeee;
        "
      >
        ${renderedValue}
      </td>
    </tr>
  `;
}

export function createMessageBox(
  heading: string,
  message: string,
): string {
  const safeHeading = escapeHtml(heading);
  const safeMessage = escapeHtml(message).replaceAll(
    "\n",
    "<br />",
  );

  return `
    <div style="margin-top:28px">
      <p
        style="
          margin:0 0 12px;
          color:#1b3f68;
          font-size:15px;
          font-weight:700;
        "
      >
        ${safeHeading}
      </p>

      <div
        style="
          padding:20px;
          color:#374151;
          font-size:14px;
          line-height:1.8;
          background:#f7f9fc;
          border-left:4px solid #c21119;
          border-radius:8px;
        "
      >
        ${safeMessage}
      </div>
    </div>
  `;
}

export { escapeHtml };