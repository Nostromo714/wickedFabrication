// src/pages/faq
import Header from '../components/header';
import Footer from '../components/footer';
import React from 'react';

const Faq = () => {
  return (
   <div className="p-4 bg-gray-800 text-white ">
      <section className="mb-8">
        <Header />
      </section>

      <section className="mb-8 flex-row pt-20 gap-4 p-10">
        {/* FAQ Section */}
        <h1 className="text-4xl font-bold mb-4 flex justify-center pb-20">Frequently Asked Questions</h1>
        
        <div className="flex-1 p-4 border flex flex-col bg-gray-800">
          <h1 className="text-2xl font-bold ">How do We handle shipping?</h1>
          <p className="mt-2 p-10"> We offer a range of services including custom signs, metal fabrication, and design work. Contact us for more details!</p>
        </div>
        <div className="flex-1 p-4 border  flex flex-col  bg-gray-800">
          <h1 className="text-2xl font-bold ">What is the return policy?</h1>
          <p className="mt-2 p-10">Our business hours are Monday to Friday, 9 AM to 5 PM. We are closed on weekends and public holidays.</p>
        </div>
        <div className="flex-1 p-4 border flex flex-col bg-gray-800">
          <h1 className="text-2xl font-bold">How can I get a quote?</h1>
          <p className="mt-2 p-10">You can get a quote by contacting us via phone or email with details about your project. We will respond promptly with an estimate.</p>
        </div>
      </section>

       {/* Footer Component */}
        <footer className="mt-auto">
            <Footer />
        </footer>
    </div>
  )
};

export default Faq;
