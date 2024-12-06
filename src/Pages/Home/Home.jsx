import React from "react";
import Section1 from "./Section1";
import Aboutus from "./Aboutus";
import Servicesection from "./Servicesection";
import FutureSection from "./FutureSection";
import TradingStrategies from "./TradingStrategies";
import KeyFeatures from "./KeyFeatures";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Aboutus />
      <Servicesection />
      <FutureSection />
      <TradingStrategies />
      <KeyFeatures />
      <Testimonials />
    </div>
  );
};

export default Home;
