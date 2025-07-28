import Image from "next/image";
import React from "react";
import user1 from "../common/user1.jpg";
import user2 from "../common/user2.jpg";
import user3 from "../common/user3.jpg";

const testimonials = [
  {
    name: "Ayesha Sharma",
    feedback:
      "The full stack course was excellent. The trainers are very supportive!",
    image: "/user1.jpg",
  },
  {
    name: "Rahul Mehta",
    feedback:
      "Great learning environment. I got placed within 2 months after the course.",
    image: "/user2.jpg",
  },
  {
    name: "Sneha Kapoor",
    feedback: "Best place to learn Digital Marketing. Highly recommended!",
    image: "/user3.jpg",
  },
];

const page = () => {
  return (
    <div>
      <section id="testimonials" className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Students Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className=" object-cover w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-700 italic">
                  &quot;{item.feedback}&quot
                </p>
                <h4 className="text-md font-semibold mt-3">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
