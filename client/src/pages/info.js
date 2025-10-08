// src/pages/info
import Header from '../components/header';
import Footer from '../components/footer';
import React from 'react';

const Info = () => {
  return (
    <div className="p-4 bg-gray-800 text-white min-h-screen md:flex-row">
      <section className="mb-8">
        <Header />
      </section>

      <section className="mb-8 flex flex-col md:flex-row pt-20 gap-4 p-10">
        {/* Call Us */}
        <div className="flex-1 p-4 border flex flex-col items-center bg-gray-800">
          <h1 className="text-2xl font-bold">Call Us</h1>
          <p className="mt-2 p-10 ">Phone: (123) 456-7890</p>
        </div>

        {/* Email Us */}
        <div className="flex-1 p-4 border  flex flex-col items-center bg-gray-800">
          <h1 className="text-2xl font-bold">Email Us</h1>
          <p className="mt-2 p-10">Email:  Twicked@gmail.com </p>
        </div>

        {/* Address */}
        <div className="flex-1 p-4 border flex flex-col items-center bg-gray-800">
          <h1 className="text-2xl font-bold">Address</h1>
          <p className="mt-2 p-10">Lake Havsu, Arizona</p>
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