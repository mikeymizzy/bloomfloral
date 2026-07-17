import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  eventDate?: string;
  eventType?: string;
  message?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const name = clean(payload.name, 100);
    const email = clean(payload.email, 200);
    const phone = clean(payload.phone, 50);
    const eventDate = clean(payload.eventDate, 50);
    const eventType = clean(payload.eventType, 100);
    const message = clean(payload.message, 3000);
    const website = clean(payload.website, 200);

    // Silently accept bot submissions that fill the hidden honeypot field.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !emailPattern.test(email) || !phone || !eventType || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields with valid information." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const password = process.env.SMTP_PASSWORD;
    const recipient = process.env.CONTACT_TO || user;

    if (!host || !user || !password || !recipient) {
      console.error("Contact form SMTP environment variables are incomplete.");
      return NextResponse.json(
        { error: "Email delivery is not configured yet. Please contact us directly." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: process.env.SMTP_SECURE !== "false",
      auth: { user, pass: password },
    });

    await transporter.sendMail({
      from: `Majestic Florist Website <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `New ${eventType} enquiry from ${name}`,
      text: [
        "A new enquiry was submitted through the Majestic Florist website.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Event type: ${eventType}`,
        `Event date: ${eventDate || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json(
      { error: "We could not send your enquiry. Please try again or contact us directly." },
      { status: 500 },
    );
  }
}

