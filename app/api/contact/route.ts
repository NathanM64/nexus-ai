import { NextRequest, NextResponse } from 'next/server';
import { contactSchema } from '@/lib/validations/contact';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.format() },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = validationResult.data;

    // Here you would typically:
    // 1. Send an email using a service like Resend, SendGrid, or Nodemailer
    // 2. Store the message in a database
    // 3. Send to a CRM or notification service

    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, subject, message });

    // TODO: Implement email sending
    // Example with Resend:
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'your-email@example.com',
    //   subject: `New Contact Form: ${subject}`,
    //   html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    // });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
