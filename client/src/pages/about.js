// src/pages/about.js
import React from 'react';
import Header from '../components/header.js';
import transparentLogo from '../Images/wickedLogoTransparent.png';
import Footer from '../components/footer.js';


const AboutPage = () => {
  return (
    <>
    <section className="bg-black text-white p-8">

        {/* Transparent logo */}
                <section className="p-2 relative z-10 flex flex-row text-center pt-4">
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

        </section>
        {/* Header component */}
       <div className='fixed top-10 right-10 z-20 '>
       <Header />
        </div>

    <div className="flex flex-col min-h-screen pt-10 bg-black">
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-20 ">About Us</h1>
        <h2 className="text-lg mb-4">
          About Wicked Fabrication and Timmy, the heart behind it all
        </h2>
        <p className="text-lg mb-4 p-20">
          Wicked Fabrication was started in 2010 as a small side project, built from a passion for creating and a love of hands-on craftsmanship. Over the years, that passion grew into something much bigger—driven by the creativity and dedication of Tim, the heart behind it all.

          Tim and his fiance have called Lake Havasu, Arizona home for the past 10 years, where they enjoy the sunshine, lake life, and time spent out on their Harley. But when it’s time to get to work, the shop is where the real magic happens.

          With a strong eye for design and a passion for creating visually striking and meaningful pieces, Tim has crafted custom signage for police departments, hotels, and restaurants, as well as personal memorials and heartfelt gifts. Every piece that comes out of Wicked Fabrication reflects not only skill and precision, but also a genuine love for the craft.
        </p>
      </section>

    </div>
      {/* Footer Component */}
        <footer className="mt-auto">
          <Footer/>
        </footer>
    </>
  );  
  
};

export default AboutPage;
