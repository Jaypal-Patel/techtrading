// import React from "react";

// const Servicesection = () => {
//   return (
//     <div className="w-full bg-gradient-to-r from-[#1E40AF] to-[#16A34A] py-16 px-8 lg:px-20">
//       <div className="max-w-screen-xl mx-auto text-center text-white">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-5xl font-extrabold text-[#F9FAFB] leading-tight mb-12">
//           Our <span className="text-[#FFD700]">Services</span>
//         </h2>

//         {/* Service Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//           {/* Service 1: Market Indicators */}
//           <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
//             <div className="mb-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-16 w-16 mx-auto text-[#FFD700]"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M13 10V3L4 14h7v7l9-11h-7z"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white mb-4">
//               Market Indicators
//             </h3>
//             <p className="text-[#E5E7EB]">
//               Real-time indicators to assist with trading decisions, ensuring
//               you stay ahead of the market.
//             </p>
//           </div>

//           {/* Service 2: Trading Strategies */}
//           <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
//             <div className="mb-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-16 w-16 mx-auto text-[#FFD700]"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M3 4v16h18V4H3zM6 2h12a2 2 0 012 2v18a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white mb-4">
//               Trading Strategies
//             </h3>
//             <p className="text-[#E5E7EB]">
//               Developed strategies for all market conditions, empowering you to
//               trade confidently.
//             </p>
//           </div>

//           {/* Service 3: AI Tools */}
//           <div className="bg-[#1F2937] p-8 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
//             <div className="mb-6">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-16 w-16 mx-auto text-[#FFD700]"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="M12 5v14m7-7H5"
//                 />
//               </svg>
//             </div>
//             <h3 className="text-xl font-bold text-white mb-4">AI Tools</h3>
//             <p className="text-[#E5E7EB]">
//               Leverage AI to make data-driven decisions, optimizing your trading
//               strategies with advanced analytics.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Servicesection;

import React from "react";
import { FaChartLine, FaCogs, FaBrain } from "react-icons/fa";

const ServiceSection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-200 to-blue-400 py-24 px-8 lg:px-20">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#F9FAFB] leading-tight mb-12">
          Our <span className="text-blue-800">Services</span>
        </h2>

        {/* Service 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1F2937] p-8 rounded-xl mb-12 hover:bg-[#4A5568] transform transition duration-300 ease-in-out hover:scale-105">
          <div className="text-blue-200 text-5xl mr-8">
            <FaChartLine />
          </div>
          <div className="flex flex-col text-left w-full lg:w-2/3">
            <h3 className="text-3xl font-bold text-blue-200 mb-4">
              Market Indicators
            </h3>
            <p className="text-blue-200 text-lg">
              Real-time indicators to assist with trading decisions, ensuring
              you stay ahead of the market.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1F2937] p-8 rounded-xl mb-12 hover:bg-[#4A5568] transform transition duration-300 ease-in-out hover:scale-105">
          <div className="text-blue-200 text-5xl mr-8">
            <FaCogs />
          </div>
          <div className="flex flex-col text-left w-full lg:w-2/3">
            <h3 className="text-3xl font-bold text-blue-200 mb-4">
              Trading Strategies
            </h3>
            <p className="text-blue-200 text-lg">
              Developed strategies for all market conditions, empowering you to
              trade confidently.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-[#1F2937] p-8 rounded-xl mb-12 hover:bg-[#4A5568] transform transition duration-300 ease-in-out hover:scale-105">
          <div className="text-blue-200 text-5xl mr-8">
            <FaBrain />
          </div>
          <div className="flex flex-col text-left w-full lg:w-2/3">
            <h3 className="text-3xl font-bold text-blue-200 mb-4">AI Tools</h3>
            <p className="text-blue-200 text-lg">
              Leverage AI to make data-driven decisions, optimizing your trading
              strategies with advanced analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
