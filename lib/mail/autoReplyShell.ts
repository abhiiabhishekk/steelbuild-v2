/** Customer-facing acknowledgement shell only. Internal email templates are unchanged. */
export function createAutoReplyShell({ badge, title, content }: {
  badge: string;
  title: string;
  content: string;
}): string {
  const safe = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${safe(title)}</title></head>
  <body style="margin:0;padding:0;background:#eef2f7;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#eef2f7;"><tr><td align="center" style="padding:32px 14px;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:720px;border:1px solid #dfe5ec;border-radius:24px;background:#ffffff;overflow:hidden;">
  <tr><td style="padding:30px;background:#1b3f68;"><p style="margin:0;color:#C21119;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">STEELBUILD INFRA PROJECTS</p>
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin:12px 0;"><tr><td style="padding:7px 12px;background:#C21119;border-radius:16px;color:#ffffff;font-size:10px;font-weight:700;letter-spacing:0.8px;">${safe(badge)}</td></tr></table>
  <h1 style="margin:9px 0 0;color:#ffffff;font-size:28px;line-height:1.3;">${safe(title)}</h1></td></tr>
  <tr><td style="padding:32px 30px;">${content}</td></tr>
  <tr><td align="center" style="padding:22px 30px;border-top:1px solid #e5e7eb;background:#f8fafc;"><p style="margin:0;color:#6b7280;font-size:12px;line-height:1.7;">This is an automated acknowledgement from Steelbuild Infra Projects Limited.</p><p style="margin:5px 0 0;color:#1b3f68;font-size:12px;font-weight:700;">steelbuildinfra.com</p></td></tr>
  </table></td></tr></table></body></html>`;
}
