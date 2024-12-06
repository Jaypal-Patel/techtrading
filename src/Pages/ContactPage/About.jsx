import React from "react";
import AboutUs from "../../assets/AboutUs.svg";
const About = () => {
  return (
    <div className="bg-blue-200 w-full grid grid-cols-1 md:grid-cols-2 gap-4 p-6  ">
      <div className="w-full flex flex-col justify-center p-4">
        <div className="w-full">
          {" "}
          <h2 className=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ">
            Our Ultimate Products
          </h2>
          <p className=" text-xl  sm:text-2xl md:text-3xl font-semibold mb-6 ">
            Start trading to get up to $500 in Mystery Box prizes!
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <img src={AboutUs} alt="About Us" className="w-full h-auto max-w-md" />
      </div>
    </div>
  );
};

export default About;
