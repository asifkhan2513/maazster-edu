// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// // Initialize Resend with API key from .env.local
// const resend = new Resend(process.env.RESEND_API_KEY);

// // Read recipient email from .env.local
// const toEmail = process.env.TO_EMAIL;

// export async function POST(req) {
//   try {
//     // Log for debugging
//     console.log("✅ Received POST request");

//     // Parse request body
//     const body = await req.json();
//     const { firstName, lastName, email, phone, message, courses } = body;

//     // Log body
//     console.log("📝 Body:", body);

//     // Validation
//     if (!firstName || !lastName || !email || !phone || !message) {
//       return NextResponse.json(
//         { error: "All fields except courses are required." },
//         { status: 400 }
//       );
//     }

//     // Format courses
//     const coursesText =
//       Array.isArray(courses) && courses.length > 0
//         ? courses.join(", ")
//         : "None selected";

//     // Send email using Resend
//     const data = await resend.emails.send({
//       from: "Contact Form <asifkhan251301@gmail.com>",

//       to: [toEmail],
//       subject: `New Inquiry from ${firstName} ${lastName}`,
//       reply_to: email,
//       text: `You have a new message from your website contact form.

// Name: ${firstName} ${lastName}
// Email: ${email}
// Phone: ${phone}

// Message:
// ${message}

// Selected Courses: ${coursesText}
//       `,
//       html: `
//         <p>You have a new message from your website contact form.</p>
//         <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         <p><strong>Selected Courses:</strong> ${coursesText}</p>
//       `,
//     });

//     // Handle errors from Resend
//     if (data.error) {
//       console.error("❌ Resend error:", data.error);
//       return NextResponse.json({ error: data.error.message }, { status: 500 });
//     }

//     // Return success response
//     console.log("✅ Email sent successfully:", data);
//     return NextResponse.json({ success: true, data }, { status: 200 });
//   } catch (error) {
//     // Catch unexpected server errors
//     console.error("❌ Unexpected server error:", error);

//     // Handle ReferenceErrors explicitly
//     if (error instanceof ReferenceError) {
//       return NextResponse.json(
//         {
//           error: `Reference error: ${error.message}`,
//         },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(
//       { error: "An unexpected error occurred." },
//       { status: 500 }
//     );
//   }
// }

// app/api/send-email/route.js

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
