import Banner from "@/app/common/baaner1.png";
import leftImage from "../common/cta-left-image.png";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
      }}
      className=' flex  bg-[url("https://maazstertech.in/assets/images/cta-bg.png")]'
    >
      <div className="flex justify-between items-center w-full  h-full ">
        <div className="flex items-center justify-center w-[50%] h-[50%]">
          <Image
            className=" animate-bounce h-[300px] ml-16 mt-20"
            src={leftImage}
            alt="leftImage"
            width={300}
            height={300}
            objectFit="contain"
            loading="lazy"
          />
        </div>
        <div className=" w-[48vw]   flex items-center  mr- mb-32 mt-20  ">
          <div>
            <p className="text-white text-s">Get the sale right now!</p>
            <h1 className="text-white text-2xl font-bold mt-3">
              Enjoy up to 10% OFF on any course
            </h1>
            <p className="text-white text-xs mt-4 pr-28">
              Unlock your potential with our exclusive offer—save 10% when you
              enroll in one or more courses. Don’t miss out on this limited-time
              opportunity to boost your skills and career!
            </p>
            <button className="bg-white rounded mt-8">
              <h1 className=" text-orange-500 text-xs px-4 py-1">
                View Courses
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
