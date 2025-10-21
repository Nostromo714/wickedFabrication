// src/components/ImageModal.js
import React from 'react';

const ImageModal = ({ isOpen, items, currentIndex, onClose, onPrev, onNext }) => {
  if (!isOpen || !items.length) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-auto">
      <div className="relative max-w-3xl w-full mt-12"> {/* Added margin from top */}
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 text-white text-3xl z-50"
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="w-full max-h-[85vh] object-contain rounded-lg" // max height constrained
        />

        {/* Navigation arrows */}
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4"
        >
          &#8592;
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4"
        >
          &#8594;
        </button>

        {/* Optional: title below image */}
        <div className="text-white text-center mt-4 text-xl font-semibold">
          {currentItem.title}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;

