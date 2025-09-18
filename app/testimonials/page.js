import Image from "next/image";
import React from "react";
import user1 from "@/app/common/user1.jpg";
import user2 from "@/app/common/user2.jpg";
import user3 from "@/app/common/user3.jpg";
import Navbar from "@/app/navbar/page";
// import Footer from "@/app/footer/page";

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
    feedback: "Best digital marketing course with practical SEO and social media strategies. The mentorship program was exceptional. Now leading marketing at India's top edtech!",
    image: user3,
    rating: 5,
  },
  {
    name: "Arjun Patel",
    role: "Java Developer at Infosys",
    feedback: "The Java Full Stack with AI course exceeded my expectations. The Spring Boot and microservices modules were incredibly detailed. Perfect for enterprise development!",
    image: user1,
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Data Analyst at Accenture",
    feedback: "Excellent Data Analytics course! The Python, SQL, and Tableau training with real industry projects helped me transition from non-tech to tech seamlessly.",
    image: user2,
    rating: 5,
  },
  {
    name: "Vikash Kumar",
    role: "Software Engineer at Amazon",
    feedback: "DSA course was game-changer for my coding interviews. Cracked Amazon, Google, and Microsoft interviews. The C++ and Java problem-solving approach is top-notch!",
    image: user3,
    rating: 5,
  },
  {
    name: "Anita Desai",
    role: "Frontend Developer at Unacademy",
    feedback: "The React.js course with Next.js was phenomenal! Real-time projects and modern development practices. Now building educational interfaces for millions of students!",
    image: user1,
    rating: 5,
  },
  {
    name: "Karan Singh",
    role: "DevOps Engineer at Vedantu",
    feedback: "Cloud computing and DevOps training was exceptional. Docker, Kubernetes, and AWS modules were industry-standard. Deployed scalable edtech solutions within 3 months!",
    image: user2,
    rating: 5,
  },
  {
    name: "Meera Joshi",
    role: "Product Manager at WhiteHat Jr",
    feedback: "The product management course combined with tech knowledge was perfect. Understanding both business and technology helped me excel in edtech product development!",
    image: user3,
    rating: 5,
  },
  {
    name: "Rohit Agarwal",
    role: "Mobile App Developer at Toppr",
    feedback: "React Native course was comprehensive! Built cross-platform educational apps with offline capabilities. The instructor support and peer learning were outstanding!",
    image: user1,
    rating: 5,
  },
  {
    name: "Kavya Reddy",
    role: "UX Designer at Coursera",
    feedback: "UI/UX design course focused on educational interfaces was brilliant! Learned user research, prototyping, and accessibility. Now designing learning experiences globally!",
    image: user2,
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "Backend Developer at Simplilearn",
    feedback: "Node.js and microservices architecture course was industry-focused. Built scalable learning management systems. The job placement support was incredible!",
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

      <section className="mt-16 py-12 bg-[#F97316]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our students and partners about how our programs have transformed their careers and lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <p className="text-gray-700 italic mb-4 group-hover:text-gray-800 transition-colors duration-300">
                &quot;The training gave me confidence and skills to secure my first job in tech. The mentors were incredibly supportive!&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/student1.jpg"
                  alt="Student"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Amit Sharma</div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Software Developer at Infosys</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <p className="text-gray-700 italic mb-4 group-hover:text-gray-800 transition-colors duration-300">
                &quot;Thanks to the hands-on projects, I built a strong portfolio that impressed employers. I landed a job within weeks.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/student2.jpg"
                  alt="Student"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-300">Priya Verma</div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">Data Analyst at TCS</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
              <p className="text-gray-700 italic mb-4 group-hover:text-gray-800 transition-colors duration-300">
                &quot;We have hired multiple graduates from this program. They are job-ready, skilled, and bring fresh ideas to our team.&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/images/company1.jpg"
                  alt="Company"
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Rohit Mehta</div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">HR Manager, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="testimonials" className="py-12 bg-gray-100 overflow-hidden pt-18">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Students </h2>
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.slice(0, 6).map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer group border border-transparent hover:border-orange-200">
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
                    <h4 className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">{item.name}</h4>
                    <p className="text-sm text-orange-500 font-medium group-hover:text-orange-600 transition-colors duration-300">{item.role}</p>
                    <div className="flex text-yellow-400 text-sm mt-1 group-hover:scale-110 transition-transform duration-300">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i} className="group-hover:animate-pulse">⭐</span>
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
