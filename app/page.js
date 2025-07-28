import Image from "next/image";
import Navbar from "./navbar/page";
import Courses from "./courses/page";
import Plans from "./plans/page";
import Testimonials from "./testimonials/page";

export default function Home() {
  return (
    <div className=" pt-24">
      <Navbar />
      <section className="pt-24">
        <h1 className="text-3xl text-center font-bold">
          Welcome To Our EduLab
        </h1>
         <Courses/>
        <Plans />
        <Testimonials />
        {/* other sections */}
      </section>
    </div>
  );
}
