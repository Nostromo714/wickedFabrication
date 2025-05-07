import React, {useEffect, useState, useRef} from 'react';
import Header from '../components/header.js';

import backgroundImage from '../Images/havasuBridge.jpg';



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
                <div className="fixed top-0 left-0 w-full bg-opacity-70 z-20  ">
                    <Header />
                </div>

                {/* Optional content centered over background */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">Welcome to the Page</h1>
                    <p className="text-lg mt-4">This is some content over the background.</p>
                </div>
            </section>

            {/* Other page content below */}
            <section className="bg-white p-6">
                {/* Your next section or content here */}
            </section>
        </div>
    );
};


export default HomePage