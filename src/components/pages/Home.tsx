import React from 'react';
import { Link } from 'react-router-dom';
import { generalInfo, attractions } from '../../data/monguiData';
import './Home.css';

const Home: React.FC = () => {
  // Display only featured attractions (first 3)
  const featuredAttractions = attractions.slice(0, 3);
  
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to {generalInfo.name}</h1>
          <h2>A Heritage Town in {generalInfo.region}, {generalInfo.country}</h2>
          <p className="hero-description">{generalInfo.description}</p>
          <div className="hero-buttons">
            <Link to="/attractions" className="btn btn-primary">Explore Attractions</Link>
            <Link to="/travel-tips" className="btn btn-secondary">Travel Tips</Link>
          </div>
        </div>
      </section>
      
      {/* Quick Info Section */}
      <section className="quick-info">
        <div className="info-card">
          <h3>Location</h3>
          <p>{generalInfo.region}, {generalInfo.country}</p>
        </div>
        <div className="info-card">
          <h3>Altitude</h3>
          <p>{generalInfo.altitude}</p>
        </div>
        <div className="info-card">
          <h3>Climate</h3>
          <p>{generalInfo.climate}</p>
        </div>
        <div className="info-card">
          <h3>Population</h3>
          <p>{generalInfo.population}</p>
        </div>
      </section>
      
      {/* Featured Attractions */}
      <section className="featured-section">
        <h2 className="section-title">Featured Attractions</h2>
        <div className="featured-attractions">
          {featuredAttractions.map(attraction => (
            <div className="attraction-card" key={attraction.id}>
              <div className="attraction-image">
                {/* Placeholder for image */}
                <div className="placeholder-image">{attraction.name.charAt(0)}</div>
              </div>
              <div className="attraction-content">
                <h3>{attraction.name}</h3>
                <p>{attraction.description.substring(0, 100)}...</p>
                <Link to={`/attractions#${attraction.id}`} className="read-more">Read More</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/attractions" className="btn btn-outline">View All Attractions</Link>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="cta-section">
        <h2>Ready to Experience Monguí?</h2>
        <p>Contact our travel agency to plan your perfect trip to this beautiful heritage town.</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>
    </div>
  );
};

export default Home;