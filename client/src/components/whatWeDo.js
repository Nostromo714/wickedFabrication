// WhatWeDo.js component - describes the services offered by Wicked Fabrication
import transparentLogo from "../Images/wickedLogoTransparent.png";
import modelingImage from "../Images/modeling.jpg";
import weldingImage from "../Images/welder1.jpg";
import sparks from "../Images/sparks.jpg";

const WhatWeDo = () => {
  return (
    <div>
    <section className="bg-gray-800 text-white p-6 border-t-4 pt-20 md:pt-24 lg:pt-28 ">
     <div className="max-w-4xl mx-auto text-top">
        <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold mb-4 ">What We Do</h2>
        <p className="text-lg md:text-xl sm:text-xl mb-6 italic">Signs and Fabrication</p>
        
        <p className="pb-20 italic text-md md:text-xl sm:text-xl">
          Explore our custom fabrication and signage services and see how we can bring your vision to life. At Wicked Signs and Fabrication, we specialize in turning ideas into high-quality, custom work built with precision and creativity.

          From business signage for restaurants, hotels, and public spaces to memorials and custom gifts, we design, fabricate, and install each project to meet our clients' unique needs. No matter the size of the job, we take pride in creating work that stands out, tells a story, and is built to last.

        </p>
      </div>
      </section>

      {/* Three Column Grid Section */}
      <section className="bg-gray-800 text-white p-6 p-12 ">
       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 pb-20">
          {/* Industrial Signs */}
          <div className=" bg-gray-900 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <a href="/services#signs">
            <img
              src={modelingImage}
              alt="Fabrication"
              className="w-full aspect-[4/2] object-cover rounded-md mb-4 "
            />
            </a>
            <h3 className="text-xl font-semibold mb-2">Industrial Signs</h3>
            <p className="text-sm text-gray-300">
               Durable, high-impact signage built for businesses, public spaces, and commercial environments. Each sign is designed to be both functional and visually striking, built to withstand the elements while representing your brand with confidence.
            </p>
          </div>

          {/* Design and Art*/}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer ">
            <a href="/services#design">
            <img
              src={weldingImage}
              alt="Welding"
              className="w-full aspect-[4/2] object-cover rounded-md mb-4"
            />
            </a>
            <h3 className="text-xl font-semibold mb-2">Design and ART</h3>
            <p className="text-sm text-gray-300">
              Creative design work that blends craftsmanship with artistic vision. From custom concepts to detailed visual pieces, we turn ideas into meaningful designs that stand out and tell a story.
            </p>
          </div>

          {/* Metal Fabrication  */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
             <a href="/services#metalFab">
            <img
              src={sparks}
              alt="Design"
              className="w-full aspect-[4/2] object-cover rounded-md mb-4"
            />
            </a>
            <h3 className="text-xl font-semibold mb-2">Fabrication </h3>
            <p className="text-sm text-gray-300">
              Custom fabrication and signage solutions built to your exact needs. We work with acrylic, foam dimensional lettering, Corobond, channel letters, and digital print materials to create durable, eye-catching results.

            </p>
          </div>
        </div>
       </section>
       </div>
  );
};
export default WhatWeDo;
