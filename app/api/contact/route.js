import nodemailer from 'nodemailer';
import validator from 'validator';
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '../../../models/Contact';

function getSmtpConfig() {
  if (process.env.MAIL_DRIVER === 'json' || String(process.env.DEMO_EMAIL || '').toLowerCase() === 'true') {
    return { jsonTransport: true };
  }

  if (process.env.SMTP_URL) {
    return { url: process.env.SMTP_URL };
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true' || port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    const missing = [
      ['SMTP_HOST', host],
      ['SMTP_USER', user],
      ['SMTP_PASS', pass],
    ]
      .filter(([, v]) => !v)
      .map(([k]) => k)
      .join(', ');
    const error = new Error(`SMTP configuration missing required env: ${missing}`);
    error.code = 'SMTP_CONFIG_MISSING';
    throw error;
  }

  if (['localhost', '127.0.0.1', '::1'].includes(host)) {
    console.warn('SMTP_HOST points to localhost. Ensure a local SMTP server is running or set real provider envs.');
  }

  return {
    host,
    port,
    secure,
    auth: { user, pass },
  };
}

function createTransport() {
  const config = getSmtpConfig();
  return nodemailer.createTransport(config);
}

async function sendContactEmails(transporter, { name, email, message, entryId }) {
  const from = process.env.MAIL_FROM || process.env.SMTP_USER || 'no-reply@example.com';
  const companyEmail = process.env.COMPANY_EMAIL || process.env.ADMIN_EMAIL || from;

  const safeMessage = String(message).replace(/</g, '&lt;');

  // 1. Create the email to the user
  const userMail = {
    from,
    to: email,
    subject: 'We received your message – SayyedEngWorks',
    html: `
      <p>Hi ${name},</p>
      <p>Thanks for contacting SayyedEngWorks. We received your message and will get back to you soon.</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${safeMessage}</blockquote>
      <p>Regards,<br/>SayyedEngWorks Team</p>
      <hr />
      <p style="font-size: smaller; color: #666;">This is an automated message. Please do not reply to this email.</p>
    `,
  };

  // 2. Create the notification email to the company
  const adminMail = {
    from,
    to: companyEmail,
    subject: `New contact form submission from ${name}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${safeMessage}</blockquote>
      // <p><em>Stored with id: ${entryId}</em></p>
      <hr />
      <p style="font-size: smaller; color: #666;">This is an automated notification. Please do not reply to this email.</p>
    `,
  };

  // Send both emails in parallel
  const [userMailInfo, adminMailInfo] = await Promise.all([
    transporter.sendMail(userMail),
    transporter.sendMail(adminMail),
  ]);

  if (transporter.options && transporter.options.jsonTransport) {
    try {
      console.log('User confirmation email (JSON):', JSON.parse(userMailInfo.message));
      console.log('Admin notification email (JSON):', JSON.parse(adminMailInfo.message));
    } catch (e) {
      console.log('JSON transport message:', userMailInfo, adminMailInfo);
    }
  } else {
    console.log('User confirmation email sent:', userMailInfo && userMailInfo.response);
    console.log('Admin notification email sent:', adminMailInfo && adminMailInfo.response);
  }
}

// Mongoose connection helper
async function connectDB() {
  if (mongoose.connections && mongoose.connections.length > 0 && mongoose.connections[0].readyState === 1) {
    return;
  }
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.warn('MONGODB_URI not set. Database operations will be skipped.');
    return null;
  }
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return null;
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body || {};
    const errors = [];
    if (!name || validator.isEmpty(String(name), { ignore_whitespace: true })) {
      errors.push('Name is required.');
    }
    if (!email || !validator.isEmail(String(email || ''))) {
      errors.push('A valid email is required.');
    }
    if (!message || validator.isEmpty(String(message), { ignore_whitespace: true })) {
      errors.push('Message is required.');
    }
    if (errors.length > 0) {
      return NextResponse.json({ ok: false, error: errors.join(' ') }, { status: 400 });
    }

    // Connect to database if MONGODB_URI is set
    let entry = null;
    let entryId = Date.now().toString(); // Fallback ID if DB not available
    try {
      await connectDB();
      if (mongoose.connection.readyState === 1) {
        entry = await Contact.create({ name, email, message });
        entryId = entry._id || entryId;
      }
    } catch (dbError) {
      console.error('Database save error:', dbError);
      // Continue with email sending even if DB save fails
    }

    let transporter;
    try {
      transporter = createTransport();
      if (!transporter.options || !transporter.options.jsonTransport) {
        await transporter.verify();
      }
    } catch (e) {
      console.error('Email transport setup failed', e);
      if (e && e.code === 'SMTP_CONFIG_MISSING') {
        return NextResponse.json({ ok: false, error: 'Email not configured. Please set SMTP env variables.' }, { status: 500 });
      }
      return NextResponse.json({ ok: false, error: 'Email service not available. Please try again later.' }, { status: 502 });
    }

    try {
      await sendContactEmails(transporter, { name, email, message, entryId });
      return NextResponse.json({ ok: true, id: entryId });
    } catch (e) {
      console.error('Failed sending emails', e);
      return NextResponse.json({ ok: true, id: entryId, warning: 'Saved, but failed to send email. We will follow up.' }, { status: 202 });
    }
  } catch (err) {
    console.error('POST /api/contact error', err);
    return NextResponse.json({ ok: false, error: 'Internal error' }, { status: 500 });
  }
}