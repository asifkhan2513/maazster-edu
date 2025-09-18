
"use client";
import React from "react";
import Navbar from "@/app/navbar/page";
import {
  FaReact,
  FaDatabase,
  FaExternalLinkAlt,
  FaMobile,
  FaRobot,
  FaChartLine,
  FaGraduationCap,
  FaPlay,
} from "react-icons/fa";

// projects, categories (same as you provided)
const projects = [
  {
    title: "EduLearn - Online Learning Platform",
    description:
      "Complete LMS with video streaming, live classes, assignments, progress tracking, and certificate generation. Supports 10,000+ concurrent users.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    category: "Full Stack",
    student: "Rahul Sharma",
    course: "MERN Full Stack",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaGraduationCap className="text-blue-500" />,
  },
  {
    title: "SmartTutor - AI Teaching Assistant",
    description:
      "AI-powered virtual tutor that provides personalized learning paths, instant doubt resolution, and adaptive assessments using NLP and ML.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "TensorFlow", "OpenAI API", "Flask", "PostgreSQL"],
    category: "AI/ML",
    student: "Priya Patel",
    course: "AI & Machine Learning",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaRobot className="text-purple-500" />,
  },
  {
    title: "StudyBuddy - Mobile Learning App",
    description:
      "Cross-platform mobile app for students with offline content, interactive quizzes, peer-to-peer learning, and gamification features.",
    image: "/api/placeholder/400/250",
    technologies: ["React Native", "Firebase", "Redux", "Expo", "SQLite"],
    category: "Mobile Development",
    student: "Arjun Kumar",
    course: "Full Stack Development",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaMobile className="text-green-500" />,
  },
  {
    title: "EduAnalytics - Learning Data Dashboard",
    description:
      "Comprehensive analytics platform for educational institutions to track student performance, engagement metrics, and learning outcomes.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Tableau", "SQL", "Pandas", "D3.js"],
    category: "Data Analytics",
    student: "Sneha Singh",
    course: "Data Analyst with AI",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaChartLine className="text-indigo-500" />,
  },
  {
    title: "EduCloud - Microservices Architecture",
    description:
      "Scalable educational platform backend with microservices for user management, content delivery, assessments, and real-time communication.",
    image: "/api/placeholder/400/250",
    technologies: ["Java", "Spring Boot", "Docker", "Kubernetes", "Redis"],
    category: "Backend",
    student: "Vikash Gupta",
    course: "Java Full Stack with AI",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaDatabase className="text-red-500" />,
  },
  {
    title: "EduMarketing - Digital Campaign Manager",
    description:
      "Complete digital marketing solution for educational institutions with SEO tools, social media automation, and lead generation.",
    image: "/api/placeholder/400/250",
    technologies: [
      "React",
      "Node.js",
      "Google APIs",
      "Facebook API",
      "Analytics",
    ],
    category: "Digital Marketing",
    student: "Anjali Verma",
    course: "Digital Marketing",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaChartLine className="text-pink-500" />,
  },
  {
    title: "CodeMentor - Programming Learning Platform",
    description:
      "Interactive coding platform with real-time code execution, automated testing, peer code reviews, and skill assessments.",
    image: "/api/placeholder/400/250",
    technologies: ["React", "Node.js", "Docker", "Monaco Editor", "WebSockets"],
    category: "Full Stack",
    student: "Karan Singh",
    course: "MERN Full Stack",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaReact className="text-cyan-500" />,
  },
  {
    title: "VirtualLab - Science Simulation Platform",
    description:
      "3D virtual laboratory for physics and chemistry experiments with AR/VR support and realistic simulations for remote learning.",
    image: "/api/placeholder/400/250",
    technologies: ["Unity", "C#", "WebGL", "Three.js", "WebXR"],
    category: "AR/VR",
    student: "Meera Joshi",
    course: "Full Stack Development",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaDatabase className="text-orange-500" />,
  },
  {
    title: "SkillTracker - Competency Assessment System",
    description:
      "AI-driven skill assessment platform that evaluates student competencies through adaptive testing and provides personalized improvement plans.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Scikit-learn", "FastAPI", "PostgreSQL", "Redis"],
    category: "AI/ML",
    student: "Amit Sharma",
    course: "AI & Machine Learning",
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    live: "#",
    icon: <FaChartLine className="text-teal-500" />,
  },
];

const categories = [
  "All",
  "Full Stack",
  "AI/ML",
  "Mobile Development",
  "Data Analytics",
  "Backend",
  "Digital Marketing",
  "AR/VR",
];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState(null);
  const [showPreview, setShowPreview] = React.useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handlePreview = (project) => {
    setSelectedProject(project);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Our Impact Section */}
      <section className="mt-16 py-12  bg-[#F97D26]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 ">
              Our Impact
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              See the real results of our educational programs and the success stories of our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-gray-700 font-semibold group-hover:text-blue-700 transition-colors duration-300">Students Trained</div>
              <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Across all programs</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-gray-700 font-semibold group-hover:text-green-700 transition-colors duration-300">Placement Rate</div>
              <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Within 6 months</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2 group-hover:scale-110 transition-transform duration-300">150+</div>
              <div className="text-gray-700 font-semibold group-hover:text-orange-700 transition-colors duration-300">Projects Completed</div>
              <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Real-world applications</div>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-700 font-semibold group-hover:text-purple-700 transition-colors duration-300">Partner Companies</div>
              <div className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Hiring our graduates</div>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <a
              href="/project"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Student Projects
            </a>
          </div> */}
        </div>
      </section>
      <div className=" pt-18 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 py-2">
              Student Projects Showcase
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 px-4">
              Discover the incredible projects built by our students. From AI
              applications to full-stack web platforms, see how our graduates
              are making their mark in the tech industry.
            </p>
          </div>

          {/* Two-column layout:
              - Left: stats (half-screen) + vertical filter buttons
              - Right: project grid
              Responsive: on small screens it stacks (left on top)
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <aside className="col-span-1">
              {/* Vertical filter buttons (left) */}
              <div className="bg-white rounded-2xl shadow p-4 sticky top-28">
                <h3 className="text-sm font-semibold text-gray-600 mb-3">
                  Categories
                </h3>

                <div className="flex flex-col gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg font-semibold transition-all duration-200 text-sm ${selectedCategory === category
                        ? "bg-orange-500 text-white shadow"
                        : "bg-white text-gray-700 hover:bg-orange-50 border border-gray-100"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* RIGHT COLUMN: Projects */}
            <main className="col-span-1 md:col-span-2">
              {/* small horizontal filter for mobile for easier access */}
              <div className="md:hidden mb-6">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={`mobile-${category}`}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-2 rounded-full text-sm font-medium ${selectedCategory === category
                        ? "bg-orange-500 text-white"
                        : "bg-white text-gray-700 border border-gray-200"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-4 overflow-hidden cursor-pointer group border border-transparent hover:border-orange-200"
                  >
                    {/* Project Image/Icon */}
                    <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-orange-100 group-hover:to-pink-100 transition-all duration-300">
                      <div className="text-6xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{project.icon}</div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold group-hover:bg-orange-200 group-hover:scale-105 transition-all duration-300">
                          {project.category}
                        </span>
                        <div className="flex space-x-2">
                          <a
                            href={project.live}
                            className="text-gray-600 hover:text-orange-500 group-hover:scale-110 transition-all duration-300"
                            title="View Live Demo"
                          >
                            <FaExternalLinkAlt className="text-lg" />
                          </a>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs group-hover:bg-orange-50 group-hover:text-orange-700 group-hover:scale-105 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Student Info */}
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-sm">
                          <div>
                            <p className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                              {project.student}
                            </p>
                            <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">{project.course}</p>
                          </div>
                          <button
                            onClick={() => handlePreview(project)}
                            className="bg-orange-500 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center gap-1 group-hover:scale-110 group-hover:shadow-lg"
                          >
                            <FaPlay className="text-xs" />
                            Preview
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredProjects.length === 0 && (
                  <div className="col-span-full bg-white rounded-2xl shadow p-8 text-center">
                    <p className="text-gray-600">
                      No projects found for <strong>{selectedCategory}</strong>.
                    </p>
                  </div>
                )}
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-8 text-white">
                  <h2 className="text-3xl font-bold mb-4">
                    Ready to Build Your Own Project?
                  </h2>
                  <p className="text-xl mb-6 opacity-90">
                    Join our courses and create amazing projects that showcase
                    your skills to potential employers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      View Courses
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">{selectedProject.title}</h2>
                <button
                  onClick={closePreview}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="aspect-video mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src={selectedProject.youtube.replace('watch?v=', 'embed/')}
                  title={selectedProject.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Project Details</h3>
                  <p className="text-gray-600 mb-4">{selectedProject.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Student Information</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800">{selectedProject.student}</p>
                    <p className="text-gray-600">{selectedProject.course}</p>
                    <p className="text-sm text-orange-500 mt-2">{selectedProject.category}</p>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={selectedProject.live}
                      className="flex-1 bg-orange-500 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-orange-600 transition-colors"
                    >
                      View Live Demo
                    </a>
                    <a
                      href={`tel:+919214588441`}
                      className="flex-1 bg-green-500 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-green-600 transition-colors"
                    >
                      Call: +91 9214588441
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;

