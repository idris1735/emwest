export const EMAIL_CONFIG = {
  from: 'EMWA 2027 <noreply@emwestafrica.com>',
  recipients: {
    exhibitor: 'info@zenithepl.com',
    visitor: 'info@emwestafrica.com',
    speaker: 'info@zenithexhibitions.com',
    sponsor: 'info@zenithexhibitions.com',
    contact: 'info@zenithexhibitions.com',
  },
} as const;

export type FormType = keyof typeof EMAIL_CONFIG.recipients;

export interface FormData {
  type: FormType;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  [key: string]: string | undefined;
}

/** Generate a clean HTML email for the EMWA team (internal notification) */
export function internalEmailHtml(data: FormData): string {
  const fields = Object.entries(data)
    .filter(([k]) => k !== 'type')
    .map(([key, val]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase());
      return `<tr><td style="color:#71717A;padding:8px 0;font-size:13px;text-transform:uppercase;letter-spacing:0.05em;">${label}</td><td style="color:#F5F5F5;padding:8px 0;font-size:15px;font-weight:500;">${val || '—'}</td></tr>`;
    })
    .join('');

  const typeLabel = data.type.charAt(0).toUpperCase() + data.type.slice(1);

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#060D1F;font-family:system-ui,-apple-system,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#060D1F;padding:40px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#0F2347;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#F7941D,#FBB040);padding:32px 40px;text-align:center;">
    <div style="font-size:28px;font-weight:800;color:#060D1F;letter-spacing:-0.02em;">EMWA 2027</div>
    <div style="font-size:11px;color:rgba(6,13,31,0.7);text-transform:uppercase;letter-spacing:0.2em;margin-top:4px;">Equipment &amp; Manufacturing West Africa</div>
  </td></tr>
  <!-- Badge -->
  <tr><td style="padding:24px 40px 0;">
    <span style="display:inline-block;background:rgba(247,148,29,0.15);color:#F7941D;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;padding:6px 14px;border-radius:99px;">New ${typeLabel} Enquiry</span>
  </td></tr>
  <!-- Fields -->
  <tr><td style="padding:20px 40px;">
    <table width="100%" cellpadding="0" cellspacing="0">${fields}</table>
  </td></tr>
  <!-- Footer -->
  <tr><td style="padding:24px 40px;border-top:1px solid rgba(255,255,255,0.06);">
    <div style="color:#52525B;font-size:11px;text-align:center;">
      EMWA 2027 · Landmark Centre, Lagos · 25–27 May 2027<br>
      Organised by Zenith Exhibitions
    </div>
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

/** Generate a clean HTML confirmation email for the user */
export function userConfirmationHtml(data: FormData): { subject: string; html: string } {
  const templates: Record<FormType, { subject: string; title: string; body: string; detail: string }> = {
    exhibitor: {
      subject: 'Your EMWA 2027 Exhibitor Enquiry — Received ✓',
      title: 'Stand Enquiry Received',
      body: 'Thank you for your interest in exhibiting at EMWA 2027. Our sales team will review your enquiry and contact you within <strong>24 hours</strong> to discuss stand options, pricing, and availability.',
      detail: 'You can also reach us directly at <a href="tel:+2348091155699" style="color:#F7941D;">+234 809 115 5699</a> or <a href="mailto:info@zenithepl.com" style="color:#F7941D;">info@zenithepl.com</a>.',
    },
    visitor: {
      subject: 'Welcome to EMWA 2027 — Registration Confirmed ✓',
      title: 'Registration Confirmed',
      body: 'Your free visitor pass for <strong>EMWA 2027</strong> has been registered. Show this email at the registration desk for fast-track badge collection.',
      detail: '<strong>Event:</strong> 25–27 May 2027<br><strong>Venue:</strong> Landmark Centre, Victoria Island, Lagos<br><strong>Hours:</strong> 10:00 AM – 5:00 PM daily (last day closes 3:30 PM)<br><br>Professional visitors only. No under-16s admitted.',
    },
    speaker: {
      subject: 'Your EMWA 2027 Speaker Application — Received ✓',
      title: 'Speaker Application Received',
      body: 'Thank you for applying to speak at EMWA 2027. Our programme team will review your proposed talk and respond within <strong>5 business days</strong>.',
      detail: 'For any questions, contact <a href="mailto:info@zenithexhibitions.com" style="color:#F7941D;">info@zenithexhibitions.com</a>.',
    },
    sponsor: {
      subject: 'Your EMWA 2027 Sponsorship Enquiry — Received ✓',
      title: 'Sponsorship Enquiry Received',
      body: 'Thank you for your interest in sponsoring EMWA 2027. Our sponsorship team will contact you within <strong>24 hours</strong> to discuss a custom package tailored to your brand objectives.',
      detail: 'You can also reach us directly at <a href="tel:+2347033623685" style="color:#F7941D;">+234 703 362 3685</a>.',
    },
    contact: {
      subject: 'Your EMWA 2027 Enquiry — Received ✓',
      title: 'Message Received',
      body: 'Thank you for reaching out to the EMWA team. We aim to respond to all enquiries within <strong>24 hours</strong> on business days.',
      detail: '',
    },
  };

  const t = templates[data.type];

  return {
    subject: t.subject,
    html: `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#060D1F;font-family:system-ui,-apple-system,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#060D1F;padding:40px 0;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="background:#0F2347;border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,0.08);">
  <!-- Header -->
  <tr><td style="background:linear-gradient(135deg,#F7941D,#FBB040);padding:36px 40px;text-align:center;">
    <div style="font-size:30px;font-weight:800;color:#060D1F;letter-spacing:-0.02em;">EMWA 2027</div>
  </td></tr>
  <!-- Checkmark -->
  <tr><td style="padding:32px 40px 0;text-align:center;">
    <div style="width:56px;height:56px;border-radius:50%;background:rgba(247,148,29,0.12);border:2px solid rgba(247,148,29,0.3);display:inline-flex;align-items:center;justify-content:center;">
      <svg width="24" height="24" viewBox="0 0 28 28" fill="none"><path d="M5 14l7 7L23 7" stroke="#F7941D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </div>
  </td></tr>
  <!-- Title -->
  <tr><td style="padding:16px 40px 0;text-align:center;">
    <div style="font-size:22px;font-weight:700;color:#F5F5F5;">${t.title}</div>
  </td></tr>
  <!-- Body -->
  <tr><td style="padding:16px 40px 8px;text-align:center;">
    <div style="color:#A1A1AA;font-size:14px;line-height:1.7;">${t.body}</div>
  </td></tr>
  <!-- Detail -->
  ${t.detail ? `<tr><td style="padding:8px 40px 24px;text-align:center;"><div style="color:#71717A;font-size:13px;line-height:1.7;">${t.detail}</div></td></tr>` : ''}
  <!-- Divider -->
  <tr><td style="padding:0 40px;"><div style="border-top:1px solid rgba(255,255,255,0.06);"></div></td></tr>
  <!-- Footer -->
  <tr><td style="padding:20px 40px;text-align:center;">
    <div style="color:#52525B;font-size:11px;">
      EMWA 2027 · Landmark Centre, Lagos · 25–27 May 2027<br>
      Organised by <a href="https://emwestafrica.com" style="color:#71717A;text-decoration:none;">Zenith Exhibitions</a>
    </div>
  </td></tr>
</table>
</td></tr></table>
</body></html>`,
  };
}
