import React from "react";
import Navbar from "@/app/navbar/page";
// import Footer from "@/app/footer/page";
import {
  FaReact,
  FaJava,
  FaDatabase,
  FaBrain,
  FaChartLine,
  FaCode
} from "react-icons/fa";

export const metadata = {
  title: "Maazster Edu : Courses",
  description: "this is course page",
  auther: [{ name: "Maazster" }, { name: "Maazster edu" }],
  keywords: ["nextjs", "reactjs"],
};

const courses = [
  {
    title: "Full Stack Development",
    description: "Master MERN stack (MongoDB, Express, React, Node.js) with real-world projects, deployment, and modern development practices.",
    duration: "3 Months",
    icon: <FaReact className="text-4xl text-blue-500 mb-4" />,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    projects: 5,
    level: "Beginner to Advanced"
  },
  {
    title: "AI & Machine Learning",
    description: "Master neural networks, deep learning, and real-world AI applications. Hands-on projects with TensorFlow, PyTorch, and industry tools.",
    duration: "4 Months",
    icon: <FaBrain className="text-4xl text-purple-500 mb-4" />,
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    projects: 6,
    level: "Intermediate to Advanced"
  },
  {
    title: "Digital Marketing",
    description: "Complete digital marketing mastery: SEO, SEM, Social Media Marketing, Content Strategy, Analytics, and conversion optimization.",
    duration: "3 Months",
    icon: <FaChartLine className="text-4xl text-green-500 mb-4" />,
    technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO Tools"],
    projects: 4,
    level: "Beginner to Intermediate"
  },
  {
    title: "Data Analyst with AI",
    description: "Data cleaning, visualization, and predictive analytics using Python, SQL, Tableau. Real datasets and industry-standard tools.",
    duration: "3 Months",
    icon: <FaDatabase className="text-4xl text-indigo-500 mb-4" />,
    technologies: ["Python", "SQL", "Tableau", "Power BI"],
    projects: 5,
    level: "Beginner to Intermediate"
  },
  {
    title: "Java Full Stack with AI",
    description: "Build enterprise Java applications with AI integration. Learn Spring Boot, Hibernate, REST APIs, and AI-powered microservices.",
    duration: "4 Months",
    icon: <FaJava className="text-4xl text-red-500 mb-4" />,
    technologies: ["Java", "Spring Boot", "Hibernate", "AI APIs"],
    projects: 6,
    level: "Intermediate to Advanced"
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master DSA for coding interviews using C++/Java. Problem-solving techniques, optimization, and interview preparation.",
    duration: "4 Months",
    icon: <FaCode className="text-4xl text-yellow-500 mb-4" />,
    technologies: ["C++", "Java", "Problem Solving", "Algorithms"],
    projects: 8,
    level: "Beginner to Advanced"
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />



      <section id="courses" className="py-12 bg-gradient-to-br from-blue-50 to-indigo-100 pt-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">OUR COURSES</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Explore our comprehensive range of industry-focused courses designed to accelerate your tech career with hands-on projects and expert mentorship
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-center mb-6">
                  {course.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-orange-500">{course.duration}</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Projects:</span>
                    <span className="font-semibold text-green-500">{course.projects}+ Real Projects</span>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Level:</span>
                    <span className="font-semibold text-blue-500">{course.level}</span>
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
      {/* <Footer /> */}
    </div>
  );
};

export default Courses;
