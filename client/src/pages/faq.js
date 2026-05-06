// src/pages/faq
import Header from '../components/header';
import Footer from '../components/footer';
import FaqCard from '../components/faqCard';
import React from 'react';

const Faq = () => {
  return (
   <div className="p-4 bg-gray-800 text-white min-h-screen flex-col">
      <section className="fixed top-10 right-10 z-20">
        <Header />
      </section>

      
<section className="mb-8 pt-40 px-10 space-y-6">
  <h1 className="text-4xl font-bold mb-4 text-center pb-10">
    Frequently Asked Questions
  </h1>

  <FaqCard
    question="How do we handle shipping?"
    answer="We offer a range of services including custom signs, metal fabrication, and design work. Contact us for more details!"
  />

  <FaqCard
    question="What is the return policy?"
    answer="Our business hours are Monday to Friday, 9 AM to 5 PM. We are closed on weekends and public holidays."
  />

  <FaqCard
    question="How can I get a quote?"
    answer={
      <div> 
     <p> "You can get a quote by contacting us via phone or email with details about your project. We will respond promptly with an estimate."</p>
      <div className="mt-4">
        <i className="bi bi-telephone-fill text-green-500 text-1xl mb-4 pt-5"></i>
        <a
          href="tel:1234567890"
          className="mr-4 p-2 text-green-400 hover:text-green-500"
        >
          (123) 456-7890
        </a>
         <i className="bi bi-envelope-fill text-green-500 text-1xl mb-4 pt-5 "></i>
        <a
          href="mailto:Twicked147@gmail.com"
          className="mr-4 p-2 text-green-400 hover:text-green-500"
        >
          Twicked147@gmail.com
        </a>
      </div>
    </div>
  }
 />
</section>  

       {/* Footer Component */}
        <footer className="mt-auto">
            <Footer />
        </footer>
    </div>
  )
};

export default Faq;
