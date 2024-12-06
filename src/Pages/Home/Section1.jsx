import React from "react";
import annimation from "../../assets/trading1.gif";
import background from "../../assets/background.jpg";

function Section1() {
  return (
    <div
      className="w-full h-[100vh] grid lg:grid-cols-2 grid-col-1 lg:gap-10 gap-5 pt-10 pb-5 justify-center items-center px-5 lg:px-20"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%), url(${background})`,
      }}
    >
      {/*Content Section*/}
      <div className="md:ml-16 lg:ml-0 px-4 sm:px-8">
        <h1 className="lg:text-6xl md:text-5xl text-4xl text-white font-extrabold leading-tight mb-8 text-center lg:text-left relative z-10">
          Smarter Trading
          <br />
          <span className="text-[#1E40AF]">SwarajyAlgo</span>{" "}
          {/* Dark Blue for trust */}
          <span className="text-[#16A34A] font-bold"> with </span>{" "}
          {/* Green for growth and success */}
          <br />
          <span className="text-[#FF4F00] font-bold">TradeSuite</span>{" "}
          {/* Orange for urgency and action */}
        </h1>

        <p className="lg:text-xl text-base text-gray-300 mb-8">
          Access advanced trading tools, strategies, and AI-driven insights for
          smarter market decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Sign Up Button */}
          <button className="bg-gradient-to-r from-[#0066FF] to-[#0052cc] text-white lg:text-xl text-base py-4 px-10 rounded-full sm:w-auto w-full transition duration-300 ease-in-out hover:scale-105 transform hover:shadow-lg hover:bg-[#0052cc] relative">
            <span className="mr-3">🚀</span> Sign Up
          </button>

          {/* Free Trial Button */}
          <button className="bg-gradient-to-r from-[#16A34A] to-[#10B981] text-white lg:text-xl text-base py-4 px-10 rounded-full sm:w-auto w-full transition duration-300 ease-in-out hover:scale-105 transform hover:shadow-lg hover:bg-[#10B981]">
            Free Trial
          </button>
        </div>
      </div>

      {/*Image Section*/}
      {/* <div className="flex justify-center items-center">
        <img
          className="lg:w-[85%] w-[75%] object-cover"
          // src={annimation}
          alt="Front Page Image"
        />
      </div> */}
    </div>
  );
}

export default Section1;
