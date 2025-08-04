import Image from "next/image";
import Navbar from "@/app/navbar/page";
import Courses from "@/app/courses/page";
import Plans from "@/app/plans/page";
import Banner from "@/app/common/banner.png";
import Testimonials from "@/app/testimonials/page";
import { FaUserGroup } from "react-icons/fa6";
import { ChevronsLeftRightEllipsis } from "lucide-react";

export default function Home() {
  return (
    <div className="no-scrollbar overflow-auto pt-24">
      <Navbar />
      <div className=" flex ">
        <div className="w-[50%] h-[350px] text-center text-2xl mt-20">
          Welcome to our EduLab <br />
          <span className=" text-3xl font-bold">
            Best Place To Learn MERN Full Stack with AI Join Us Now!
          </span>
          <br />
          <button className=" text-2xl border rounded-md w-[150px] h-[40px] bg-orange-400 border-black">
            Join Now
          </button>
        </div>

        <div className="w-[50%] ml-64">
          <Image
            src={Banner}
            alt="banner"
            object-contain
            className="w-[400px] h-[600px]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold flex ">
          Empowering Your Learning Journey
        </h1>
        Explore the different ways I can help you learn and grow in tech
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {/* <!-- Card 1 --> */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">Online Live Classes</h3>
          <p className="text-gray-700">
            Interactive online sessions with real-time Q&A and project-based
            learning, accessible from anywhere.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2 ">
            <span>
              <FaUserGroup />
            </span>
            In-Person Workshops
          </h3>
          <p className="text-gray-700">
            Hands-on workshops designed to provide practical experience and
            collaborative learning in a classroom setting.
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">1-on-1 Mentorship</h3>
          <p className="text-gray-700">
            Personalized guidance and support tailored to your learning goals,
            with direct feedback and career advice.
          </p>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-2">
            <span>
              <ChevronsLeftRightEllipsis />
            </span>
            Custom Course Creation
          </h3>
          <p className="text-gray-700">
            Development of custom courses and learning paths to suit your unique
            needs and interests in technology.
          </p>
        </div>
      </div>
      <section className="pt-24">
        <Courses />
        <Plans />
        <div className="">
          <div> girl image</div>
          <div> content</div>
        </div>
        <Testimonials />
        {/* other sections */}
      </section>
    </div>
  );
}
