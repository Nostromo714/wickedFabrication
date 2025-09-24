import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 bt-2 border-t border-gray-700">
      <div className="container mx-auto px-4">

        {/* Top Row: Services + Follow Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left mb-8">

          {/* Services List */}
          <div>
            <h5 className="text-lg font-semibold flex justify-center ">Services</h5>
            <ul className="space-y-2 mt-2 ">
              <li><a href="/service1" className="text-gray-400 hover:text-white flex justify-center ">Fabrication</a></li>
              <li><a href="/service2" className="text-gray-400 hover:text-white flex justify-center ">Welding</a></li>
              <li><a href="/service3" className="text-gray-400 hover:text-white flex justify-center ">Design</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h5 className="text-lg font-semibold flex ">Follow Us</h5>
            <ul className="space-y-2 mt-2 ">
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white ">
                  <i className="bi bi-facebook p-2"></i>
                  <span className="text-base">Follow Us on Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <i className="bi bi-instagram p-2"></i>
                  <span className="text-base">Follow Us on Instagram</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white ">
                  <i className="bi bi-linkedin p-2"></i>
                  <span className="text-base">Follow Us on LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row: Centered Copyright */}
        <div className="text-center text-sm text-gray-400 space-y-2 border-t border-gray-700 pt-10">
          <p>&copy; {new Date().getFullYear()} Wicked Fabrication. All rights reserved.</p>
          <p>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
