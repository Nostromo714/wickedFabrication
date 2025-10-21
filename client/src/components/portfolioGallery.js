// This component renders a portfolio gallery with sections for SIGNS and ART.
// Users can filter items by tags, and click on an image to open a modal for a larger view.
// The layout is responsive and styled using TailwindCSS.

// src/components/portfolioGallery.js
import React, { useState } from 'react';
import { portfolioItems } from '../data/portfolioData';

// state to track selected tag filters
const PortfolioGallery = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

// filter items based on selected tag
  const filterByTag = (items, tag) => {
    if (!tag) return items;
    return items.filter((item) => item.tags.includes(tag));
  };

  const openModal = (index, items) => {
    setCurrentIndex(index);
    setCurrentItems(items);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);
// Navigate to previous image
  const goToPrev = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? currentItems.length - 1 : prev - 1
    );
// Navigate to next image
  const goToNext = () =>
    setCurrentIndex((prev) =>
      prev === currentItems.length - 1 ? 0 : prev + 1
    );

  const renderSection = (sectionTitle) => {
    // Get items for this category
    const sectionItems = portfolioItems.filter(
      (item) => item.category === sectionTitle
    );

    const filteredItems = filterByTag(sectionItems, selectedTag);

    // This is a helper function that returns a section of the gallery (e.g., "SIGNS" or "ART").
    // It uses a separate return to output JSX for each category.
    // This is not the main return of the component.
    return (
      <div key={sectionTitle} className="mb-6">
        <h2 className="text-3xl font-bold bg-black text-white px-4 py-2 mb-4 rounded">
          {sectionTitle}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t cursor-pointer"
                onClick={() => openModal(index, filteredItems)}
              />
              <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">Category: {item.category}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-1 text-sm rounded-full cursor-pointer ${
                      selectedTag === tag
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() =>
                      setSelectedTag(selectedTag === tag ? null : tag)
                    }
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  
    // Main return of the PortfolioGallery component.
    // This is what React renders on the screen.
    // It calls the renderSection function to insert each category.

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-8">Portfolio Gallery</h1>
      {renderSection('SIGNS')}
      {renderSection('ART')}

      {/* Modal */}
      {isModalOpen && currentItems.length > 0 && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-auto"
    onClick={closeModal} // Allow clicking outside to close
  >
    {/* Modal content container */}
    <div
      className="relative max-w-3xl w-full"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      {/* ✅ Close Button (inside image container) */}
      <button
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full px-3 py-1 z-10"
        onClick={closeModal}
      >
        &times;
      </button>

      {/* Image */}
      <img
        src={currentItems[currentIndex].image}
        alt={currentItems[currentIndex].title}
        className="w-full max-h-[85vh] object-contain rounded-lg"
      />

      {/* Prev button */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4"
        onClick={(e) => {
          e.stopPropagation();
          goToPrev();
        }}
      >
        &#8592;
      </button>

      {/* Next button */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4"
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
      >
        &#8594;
      </button>
    </div>
  </div>
)}
    </div>
  );
}

export default PortfolioGallery;