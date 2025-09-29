import Image from "next/image";
import Navbar from "@/app/navbar/page";
import Courses from "@/app/courses/page";
import Plans from "@/app/plans/page";
import Banner from "@/app/common/banner.png";
import TestimonialsSection from "@/app/common/TestimonialsSection";
import TypedAnimation from "@/app/components/TypedAnimation";
import { FaUserGroup } from "react-icons/fa6";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import BannerSection from "./banner";
import Link from "next/link";
import { PATH } from "./common/constant";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Mobile Optimized */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50 pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
            {/* Left Content - Mobile First */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6 order-2 lg:order-1">
              <p className="text-orange-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide uppercase">
                Welcome to our EduLab
              </p>

              <div className="space-y-2 md:space-y-4">
                <h1 className=" select-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
                  Best Place To Learn
                </h1>

                <div className="mt-3 md:mt-6">
                  <TypedAnimation />
                </div>
              </div>

              <p className="select-none text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                Transform your career with cutting-edge technology education.
                Master MERN Stack, AI, and modern web development with industry
                experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-4 md:pt-6 px-4 lg:px-0">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm md:text-base lg:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <Link href={PATH.COURSES}> Start Learning Now</Link>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>

                <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm md:text-base lg:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <Link href={PATH.PROJECTS}> Watch Demo</Link>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image - Responsive */}
            <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Floating Elements - Hidden on mobile for cleaner look */}
                <div className="hidden md:block absolute -top-10 -left-10 w-16 h-16 lg:w-20 lg:h-20 bg-orange-200 rounded-full opacity-60 animate-pulse"></div>
                <div
                  className="hidden md:block absolute -bottom-10 -right-10 w-12 h-12 lg:w-16 lg:h-16 bg-blue-200 rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="hidden lg:block absolute top-1/2 -right-20 w-12 h-12 bg-green-200 rounded-full opacity-60 animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>

                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src={Banner}
                    alt="Learning Platform Banner"
                    className="w-[350px] h-[300px] sm:w-[300px] sm:h-[360px] md:w-[450px] md:h-[420px] lg:w-[400px] lg:h-[480px] xl:w-[450px] xl:h-[540px] 2xl:w-[500px] 2xl:h-[600px] object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorations */}
        <div className="absolute top-20 left-4 md:left-10 w-1 h-1 md:w-2 md:h-2 bg-orange-400 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-4 md:right-20 w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-40 left-4 md:left-20 w-1 h-1 md:w-2 md:h-2 bg-green-400 rounded-full opacity-60"></div>
      </section>

      {/* Features Section with Stylish Header */}
      <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stylish Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-24">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 relative">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                  Empowering Your
                </span>
                <br />
                <span className="text-gray-900 drop-shadow-lg">
                  Learning Journey
                </span>

                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg"></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8">
              Explore the different ways we can help you learn and grow in tech
              with our comprehensive programs
            </p>
          </div>

          {/* Feature Cards - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl p-6 md:p-8 lg:p-10 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white border border-gray-100">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 group-hover:bg-white group-hover:bg-opacity-20 rounded-2xl flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-blue-500 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-center">
                Online Live Classes
              </h3>
              <p className="text-center text-sm md:text-base leading-relaxed opacity-90">
                Interactive online sessions with real-time Q&A and project-based
                learning, accessible from anywhere in the world.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl p-6 md:p-8 lg:p-10 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white border border-gray-100">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 group-hover:bg-white group-hover:bg-opacity-20 rounded-2xl flex items-center justify-center transition-all duration-300">
                  <FaUserGroup className="text-2xl md:text-3xl text-green-500 group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-center">
                In-Person Workshops
              </h3>
              <p className="text-center text-sm md:text-base leading-relaxed opacity-90">
                Hands-on workshops designed to provide practical experience and
                collaborative learning in a classroom setting.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl p-6 md:p-8 lg:p-10 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white border border-gray-100">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-purple-100 group-hover:bg-white group-hover:bg-opacity-20 rounded-2xl flex items-center justify-center transition-all duration-300">
                  <svg
                    className="w-8 h-8 md:w-10 md:h-10 text-purple-500 group-hover:text-white transition-colors"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-center">
                1-on-1 Mentorship
              </h3>
              <p className="text-center text-sm md:text-base leading-relaxed opacity-90">
                Personalized guidance and support tailored to your learning
                goals, with direct feedback and career advice.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl p-6 md:p-8 lg:p-10 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-600 hover:text-white border border-gray-100">
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100 group-hover:bg-white group-hover:bg-opacity-20 rounded-2xl flex items-center justify-center transition-all duration-300">
                  <ChevronsLeftRightEllipsis className="text-2xl md:text-3xl text-yellow-500 group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-center">
                Custom Course Creation
              </h3>
              <p className="text-center text-sm md:text-base leading-relaxed opacity-90">
                Development of custom courses and learning paths to suit your
                unique needs and interests in technology.
              </p>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-4 md:left-10 w-3 h-3 md:w-4 md:h-4 bg-orange-200 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-4 md:right-10 w-4 h-4 md:w-6 md:h-6 bg-blue-200 rounded-full opacity-30"></div>
      </section>

      {/* Other Sections */}
      <section className="mt-8 md:mt-12 lg:mt-16">
        <Courses />
        <Plans />

        {/* Banner Section with proper spacing */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <BannerSection />
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20">
          <TestimonialsSection />
        </div>

        {/* Contact Section */}
        <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-orange-50 relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Stylish Section Header */}
            <div className="text-center mb-12 md:mb-16 lg:mb-24">
              <div className="inline-block">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 relative">
                  <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                    Get In Touch
                  </span>
                  <br />
                  <span className="text-gray-900 drop-shadow-lg">With Us</span>

                  {/* Decorative underline */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg"></div>
                </h2>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8">
                Ready to start your journey in tech? Contact us today and
                let&apos;s discuss how we can help you achieve your learning
                goals with our comprehensive MERN Full Stack and AI programs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6 text-center">
                  Send us a Message
                </h3>

                <form className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm md:text-base">
                      <option value="">Select a course</option>
                      <option value="mern">MERN Full Stack with AI</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="java">Java Full Stack with AI</option>
                      <option value="data-analytics">
                        Data Analytics with AI
                      </option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="dsa">Data Structures & Algorithms</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none text-sm md:text-base"
                      placeholder="Tell us about your learning goals and how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 md:py-4 px-4 md:px-6 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm md:text-base"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-6 md:space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                          Address
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          D- 1099, Sector 5, D Block, Indira Nagar,
                          <br />
                          Lucknow, Uttar Pradesh 226016
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                          Phone
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          +919214588441
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                          Email
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          <Link
                            href="mailto:info@maazsteredu.com"
                            className="hover:underline"
                          >
                            info@maazsteredu.com
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 md:space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 md:w-6 md:h-6 text-orange-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1 text-sm md:text-base">
                          Office Hours
                        </h4>
                        <p className="text-gray-600 text-sm md:text-base">
                          Monday - Friday: 9:00 AM - 7:00 PM
                        </p>
                        <p className="text-gray-600 text-sm md:text-base">
                          Saturday: 10:00 AM - 5:00 PM
                        </p>
                        <p className="text-gray-600 text-sm md:text-base">
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="p-4 md:p-6 pb-0">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4">
                      Find Us Here
                    </h3>
                  </div>
                  <div className="h-60 md:h-80">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.844476148093!2d80.99153457433755!3d26.876681876668616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3f7414b12f7%3A0xb1b9d84562a4be65!2sMaazster%20Tech!5e0!3m2!1sen!2sin!4v1758262123410!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Maazster Edu Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 md:mt-20 lg:mt-32 text-center">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-6xl mx-auto border border-gray-100">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Why Choose Maazster Edu?
                  </span>
                </h3>
                <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 md:mb-12 max-w-4xl mx-auto">
                  At Maazster Edu, we&apos;re committed to transforming careers
                  through cutting-edge technology education. Our comprehensive
                  MERN Full Stack with AI program combines hands-on learning
                  with industry-relevant projects, ensuring you&apos;re
                  job-ready from day one.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-2 md:mb-3">
                      500+
                    </div>
                    <div className="text-base md:text-lg font-semibold text-gray-700">
                      Students Placed
                    </div>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-2 md:mb-3">
                      95%
                    </div>
                    <div className="text-base md:text-lg font-semibold text-gray-700">
                      Success Rate
                    </div>
                  </div>
                  <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
                    <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-500 mb-2 md:mb-3">
                      50+
                    </div>
                    <div className="text-base md:text-lg font-semibold text-gray-700">
                      Industry Partners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
