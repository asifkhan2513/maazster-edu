"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/app/common/logo.png";
import { PATH } from "@/app/common/constant";

// Define constants outside the component to prevent re-creation on every render.
const navItems = [
    { label: "HOME", href: PATH.HOME },
    { label: "COURSES", href: PATH.COURSES },
    { label: "PLANS", href: PATH.PLANS },
    { label: "TESTIMONIALS", href: PATH.TESTIMONIALS },
    { label: "PROJECTS", href: PATH.PROJECTS },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        // The unnecessary wrapper div has been removed. The nav is the top-level element.
        <nav className="bg-white shadow-md w-full top-0 z-50 fixed">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href={PATH.HOME} className="flex items-center space-x-2">
                    <Image
                        src={logo}
                        width={150}
                        height={40}
                        alt="Maazster Logo"
                        className="h-10 w-auto"
                        loading="lazy"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm font-semibold hover:text-orange-500 transition-colors ${pathname === item.href ? "text-orange-500" : "text-black"
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}

                    <Link
                        href={PATH.CONTACT_US}
                        className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-black"
                    aria-label="Toggle menu" // Add aria-label for accessibility
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="flex flex-col px-6 pb-4 space-y-4 pt-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)} // Close menu on click
                                className="text-sm font-medium text-black hover:text-orange-500"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="tel:+919214588441"
                            onClick={() => setIsOpen(false)}
                            className="text-sm font-medium text-orange-500 hover:text-orange-600"
                        >
                            📞 Call: +91 9214588441
                        </Link>
                        {/* FIXED: Also corrected the mobile contact button to be a Link */}
                        <Link
                            href={PATH.CONTACT_US}
                            onClick={() => setIsOpen(false)}
                            className="bg-orange-400 text-white text-center px-4 py-2 rounded-full hover:bg-orange-500 transition"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;