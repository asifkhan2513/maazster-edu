import React from "react";
import Navbar from "@/app/navbar/page";
// import Footer from "@/app/footer/page";

const plans = [
  {
    name: "SUMMER TRAINING",
    price: "RS.6500 ",
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
    price: "RS.15000 ",
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
    price: "RS.30000 ",
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
      <section id="plans" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Choose Your Learning Path</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Select the perfect plan that matches your learning goals and career aspirations
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 ${index === 1
                  ? 'border-orange-400 ring-4 ring-orange-100'
                  : 'border-gray-200 hover:border-orange-300'
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
                    <span className="text-4xl font-bold text-orange-500">{plan.price}</span>
                    <span className="text-gray-500 ml-2">/ course</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${index === 1
                    ? 'bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600 shadow-lg'
                    : 'bg-gray-100 text-gray-800 hover:bg-orange-400 hover:text-white'
                    }`}
                >
                  {index === 1 ? 'Get Started Now' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom plan? We &apos;ve got you covered!</p>
            <button className="bg-white text-orange-500 border-2 border-orange-400 px-8 py-3 rounded-xl font-semibold hover:bg-orange-400 hover:text-white transition-all duration-300">
              Contact for Custom Plan
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Plans;
