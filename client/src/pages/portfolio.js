// src/pages/portfolio
import React from 'react';
import Header from '../components/header.js';

import wickedLogo from '../Images/wickedFabLogo.jpg'


const Portfolio = () => {
  return (
    <div className="p-4 bg-black">
      
            {/* Background section with header and overlay */}
            <section
                className="relative bg-cover bg-center h-screen bg-black"
                
            >
                {/* Dark overlay to dim background image */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

                {/* Header on top of background */}
                <div className="fixed top-0 left-0 w-full bg-opacity-70 z-20  ">
                    <Header />
                </div>

                {/* Optional content centered over background */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Signs</h1>
                    <img src={wickedLogo} alt="Wicked Logo" className="w-48 h-48 object-cover mt-4" />

                    
                </div>
            </section>

    </div>
  );
};

export default Portfolio;
