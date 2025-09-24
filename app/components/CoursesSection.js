import React from "react";
import Image from "next/image";
import {
    FaReact,
    FaJava,
    FaDatabase,
    FaBrain,
    FaChartLine,
    FaCode,
} from "react-icons/fa";
import Link from "next/link";
import { PATH } from "../common/constant";

const courses = [
    {
        title: "Full Stack Development",
        description:
            "Master MERN stack (MongoDB, Express, React, Node.js) with real-world projects, deployment, and modern development practices.",
        duration: "3 Months",
        icon: <FaReact className="text-4xl text-blue-500 mb-4" />,
        price: "₹15,000",
        features: ["React & Node.js", "MongoDB", "REST APIs", "Deployment"],
    },
    {
        title: "Java Full Stack",
        description:
            "Comprehensive Java development with Spring Boot, Hibernate, and modern frontend technologies for enterprise applications.",
        duration: "4 Months",
        icon: <FaJava className="text-4xl text-orange-600 mb-4" />,
        price: "₹18,000",
        features: ["Spring Boot", "Hibernate", "MySQL", "Angular/React"],
    },
    {
        title: "Data Analytics",
        description:
            "Learn data analysis, visualization, and machine learning with Python, SQL, and popular analytics tools.",
        duration: "2.5 Months",
        icon: <FaChartLine className="text-4xl text-green-500 mb-4" />,
        price: "₹12,000",
        features: ["Python", "SQL", "Power BI", "Machine Learning"],
    },
    {
        title: "AI & Machine Learning",
        description:
            "Deep dive into artificial intelligence, machine learning algorithms, and neural networks with practical implementations.",
        duration: "3.5 Months",
        icon: <FaBrain className="text-4xl text-purple-500 mb-4" />,
        price: "₹20,000",
        features: ["TensorFlow", "PyTorch", "Deep Learning", "NLP"],
    },
    {
        title: "Database Management",
        description:
            "Master database design, optimization, and management with SQL, NoSQL, and cloud database solutions.",
        duration: "2 Months",
        icon: <FaDatabase className="text-4xl text-red-500 mb-4" />,
        price: "₹10,000",
        features: ["MySQL", "MongoDB", "PostgreSQL", "Database Design"],
    },
    {
        title: "DSA & Problem Solving",
        description:
            "Strengthen your programming fundamentals with data structures, algorithms, and competitive programming.",
        duration: "2 Months",
        icon: <FaCode className="text-4xl text-indigo-500 mb-4" />,
        price: "₹8,000",
        features: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "System Design"],
    },
];

const CoursesSection = () => {
    return (
        <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                            Our Popular
                        </span>
                        <br />
                        <span className="text-gray-900">Courses</span>
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Choose from our comprehensive range of technology courses designed to boost your career
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl p-6 md:p-8 transition-all duration-500 hover:scale-105 border border-gray-100"
                        >
                            <div className="text-center mb-6">
                                {course.icon}
                                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
                                    {course.title}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                    {course.description}
                                </p>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-500">Duration:</span>
                                    <span className="text-sm font-bold text-gray-800">{course.duration}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-500">Price:</span>
                                    <span className="text-lg font-bold text-orange-500">{course.price}</span>
                                </div>
                            </div>

                            <div className="mb-6">
                                <h4 className="text-sm font-semibold text-gray-700 mb-3">What you&apos;ll learn:</h4>
                                <div className="grid grid-cols-2 gap-2">
                                    {course.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center text-xs text-gray-600">
                                            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Link
                                href={PATH.CONTACT_US}
                                className="block w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white text-center py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform group-hover:scale-105"
                            >
                                Enroll Now
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center mt-12 md:mt-16">
                    <Link
                        href={PATH.COURSES}
                        className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        View All Courses
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;