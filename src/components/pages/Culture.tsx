import React from 'react';
import { culturalAspects } from '../../data/monguiData';
import './Culture.css';

const Culture: React.FC = () => {
  return (
    <div className="culture-page">
      <div className="page-header">
        <h1>Culture of Monguí</h1>
        <p>Experience the unique cultural heritage and traditions of this colonial town</p>
      </div>
      
      <div className="culture-intro">
        <p>
          Monguí's culture is a rich blend of indigenous Muisca traditions and Spanish colonial 
          influence. The town has preserved many unique cultural aspects that make it a 
          fascinating destination for visitors interested in authentic Colombian heritage.
        </p>
      </div>
      
      <div className="culture-aspects">
        {culturalAspects.map(aspect => (
          <div className="culture-card" key={aspect.id}>
            <div className="culture-image">
              {/* Placeholder for image */}
              <div className="placeholder-image">{aspect.title.charAt(0)}</div>
            </div>
            <div className="culture-content">
              <h2>{aspect.title}</h2>
              <p>{aspect.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="culture-note">
        <h3>Experience Local Culture</h3>
        <p>
          To fully experience the culture of Monguí, visitors are encouraged to interact with 
          local artisans, try traditional cuisine at local restaurants, and participate in any 
          festivals or events that may be happening during their visit. The town's small size 
          makes it easy to immerse yourself in the local way of life.
        </p>
      </div>
    </div>
  );
};

export default Culture;