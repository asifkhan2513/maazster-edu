import React from "react";
import Navbar from "@/app/navbar/page";

export const metadata = {
  title: "Maazster Edu : Courses",
  description: "this is course page",
  auther: [{ name: "Maazster" }, { name: "Maazster edu" }],
  keywords: ["nextjs", "reactjs"],
};

const courses = [
  {
    title: "Full Stack Development",
    description: "Learn MERN stack with real-world projects.",
    duration: "3 Months",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Master neural networks, deep learning, and real-world AI applications. Hands-on projects and the latest tools included.",
    duration: "3 Months",
  },
  {
    title: "Digital Marketing",
    description: "SEO, SEM, Social Media & more.",
    duration: "3 Months",
  },
  {
    title: "Data Analyst with AI",
    description:
      "cleaning, visualization, and predictive analytics. Real datasets and industry tools..",
    duration: "3 Months",
  },
  {
    title: "Java Full Stack with AI",
    description:
      "Build robust Java applications with integrated AI features. Learn Spring, Hibernate, REST, and AI-powered tools for modern development.",
    duration: "3 Months",
  },
  {
    title: "Data Structures & Algorithms",
    description: "DSA for coding interviews using C++/Java.",
    duration: "4 Months",
  },
];

const Courses = () => {
  return (
    <div className=" py-9">
      <Navbar />
      <section id="courses" className="py-12  bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">OUR COURSES</h2>
          <div className=" text-2xl mb-6">
            Explore our range of professional offerings designed to boost your
            skills and career
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:bg-orange-500 hover:text-white"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-3">{course.description}</p>
                <span className="text-sm text-gray-500">
                  Duration: {course.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
