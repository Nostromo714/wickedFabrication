// src/pages/services
import Header from '../components/header';
import Footer from '../components/footer';
import weldingImage from '../Images/welder1.jpg';
import modeling from '../Images/modeling.jpg';
import sparks from '../Images/sparks.jpg';

import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Services = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location]);

  return (
    <div className="p-4 bg-gray-800 w-full min-h-screen text-white">
      <section className='fixed top-10 right-10'>
      <Header />
      </section>

      <section id="signs" className=' mb-8 pt-20'>
      <h1 className="text-4xl font-bold mb-4 flex justify-center pt-20">Industrial Custom Signs</h1>
      <p className="mb-4 text-center p-12">Custom signs built for durability, visibility, and impact. We design, fabricate, and install signage for businesses, public spaces, and commercial environments using high-quality materials and finishes.
      Our work is built to withstand both indoor and outdoor conditions while maintaining a professional appearance. Each project is carefully planned to match the client’s brand identity and environment. We focus on delivering signage that is both functional and visually strong. </p>
       <div className="bg-gray-900 rounded-lg shadow-lg p-4 w-1/2 mx-auto mb-12">
                  <img
                    src={modeling}
                    alt="Modeling for design"
                    className=" object-cover rounded-md mb-4 w-full h-72"
                  />
                </div>
       </section>
               
      <section id="design" className=" mb-8">
        <h2 className="text-3xl font-semibold mb-2 pt-12 flex justify-center ">Design and ART</h2>
        <p className="mb-4 text-center p-12">We provide custom signage fabrication using acrylic, foam dimensional lettering, channel letters, digital print, and product lines such as Corobond and Cabernet. Every piece is built with precision, craftsmanship, and attention to detail.
        Our design process focuses on turning ideas into clear, impactful visuals that communicate effectively. We work closely with clients to refine concepts and bring their vision to life. Every design is created with both creativity and purpose in mind.</p>
         <div className="bg-gray-900 rounded-lg shadow-lg p-4 w-1/2 mx-auto mb-12">
                  <img
                    src={weldingImage}
                    alt="Welding"
                    className="object-cover rounded-md mb-4 w-full h-72"
                  />
                </div>
        </section>
      <section id="metalFab" className=' mb-8'>
        <h2 className="text-3xl font-semibold mb-2 flex justify-center p-12">Fabrication</h2>
        <p className="mb-4 text-center pb-20">We provide custom signage fabrication using acrylic, foam dimensional lettering, channel letters, digital print, and product lines such as Corobond and Cabernet. Every piece is built with precision, craftsmanship, and attention to detail.
        We take pride in producing high-quality builds that are clean, strong, and long-lasting. Each fabrication project goes through careful construction and finishing to ensure consistency. Our goal is to deliver work that looks professional and performs reliably over time.</p>
         <div className="bg-gray-900 rounded-lg shadow-lg p-4 w-1/2 mx-auto mb-12">
                  <img
                    src={sparks}
                    alt="Welding Sparks"
                    className=" object-cover rounded-md mb-4 w-full h-72"
                  />
                </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
