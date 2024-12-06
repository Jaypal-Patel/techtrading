// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { MdLightMode } from "react-icons/md";
// import { IoMenu, IoClose } from "react-icons/io5";

// function Header() {
//   const [menu, setMenu] = useState(false);

//   const toggleMenu = () => {
//     setMenu(!menu);
//   };

//   return (
//     <>
//       {/* {/ Main Navbar /} */}
//       <div className="relative top-0 right-0 left-0 w-full z-50 md:h-[75px] h-[60px] bg-black text-white flex justify-between items-center md:px-10 px-4 z-50">
//         <div className="flex items-center gap-12">
//           {/* {/ Logo /} */}
//           <Link to={"/"}>
//             <h1 className="text-2xl md:text-3xl font-bold">
//               Tech<span className="text-[#0066FF]">Pana</span>
//             </h1>
//           </Link>

//           {/* {/ Desktop/Tablet Navbar Links /} */}
//           <div className="hidden md:flex items-center gap-7 text-[16px] font-semibold">
//             <Link to={"/market"}>
//               <span>Market</span>
//             </Link>
//             <Link to={"/tred"}>
//               <span>Trade</span>
//             </Link>
//             <Link to={"/cryptocurrency"}>
//               <span>Crypto Currency</span>
//             </Link>
//             <Link to={"/about"}>
//               <span>About</span>
//             </Link>
//             <Link to={"/contact"}>
//               <span>Contact</span>
//             </Link>
//           </div>
//         </div>

//         {/* {/ Right Section /} */}
//         <div className="flex items-center md:gap-5 gap-3">
//           {/* {/ Language, Login, and Signup /} */}
//           <div className="hidden md:flex items-center gap-6 text-[16px] font-semibold">
//             <Link
//             //  to={"/login"}
//             >
//               <span>Login</span>
//             </Link>
//             <Link
//             // to={"/signup"}
//             >
//               <button className="bg-[#005CE6] py-[6px] px-5 rounded-lg">
//                 Sign Up
//               </button>
//             </Link>
//           </div>

//           {/* {/ Light Mode Icon /} */}
//           <div className="flex justify-center items-center w-[36px] h-[36px] bg-[#333333] rounded-full">
//             <MdLightMode size={20} />
//           </div>

//           {/* {/ Mobile Menu Toggle /} */}
//           <div onClick={toggleMenu} className="md:hidden">
//             {menu ? <IoClose size={27} /> : <IoMenu size={27} />}
//           </div>
//         </div>
//       </div>

//       {/* {/ Mobile Navbar /} */}
//       <div
//         className={`md:hidden fixed top-0 pt-[60px] left-0 w-full bg-black text-white transition-transform duration-500 ${
//           menu ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="flex justify-between items-center px-4 py-3">
//           {/* {/ Language and Sign Up /} */}
//           <Link
//           //    to={"/about"}
//           >
//             <span>English</span>
//           </Link>
//           <div className="flex gap-3">
//             <Link
//             //  to={"/login"}
//             >
//               <span>Login</span>
//             </Link>
//             <Link
//             // to={"/signup"}
//             >
//               <button className="bg-[#005CE6] py-[3px] px-4 rounded-lg">
//                 Sign Up
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="flex flex-col mt-4 px-4 space-y-3">
//           <Link to={"/market"} className="border-b border-stone-500 pb-2">
//             Market
//           </Link>
//           <Link to={"/tred"} className="border-b border-stone-500 pb-2">
//             Trade
//           </Link>
//           <Link
//             to={"/cryptocurrency"}
//             className="border-b border-stone-500 pb-2"
//           >
//             Crypto Currency
//           </Link>
//           <Link to={"/about"} className="border-b border-stone-500 pb-2">
//             About
//           </Link>
//           <Link to={"/contect"}>Contact</Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;

import React from "react";
import logo from "../assets/swarajalgo.png";

const Header = () => {
  return (
    <div>
      <nav className="bg-black border-gray-700 py-4">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          {/* Logo Section */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* Logo Image */}
            <img
              src={logo} // Replace this with your actual image path
              alt="SwarajyAlgo Logo"
              className="h-8 " // Adjust the size as needed
            />
            {/* <h1 className="text-xl font-extrabold text-white">SwarajyAlgo</h1> */}
          </a>

          {/* Right Header Section (Free Trial, Login/Signup, User Menu) */}
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2 ">
            {/* Free Trial Button */}
            <div className="hidden md:block">
              <a
                href="/free-trial"
                className="text-sm bg-blue-600 text-white rounded-full px-6 py-3 hover:bg-blue-700 transition duration-300 ease-in-out"
              >
                FREE TRIAL
              </a>

              {/* Login/Sign Up Links */}
              <a
                href="/login"
                className="text-sm text-gray-200 px-6 py-3 rounded-full border border-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out"
              >
                Login
              </a>
              <a
                href="/signup"
                className="text-sm text-white px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 transition duration-300 ease-in-out"
              >
                Sign Up
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Main Navigation Links */}
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {/* Company Dropdown */}
              <li className="relative group">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white"
                >
                  Company
                </a>
                <div className="absolute left-0 z-50  hidden space-y-2 text-sm shadow-lg rounded-md dark:bg-gray-800 dark:text-white group-hover:block">
                  <div className="relative top-4 rounded-md bg-gray-400">
                    <a
                      href="/about"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      About Us
                    </a>
                    <a
                      href="/contact"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </li>

              {/* Services Dropdown */}
              <li className="relative group">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white"
                >
                  Services
                </a>
                <div className="absolute left-0 z-50 hidden space-y-2 text-sm shadow-lg rounded-md dark:bg-gray-800 dark:text-white group-hover:block">
                  <div className="relative top-4 rounded-md bg-gray-400">
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Indicators
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md"
                    >
                      Strategy
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md"
                    >
                      AI Tools
                    </a>
                  </div>
                </div>
              </li>

              {/* Futures Dropdown */}
              <li className="relative group">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white"
                >
                  Futures
                </a>
                <div className="absolute left-0 z-50  hidden space-y-2 text-sm shadow-lg rounded-md dark:bg-gray-800 dark:text-white group-hover:block">
                  <div className="relative top-4 rounded-md bg-gray-400">
                    <a
                      href="/analysis"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Futures Analysis
                    </a>
                    <a
                      href="/longShort"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Long vs Short
                    </a>
                    <a
                      href="/priceVsOI"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Price vs OI
                    </a>
                  </div>
                </div>
              </li>

              {/* Options Dropdown */}
              <li className="relative group">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white"
                >
                  Options
                </a>
                <div className="absolute left-0 z-50 hidden space-y-2 text-sm shadow-lg rounded-md dark:bg-gray-800 dark:text-white group-hover:block">
                  <div className="relative top-4 rounded-md bg-gray-400">
                    <a
                      href="/openInterestAnalysis"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      OI Analysis
                    </a>
                    <a
                      href="/trendingStrike"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Trending Strikes
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Call vs Put OI
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Advanced Option Chain
                    </a>
                  </div>
                </div>
              </li>

              {/* Strategy Dropdown */}
              <li className="relative group">
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white"
                >
                  Strategy
                </a>
                <div className="absolute left-0 z-50  hidden space-y-2 text-sm shadow-lg rounded-md dark:bg-gray-800 dark:text-white group-hover:block">
                  <div className="relative top-4 rounded-md bg-gray-400">
                    <a
                      href=""
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Straddle Strangle
                    </a>
                    <a
                      href="/multipleStrikes"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Multi Strike Straddle
                    </a>
                    <a
                      href="/straddleSnapshot"
                      className="block px-4 py-2 hover:bg-gray-600 hover:rounded-md text-nowrap"
                    >
                      Straddle Snapshot
                    </a>
                  </div>
                </div>
              </li>

              {/* Contact Link */}
              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white"
                >
                  Contact
                </a>
              </li>

              {/* Algo Trading Platform Link */}
              <li>
                <a
                  href="/platform"
                  className="block py-2 px-3 text-gray-300 rounded-md hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 dark:text-white"
                >
                  Algo Trading Platform
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
