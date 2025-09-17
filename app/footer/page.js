import Link from "next/link";
import { PATH } from "@/app/common/constant";
import {
    FaFacebook,
    FaTwitter,
    FaLinkedin,
    FaInstagram,
    FaYoutube,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-400">Maazster Edu</h3>
                        <p className="text-gray-300 text-sm">
                            Empowering learners with cutting-edge technology education.
                            Join thousands of students who have transformed their careers with us.
                        </p>
                        <div className="flex space-x-4">
                            <FaFacebook className="text-blue-500 hover:text-blue-400 cursor-pointer text-xl" />
                            <FaTwitter className="text-blue-400 hover:text-blue-300 cursor-pointer text-xl" />
                            <FaLinkedin className="text-blue-600 hover:text-blue-500 cursor-pointer text-xl" />
                            <FaInstagram className="text-pink-500 hover:text-pink-400 cursor-pointer text-xl" />
                            <FaYoutube className="text-red-500 hover:text-red-400 cursor-pointer text-xl" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={PATH.HOME} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={PATH.COURSES} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link href={PATH.PROJECTS} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link href={PATH.PLANS} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    Pricing Plans
                                </Link>
                            </li>
                            <li>
                                <Link href={PATH.TESTIMONIALS} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-400">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href={PATH.TERMS_AND_CONDITIONS} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href={PATH.PRIVACY_POLICY} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href={PATH.FAQ} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href={PATH.SUPPORT} className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                                    Support
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-orange-400">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-orange-400 text-sm" />
                                <a href="tel:+919214588441" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
                                    +91 9214588441
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-orange-400 text-sm" />
                                <span className="text-gray-300 text-sm">info@maazsteredu.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-orange-400 text-sm mt-1" />
                                <span className="text-gray-300 text-sm">
                                    D- 1099, Sector 5, D Block, Indira Nagar,<br />
                                    Lucknow, Uttar Pradesh 226016

                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm ">
                            © 2025 Maazster Tech GENX PVT LTD. All Rights Reserved.
                        </p>
                        <p className="text-orange-400 text-sm pl-24">
                            Powered By Maazstertech.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;