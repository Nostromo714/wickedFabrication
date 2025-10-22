// WhatWeDo.js component - describes the services offered by Wicked Fabrication
import transparentLogo from "../Images/wickedLogoTransparent.png";
import modelingImage from "../Images/modeling.jpg";
import weldingImage from "../Images/welder1.jpg";

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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          voluptatum dolores assumenda libero nisi tempora facere, quod ipsam.
          Nesciunt, ullam. Adipisci modi veritatis beatae culpa ipsam
          repudiandae commodi assumenda soluta. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Ratione, rem quae eaque fugiat culpa,
          facere dolor labore odio cumque ex eius dicta cum, tenetur mollitia in
          ullam unde. Tempore, voluptas.
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
              Custom metalwork that transforms your ideas into reality. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          voluptatum dolores assumenda libero nisi tempora facere, quod ipsam.
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
              Precision welding solutions with clean, strong finishes. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          voluptatum dolores assumenda libero nisi tempora facere, quod ipsam.
            </p>
          </div>

          {/* Metal Fabrication  */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-4 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
             <a href="/services#metalFab">
            <img
              src={modeling}
              alt="Design"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            </a>
            <h3 className="text-xl font-semibold mb-2">Metal Fabrication </h3>
            <p className="text-sm text-gray-300">
              Bespoke designs tailored to meet your vision and goals. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          voluptatum dolores assumenda libero nisi tempora facere, quod ipsam.
            </p>
          </div>
      </div>
       </section>
       </div>
  );
};
export default WhatWeDo;
