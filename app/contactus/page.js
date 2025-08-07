// import React from "react";
// import Navbar from "@/app/navbar/page";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Linkedin,
//   Twitter,
//   Instagram,
//   Youtube,
// } from "lucide-react";
// import Link from "next/link";

// export const metadata = {
//   title: "Maazster Edu :Contact us",
//   description: "this is course page",
// };

// const page = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="bg-gray-100 py-16 px-4 mt-6">
//         <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
//           {/* Left Box - Contact Info + Map */}
//           <div className="bg-orange-500 text-white p-6 md:w-1/2 flex flex-col justify-between">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d842.7386044920298!2d80.9937006033458!3d26.876994974556947!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3f7414b12f7%3A0xb1b9d84562a4be65!2sMaazster%20Tech!5e1!3m2!1sen!2sin!4v1754208911992!5m2!1sen!2sin"
//               width="600"
//               height="450"
//               className=""
//               allowfullscreen=""
//               loading="lazy"
//               referrerpolicy="no-referrer-when-downgrade"
//             ></iframe>
//             <div>
//               <h2 className="text-lg font-bold mb-2">Contact Information</h2>
//               <p className="mb-4 text-sm">
//                 We would love to hear from you. We are here to help you with
//                 your project.
//               </p>
//               <div className="space-y-2 text-sm">
//                 <div className="flex items-center">
//                   <MapPin className="w-4 h-4 mr-2" />
//                   Indira nagar, Lucknow, 226016
//                 </div>
//                 <div className="flex items-center">
//                   <Mail className="w-4 h-4 mr-2" />
//                   edutech@maazstertech.in
//                 </div>
//                 <div className="flex items-center">
//                   <Phone className="w-4 h-4 mr-2" />
//                   +91 9214588441
//                 </div>
//               </div>
//               {/* Social Links */}
//               <div className="flex gap-4 mt-4 text-white">
//                 <Link href={"https://www.instagram.com"}>
//                   <Linkedin />
//                 </Link>
//                 <Link href={"twitter"}>
//                   <Twitter />
//                 </Link>
//                 <Link href={"instgram"}>
//                   <Instagram />
//                 </Link>
//                 <Link href={"youtube"}>
//                   <Youtube />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Right Box - Contact Form */}
//           <div className="p-8 md:w-1/2 bg-white">
//             <h2 className="text-xl font-semibold mb-6">
//               We’re Just One Message Away from{" "}
//               <span className="text-orange-500">Helping You Grow.</span>
//             </h2>
//             <form className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="First Name"
//                   className="border-b outline-none py-2 px-1"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Last Name"
//                   className="border-b outline-none py-2 px-1"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="border-b outline-none py-2 px-1"
//                 />
//                 <input
//                   type="tel"
//                   placeholder="Phone No"
//                   className="border-b outline-none py-2 px-1"
//                 />
//               </div>
//               <textarea
//                 rows="3"
//                 placeholder="Type your message..."
//                 className="w-full border-b outline-none py-2 px-1"
//               ></textarea>

//               <div>
//                 <label className="block mb-2 font-medium">Courses</label>
//                 <div className="grid grid-cols-2 gap-2 text-orange-600 text-sm">
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     UX/UI
//                   </label>
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     Data Analytics
//                   </label>
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     Java
//                   </label>
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     MERN Stack
//                   </label>
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     AI/ML
//                   </label>
//                   <label>
//                     <input type="checkbox" className="mr-2" />
//                     Digital Marketing
//                   </label>
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full font-semibold hover:opacity-90 transition"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default page;


// app/contact/page.js
import React from "react";
import Navbar from "@/app/navbar/page";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import ContactForm from "./ContactForm"; // <-- IMPORT THE NEW COMPONENT

export const metadata = {
  title: "Maazster Edu :Contact us",
  description: "this is course page",
};

const Page = () => { // Changed name to 'Page' to avoid conflict with imported 'page'
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16 px-4 mt-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row overflow-hidden">
          {/* Left Box - Contact Info + Map */}
          <div className="bg-orange-500 text-white p-6 md:w-1/2 flex flex-col justify-between">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.981882249533!2d80.9990888750439!3d26.87222537666904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957648316c021%3A0x4a45f94191316b1!2sIndira%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722892929452!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div>
              <h2 className="text-lg font-bold mb-2">Contact Information</h2>
              <p className="mb-4 text-sm">
                We would love to hear from you. We are here to help you with
                your project.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Indira nagar, Lucknow, 226016
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  edutech@maazstertech.in
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9214588441
                </div>
              </div>
              {/* Social Links */}
              <div className="flex gap-4 mt-4 text-white">
                <Link href={"https://www.instagram.com"}>
                  <Linkedin />
                </Link>
                <Link href={"twitter"}>
                  <Twitter />
                </Link>
                <Link href={"instgram"}>
                  <Instagram />
                </Link>
                <Link href={"youtube"}>
                  <Youtube />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Box - Contact Form */}
          {/* REPLACE the old form with the new component */}
          <ContactForm />

        </div>
      </section>
    </>
  );
};

export default Page; // Changed name to 'Page'