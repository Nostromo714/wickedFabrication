// src/pages/about.js
import React from 'react';
import Header from '../components/header.js';


const AboutPage = () => {
  return (
    <>
    <section className="bg-black text-white p-8">
      {/* Header component */}
      <div className='fixed top-0 left-0 w-full bg-opacity-70 z-20'>
      <Header />
      </div>
    </section>

    <div className="flex flex-col min-h-screen pt-40 bg-black">
      <section className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold mb-20 ">About Us</h1>
        <p className="text-lg mb-4">
          This is the about page. Here you can include information about your website or application.
        </p>
        <p className="text-lg">
          Add more content as needed to describe your mission, team, or any other relevant details.
        </p>
      </section>

    </div>
    </>
  );  
  
};

export default AboutPage;
