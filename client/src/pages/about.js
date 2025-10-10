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
        <section className="p-4 relative z-10">
          <img src={transparentLogo} alt="Wicked Logo" className="w-48 h-48" />
        </section>

        </section>
        {/* Header component */}
       <div className='fixed top-10 right-10 z-20 '>
       <Header />
        </div>

    <div className="flex flex-col min-h-screen pt-10 bg-black">
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-20 ">About Us</h1>
        <p className="text-lg mb-4">
          This is the about page. Here you can include information about your website or application.
        </p>
        <p className="text-lg mb-4 p-12">
          Add more content as needed to describe your mission, team, or any other relevant details. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius labore reprehenderit similique libero quaerat eveniet reiciendis! Nam architecto voluptatem fugiat molestiae, provident, sunt in mollitia sed, placeat repellendus odio voluptate. lorem1 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius labore reprehenderit similique libero quaerat eveniet reiciendis! Nam architecto voluptatem fugiat molestiae, provident, sunt in mollitia sed, placeat repellendus odio voluptate. lorem1
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
