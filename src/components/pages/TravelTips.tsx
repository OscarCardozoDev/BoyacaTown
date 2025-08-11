import React, { useState } from 'react';
import { travelTips } from '../../data/monguiData';
import './TravelTips.css';

type TipCategory = 'all' | 'accommodation' | 'transportation' | 'food' | 'weather' | 'general';

const TravelTips: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<TipCategory>('all');
  
  const filteredTips = activeCategory === 'all' 
    ? travelTips 
    : travelTips.filter(tip => tip.category === activeCategory);
  
  const categories: { value: TipCategory; label: string }[] = [
    { value: 'all', label: 'All Tips' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'food', label: 'Food & Dining' },
    { value: 'weather', label: 'Weather & Clothing' },
    { value: 'general', label: 'General Advice' }
  ];
  
  return (
    <div className="travel-tips-page">
      <div className="page-header">
        <h1>Travel Tips for Monguí</h1>
        <p>Essential information to help you plan your visit to this beautiful heritage town</p>
      </div>
      
      <div className="category-filter">
        {categories.map(category => (
          <button 
            key={category.value}
            className={`category-btn ${activeCategory === category.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="tips-container">
        {filteredTips.map(tip => (
          <div className="tip-card" key={tip.id}>
            <div className={`tip-category ${tip.category}`}>
              {tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}
            </div>
            <h3>{tip.title}</h3>
            <p>{tip.description}</p>
          </div>
        ))}
        
        {filteredTips.length === 0 && (
          <div className="no-tips">
            <p>No travel tips available for this category.</p>
          </div>
        )}
      </div>
      
      <div className="travel-note">
        <h3>Additional Resources</h3>
        <p>
          For more detailed information about traveling to Monguí, you can contact our travel agency. 
          We can provide personalized advice, help with transportation arrangements, and recommend 
          accommodations based on your preferences and budget.
        </p>
      </div>
    </div>
  );
};

export default TravelTips;