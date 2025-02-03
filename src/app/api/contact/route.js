import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // Parse the request body
    const { name, email, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // Email details
    const mailOptions = {
      from: email, // Sender (your Gmail)
      to: process.env.EMAIL_USER, // Receiver (your Gmail)
      replyTo: email, // Allows you to reply to the sender
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Error sending email" },
      { status: 500 }
    );
  }
}
