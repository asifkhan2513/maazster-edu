import Image from "next/image";
import Navbar from "@/app/navbar/page";
import Courses from "@/app/courses/page";
import Plans from "@/app/plans/page";
import Banner from "@/app/common/banner.png";
import Testimonials from "@/app/testimonials/page";
import { FaUserGroup } from "react-icons/fa6";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import BannerSection from "./banner";
import rightBanner from "../app/common/banner-right-dec.png";
import leftBanner from "../app/common/banner-left-dec.png";

export default function Home() {
  return (
    <div className="no-scrollbar overflow-auto pt-24">
      <Navbar />
      <div className=" flex mt-20 ">
        <div className="w-[50%] relative h-[350px] text-center text-2xl  ">
          <Image
            className="h-[300px] w-[300px] object-contain"
            src={leftBanner}
            alt="leftBanner"
            loading="lazy"
          />
          <p className="text-gray-400 mt-10">Welcome to our EduLab </p>
          <br />
          <h1 className="text-5xl font-bold mb-5">Best Place To Learn</h1>
          <span className=" text-3xl font-bold animate-pulse text-orange-500">
            MERN Full Stack with AI Join Us Now!
          </span>
          <br />
          <button className=" text-2xl text-orange-100 rounded-md w-[150px] h-[40px] bg-orange-400 border-black mt-5">
            Join Now
          </button>
        </div>

        <div className="   w-[50%] flex justify-center">
          <div className="relative  flex  justify-center mb-20">
            <Image
              className="h-[300px] w-[300px] object-contain"
              src={rightBanner}
              alt="rightBanner"
            />
            <Image
              src={Banner}
              alt="banner"
              object-contain
              className="w-[300px] h-[520px] absolute top-1"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-52">
        <h1 className="text-3xl font-bold flex ">
          Empowering Your Learning Journey
        </h1>
        Explore the different ways I can help you learn and grow in tech
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-12 ">
        {/* <!-- Card 1 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white">
          <h3 className="text-xl font-semibold mb-2">Online Live Classes</h3>
          <p className="">
            Interactive online sessions with real-time Q&A and project-based
            learning, accessible from anywhere.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6  hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white">
          <h3 className="text-xl font-semibold mb-2 ">
            <span>
              <FaUserGroup />
            </span>
            In-Person Workshops
          </h3>
          <p className="">
            Hands-on workshops designed to provide practical experience and
            collaborative learning in a classroom setting.
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6  hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white ">
          <h3 className="text-xl font-semibold mb-2 ">1-on-1 Mentorship</h3>
          <p className="">
            Personalized guidance and support tailored to your learning goals,
            with direct feedback and career advice.
          </p>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6  hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white">
          <h3 className="text-xl font-semibold mb-2">
            <span>
              <ChevronsLeftRightEllipsis />
            </span>
            Custom Course Creation
          </h3>
          <p className="">
            Development of custom courses and learning paths to suit your unique
            needs and interests in technology.
          </p>
        </div>
      </div>
      <section className="mt-16">
        <Courses />
        <Plans />
        <BannerSection />
        {/* <div className="">
          <div> girl image</div>
          <div> content</div>
        </div> */}
        <Testimonials />
        {/* other sections */}
      </section>
      <footer className="w-full h-16 bg-white flex flex-col items-center justify-center ">
        <p className=" text-xs">© 2025 Maazster Tech GENX PVT LTD.</p>
        <p className=" text-xs">All Rights Reserved.</p>
        <p className="text-orange-400 text-s">Powered By Maazstertech.com</p>
      </footer>
    </div>
  );
}
