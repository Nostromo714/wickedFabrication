import React, { useEffect, useState, useRef } from "react";
import Header from "../components/header.js";
import HeroQuotes from "../components/heroQuotes.js";
import WhatWeDo from "../components/whatWeDo.js";
import ContactForm from "../components/contactForm.js";
import Footer from "../components/footer.js";

import backgroundImage from "../Images/havasuBridge.jpg";
//import wickedLogo from '../Images/wickedFabLogo.jpg'
import transparentLogo from "../Images/wickedLogoTransparent.png";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Background section with header and overlay */}
      <section
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-center px-4"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Header fixed at top right */}
      <header className="fixed top-10 right-10 z-50 ">
        <Header />
      </header>

        {/* Dark overlay to dim background image */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0 "></div>

        {/* Transparent logo */}
        <section className="p-2 relative z-10 flex flex-col lg:flex-row text-center items-center">
          <img src={transparentLogo} alt="Wicked Logo" className=" w-48 sm:w-60 " />
          {/* Logo text with drop shadow */}
          <div className="flex flex-col text-left pl-4 md:items-center">
            <h1 className="text-white text-5xl sm:text-4xl md:text-5xl lg:text-4xl font-bold drop-shadow-lg pt-4">
              Wicked Fabrication 
            </h1>
            <p className="text-white text-lg sm:text-1xl md:text-3xl italic drop-shadow-lg sm:text-center">
              Custom Metal Fabrication & Signage
            </p>
          </div>
        </section>
          {/* Hero Quotes Section */}
        <section className="p-4 sm:p-6 md:p-8 relative z-10 flex flex-col items-center justify-center space-y-8 ">
        <p className="text-white text-3xl sm:text-5xl md:text-5xl lg:text-6xl italic drop-shadow-lg text-center font-bold pb-12">
        Welcome to Wicked Fabrication — Built to Last. Made to Stand Out.
        </p>
        {/* Hero Quotes with box styling and text styling */}
        <div className=" border-b-4 border-l-4 border-t-4 border-r-4 rounded-lg w-full max-w-4xl mx-auto bg-black bg-opacity-50 text-center p-2 relative z-10 ">
          <HeroQuotes />
        </div>
        </section>
      </section>

      {/* What We Do Content/component */}
      <div>
        <WhatWeDo />
      </div>

      {/* Contact Form Component */}
      <div className="bg-gray-800">
        <ContactForm />
      </div>

      {/* Footer Component */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;