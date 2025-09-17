import Image from "next/image";
import Navbar from "@/app/navbar/page";
import Courses from "@/app/courses/page";
import Plans from "@/app/plans/page";
import Banner from "@/app/common/banner.png";
import TestimonialsSection from "@/app/common/TestimonialsSection";
// Footer is now handled in layout.js
import { FaUserGroup } from "react-icons/fa6";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import BannerSection from "./banner";
import rightBanner from "../app/common/banner-right-dec.png";
import leftBanner from "../app/common/banner-left-dec.png";
// Project is now a separate page at /project

export default function Home() {
  return (
    <div className="no-scrollbar overflow-auto pt-16 lg:pt-24">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-center mt-2 px-4 lg:px-8">
        <div className="w-full lg:w-1/2 relative text-center lg:text-left mb-8 lg:mb-0">
          <div className="hidden lg:block">
            <Image
              className="h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] object-contain mx-auto lg:mx-0"
              src={leftBanner}
              alt="leftBanner"
              loading="lazy"
            />
          </div>
          <p className="text-gray-400 text-lg lg:text-xl mb-4">Welcome to our EduLab</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Best Place To Learn
          </h1>
          <span className="text-xl md:text-2xl lg:text-3xl font-bold animate-pulse text-orange-500 block mb-6">
            MERN Full Stack with AI Join Us Now!
          </span>
          <button className="bg-orange-400 hover:bg-orange-500 text-white text-lg lg:text-xl px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Join Now
          </button>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative flex justify-center">
            <div className="hidden lg:block">
              <Image
                className="h-[200px] w-[200px] xl:h-[300px] xl:w-[300px] object-contain"
                src={rightBanner}
                alt="rightBanner"
              />
            </div>
            <Image
              src={Banner}
              alt="banner"
              className="w-[250px] h-[400px] md:w-[300px] md:h-[480px] lg:w-[300px] lg:h-[520px] object-contain lg:absolute lg:top-1"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-16 lg:mt-32 px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4">
          Empowering Your Learning Journey
        </h1>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-2xl">
          Explore the different ways we can help you learn and grow in tech
        </p>
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 mt-12">
        {/* <!-- Card 1 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-110 duration-500 hover:bg-orange-500 hover:text-white group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20">
              <svg className="w-8 h-8 text-blue-500 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">Online Live Classes</h3>
          <p className="text-center text-sm leading-relaxed">
            Interactive online sessions with real-time Q&A and project-based
            learning, accessible from anywhere.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-110 duration-500 hover:bg-orange-500 hover:text-white group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20">
              <FaUserGroup className="text-2xl text-green-500 group-hover:text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">In-Person Workshops</h3>
          <p className="text-center text-sm leading-relaxed">
            Hands-on workshops designed to provide practical experience and
            collaborative learning in a classroom setting.
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-110 duration-500 hover:bg-orange-500 hover:text-white group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20">
              <svg className="w-8 h-8 text-purple-500 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">1-on-1 Mentorship</h3>
          <p className="text-center text-sm leading-relaxed">
            Personalized guidance and support tailored to your learning goals,
            with direct feedback and career advice.
          </p>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-110 duration-500 hover:bg-orange-500 hover:text-white group">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:bg-opacity-20">
              <ChevronsLeftRightEllipsis className="text-2xl text-yellow-500 group-hover:text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-center">Custom Course Creation</h3>
          <p className="text-center text-sm leading-relaxed">
            Development of custom courses and learning paths to suit your unique
            needs and interests in technology.
          </p>
        </div>
      </div>
      {/* Our Impact Section */}
      <section className="mt-16 py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Our Impact
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See the real results of our educational programs and the success stories of our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-semibold">Students Trained</div>
              <div className="text-sm text-gray-500 mt-1">Across all programs</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-700 font-semibold">Placement Rate</div>
              <div className="text-sm text-gray-500 mt-1">Within 6 months</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">150+</div>
              <div className="text-gray-700 font-semibold">Projects Completed</div>
              <div className="text-sm text-gray-500 mt-1">Real-world applications</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-gray-700 font-semibold">Partner Companies</div>
              <div className="text-sm text-gray-500 mt-1">Hiring our graduates</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/project"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Student Projects
            </a>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <Courses />
        <Plans />
        <BannerSection />
        <TestimonialsSection />
      </section>
    </div>
  );
}
