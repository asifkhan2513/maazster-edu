"use client";

import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
  // Single state for all form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    courses: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("handle")
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle checkbox changes
  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      courses: checked
        ? [...prev.courses, value]
        : prev.courses.filter((course) => course !== value),
    }));
  };

  // Submit handler
  const handleSubmit = async (e) => {
    console.log("Submit triggered"); 
    e.preventDefault();              
    console.log("Default prevented"); 
    console.log("Form Data Submitted:", formData); 

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/v1/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        // Reset form
        // setFormData({
        //   firstName: "",
        //   lastName: "",
        //   email: "",
        //   phone: "",
        //   message: "",
        //   courses: [],
        // });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please check the server.");
      console.error("Error sending form data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const courseOptions = [
    "UX/UI",
    "Data Analytics",
    "Java",
    "MERN Stack",
    "AI/ML",
    "Digital Marketing",
  ];

  return (
    <div className="p-8 md:w-1/2 bg-white">
      <Toaster position="top-center" />

      <h2 className="text-xl font-semibold mb-6">
        We’re Just One Message Away from{" "}
        <span className="text-orange-500">Helping You Grow.</span>
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="border-b outline-none py-2 px-1 focus:border-orange-500"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="border-b outline-none py-2 px-1 focus:border-orange-500"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-b outline-none py-2 px-1 focus:border-orange-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone No"
            className="border-b outline-none py-2 px-1 focus:border-orange-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <textarea
          rows="3"
          name="message"
          placeholder="Type your message..."
          className="w-full border-b outline-none py-2 px-1 focus:border-orange-500"
          value={formData.message}
          onChange={handleChange}
          required
        />

        {/* Courses */}
        <div>
          <label className="block mb-2 font-medium">Courses</label>
          <div className="grid grid-cols-2 gap-2 text-orange-600 text-sm">
            {courseOptions.map((course) => (
              <label key={course} className="cursor-pointer">
                <input
                  type="checkbox"
                  value={course}
                  checked={formData.courses.includes(course)}
                  onChange={handleCourseChange}
                  className="mr-2 accent-orange-500 cursor-pointer"
                />
                {course}
              </label>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white py-2 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
