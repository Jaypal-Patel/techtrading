import React from "react";
import {
  FaSquareTwitter,
  FaSquareWhatsapp,
  FaSquareInstagram,
} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="footer h-[65vh] bg-blue-200 text-[#fff] pb-4 pt-6 md:px-10">
      <div className="container mx-auto px-6 lg:px-1 mt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* {/ Section 1: About /} */}
          <div className="lg:col-span-2">
            <h1 className=" text-white-600 text-2xl lg:4xl  font-bold mb-4">
              Swarajy Algo
            </h1>
            <p className="text-sm leading-6">
              Welcome to the world of algorithmic trading where innovation meets
              financial markets. At TradeArth, we believe that the future of
              trading lies in the power of algorithms. Algorithmic trading,
              often referred to as algo trading, leverages advanced mathematical
              models and automated systems to execute trades with speed,
              precision, and efficiency.
            </p>
          </div>

          {/* {/ Section 2: Quick Links /} */}
          <div className="lg:ps-20">
            <h2 className="text-lg font-semibold text-white-600 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">Trade</li>
              <li className="hover:text-blue-500 cursor-pointer">Market</li>
              <li className="hover:text-blue-500 cursor-pointer">
                Crypto Currency
              </li>
            </ul>
          </div>

          {/* {/ Section 3: Company /} */}
          <div className="lg:ps-20">
            <h2 className="text-lg font-semibold text-white-600 mb-4">
              Company
            </h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">Home</li>
              <li className="hover:text-blue-500 cursor-pointer">About</li>
              <li className="hover:text-blue-500 cursor-pointer">Contect</li>
            </ul>
          </div>

          {/* {/ Section 4: Legal /} */}
          <div className="lg:ps-20">
            <h2 className="text-lg font-semibold text-white-600 mb-4">Legal</h2>
            <ul className="space-y-2">
              <li className="hover:text-blue-500 cursor-pointer">
                Trade Policy
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Terms of Service
              </li>
              <li className="hover:text-blue-500 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>

        {/* {/ Copyright and Social Media Section /} */}
        <div className="flex justify-between items-center mt-10 border-t border-white-300 pt-2 text-center text-sm ps-6">
          <p className="text-sm">
            @ 2025 <span className="text-white-600">SwarajyAlgo</span>. All
            Rights Reserved
          </p>
          <div className="flex space-x-0 lg:space-x-4 pe-10">
            <div className="flex justify-center items-center w-10 h-10 bg-white shadow-lg rounded-full">
              <a href="#" className="text-[#28AAE1]">
                <FaSquareTwitter size={25} />
              </a>
            </div>
            <div className="flex justify-center items-center w-10 h-10 bg-white shadow-lg rounded-full">
              <a href="#" className="text-[#D52423]">
                <IoLogoYoutube size={25} />
              </a>
            </div>
            <div className="flex justify-center items-center w-10 h-10 bg-white shadow-lg rounded-full">
              <a href="#" className="text-[#33D952] ">
                <FaSquareWhatsapp size={25} />
              </a>
            </div>
            <div className="flex justify-center items-center w-10 h-10 bg-white shadow-lg rounded-full">
              <a href="#" className="text-[#E62991] ">
                <FaSquareInstagram size={25} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
