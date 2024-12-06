import React from "react";
import { FaRobot, FaChartLine, FaTools } from "react-icons/fa"; // Icons for AI, Market Data, and Tools

function KeyFeatures() {
  return (
    <div className="bg-gradient-to-b from-blue-400 to-blue-200 py-24">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white-200 mb-16">
          Why Choose <span className="text-blue-800">SwarajyAlgo</span> Trade
          Suite?
        </h2>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-0">
          {/* Feature 1: AI-Driven Insights */}
          <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF4F00] via-[#FF8000] to-[#FF4F00] opacity-30 group-hover:opacity-40 transition-all"></div>
            <div className="bg-[#16A34A] text-white p-5 rounded-full mb-6 mx-auto">
              <FaRobot size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              AI-Driven Insights
            </h3>
            <p className="text-[#D1D5DB] mb-6">
              Harness the power of AI to optimize your trading strategies and
              maximize profits.
            </p>
          </div>

          {/* Feature 2: Real-Time Market Data */}
          <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10B981] via-[#34D399] to-[#10B981] opacity-30 group-hover:opacity-40 transition-all"></div>
            <div className="bg-[#0284C7] text-white p-5 rounded-full mb-6 mx-auto">
              <FaChartLine size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Real-Time Market Data
            </h3>
            <p className="text-[#D1D5DB] mb-6">
              Stay ahead with live market data and real-time alerts to make
              quick, informed decisions.
            </p>
          </div>

          {/* Feature 3: Comprehensive Tools */}
          <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0284C7] via-[#3B82F6] to-[#0284C7] opacity-30 group-hover:opacity-40 transition-all"></div>
            <div className="bg-[#F59E0B] text-white p-5 rounded-full mb-6 mx-auto">
              <FaTools size={32} />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Comprehensive Tools
            </h3>
            <p className="text-[#D1D5DB] mb-6">
              Access everything you need, from advanced charting to futures and
              options tools, all in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
