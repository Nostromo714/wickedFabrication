// This component sorts items into Signs then Art is filtered by tags if selectedand styled with TailwindCSS//

// src/components/portfolioGallery.js
import React, { useState } from 'react';
import { portfolioItems } from '../data/portfolioData'; 


const PortfolioGallery = () => {
    const [selectedTag, setSelectedTag] = useState(null); // State to track selected tag
    const filterByTqg = (items, tag) => {
        if (!tag) return items; // If no tag is selected, return all items
        return items.filter(item => item.tags.includes(tag)); // Filter items by selected tag
    };

    const renderSection = (sectionTitle) => {
        const sectionItems = portfolioItems.filter(item => item.category === sectionTitle);
        const filteredItems = filterByTqg(sectionItems, selectedTag);

        return (
            <div className="mb-6 ">
                <h2 className="text-3xl font-bold bg-black mb-4 ">{sectionTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4">
                    {filteredItems.map(item => (
                        <div key={item.id} className="bg-white p-4">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-2">Category: {item.category}</p>
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map(tag => (
                                    <span
                                        key={tag}
                                        className={`px-2 py-1 text-sm rounded-full ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
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
        <div className="p-4 ">
            <h1 className="text-4xl font-bold mb-8">Portfolio Gallery</h1>
            {renderSection('SIGNS')}
            {renderSection('ART')}
        </div>
    );
};
export default PortfolioGallery;
// This component renders a portfolio gallery with sections for "SIGNS" and "ART", allowing users to filter items by tags. Each item displays its image, title, category, and tags,
// with clickable tags to filter the displayed items. The layout is styled using TailwindCSS for a clean and responsive design.
// The component uses React hooks to manage the state of the selected tag and dynamically filter the items based on user interaction. The gallery is structured to be visually appealing and user-friendly, making it easy for users to explore the portfolio items.
// The `portfolioItems` data is imported from a separate file, allowing for easy updates and management of the portfolio content. The component is designed to be reusable and can be integrated into any page that requires a portfolio gallery display.