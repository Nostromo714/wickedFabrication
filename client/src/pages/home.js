import React, {useEffect, useState, useRef} from 'react';
import Header from '../components/header.js';
import HeroQuotes from '../components/heroQuotes.js';

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
                <header className='pb-20'>
                    <Header />
                </header>

                {/* Optional content centered over background */}
                <div className="border-green-300 border-b-4 border-l-4 border-t-4 border-r-4 rounded-lg w-10/12 max-w-4xl mx-auto bg-black bg-opacity-50 text-center p-2 relative z-10">
                    <HeroQuotes />
                </div>
            </section>

            {/* Other page content below footer? */}
            <section className="bg-black p-6">
                {/* Your next section or content here */}
                
            
            <section className="bg-gray-800 text-white p-6">
                <div className="max-w-4xl mx-auto text-center">
                    <img src={transparentLogo} alt="Wicked Fabrication Logo" className="mx-auto mb-4 w-48 h-auto" />
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
                    <p className="text-lg md:text-xl mb-6">Fabrication</p>
                    <p className="text-md md:text-lg">Explore our custom fabrication services and see how we can bring your vision to life.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum dolores assumenda libero nisi tempora facere, quod ipsam. Nesciunt, ullam. Adipisci modi veritatis beatae culpa ipsam repudiandae commodi assumenda soluta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, rem quae eaque fugiat culpa, facere dolor labore odio cumque ex eius dicta cum, tenetur mollitia in ullam unde. Tempore, voluptas.</p>
                    </div>
                    </section>
            </section>
        </div>
    );
};


export default HomePage