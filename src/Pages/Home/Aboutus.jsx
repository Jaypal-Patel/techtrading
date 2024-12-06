import React from "react";

const Aboutus = () => {
  return (
    <div>
      {" "}
      <div className="w-full  bg-gradient-to-b from-blue-400 to-blue-200 py-16 px-8 lg:px-20">
        <div className="max-w-screen-xl mx-auto text-center text-white">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#F9FAFB] leading-tight mb-8">
            About <span className="text-blue-800">SwarajyAlgo</span>
          </h2>

          {/* Text */}
          <p className="lg:text-lg text-base text-[#E5E7EB] mb-8">
            SwarajyAlgo is revolutionizing the trading experience with
            cutting-edge AI technology and advanced market analytics. Our
            platform offers powerful tools for both beginner and advanced
            traders in options, futures, and more. Whether you're looking to
            dive into the complexities of the market or just beginning your
            trading journey, SwarajyAlgo is here to guide you every step of the
            way.
          </p>

          {/* Call to Action Button */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#0066FF] to-[#0052cc] text-white py-3 px-8 rounded-full text-lg hover:bg-[#0052cc] transition duration-300 ease-in-out transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
