import React, { useState } from "react";

// Importing icons
import { FaUserCircle } from "react-icons/fa";

function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "The AI-driven tools have transformed the way I trade, especially in the options market.",
      name: "John D.",
      position: "Options Trader",
    },
    {
      quote:
        "SwarajyAlgo has provided me with the insights and strategies I needed to succeed in futures trading.",
      name: "Sara T.",
      position: "Futures Trader",
    },
  ];

  const handleNext = () => {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentTestimonial(
      currentTestimonial === 0
        ? testimonials.length - 1
        : currentTestimonial - 1
    );
  };

  return (
    <div className="bg-blue-200 py-20 text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-800 mb-12">
          What Our Clients Say
        </h2>

        {/* Testimonial Carousel Section */}
        <div className="relative">
          {/* Testimonial Content */}
          <div className="bg-[#1A252F] p-10 rounded-xl shadow-lg">
            <div className="flex justify-center mb-8">
              <div className="text-[#FFDD57] text-6xl">
                <FaUserCircle />
              </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-xl mb-6 italic">
              "{testimonials[currentTestimonial].quote}"
            </p>
            <h4 className="text-2xl font-bold text-[#16A34A] mb-2">
              {testimonials[currentTestimonial].name}
            </h4>
            <p className="text-[#D1D5DB] mb-4">
              {testimonials[currentTestimonial].position}
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-8">
              <button
                onClick={handlePrevious}
                className="bg-blue-800 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="bg-blue-800 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-400 transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
