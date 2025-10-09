// src/pages/faq
import Header from '../components/header';
import Footer from '../components/footer';
import FaqCard from '../components/faqCard';
import React from 'react';

const Faq = () => {
  return (
   <div className="p-4 bg-gray-800 text-white ">
      <section className="mb-8">
        <Header />
      </section>

      
<section className="mb-8 pt-20 px-10 space-y-6">
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
    answer="You can get a quote by contacting us via phone or email with details about your project. We will respond promptly with an estimate."
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
