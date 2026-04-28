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
      <h1 className="text-4xl font-bold mb-4 flex justify-center pt-20">Industrial Signs</h1>
      <p className="mb-4 text-center p-12">Our industrial signs are built for durability, visibility, and impact. We design and fabricate custom signage for businesses, public spaces, and commercial environments that need to stand up to harsh conditions while still looking sharp and professional. Every piece is crafted with precision materials and attention to detail to ensure long-lasting performance and strong visual presence. </p>
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
        <p className="mb-4 text-center p-12">Our design and art work focuses on turning ideas into visually meaningful creations. From concept development to finished artwork, we help shape custom designs that reflect personality, purpose, and creativity. Whether it’s branding concepts, custom visuals, or artistic metal layouts, each piece is thoughtfully developed to stand out and make an impression. </p>
         <div className="bg-gray-900 rounded-lg shadow-lg p-4 w-1/2 mx-auto mb-12">
                  <img
                    src={weldingImage}
                    alt="Welding"
                    className="object-cover rounded-md mb-4 w-full h-72"
                  />
                </div>
        </section>
      <section id="metalFab" className=' mb-8'>
        <h2 className="text-3xl font-semibold mb-2 flex justify-center p-12">Metal Fabrication</h2>
        <p className="mb-4 text-center pb-20">Our welding and fabrication services cover everything from structural work to detailed custom builds. We combine skill, precision, and high-quality materials to create strong, reliable, and visually clean finished products. Whether it’s repairs, one-off builds, or custom fabrication projects, every weld and cut is done with care and craftsmanship. </p>
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
