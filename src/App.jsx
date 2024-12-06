// import { useState } from 'react';
// import InfoBar from './InfoBar/InfoBar';
// import Contact from './ContactPage/Contact';
// import Header from './components/Header';
//  import './App.css';
// function App() {

//   return (
//     <div className=" mx-auto mt-2 mr-2 ml-2">
//       <Header/>
//       <InfoBar />
//       <Contact />

//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/ContactPage/Contact";
import Header from "./components/Header";
import InfoBar from "./components/InfoBar/InfoBar";
import About from "./Pages/ContactPage/About";
import Footer from "./components/Footer";
import Buttons from "./components/InfoBar/Buttons";
import PriceVsOI from "./Pages/Futures/PriceVsOI";
import LongShort from "./Pages/Futures/LongShort";
import Analysis from "./Pages/Futures/Analysis";
import StraddleStrangle from "./Pages/Strategy/StraddleStrangle";
import StraddleSnapshot from "./Pages/Strategy/StraddleSnapshot";
import MultipleStrikes from "./Pages/Strategy/MultipleStrikes";
import OpenInterestAnalysis from "./Pages/Options/OpenInterestAnalysis";
import TrendingStrike from "./Pages/Options/TrendingStrike";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Buttons /> */}
      <InfoBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        {/* <Route path='/cryptocurrency' element={<CryptoCurrency/>}/> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/analysis" element={<Analysis />} />
        <Route path="/longShort" element={<LongShort />} />
        <Route path="/priceVsOI" element={<PriceVsOI />} />
        <Route path="/multipleStrikes" element={<MultipleStrikes />} />
        <Route path="/straddleSnapshot" element={<StraddleSnapshot />} />
        <Route path="/straddleStrangle" element={<StraddleStrangle />} />

        <Route path='/openInterestAnalysis' element={<OpenInterestAnalysis/>}/> 
        <Route path='/TrendingStrike' element={<TrendingStrike/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
