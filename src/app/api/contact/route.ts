import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Creating reusable transporter - using gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail address
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    // Sending email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender info
      to: process.env.EMAIL_TO, // receiving email
      subject: subject,
      text: message,
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background: #fafafa;">
        <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; margin-bottom: 20px;">
          New Contact Message
        </h2>
        <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3498db; text-decoration: none;">${email}</a></p>
        <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject}</p>
        <div style="margin-top: 20px; padding: 15px; background: #fff; border-radius: 6px; border: 1px solid #ddd;">
          <p style="margin: 0; white-space: pre-line;">${message}</p>
        </div>
        <p style="margin-top: 30px; font-size: 12px; color: #777;">This message was sent via your website contact form.</p>
      </div>
    `,
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
