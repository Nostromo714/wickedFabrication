import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = process.env.REACT_APP_API_URL;
    const apiUrlWithNoTrailingSlash = apiUrl.endsWith("/")
      ? apiUrl.slice(0, -1)
      : apiUrl;

    setStatus('Sending...');

    try {
      const response = await fetch(`${apiUrlWithNoTrailingSlash}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong, this is from the front end.');
      }
    } catch (error) {
      setStatus('Error: Could not send message from the front end.');
    }
  };

  return (
    <section className="bg-gray-800 text-white p-6 border-t-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 border-b-2 pb-4">
          Let's Make Your Project Happen!
        </h1>
        <h2>Lets get in Touch</h2>

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
            className="p-3 w-full bg-red-800 text-white rounded-md"
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
            className="p-3 w-full bg-red-800 text-white rounded-md"
            placeholder="Email:"
          />

          {/* Message input */}
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 w-full bg-red-800 text-white rounded-md"
            placeholder="Message:"
            rows={5}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-green-800 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
          >
            Send Message
          </button>

          {/* Status Message */}
          {status && <p className="text-sm text-gray-300 mt-2">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
