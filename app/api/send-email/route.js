// // // app/api/send-email/route.js

// // import { NextResponse } from "next/server";
// // import { Resend } from "resend";

// // const resend = new Resend(process.env.RESEND_API_KEY);
// // const toEmail = process.env.TO_EMAIL;

// // export async function POST(req) {
// //   try {
// //     const body = await req.json();
// //     const { firstName, lastName, email, phone, message, courses } = body;

// //     // --- Validation ---
// //     if (!firstName || !lastName || !email || !phone || !message) {
// //       return NextResponse.json(
// //         { error: "All fields except courses are required" },
// //         { status: 400 }
// //       );
// //     }

// //     // --- Format the courses for the email ---
// //     const coursesText =
// //       courses.length > 0 ? courses.join(", ") : "None selected";

// //     const data = await resend.emails.send({
// //       from: "Contact Form <onboarding@resend.dev>",
// //       to: [toEmail],
// //       subject: `New Inquiry from ${firstName} ${lastName}`,
// //       reply_to: email,
// //       text: `You have a new message from your website contact form.

// // Name: ${firstName} ${lastName}
// // Email: ${email}
// // Phone: ${phone}

// // Message:
// // ${message}

// // Selected Courses: ${coursesText}
// //       `,
// //     });

// //     return NextResponse.json(data);
// //   } catch (error) {
// //     console.error(error); // Log the error for debugging
// //     return NextResponse.json(
// //       { error: "An error occurred while sending the email." },
// //       { status: 500 }
// //     );
// //   }
// // }

// // app/api/send-email/route.js

// // app/api/send-email/route.js

// // app/api/send-email/route.js

// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// // This line should already be here
// const resend = new Resend(process.env.RESEND_API_KEY);

// const toEmail = process.env.TO_EMAIL;

// console.log(resend, toEmail);
// export async function POST(req) {
//   try {
//     // --- ADD THIS LINE FOR DEBUGGING ---
//     console.log("🔑 [API] Key being used:", process.env.RESEND_API_KEY);
//     // ------------------------------------

//     const body = await req.json();
//     console.log("✅ [API] Received request body:", body);

//     const { firstName, lastName, email, phone, message, courses } = body;

//     // ... the rest of your code remains the same ...

//     console.log("✅ [API] Sending email to:", toEmail);

//     const data = await resend.emails.send({
//       // ...
//       from: "Contact Form <onboarding@resend.dev>",
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
//       <p>You have a new message from your website contact form.</p>
//       <p>Name: ${firstName} ${lastName}</p>
//       <p>Email: ${email}</p>
//       <p>Phone: ${phone}</p>
//       <p>Message: ${message}</p>
//       <p>Selected Courses: ${coursesText}</p>
//       `,
//     });

//     console.log("✅ [API] Resend response:", data);

//     if (data.error) {
//       console.error("❌ [API] Resend returned an error:", data.error);
//       return NextResponse.json({ error: data.error.message }, { status: 500 });
//     }

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("❌ [API] An unexpected error occurred:", error);
//     return NextResponse.json(
//       { error: "An unexpected error occurred." },
//       { status: 500 }
//     );
//   }
// }

// app/api/send-email/route.js

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Use this if you are still testing with a hardcoded key
// const resend = new Resend('re_YourApiKeyHere');

// Use this for production (reading from .env.local)
const resend = new Resend(process.env.RESEND_API_KEY);

const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, message, courses } = body;

    // --- THIS IS THE MISSING LINE ---
    // It formats the courses array into a readable string.
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

Selected Courses: ${coursesText}`, // Now this variable is defined
    });

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    // Check if it's a ReferenceError and provide a specific message
    if (error instanceof ReferenceError) {
      console.error("❌ [API] Reference Error:", error);
      return NextResponse.json(
        { error: `A server-side variable was not defined: ${error.message}` },
        { status: 500 }
      );
    }
    console.error("❌ [API] An unexpected error occurred:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
