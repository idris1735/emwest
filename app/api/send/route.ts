import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EMAIL_CONFIG, internalEmailHtml, userConfirmationHtml, type FormType } from '@/lib/email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...formData } = body as { type: FormType; name: string; email: string };

    // Validate required fields
    if (!type || !formData.name || !formData.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const recipient = EMAIL_CONFIG.recipients[type];
    if (!recipient) {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // 1. Send internal notification to the EMWA team
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: recipient,
      subject: `New ${type} enquiry from ${formData.name}`,
      html: internalEmailHtml({ type, ...formData }),
    });

    // 2. Send confirmation email to the user
    const confirmation = userConfirmationHtml({ type, ...formData });
    await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: formData.email,
      subject: confirmation.subject,
      html: confirmation.html,
    }).catch(() => {
      // Don't fail the whole request if user email bounces
      console.warn(`Could not send confirmation to ${formData.email}`);
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
