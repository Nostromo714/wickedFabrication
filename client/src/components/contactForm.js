import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

    // send email using emailjs
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true); 
      setStatus('Sending your message...');

     try {
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log(result.text);
      setStatus("✅ Message sent! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Oops! Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-900 text-white p-6 border-t-4 ">
      <div className="max-w-4xl mx-auto text-center p-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-green-500 pb-4">
          Let's Make Your Project Happen!
        </h1>
        <h2>Please Send us a message we will get back to you as soon as possible</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 rounded-lg shadow-lg p-6 md:p-10 text-left space-y-6 max-w-xl mx-auto"
        >
          {/* Name input */}
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-green-500 text-white placeholder-gray-400 py-2"

            placeholder="Name:"
          />

          {/* Email input */}
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
           className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-green-500 text-white placeholder-gray-400 py-2"

            placeholder="Email:"
          />

          {/* Message input */}
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
           className="w-full bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-green-500 text-white placeholder-gray-400 py-2"

            placeholder="Message:"
            rows={3}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
