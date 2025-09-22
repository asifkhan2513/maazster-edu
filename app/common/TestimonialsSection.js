import Image from "next/image";
import React from "react";
import user1 from "@/app/common/user1.jpg";
import user2 from "@/app/common/user2.jpg";
import user3 from "@/app/common/user3.jpg";

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
];

const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-16 md:py-20 lg:py-24 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                {/* Stylish Header */}
                <div className="mb-12 md:mb-16 lg:mb-20">
                    <div className="inline-block">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 relative">
                            <span className="bg-gradient-to-r from-pink-500 via-red-600 to-orange-700 bg-clip-text text-transparent">
                                What Our
                            </span>
                            <br />
                            <span className="text-gray-900 drop-shadow-lg">Students Say</span>

                            {/* Decorative underline */}
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-pink-400 to-orange-600 rounded-full shadow-lg"></div>
                        </h2>
                    </div>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8">
                        Join thousands of successful graduates who transformed their careers with our industry-focused programs
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center mb-4">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={60}
                                    height={60}
                                    className="object-cover w-16 h-16 rounded-full mr-4"
                                    loading="lazy"
                                />
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                                    <p className="text-sm text-orange-500 font-medium">{item.role}</p>
                                    <div className="flex text-yellow-400 text-sm mt-1">
                                        {[...Array(item.rating)].map((_, i) => (
                                            <span key={i}>⭐</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 italic text-sm leading-relaxed">
                                &quot;{item.feedback}&quot;
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <a
                        href="/testimonials"
                        className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                        View All Testimonials
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;