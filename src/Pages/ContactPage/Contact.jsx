import React from "react";
import contactUs from "../../assets/contactUs.jpg";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 h-auto pb-20">
      {/* Hero Image */}
      <div className="relative mt-2 w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src={contactUs}
          alt="contactUs"
          className="object-cover w-full h-64 sm:h-80"
        />
      </div>

      {/* Introduction Text */}
      <div className=" w-full p-8  bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-500">GET IN TOUCH</h1>
        <div className="flex max-w-full flex-col md:flex-row  lg:flex-nowrap">
          <div className="w-full p-4 bg-white rounded-lg shadow-lg border-blue-300 border-2 mr-4 mb-4">
            <div className="w-full flex  flex-col justify-center items-center mt-1 mb-2">
              <BiSolidPhoneCall className=" text-white bg-blue-600 rounded-full max-w-full w-16 h-16" />{" "}
            </div>
            <div className="w-full flex flex-col  justify-center items-center mb-1">
              <p className="mt-0 mb-0 text-center">+91 9321446611</p>
              <p className="mt-0 mb-0 text-center">+91 9321446622</p>
              <p className="mt-0 mb-0 text-center">+91 9321446633</p>
            </div>
          </div>
          <div className="w-full  p-4 bg-white rounded-lg shadow-lg border-blue-300 border-2  mr-4 mb-4">
            <div className="w-full flex flex-col justify-center items-center mt-1 mb-2">
              <HiOutlineMail className="text-white bg-blue-600 rounded-full max-w-full w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center items-center mb-2">
              <p>contact@techpanda.in</p>
            </div>
          </div>

          <div className="w-full p-4 bg-white rounded-lg shadow-lg border-blue-300 border-2 ">
            <div className="w-full flex flex-col justify-center items-center mt-1 mb-2 ">
              <IoLocation className="text-white bg-blue-600 rounded-full max-w-full w-16 h-16" />
            </div>
            <div className="flex flex-col justify-center items-center mb-2 ">
              <p className="text-center flex ">
                {" "}
                Plot Number 109-110 PU4, Scheme Number 54, behind C21 Mall,
                Vijay Nagar, Indore, Madhya Pradesh 452010
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full mt-2  ml-[20px] mr-[20px] p-10 bg-white  shadow-lg border-blue-300 border-2 rounded-3xl">
        <h1 className="text-2xl font-bold text-center text-blue-500">
          CONTACT US
        </h1>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Left Column: Inputs */}
          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-medium"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter first name"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-medium"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter last name"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column: Textarea */}
          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="8"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
