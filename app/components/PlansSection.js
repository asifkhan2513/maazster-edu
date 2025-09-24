import React from "react";
import Link from "next/link";
import { PATH } from "../common/constant";

const plans = [
    {
        name: "Basic",
        price: "₹8,000",
        duration: "2 Months",
        description: "Perfect for beginners starting their tech journey",
        features: [
            "1 Course Access",
            "Basic Support",
            "Course Materials",
            "Certificate of Completion",
            "Community Access",
        ],
        popular: false,
    },
    {
        name: "Professional",
        price: "₹15,000",
        duration: "3 Months",
        description: "Most popular choice for serious learners",
        features: [
            "2-3 Course Access",
            "Priority Support",
            "All Course Materials",
            "Industry Certificate",
            "1-on-1 Mentorship",
            "Job Placement Assistance",
        ],
        popular: true,
    },
    {
        name: "Enterprise",
        price: "₹25,000",
        duration: "6 Months",
        description: "Complete package for career transformation",
        features: [
            "All Course Access",
            "24/7 Premium Support",
            "Advanced Projects",
            "Industry Certification",
            "Personal Mentor",
            "Guaranteed Job Placement",
            "Interview Preparation",
            "Portfolio Development",
        ],
        popular: false,
    },
];

const PlansSection = () => {
    return (
        <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                        <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 bg-clip-text text-transparent">
                            Choose Your
                        </span>
                        <br />
                        <span className="text-gray-900">Learning Plan</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Select the perfect plan that fits your learning goals and budget
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl p-6 md:p-8 lg:p-10 transition-all duration-500 hover:scale-105 border ${plan.popular
                                    ? "border-orange-500 ring-4 ring-orange-100"
                                    : "border-gray-100"
                                }`}
                        >
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                                    {plan.name}
                                </h3>
                                <div className="mb-4">
                                    <span className="text-4xl md:text-5xl font-bold text-orange-500">
                                        {plan.price}
                                    </span>
                                    <span className="text-gray-500 text-lg">/{plan.duration}</span>
                                </div>
                                <p className="text-gray-600 text-sm md:text-base">
                                    {plan.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center">
                                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                            <svg
                                                className="w-3 h-3 text-green-500"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <span className="text-gray-700 text-sm md:text-base">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Link
                                href={PATH.CONTACT_US}
                                className={`block w-full text-center py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${plan.popular
                                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg"
                                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                    }`}
                            >
                                Get Started
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12 md:mt-16">
                    <p className="text-gray-600 mb-6">
                        All plans include lifetime access to course materials and community support
                    </p>
                    <Link
                        href={PATH.CONTACT_US}
                        className="inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold"
                    >
                        Need a custom plan? Contact us
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PlansSection;