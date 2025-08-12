import React from 'react';
import { attractions } from '../../data/monguiData';
import './Attractions.css';

const Attractions: React.FC = () => {
  return (
    <div className="attractions-page">
      <div className="page-header">
        <h1>Attractions in Monguí</h1>
        <p>Discover the beautiful landmarks and natural wonders of this heritage town</p>
      </div>
      
      <div className="attractions-list">
        {attractions.map(attraction => (
          <div className="attraction-item" key={attraction.id} id={`${attraction.id}`}>
            <div className="attraction-image">
                <img src={attraction.imageUrl} className="image" alt={attraction.name} />
            </div>
            <div className="attraction-details">
              <h2>{attraction.name}</h2>
              <p>{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="attractions-note">
        <h3>Plan Your Visit</h3>
        <p>
          Most attractions in Monguí are within walking distance of the main plaza. 
          The Basilica and Football Museum are located directly on the plaza, while the 
          Calicanto Bridge is a short walk away. For hiking in the Páramo de Ocetá, 
          it's recommended to hire a local guide.
        </p>
      </div>
    </div>
  );
};

export default Attractions;