// app/contact/ContactForm.js
"use client";

import { use, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [formData , setFormData]  = useState({
    firstName:"",
    lastName:"",
    email:"",
    phone:"",
    message:"",
    course:[]
  })

  const handleChange = (e) => {
    console.log(e.target )
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  // Handler for checkbox changes
  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCourses((prevCourses) => [...prevCourses, value]);
    } else {
      setCourses((prevCourses) =>
        prevCourses.filter((course) => course !== value)
      );
    }
  };

  const handleSubmit = async (e) => {
    console.log("Form Data==>",formData)
    e.preventDefault();
    
    setIsLoading(true);

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        message,
        courses,
      }),
    });

    setIsLoading(false);

    if (response.ok) {
      toast.success("Message sent successfully!");
      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setCourses([]);
      // Uncheck all checkboxes
      document
        .querySelectorAll("input[type=checkbox]")
        .forEach((el) => (el.checked = false));
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  };

  // const courseOptions = [
  //   "UX/UI",
  //   "Data Analytics",
  //   "Java",
  //   "MERN Stack",
  //   "AI/ML",
  //   "Digital Marketing",
  // ];

  return (
    <div className="p-8 md:w-1/2 bg-white">
      {/* Toaster for notifications */}
      <Toaster position="top-center" />

      <h2 className="text-xl font-semibold mb-6">
        We’re Just One Message Away from{" "}
        <span className="text-orange-500">Helping You Grow.</span>
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            placeholder="Last Name"
            name="lastName"
            className="border-b outline-none py-2 px-1 focus:border-orange-500"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border-b outline-none py-2 px-1 focus:border-orange-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            placeholder="Phone No"
            name="phone"
            className="border-b outline-none py-2 px-1 focus:border-orange-500"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          rows="3"
          placeholder="Type your message..."
          name="message"
          className="w-full border-b outline-none py-2 px-1 focus:border-orange-500 "
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <div>
          <label className="block mb-2 font-medium">Courses</label>
          <div className="grid grid-cols-2 gap-2 text-orange-600 text-sm cursor-pointer hover:cursor-pointer">
            {courseOptions.map((course) => (
              <label key={course}>
                <input
                  type="checkbox"
                  name="courses"
                  value={formData.course}
                  onChange={handleCourseChange}
                  className="mr-2 accent-orange-500 cursor-pointer"
                />
                {course}
              </label>
            ))}
          </div>
        </div>

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
