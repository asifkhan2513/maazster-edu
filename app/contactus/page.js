"use client"
import Navbar from "@/app/navbar/page";
// import Footer from "@/app/footer/page";
import { Toaster, toast } from "react-hot-toast";
import Image from "next/image";
import logo from "@/app/common/logo.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
// export const metadata = {
//   title: "Contact Us - Maazster Edu",
//   description:
//     "Get in touch with Maazster Edu for course inquiries and support",
// };

const ContactUs = () => {

   const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    courses: "",
  });
 const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(name, ":", value); 
  };

  const callapi=async()=>{
    try {
      const res=await axios.post("http://localhost:8080/api/v1/send",formData);
      console.log("Response:", res.statusText)

      if(res.status===200){
        console.log("Success")
         toast.success("Message sent successfully!");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
            courses: "",
        })
      }else{
        toast.error("Failed to send message. Please try again.");
      }


      
    } catch (error) {
      toast.error("Something went wrong. Please check the server.");
      console.error("Error sending form data:", error);
      
    }finally {
      setIsLoading(false);
    }
  }
 
  const handleSubmit = (e) => {

    e.preventDefault(); 
    setIsLoading(true);
    console.log("Form Data on Submit:", formData);
    callapi()
    
  };



  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Toaster position="top-right"/>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                Contact Us
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your learning journey? Get in touch with our team
              for course guidance, enrollment support, or any questions about
              our programs.
            </p>
          </div>

          {/* Why Choose Us Section - Moved to Top */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-8 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Why Choose Us?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-sm opacity-90">Students Trained</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-90">Placement Rate</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-sm opacity-90">Industry Partners</div>
                </div>
                <div className="text-center transform hover:scale-110 transition-all duration-300">
                  <div className="text-3xl font-bold">4.8★</div>
                  <div className="text-sm opacity-90">Student Rating</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 flex flex-1">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:translate-x-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Course Interest
                  </label>
                  <select
                    name="courses"
                    value={formData.courses}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a course</option>
                    <option value="mern">MERN Full Stack</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="java">Java Full Stack with AI</option>
                    <option value="data-analytics">
                      Data Analytics with AI
                    </option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="dsa">Data Structures & Algorithms</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Tell us about your learning goals..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                >
                 {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:-translate-x-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-orange-200 transition-colors duration-300">
                      <FaPhone className="text-orange-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+91 9214588441</p>
                      <Link
                        href="tel:+919214588441"
                        className="text-orange-500 hover:text-orange-600 text-sm"
                      >
                        Call Now
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-orange-200 transition-colors duration-300">
                      <FaEnvelope className="text-orange-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        {" "}
                        <Link
                          href="mailto:
                          info@maazsteredu.com "
                        >
                          info@maazsteredu.com
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-orange-200 transition-colors duration-300">
                      <FaMapMarkerAlt className="text-orange-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Address</h3>
                      <p className="text-gray-600">
                        D- 1099, Sector 5, D Block, Indira Nagar
                        <br />
                        Lucknow, Uttar Pradesh 226016
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-orange-200 transition-colors duration-300">
                      <FaClock className="text-orange-500 text-lg" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Office Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-gray-600">
                        Saturday: 10:00 AM - 5:00 PM
                      </p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              {/* <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                    <FaFacebook className="text-lg" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12">
                    <FaInstagram className="text-lg" />
                  </a>
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Stay updated with our latest courses, success stories, and tech industry insights.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default ContactUs;
