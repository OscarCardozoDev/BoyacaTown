import React, { useState } from 'react';
import { attractions, travelTips, generalInfo } from '../../data/monguiData';
import '../../../src/components/pages/TravelTips.css';

const TravelTips = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTips = activeCategory === 'all'
    ? travelTips
    : travelTips.filter(tip => tip.category === activeCategory);

  const categories = [
    { value: 'all', label: 'Todos' },
    { value: 'accommodation', label: 'Alojamiento' },
    { value: 'transportation', label: 'Transporte' },
    { value: 'food', label: 'Comida' },
    { value: 'weather', label: 'Clima' },
    { value: 'general', label: 'General' }
  ];

  return (
    <div className="travel-tips-page">
      {/* Header Principal */}
      <div className="page-header">
        <h1>Turismo en Monguí</h1>
        <h2>Boyacá, Colombia</h2>
        <p>{generalInfo.description}</p>
      </div>

      {/* Información General */}
      <div className="general-info">
        <div className="info-cards">
          <div className="info-card">
            <h3>Altitud</h3>
            <p>{generalInfo.altitude}</p>
          </div>
          <div className="info-card">
            <h3>Temperatura</h3>
            <p>{generalInfo.averageTemperature}</p>
          </div>
          <div className="info-card">
            <h3>Población</h3>
            <p>{generalInfo.population}</p>
          </div>
          <div className="info-card">
            <h3>Clima</h3>
            <p>{generalInfo.climate}</p>
          </div>
        </div>
      </div>

      {/* Principales Atractivos Turísticos */}
      <div className="attractions-section">
        <h2>Principales Atractivos Turísticos</h2>
        <div className="attractions-grid">
          {attractions.map(attraction => (
            <div className="attraction-card" key={attraction.id}>
              <h3>{attraction.name}</h3>
              <p>{attraction.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Consejos de Viaje */}
      <div className="travel-tips-section">
        <h2>Consejos de Viaje</h2>
        <p className="section-description">
          Información esencial para planificar tu visita a este hermoso pueblo patrimonio
        </p>

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
              <p>No hay consejos disponibles para esta categoría.</p>
            </div>
          )}
        </div>
      </div>

      {/* Información Práctica */}
      <div className="practical-info">
        <h3>Información Adicional</h3>
        <div className="practical-grid">
          <div className="practical-card">
            <h4>¿Cómo Llegar?</h4>
            <ul>
              <li>Desde Bogotá: 4 horas en automóvil</li>
              <li>Ruta: Bogotá → Tunja → Sogamoso → Monguí</li>
              <li>Transporte público disponible hasta Sogamoso</li>
            </ul>
          </div>
          <div className="practical-card">
            <h4>Recomendaciones Especiales</h4>
            <ul>
              <li>Llevar ropa abrigada para el clima frío</li>
              <li>Traer efectivo (no hay cajeros automáticos)</li>
              <li>Visitar el Museo del Balón en la plaza</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelTips;