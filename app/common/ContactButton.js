// "use client";
// import Link from "next/link";
// import { MessageCircle } from "lucide-react";

// const ContactButton = ({ className = "" }) => {
//     return (
//         <Link
//             href="/contactus"
//             className={`fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group ${className}`}
//             aria-label="Contact Us"
//         >
//             <MessageCircle className="w-6 h-6" />
//             <span className="ml-2 hidden group-hover:inline-block whitespace-nowrap">
//                 Contact Us
//             </span>
//         </Link>
//     );
// };

// export default ContactButton;
"use client";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

const ContactButton = ({ className = "" }) => {
  return (
    <Link href="/contactus" legacyBehavior passHref>
      <a
        className={`fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group ${className}`}
        aria-label="Contact Us"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="ml-2 hidden group-hover:inline-block whitespace-nowrap">
          Contact Us
        </span>
      </a>
    </Link>
  );
};

export default ContactButton;
