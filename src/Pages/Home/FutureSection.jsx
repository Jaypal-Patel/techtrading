import React from "react";

function FutureSection() {
  return (
    <div className="w-full bg-gradient-to-b from-blue-400 to-blue-200 py-20 px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-12">
          Futures Trading with{" "}
          <span className="text-blue-800">SwarajyAlgo</span>
        </h2>

        {/* Futures Trading Info Section */}
        <div className="flex flex-col lg:flex-row justify-around items-start gap-12">
          {/* Futures Analysis */}
          <div className="bg-[#1E2A47] p-10 rounded-2xl shadow-xl w-full sm:w-[300px] transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="bg-[#1D4ED8] p-6 rounded-full mb-6 w-fit mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12l5 5L20 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Futures Analysis
            </h3>
            <p className="text-[#E5E7EB]">
              Dive deep into market trends and predictions, gaining actionable
              insights for smarter trading decisions.
            </p>
          </div>

          {/* Long vs Short */}
          <div className="bg-[#1E2A47] p-10 rounded-2xl shadow-xl w-full sm:w-[300px] transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="bg-[#EF4444] p-6 rounded-full mb-6 w-fit mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5-5 5m-4-10L6 7l5 5-5 5"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Long vs Short
            </h3>
            <p className="text-[#E5E7EB]">
              Explore the benefits and risks of long and short strategies to
              optimize your approach to futures trading.
            </p>
          </div>

          {/* Price vs OI */}
          <div className="bg-[#1E2A47] p-10 rounded-2xl shadow-xl w-full sm:w-[300px] transform hover:scale-105 transition duration-300 ease-in-out">
            <div className="bg-[#FBBF24] p-6 rounded-full mb-6 w-fit mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 11h1m3 0h5m4 0h1m-7 5l-2 2m2-2l2 2"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Price vs OI</h3>
            <p className="text-[#E5E7EB]">
              Track price movements in relation to open interest to understand
              market direction and adjust your strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FutureSection;
