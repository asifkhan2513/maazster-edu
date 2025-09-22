import React from "react";
import Navbar from "@/app/navbar/page";
import Image from "next/image";
import Java from "../common/a/java.png";
import SpingBoot from "../common/a/spring-boot.png";
import Mysql from "../common/a/mysql.png";
import Docker from "../common/a/docker.webp";
import Git from "../common/a/git.png";
import GitHub from "../common/a/github.png";
import HTML from "../common/a/html.webp";
import CSS from "../common/a/css.png";
import BootStrap from "../common/a/bootstrap.png";
import TypScript from "../common/a/typescript.png";
import Figma from "../common/a/figma.png";
import VSCODE from "../common/a/vscode.png";
import Postman from "../common/a/postman.png";
import jenking from "../common/a/Jenkins.png";
import Kafka from "../common/a/kafka.svg";
import Hibernate from "../common/a/hibernate.svg";
import Maven from "../common/a/maven.png";
import ReactI from "../common/a/react.webp";
import Python from "../common/a/python.png";
import CourseTop from "../common/courseTop.png";
import { IoMdTrendingUp } from "react-icons/io";

import {
  FaReact,
  FaJava,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaCode,
} from "react-icons/fa";
import Agular from "../common/a/angular.webp";
export const metadata = {
  title: "Maazster Edu : Courses",
  description: "this is course page",
  auther: [{ name: "Maazster" }, { name: "Maazster edu" }],
  keywords: ["nextjs", "reactjs"],
};

const courses = [
  {
    title: "Full Stack Development",
    description:
      "Master MERN stack (MongoDB, Express, React, Node.js) with real-world projects, deployment, and modern development practices.",
    duration: "3 Months",
    icon: <FaReact className="text-4xl text-blue-500 mb-4" />,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    projects: 5,
    level: "Beginner to Advanced",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Master neural networks, deep learning, and real-world AI applications. Hands-on projects with TensorFlow, PyTorch, and industry tools.",
    duration: "4 Months",
    icon: <FaBrain className="text-4xl text-purple-500 mb-4" />,
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    projects: 6,
    level: "Intermediate to Advanced",
  },
  {
    title: "Digital Marketing",
    description:
      "Complete digital marketing mastery: SEO, SEM, Social Media Marketing, Content Strategy, Analytics, and conversion optimization.",
    duration: "3 Months",
    icon: <FaChartLine className="text-4xl text-green-500 mb-4" />,
    technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO Tools"],
    projects: 4,
    level: "Beginner to Intermediate",
  },
  {
    title: "Data Analyst with AI",
    description:
      "Data cleaning, visualization, and predictive analytics using Python, SQL, Tableau. Real datasets and industry-standard tools.",
    duration: "3 Months",
    icon: <FaDatabase className="text-4xl text-indigo-500 mb-4" />,
    technologies: ["Python", "SQL", "Tableau", "Power BI"],
    projects: 5,
    level: "Beginner to Intermediate",
  },
  {
    title: "Java Full Stack with AI",
    description:
      "Build enterprise Java applications with AI integration. Learn Spring Boot, Hibernate, REST APIs, and AI-powered microservices.",
    duration: "4 Months",
    icon: <FaJava className="text-4xl text-red-500 mb-4" />,
    technologies: ["Java", "Spring Boot", "Hibernate", "AI APIs"],
    projects: 6,
    level: "Intermediate to Advanced",
  },
  {
    title: "Data Structures & Algorithms",
    description:
      "Master DSA for coding interviews using C++/Java. Problem-solving techniques, optimization, and interview preparation.",
    duration: "4 Months",
    icon: <FaCode className="text-4xl text-yellow-500 mb-4" />,
    technologies: ["C++", "Java", "Problem Solving", "Algorithms"],
    projects: 8,
    level: "Beginner to Advanced",
  },
];

// Technology images data
const technologies = [
  { name: "React", src: ReactI },
  { name: "Angular", src: Agular },
  { name: "Java", src: Java },
  { name: "Spring Boot", src: SpingBoot },
  { name: "MySQL", src: Mysql },
  { name: "Python", src: Python },
  { name: "Docker", src: Docker },
  { name: "Git", src: Git },
  { name: "GitHub", src: GitHub },
  { name: "HTML", src: HTML },
  { name: "CSS", src: CSS },
  { name: "Bootstrap", src: BootStrap },
  { name: "TypeScript", src: TypScript },
  { name: "Figma", src: Figma },
  { name: "VS Code", src: VSCODE },
  { name: "Postman", src: Postman },
  { name: "Jenkins", src: jenking },
  { name: "Kafka", src: Kafka },
  { name: "Hibernate", src: Hibernate },
  { name: "Maven", src: Maven },

  // { name: "Spring Framework", src: SpringFrame },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative w-full">
        {/* Background Image */}
        <Image
          src={CourseTop}
          alt="Course Background"
          className="w-full h-[350px] sm:h-[400px] md:h-[600px] object-cover mt-16"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col sm:flex-row">
          {/* Left Section (Icon) */}
          {/* <div className="flex-1 flex items-center justify-center bg-black/40 p-4">
            <IoMdTrendingUp className="text-[#F97316] text-5xl sm:text-7xl md:text-9xl" />
          </div> */}

          {/* Right Section (Text) */}
          <div className="flex-1 flex items-center justify-center bg-black/40 p-4">
            <h1 className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent  mr-[720px] mt-[50px] text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-center">
              Learning
            </h1>
          </div>
        </div>
      </div>
      <section className="py-12 bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Our Courses?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              At <span className="font-semibold text-white">Maazster Edu</span>,
              our courses are designed not just to teach theory, but to give you{" "}
              <span className="font-semibold">practical, job-ready skills</span>
              . Every program is built with hands-on projects, mentorship, and
              industry-focused learning paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md text-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white">
                Expert Mentors
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Learn from experienced professionals who bring real-world
                insights, coding practices, and industry experience directly
                into the classroom.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md text-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white">
                Hands-On Projects
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Work on real-world projects that simulate actual industry
                scenarios and help you build a strong portfolio for your career.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md text-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white">
                Career-Focused
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Each course is structured to prepare you for job interviews,
                coding tests, and practical challenges in the tech industry.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl shadow-md text-center hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-white">
                Flexible Learning
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white">
                Learn at your own pace with our structured modules, mentorship
                support, and a mix of online/offline learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="courses"
        className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Stylish Header */}
          <div className="mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 md:mb-6 relative">
                <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">
                  OUR
                </span>
                <br />
                <span className="text-gray-900 drop-shadow-lg bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent">COURSES</span>

                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-lg"></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8">
              Explore our comprehensive range of industry-focused courses designed to accelerate your tech career with hands-on projects and expert mentorship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-6">{course.icon}</div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-orange-500">
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Projects:</span>
                    <span className="font-semibold text-green-500">
                      {course.projects}+ Real Projects
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-semibold text-blue-500">
                      {course.level}
                    </span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {course.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stylish Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 relative">
                <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  Technologies
                </span>
                <br />
                <span className="text-gray-900 drop-shadow-lg">We Teach</span>

                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full shadow-lg"></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8">
              Master the most in-demand technologies and tools used by top companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-3 relative group-hover:animate-pulse">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-700 text-center group-hover:text-orange-500 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              And many more cutting-edge technologies to keep you ahead in the
              industry!
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
              View All Technologies
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Courses;
