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
// Project is now a separate page at /project

export default function Home() {
  return (
    <div className="no-scrollbar overflow-auto  lg:pt-24">
      <Navbar />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 min-h-[300px] lg:min-h-[300px]">
          <div className="w-full lg:w-1/2 relative text-center lg:text-left mb-8 lg:mb-0 z-10">
            {/* <div className="hidden lg:block absolute -top-10 -left-10 opacity-20">
              <Image
                className="h-[150px] w-[150px] xl:h-[200px] xl:w-[200px] object-contain"
                src={leftBanner}
                alt="leftBanner"
                loading="lazy"
              />
            </div> */}
            <p className="text-black text-base sm:text-lg lg:text-xl mb-4 animate-fade-in">
              Welcome to our EduLab
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Best Place To Learn
              <span className="block mt-2">
                <TypedAnimation />
              </span>
            </h1>
            <button className="bg-orange-400 hover:bg-orange-500 text-white text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
              Join Now
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative flex justify-center items-center">
              {/* <div className="hidden lg:block absolute -top-10 -right-10 opacity-20">
                <Image
                  className="h-[150px] w-[150px] xl:h-[200px] xl:w-[200px] object-contain"
                  src={rightBanner}
                  alt="rightBanner"
                />
              </div> */}
              <Image
                src={Banner}
                alt="banner"
                className="w-[200px] h-[320px] sm:w-[250px] sm:h-[400px] md:w-[280px] md:h-[450px] lg:w-[300px] lg:h-[520px] object-contain"
                loading="lazy"
              // priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center mt-12 lg:mt-24 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
            Empowering Your Learning Journey
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center max-w-2xl">
            Explore the different ways we can help you learn and grow in tech
          </p>
        </div>

        {/* card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 mt-8 lg:mt-12">
          {/* <!-- Card 1 --> */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-2xl p-4 sm:p-6 hover:scale-105 lg:hover:scale-110 duration-500 hover:bg-orange-500 hover:text-white group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">Online Live Classes</h3>
            <p className="text-center text-xs sm:text-sm leading-relaxed">
              Interactive online sessions with real-time Q&A and project-based
              learning, accessible from anywhere.
            </p>
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-2xl p-4 sm:p-6 hover:scale-105 lg:hover:scale-110 duration-500 hover:bg-orange-500 hover:text-white group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20">
                <FaUserGroup className="text-xl sm:text-2xl text-green-500 group-hover:text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">In-Person Workshops</h3>
            <p className="text-center text-xs sm:text-sm leading-relaxed">
              Hands-on workshops designed to provide practical experience and
              collaborative learning in a classroom setting.
            </p>
          </div>

          {/* <!-- Card 3 --> */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-2xl p-4 sm:p-6 hover:scale-105 lg:hover:scale-110 duration-500 hover:bg-orange-500 hover:text-white group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">1-on-1 Mentorship</h3>
            <p className="text-center text-xs sm:text-sm leading-relaxed">
              Personalized guidance and support tailored to your learning goals,
              with direct feedback and career advice.
            </p>
          </div>

          {/* <!-- Card 4 --> */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-2xl p-4 sm:p-6 hover:scale-105 lg:hover:scale-110 duration-500 hover:bg-orange-500 hover:text-white group">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20">
                <ChevronsLeftRightEllipsis className="text-xl sm:text-2xl text-yellow-500 group-hover:text-white" />
              </div>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-center">Custom Course Creation</h3>
            <p className="text-center text-xs sm:text-sm leading-relaxed">
              Development of custom courses and learning paths to suit your unique
              needs and interests in technology.
            </p>
          </div>
        </div>
      </div>

      <section className="mt-12 lg:mt-16">
        <Courses />
        <Plans />

        {/* Banner Section with proper spacing */}
        <div className="mt-16 lg:mt-20">
          <BannerSection />
        </div>

        <div className="mt-16 lg:mt-20">
          <TestimonialsSection />
        </div>

        {/* Contact Section */}
        <section className="mt-16 lg:mt-20 py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                Get In Touch With Us
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to start your journey in tech? Contact us today and let's discuss how we can help you achieve your learning goals with our comprehensive MERN Full Stack and AI programs.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Send us a Message</h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                      <option value="">Select a course</option>
                      <option value="mern">MERN Full Stack with AI</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="java">Java Full Stack with AI</option>
                      <option value="data-analytics">Data Analytics with AI</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="dsa">Data Structures & Algorithms</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your learning goals and how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info & Map */}
              <div className="space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                        <p className="text-gray-600">
                          D- 1099, Sector 5, D Block, Indira Nagar,
                          Lucknow, Uttar Pradesh 226016
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                        <p className="text-gray-600">+919214588441</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                        <p className="text-gray-600">info@maazsteredu.com</p>
                        {/* <p className="text-gray-600">admissions@maazsteredu.com</p> */}
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 5:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-6 pb-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us Here</h3>
                  </div>
                  <div className="h-80">
                    <iframe
                      src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.844476148093!2d80.99153457433755!3d26.876681876668616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3f7414b12f7%3A0xb1b9d84562a4be65!2sMaazster%20Tech!5e0!3m2!1sen!2sin!4v1758262123410!5m2!1sen!2sin"
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
            <div className="mt-16 text-center">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Maazster Edu?</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  At Maazster Edu, we're committed to transforming careers through cutting-edge technology education. Our comprehensive MERN Full Stack with AI program combines hands-on learning with industry-relevant projects, ensuring you're job-ready from day one.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                    <div className="text-gray-700">Students Placed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">95%</div>
                    <div className="text-gray-700">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                    <div className="text-gray-700">Industry Partners</div>
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
