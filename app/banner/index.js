// import Banner from "@/app/common/baaner1.png";
// import leftImage from "@/app/common/cta-left-image.png";
// import Image from "next/image";

// const BannerSection = () => {
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${Banner.src})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//       className="min-h-[400px] lg:h-[500px] flex items-center px-4 lg:px-8"
//     >
//       <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto">
//         <div className="flex items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
//           <Image
//             className="animate-bounce h-[200px] lg:h-[300px] w-auto"
//             src={leftImage}
//             alt="leftImage"
//             width={300}
//             height={300}
//             style={{ objectFit: "contain" }}
//             loading="lazy"
//           />
//         </div>
//         <div className="w-full lg:w-1/2 flex items-center text-center lg:text-left">
//           <div className="max-w-lg">
//             <p className="text-white text-sm lg:text-base mb-2">Get the sale right now!</p>
//             <h1 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
//               Enjoy up to 10% OFF on any course
//             </h1>
//             <p className="text-white text-sm lg:text-base mb-6 leading-relaxed">
//               Unlock your potential with our exclusive offer—save 10% when you
//               enroll in one or more courses. Don't miss out on this limited-time
//               opportunity to boost your skills and career!
//             </p>
//             <button className="bg-white hover:bg-gray-100 rounded-lg px-6 py-3 transition-all duration-300 transform hover:scale-105">
//               <span className="text-orange-500 font-semibold">
//                 View Courses
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BannerSection;
import Banner from "@/app/common/baaner1.png";
import leftImage from "@/app/common/cta-left-image.png";
import Image from "next/image";

const BannerSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Banner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-[400px] lg:h-[500px] flex items-center px-4 lg:px-8"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
          <Image
            className="animate-bounce h-[200px] lg:h-[300px] w-auto"
            src={leftImage}
            alt="leftImage"
            width={300}
            height={300}
            style={{ objectFit: "contain" }}
            loading="lazy"
          />
        </div>
        <div className="w-full lg:w-1/2 flex items-center text-center lg:text-left">
          <div className="max-w-lg">
            <p className="text-white text-sm lg:text-base mb-2">Get the sale right now!</p>
            <h1 className="text-white text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
              Enjoy up to 10% OFF on any course
            </h1>
            <p className="text-white text-sm lg:text-base mb-6 leading-relaxed">
              Unlock your potential with our exclusive offer—save 10% when you
              enroll in one or more courses. Don&apos;t miss out on this limited-time
              opportunity to boost your skills and career!
            </p>
            <button className="bg-white hover:bg-gray-100 rounded-lg px-6 py-3 transition-all duration-300 transform hover:scale-105">
              <span className="text-orange-500 font-semibold">
                View Courses
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
