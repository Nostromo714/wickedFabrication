// src/pages/info
import Header from '../components/header';
import Footer from '../components/footer';
import React from 'react';

const Info = () => {
  return (
    <div className="p-4 bg-gray-800 text-white min-h-screen md:flex-row pt-20">
      <section className="mb-8 fixed top-10 right-10 ">
        <Header />
      </section>

      <section className="mb-8 flex flex-col md:flex-row pt-20 gap-4 p-10 pt-40"> 
        {/* Call Us */}
        <div className="flex-1 p-4 border-4 flex flex-col items-center">
          <h1 className="text-2xl font-bold pt-5">Call Us</h1>
          <i className="bi bi-telephone-fill text-green-500 text-3xl mb-4 pt-5"></i>
           <a
    href="tel:1234567890"
    className="mt-2 p-4 text-white hover:text-green-400 break-all select-text"
  >
    (123) 456-7890
  </a>
        </div>

        {/* Email Us */}
        <div className="flex-1 p-4 border-4 flex flex-col items-center">
          <h1 className="text-2xl font-bold pt-5">Email Us</h1>
          <i className="bi bi-envelope-fill text-green-500 text-3xl mb-4 pt-5"></i>
           <a
    href="mailto:Twicked@gmail.com"
    className="mt-2 p-4 text-white hover:text-green-400 break-all select-text"
  >
    Twicked@gmail.com
  </a>
        </div>

        {/* Address */}
        <div className="flex-1 p-4 border-4 flex flex-col items-center">
          <h1 className="text-2xl font-bold pt-5">Address</h1>
          <i className="bi bi-geo-alt-fill text-green-500 text-3xl mb-4 pt-5"></i>
          <p className="mt-2 p-2">Lake Havsu, Arizona</p>
        </div>
        
      </section>
       {/* Footer Component */}
            <footer className="mt-auto">
                <Footer />
            </footer>
    </div>
  );
};


export default Info;

// flex-1: Makes all three divs grow equally inside the row.

// aspect-square: Makes each card a square (equal width and height).

// flex flex-col md:flex-row: Stacks vertically on mobile, horizontally on medium+. 