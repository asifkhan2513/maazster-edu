// app/api/send-email/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message, courses } = body;

    // --- Validation ---
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "All fields except courses are required" },
        { status: 400 }
      );
    }

    // --- Format the courses for the email ---
    const coursesText =
      courses.length > 0 ? courses.join(", ") : "None selected";

    const data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New Inquiry from ${firstName} ${lastName}`,
      reply_to: email,
      text: `You have a new message from your website contact form.
      
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

Message:
${message}

Selected Courses: ${coursesText}
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      { error: "An error occurred while sending the email." },
      { status: 500 }
    );
  }
}
