import Image from "next/image";
import React from "react";
import user1 from "../common/user1.jpg";
import user2 from "../common/user2.jpg";
import user3 from "../common/user3.jpg";
import Navbar from "@/app/navbar/page";
import testimonialTop from "../common/testimonialTop.png";

const testimonials = [
  {
    name: "Ayesha Sharma",
    role: "Full Stack Developer at TCS",
    feedback:
      "The MERN stack course transformed my career! The hands-on projects and AI integration modules gave me the edge I needed. Got placed at TCS with 40% salary hike!",
    image: user1,
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "Data Scientist at Wipro",
    feedback:
      "Amazing AI & Machine Learning course! The real-world datasets and industry tools prepared me perfectly. Landed my dream job within 2 months of completion.",
    image: user2,
    rating: 5,
  },
  {
    name: "Sneha Kapoor",
    role: "Digital Marketing Manager at Byju's",
    feedback:
      "Best digital marketing course with practical SEO and social media strategies. The mentorship program was exceptional. Now leading marketing at India's top edtech!",
    image: user3,
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Java Developer at Infosys",
    feedback:
      "The Java Full Stack with AI course exceeded my expectations. The Spring Boot and microservices modules were incredibly detailed. Perfect for enterprise development!",
    image: user1,
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Data Analyst at Accenture",
    feedback:
      "Excellent Data Analytics course! The Python, SQL, and Tableau training with real industry projects helped me transition from non-tech to tech seamlessly.",
    image: user2,
    rating: 5,
  },
  {
    name: "Vikash Kumar",
    role: "Software Engineer at Amazon",
    feedback:
      "DSA course was game-changer for my coding interviews. Cracked Amazon, Google, and Microsoft interviews. The C++ and Java problem-solving approach is top-notch!",
    image: user3,
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Frontend Developer at Unacademy",
    feedback:
      "The React.js course with Next.js was phenomenal! Real-time projects and modern development practices. Now building educational interfaces for millions of students!",
    image: user1,
    rating: 5,
  },
  {
    name: "Karan Singh",
    role: "DevOps Engineer at Vedantu",
    feedback:
      "Cloud computing and DevOps training was exceptional. Docker, Kubernetes, and AWS modules were industry-standard. Deployed scalable edtech solutions within 3 months!",
    image: user2,
    rating: 5,
  },
  {
    name: "Meera Joshi",
    role: "Product Manager at WhiteHat Jr",
    feedback:
      "The product management course combined with tech knowledge was perfect. Understanding both business and technology helped me excel in edtech product development!",
    image: user3,
    rating: 5,
  },
  {
    name: "Rohit Agarwal",
    role: "Mobile App Developer at Toppr",
    feedback:
      "React Native course was comprehensive! Built cross-platform educational apps with offline capabilities. The instructor support and peer learning were outstanding!",
    image: user1,
    rating: 5,
  },
  {
    name: "Kavya Reddy",
    role: "UX Designer at Coursera",
    feedback:
      "UI/UX design course focused on educational interfaces was brilliant! Learned user research, prototyping, and accessibility. Now designing learning experiences globally!",
    image: user2,
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "Backend Developer at Simplilearn",
    feedback:
      "Node.js and microservices architecture course was industry-focused. Built scalable learning management systems. The job placement support was incredible!",
    image: user3,
    rating: 5,
  },
];

export const metadata = {
  title: "Maazster Edu : Testimonial",
  description: "this is course page",
};
const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="relative w-full">
        <div className="relative w-full mt-16 ">
        {/* Background Image */}
        <Image
          src={testimonialTop}
          alt="testimonial Background"
           className="w-full h-auto object-contain "
          priority
        />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center px-24  justify-end  bg-black/10">
          <h1 className="bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent text-4xl  sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-bold text-center px-4">
            Impact
          </h1>
        </div>
      </div>

      <section className=" py-12 bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
              Hear directly from our students and partners about how our
              programs have transformed their careers and lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <p className="text-gray-700 italic mb-4 group-hover:text-white transition-colors duration-300 ">
                &quot;The training gave me confidence and skills to secure my
                first job in tech. The mentors were incredibly supportive!&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="https://cinimage.org/wp-content/uploads/2021/10/Testimonial-Videos-1.png"
                  alt="Student"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                    Amit Sharma
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300">
                    Software Developer at Infosys
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <p className="text-gray-700 italic mb-4 group-hover:text-white transition-colors duration-300">
                &quot;Thanks to the hands-on projects, I built a strong
                portfolio that impressed employers. I landed a job within
                weeks.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="Student"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                    Priya Verma
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300">
                    Data Analyst at TCS
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group hover:bg-gradient-to-br hover:from-orange-400 hover:to-orange-500 hover:text-white transform hover:scale-105 transition-all duration-300 hover:shadow-xl group">
              <p className="text-gray-700 italic mb-4 group-hover:text-white transition-colors duration-300">
                &quot;We have hired multiple graduates from this program. They
                are job-ready, skilled, and bring fresh ideas to our team.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg"
                  alt="Company"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">
                    Rohit Mehta
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300">
                    HR Manager, TechCorp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        className="py-12 bg-gray-100 overflow-hidden pt-18"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Our Students{" "}
          </h2>
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.slice(0, 6).map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer group border border-transparent hover:border-orange-200"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="object-cover w-16 h-16 rounded-full mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-sm text-orange-500 font-medium group-hover:text-orange-600 transition-colors duration-300">
                      {item.role}
                    </p>
                    <div className="flex text-yellow-400 text-sm mt-1 group-hover:scale-110 transition-transform duration-300">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="group-hover:animate-pulse">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                  &quot;{item.feedback}&quot;
                </p>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center mt-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Testimonials
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Testimonials;
