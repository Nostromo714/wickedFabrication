import React, { useState, useEffect } from 'react';
import ImageModal from './modalGallery';
import { useLocation } from 'react-router-dom';

const PortfolioGallery = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);

  const DRUPAL_API = process.env.REACT_APP_DRUPAL_API || '';
  const location = useLocation();

  const getCategoryFromPath = () => {
    if (location.pathname.includes('/portfolio/signs')) return 'SIGNS';
    if (location.pathname.includes('/portfolio/art')) return 'ART';
    return null;
  };

  const selectedCategory = getCategoryFromPath();
  const DEFAULT_ORDER = ['SIGNS', 'ART'];
  const CATEGORY_ORDER = selectedCategory
    ? [selectedCategory, ...DEFAULT_ORDER.filter(cat => cat !== selectedCategory)]
    : DEFAULT_ORDER;

  const getApiUrl = (path) => {
    if (process.env.NODE_ENV === 'development') return path;
    return `${DRUPAL_API}${path}`;
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(getApiUrl('/jsonapi/node/images?include=field_media,field_media.field_media_image,field_portfolio_tags'));
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const included = data.included || [];

        const getImageUrl = (mediaId) => {
          const media = included.find(i => i.type === 'media--image' && i.id === mediaId);
          if (!media) return null;
          const fileId = media.relationships?.field_media_image?.data?.id;
          const file = included.find(i => i.type === 'file--file' && i.id === fileId);
          return file ? `${DRUPAL_API}${file.attributes.uri.url}` : null;
        };

        const getTagName = (tagId) => {
          const tag = included.find(i => i.type === 'taxonomy_term--portfolio_tags' && i.id === tagId);
          return tag ? tag.attributes.name.toLowerCase() : null;
        };

        const items = data.data.map(item => {
          const mediaId = item.relationships?.field_media?.data?.id;
          const tagIds = item.relationships?.field_portfolio_tags?.data || [];

          // TEMP: detect category from title (update later to use real taxonomy)
          const title = item.attributes?.title || 'Untitled';
          const category = title.toLowerCase().includes('sign') ? 'SIGNS' : 'ART';

          return {
            id: item.id,
            title,
            image: getImageUrl(mediaId),
            created: item.attributes.created,
            category,
            tags: tagIds.map(tag => getTagName(tag.id)).filter(Boolean),
          };
        });

        setPortfolioItems(items);
      } catch (err) {
        console.error('Error fetching portfolio:', err);
      }
    };

    fetchPortfolio();
  }, [DRUPAL_API]);

  const openModal = (index, items) => {
    setCurrentIndex(index);
    setCurrentItems(items);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  const goToPrev = () => setCurrentIndex(prev => (prev === 0 ? currentItems.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex(prev => (prev === currentItems.length - 1 ? 0 : prev + 1));

  const renderSection = (sectionTitle) => {
    const sectionItems = portfolioItems.filter(item => item.category === sectionTitle);
    const sortedItems = [...sectionItems].sort((a, b) => {
      const dateA = new Date(a.created);
      const dateB = new Date(b.created);

      // no tag selected → newest first
      if (!selectedTag) return dateB - dateA;

      // tag selected → prioritize
      const aHasTag = a.tags.includes(selectedTag);
      const bHasTag = b.tags.includes(selectedTag);
      if (aHasTag && !bHasTag) return -1;
      if (!aHasTag && bHasTag) return 1;

      return dateB - dateA;
    });

    return (
      <div key={sectionTitle} className="mb-6">
        <h2 className="text-3xl font-bold bg-black text-white px-4 py-2 mb-4 rounded">{sectionTitle}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4">
          {sortedItems.map((item, index) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t cursor-pointer"
                onClick={() => openModal(index, sortedItems)}
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

      {CATEGORY_ORDER.map(category => {
      const itemsInCategory = portfolioItems.filter(item => item.category === category);
      return itemsInCategory.length > 0 ? renderSection(category) : null;
    })}

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