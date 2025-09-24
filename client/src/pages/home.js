import React, {useEffect, useState, useRef} from 'react';
import Header from '../components/header.js';
import HeroQuotes from '../components/heroQuotes.js';
import WhatWeDo from '../components/whatWeDo.js';
import ContactForm from '../components/contactForm.js';
import Footer from '../components/footer.js';

import backgroundImage from '../Images/havasuBridge.jpg';
//import wickedLogo from '../Images/wickedFabLogo.jpg'
import transparentLogo from '../Images/wickedLogoTransparent.png';

const HomePage = () => {

    return (
        <div className="flex flex-col min-h-screen">

            {/* Background section with header and overlay */}
            <section
                className="relative bg-cover bg-center h-screen"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                {/* Dark overlay to dim background image */}
                <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

                {/* Header on top of background */}
                <header className='pb-2'>
                    <Header />
                </header>

                {/* Hero Quotes with box styling and text styling */}
                <div className=" border-b-4 border-l-4 border-t-4 border-r-4 rounded-lg w-10/12 max-w-4xl mx-auto bg-black bg-opacity-50 text-center p-2 relative z-10">
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


export default HomePage