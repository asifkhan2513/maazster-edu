import React from "react";
import Navbar from "@/app/navbar/page";

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

export const metadata = {
  title: "Maazster Edu : Plans",
  description: "this is course page",
};
const Plans = () => {
  return (
    <div className=" mt-9">
      <Navbar />
      <section id="plans" className="py-12 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center gap-x-4">
          <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 shadow hover:shadow-xl hover:scale-110 transition"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="text-gray-600 space-y-2 mb-4">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔️ {feature}</li>
                  ))}
                </ul>
                <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Plans;
