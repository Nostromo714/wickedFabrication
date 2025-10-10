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
      <h1 className="text-4xl font-bold mb-4 flex justify-center pt-20">Signs</h1>
      <p className="mb-4 text-center p-12">Details about our Design services will be available soon. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident sequi, reprehenderit numquam nam sapiente dicta fugiat repellat, tenetur nobis similique, reiciendis earum! Adipisci facere eum cupiditate officia quia nemo, iusto nobis illo quos alias sunt, cumque sint placeat necessitatibus quod accusamus unde odit enim perspiciatis asperiores pariatur doloribus fuga repudiandae? Suscipit possimus accusantium provident deleniti, obcaecati harum molestias velit similique fugiat? Beatae quibusdam tempora nihil eaque laudantium amet consequuntur veritatis inventore hic similique dolore, natus nostrum molestiae, ut aliquid quae aperiam. Quibusdam, quis placeat a consequuntur quasi. </p>
       <div className="bg-gray-900 rounded-lg shadow-lg p-4 w-1/2 mx-auto mb-12">
                  <img
                    src={modeling}
                    alt="Modeling for design"
                    className=" object-cover rounded-md mb-4 w-full h-72"
                  />
                </div>
       </section>
               
      <section id="design" className=" mb-8 pt-20">
        <h2 className="text-4xl font-bold mb-4 flex justify-center pt-20">Design</h2>
        <p className="mb-4 text-center p-12">Details about our Welding and Fabrication services will be available soon. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident sequi, reprehenderit numquam nam sapiente dicta fugiat repell, Beatae quibusdam tempora nihil eaque laudantium amet consequuntur veritatis inventore hic similique dolore, natus nostrum molestiae, ut aliquid quae aperiam. Quibusdam, quis placeat a consequuntur quasi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut enim atque iure repudiandae doloribus exercitationem officia libero mollitia quasi! </p>
         <div className="bg-gray-900 rounded-lg shadow-lg p-4 w-1/2 mx-auto mb-12">
                  <img
                    src={weldingImage}
                    alt="Welding"
                    className="object-cover rounded-md mb-4 w-full h-72"
                  />
                </div>
        </section>
      <section id="metalFab" className=' mb-8 pt-20'>
        <h2 className="text-4xl font-bold mb-4 flex justify-center pt-20">Metal Fabrication</h2>
        <p className="mb-4 text-center p-12">Details about our Signs and Art services will be available soon. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident sequi, reprehenderit numquam nam sapiente dicta fugiat repellat, tenetur nobis similique, reiciendis earum! Adipisci facere eum cupiditate officia quia nemo, iusto nobis illo quos alias sunt, cumque sint placeat necessitatibus quod accusamus unde odit enim perspiciatis asperiores pariatur doloribus fuga repudiandae? Suscipit possimus </p>
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
