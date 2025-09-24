// src/pages/portfolio
import React from 'react';
import Header from '../components/header.js';
import PortfolioGallery from '../components/portfolioGallery.js';
import Footer from '../components/footer.js';

import wickedLogo from '../Images/wickedFabLogo.jpg'
import backgroundImage from '../Images/havasuBridge.jpg';


const Portfolio = () => {
  return (
    <div>
      {/* Background section with header and overlay */}
      <section>
      <div className="relative">

      {/* Background image */}
      <div className="h-[200px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})`
      }}
      />

      {/* Header over background */}
      <div className="absolute top-0 left-0 w-full">
      <Header />
      </div>
      </div>

      {/* Gallery */}
      <div className='bg-black text-white p-6'>
      <PortfolioGallery />
      </div>
      <Footer />
      </section>

    </div>
  );
};

export default Portfolio;
