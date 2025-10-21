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
    <div className="flex flex-col min-h-screen">
      {/* Header fixed at top right */}
      <header className="fixed top-10 right-10 z-50 ">
        <Header />
      </header>

      {/* Background section with header and overlay */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay to dim background image */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

        {/* Transparent logo */}
        <section className="p-2 relative z-10 flex flex-row text-center p-8">
          <img src={transparentLogo} alt="Wicked Logo" className="w-48 h-48" />

          <div className="flex flex-col text-left pl-4">
            <h1 className="text-white text-2xl sm:text-3xl font-bold drop-shadow-lg pt-10">
              Wicked Fabrication
            </h1>
             <p className="text-white text-sm sm:text-base italic drop-shadow-lg">
                      Custom Metal Fabrication & Signage
                    </p>
          </div>
        </section>

       <p className=" text-white sm:text-4xl md:text-5xl lg:text-6xl italic drop-shadow-lg pb-30 p-10 text-center font-bold">
  Welcome to Wicked Fabrication — Built to Last. Made to Stand Out.
</p>

<p>"Welcome to Wicked Fabrication — Built to Last. Made to Stand Out.
        </p>

        {/* Hero Quotes with box styling and text styling */}
        <div className="border-b-4 border-l-4 border-t-4 border-r-4 rounded-lg w-9/12 max-w-4xl mx-auto bg-black bg-opacity-50 text-center p-2 pt-30 relative z-10">
          <HeroQuotes />
        </div>
      </section>

      {/* What We Do Content/component */}
      <div className="">
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
