// src/components/portfolioGallery.js
import React, { useState, useEffect } from 'react';
import ImageModal from './modalGallery';

const PortfolioGallery = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  // Environment variable for Drupal API URL
  const DRUPAL_API = process.env.REACT_APP_DRUPAL_API || '';

  // Helper to get API URL depending on environment
  const getApiUrl = (path) => {
    if (process.env.NODE_ENV === 'development') {
      // Use relative path in dev to leverage React proxy (avoids CORS)
      return path;
    }
    // Use full URL in production
    return `${DRUPAL_API}${path}`;
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(getApiUrl('/jsonapi/node/images?include=field_media,field_media.field_media_image'));
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const included = data.included || [];

        const getImageUrl = (mediaId) => {
          const media = included.find(i => i.type === 'media--image' && i.id === mediaId);
          if (!media) return null;

          const fileId = media.relationships?.field_media_image?.data?.id;
          if (!fileId) return null;

          const file = included.find(i => i.type === 'file--file' && i.id === fileId);
          return file ? `${DRUPAL_API}${file.attributes.uri.url}` : null;
        };

        const items = data.data.map(item => {
          const mediaId = item.relationships?.field_media?.data?.id;
          return {
            id: item.id,
            title: item.attributes?.title || 'Untitled',
            image: getImageUrl(mediaId),
            category: 'ART', // can be dynamic later
            tags: ['art'],   // can be dynamic later
          };
        });

        setPortfolioItems(items);
      } catch (err) {
        console.error('Error fetching portfolio:', err);
      }
    };

    fetchPortfolio();
  }, [DRUPAL_API]);

  // Filter items by tag
  const filterByTag = (items, tag) => (!tag ? items : items.filter(item => item.tags.includes(tag)));

  // Modal controls
  const openModal = (index, items) => {
    setCurrentIndex(index);
    setCurrentItems(items);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const goToPrev = () => setCurrentIndex(prev => (prev === 0 ? currentItems.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex(prev => (prev === currentItems.length - 1 ? 0 : prev + 1));

  // Render a section (e.g., ART)
  const renderSection = (sectionTitle) => {
    const sectionItems = portfolioItems.filter(item => item.category === sectionTitle);
    const filteredItems = filterByTag(sectionItems, selectedTag);

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
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className={`px-2 py-1 text-sm rounded-full cursor-pointer ${
                      selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                    }`}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
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

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-8">Portfolio Gallery</h1>
      {renderSection('ART')}

      {isModalOpen && currentItems.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-auto" onClick={closeModal}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-3xl bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full px-3 py-1 z-10" onClick={closeModal}>
              &times;
            </button>
            <img src={currentItems[currentIndex].image} alt={currentItems[currentIndex].title} className="w-full max-h-[85vh] object-contain rounded-lg" />
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4" onClick={(e) => { e.stopPropagation(); goToPrev(); }}>&#8592;</button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl px-4" onClick={(e) => { e.stopPropagation(); goToNext(); }}>&#8594;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;