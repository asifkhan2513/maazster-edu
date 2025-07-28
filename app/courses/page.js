import React from "react";


const courses = [
  {
    title: "Full Stack Development",
    description: "Learn MERN stack with real-world projects.",
    duration: "3 Months",
  },
  {
    title: "Digital Marketing",
    description: "SEO, SEM, Social Media & more.",
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
    <div >
        
      <section id="courses" className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
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
