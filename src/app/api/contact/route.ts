import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.EMAIL_TO;

    if (!host || !user || !pass || !to) {
      return NextResponse.json(
        { error: "Email server not configured" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `Portfolio message from ${name}`;
    const text = `From: ${name} <${email}>\n\n${message}`;

    await transporter.sendMail({
      from: user,
      to,
      subject,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message || "Unknown error" },
      { status: 500 },
    );
  }
}
