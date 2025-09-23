import React from "react";
import Navbar from "@/app/navbar/page";
import { IoMdTrendingUp } from "react-icons/io";
import Link from "next/link";
import { PATH } from "../common/constant";
import Image from "next/image";
import planTop from "../common/planTop.png";

const plans = [
  {
    name: "SUMMER TRAINING",
    // price: "RS.6500 ",
    features: [
      "5 Hour Daily Classes",
      "Recovery Class For Each Session",
      "Study Material Of Each Languages",
      "Free Access Of Online Portal For 1 Year",
      "Free Web Servers",
      "Project File According To Project ",
    ],
  },
  {
    name: "INDUSTRIAL TRAINING",
    // price: "RS.15000 ",
    features: [
      "Specialized Courses",
      "Increases Practical Knowledge",
      "Provides Industrial Exposure",
      "Polish Your Interdisciplinary Knowledge",
      "Develop Interpersonal Skills",
      "Customized Training Solutions",
    ],
  },
  {
    name: "JOB-ORIENTED TRAINING",
    // price: "RS.30000 ",
    features: [
      "Job Placement Assistance",
      "Interview Preparation",
      "Industry Experts As Instructors",
      "Practical Experience",
      "Industry-Relevant Curriculum",
      "Professional Certifications",
    ],
  },
];

// function clickHandler (){

// }
export const metadata = {
  title: "Maazster Edu : Plans",
  description: "this is course page",
};
const Plans = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative w-full">
         <div className="relative w-full mt-16 ">
        {/* Background Image */}
        <Image
          src={planTop}
          alt="Plans Background"
         className="w-full h-auto object-contain "
          priority
        /></div>
    
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col sm:flex-row">
          {/* Left Section (Icon) */}
          {/* <div className="flex-1 flex items-center justify-center bg-black/40 p-4">
            <IoMdTrendingUp className="text-[#F97316] text-5xl sm:text-6xl md:text-8xl" />
          </div> */}

          {/* Right Section (Text) */}
          <div className="flex-1 flex items-center px-24  justify-end  bg-black/10 p-4">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
              Growth
            </h1>
          </div>
        </div>
      </div>
      <section
        id="plans"
        className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Stylish Header */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 relative">
                <span className="bg-gradient-to-r from-green-500 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                  Choose Your
                </span>
                <br />
                <span className="text-gray-900 drop-shadow-lg">
                  Learning Path
                </span>

                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-green-400 to-blue-600 rounded-full shadow-lg"></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8">
              Select the perfect plan that matches your learning goals and
              career aspirations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 ${
                  index === 1
                    ? "border-orange-400 ring-4 ring-orange-100"
                    : "border-gray-200 hover:border-orange-300"
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-400 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-orange-500">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 ml-2"></span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    index === 1
                      ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 shadow-lg"
                      : "bg-gray-100 text-gray-800 hover:bg-orange-400 hover:text-white"
                  }`}
                >
                  {index === 1 ? "Get Started Now" : "Select Plan"}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need a custom plan? We &apos;ve got you covered!
            </p>
            <button className="bg-white text-orange-500 border-2 border-orange-400 px-8 py-3 rounded-xl font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
              <Link href={PATH.CONTACT_US}>Contact for Custom Plan</Link>
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Plans;
