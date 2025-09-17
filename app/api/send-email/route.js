import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message, courses } = body;

    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields except courses are required." },
        { status: 400 }
      );
    }

    const coursesText =
      Array.isArray(courses) && courses.length > 0
        ? courses.join(", ")
        : "None selected";

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: `New Inquiry from ${firstName} ${lastName}`,
      text: `
You have a new message from your website contact form.

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Message:
${message}
Selected Courses: ${coursesText}
      `,
      html: `
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br />${message}</p>
        <p><strong>Selected Courses:</strong> ${coursesText}</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("✅ Email sent:", info.response);

    return NextResponse.json({ success: true, info }, { status: 200 });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while sending the email." },
      { status: 500 }
    );
  }
}
