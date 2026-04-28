// WhatWeDo.js component - describes the services offered by Wicked Fabrication
import transparentLogo from "../Images/wickedLogoTransparent.png";
import modelingImage from "../Images/modeling.jpg";
import weldingImage from "../Images/welder1.jpg";
import sparks from "../Images/sparks.jpg";

const WhatWeDo = () => {
  return (
    <div>
    <section className="bg-gray-800 text-white p-6 border-t-4 pt-20">
     <div className="max-w-4xl mx-auto text-top">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 ">What We Do</h2>
        <p className="text-lg md:text-xl mb-6 italic">Signs and Fabrication</p>
        <p className="text-md md:text-lg">
          Explore our custom fabrication services and see how we can bring your
          vision to life.
        </p>
        
        <p className="pb-20">
          Explore our custom fabrication services and see how we can bring your vision to life.

          At Wicked Fabrication, we specialize in turning ideas into bold, high-quality reality. From concept to completion, every project is built with precision, creativity, and attention to detail.

          We design and create custom signage, metal fabrication pieces, and one-of-a-kind work tailored to each client’s needs. Whether it’s business signage for restaurants, hotels, and public services, or personal memorials and custom gifts, every piece is crafted to be meaningful and built to last.

          No matter the size of the project, we take pride in delivering work that stands out, tells a story, and reflects the vision behind it.
        </p>
     </div>
    </section>
     {/* Three Column Grid Section */}
    <section className="bg-gray-800 text-white p-6 p-12">
      <div className="grid md:grid-cols-3 gap-8 pb-20">
          {/* Signs */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <a href="/services#signs">
            <img
              src={modelingImage}
              alt="Fabrication"
              className="w-full h-48 object-cover rounded-md mb-4 "
            />
            </a>
            <h3 className="text-xl font-semibold mb-2">Industrial Signs</h3>
            <p className="text-sm text-gray-300">
               Durable, high-impact signage built for businesses, public spaces, and commercial environments. Each sign is designed to be both functional and visually striking, built to withstand the elements while representing your brand with confidence.
            </p>
          </div>

          {/* Design */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <a href="/services#design">
            <img
              src={weldingImage}
              alt="Welding"
              className="w-full h-48 object-cover rounded-md mb-4"
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
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            </a>
            <h3 className="text-xl font-semibold mb-2">Metal Fabrication </h3>
            <p className="text-sm text-gray-300">
              Custom metal fabrication built around your exact needs. Whether structural, decorative, or one-of-a-kind pieces, every project is crafted with precision, strength, and attention to detail from start to finish.
            </p>
          </div>
      </div>
       </section>
       </div>
  );
};
export default WhatWeDo;
