// src/pages/services
import Header from '../components/header';
import Footer from '../components/footer';
import React from 'react';

const Services = () => {
  return (
    <div className="p-4 bg-gray-800 w-full min-h-screen text-white">
      <Header />
      <h1 className="text-4xl font-bold mb-4 flex justify-center">Design</h1>
      <p className="mb-4 text-center p-12">Details about our Design services will be available soon. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident sequi, reprehenderit numquam nam sapiente dicta fugiat repellat, tenetur nobis similique, reiciendis earum! Adipisci facere eum cupiditate officia quia nemo, iusto nobis illo quos alias sunt, cumque sint placeat necessitatibus quod accusamus unde odit enim perspiciatis asperiores pariatur doloribus fuga repudiandae? Suscipit possimus accusantium provident deleniti, obcaecati harum molestias velit similique fugiat? Beatae quibusdam tempora nihil eaque laudantium amet consequuntur veritatis inventore hic similique dolore, natus nostrum molestiae, ut aliquid quae aperiam. Quibusdam, quis placeat a consequuntur quasi. </p>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-2 flex justify-center p-12">Welding and Fabrication</h2>
        <p className="mb-4 text-center">Details about our Welding and Fabrication services will be available soon. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident sequi, reprehenderit numquam nam sapiente dicta fugiat repell, Beatae quibusdam tempora nihil eaque laudantium amet consequuntur veritatis inventore hic similique dolore, natus nostrum molestiae, ut aliquid quae aperiam. Quibusdam, quis placeat a consequuntur quasi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ut enim atque iure repudiandae doloribus exercitationem officia libero mollitia quasi! </p>
        </section>
      <section>
        <h2 className="text-3xl font-semibold mb-2 flex justify-center p-12">Industral Signs and Art</h2>
        <p className="mb-4 text-center pb-20">Details about our Signs and Art services will be available soon. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione provident sequi, reprehenderit numquam nam sapiente dicta fugiat repellat, tenetur nobis similique, reiciendis earum! Adipisci facere eum cupiditate officia quia nemo, iusto nobis illo quos alias sunt, cumque sint placeat necessitatibus quod accusamus unde odit enim perspiciatis asperiores pariatur doloribus fuga repudiandae? Suscipit possimus </p>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
