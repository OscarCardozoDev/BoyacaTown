import React, { useState } from 'react';
import { gastronomia, gastronomiaNotes } from '../../data/monguiData';
import './Gastronomy.css';

const Gastronomia: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredItems = activeCategory === 'todos'
    ? gastronomia
    : gastronomia.filter(item => item.category === activeCategory);

  const categories = [
    { value: 'todos', label: 'Todos' },
    { value: 'plato-principal', label: 'Platos Principales' },
    { value: 'sopa', label: 'Sopas' },
    { value: 'panaderia', label: 'Panadería' },
    { value: 'postre', label: 'Postres' },
    { value: 'bebida', label: 'Bebidas' }
  ];

  const ingredientesEspeciales = [
    {
      name: 'Nabos',
      description: 'Tubérculo ancestral de la cultura muisca, base de muchos platos tradicionales'
    },
    {
      name: 'Cubios',
      description: 'Oxalis tuberosa, tubérculo andino con sabor único y propiedades nutritivas'
    },
    {
      name: 'Hibias',
      description: 'Tubérculo tradicional que acompaña la dieta desde tiempos precolombinos'
    },
    {
      name: 'Rubas',
      description: 'Ullucus tuberosus, ingrediente ancestral de colorido característico'
    },
    {
      name: 'Orellana',
      description: 'Hongo innovador, catalogado como alimento del futuro por sus propiedades'
    },
    {
      name: 'Papa Criolla',
      description: 'Variedad autóctona de papa, fundamental en la gastronomía boyacense'
    }
  ];

  const getCategoryDisplayName = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      'plato-principal': 'Plato Principal',
      'sopa': 'Sopa',
      'panaderia': 'Panadería',
      'postre': 'Postre',
      'bebida': 'Bebida'
    };
    return categoryMap[category] || category;
  };

  return (
    <div className="gastronomia-page">
      {/* Header Principal */}
      <div className="page-header">
        <h1>Gastronomía de Monguí</h1>
        <p>
          Sabores auténticos de la tradición boyacense, donde cada plato cuenta 
          la historia de nuestros ancestros muiscas y la herencia colonial
        </p>
      </div>

      {/* Introducción */}
      <div className="gastronomia-intro">
        <p>{gastronomiaNotes.introduction}</p>
      </div>

      {/* Filtros de categoría */}
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category.value}
            className={`filter-btn ${activeCategory === category.value ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Grid de platos */}
      {filteredItems.length > 0 ? (
        <div className="gastronomia-grid">
          {filteredItems.map(item => (
            <div className="gastronomia-card" key={item.id}>
              <div className="card-image">
                <span className={`card-category ${item.category}`}>
                  {getCategoryDisplayName(item.category)}
                </span>
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.name} />
                ) : (
                  <div className="placeholder-image"></div>
                )}
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <h3>No hay platos disponibles</h3>
          <p>No se encontraron platos para esta categoría.</p>
        </div>
      )}

      {/* Sección de Patrimonio Culinario */}
      <section className="patrimonio-section">
        <div className="patrimonio-content">
          <div className="patrimonio-card">
            <h3>Herencia Ancestral</h3>
            <p>{gastronomiaNotes.heritage}</p>
          </div>
          <div className="patrimonio-card">
            <h3>Calidad Excepcional</h3>
            <p>{gastronomiaNotes.quality}</p>
          </div>
          <div className="patrimonio-card">
            <h3>Innovación Gastronómica</h3>
            <p>{gastronomiaNotes.innovation}</p>
          </div>
        </div>
      </section>

      {/* Ingredientes Especiales */}
      <section className="ingredientes-especiales">
        <h2>Ingredientes Ancestrales</h2>
        <div className="ingredientes-grid">
          {ingredientesEspeciales.map((ingrediente, index) => (
            <div className="ingrediente-item" key={index}>
              <h4>{ingrediente.name}</h4>
              <p>{ingrediente.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nota final */}
      <div className="gastronomia-intro">
        <h3 style={{ color: '#2c5e1a', marginBottom: '1rem' }}>
          Experiencia Gastronómica Auténtica
        </h3>
        <p>
          Los dueños de los restaurantes han recibido cursos de cocina internacional, 
          pero los turistas prefieren la comida local. En Monguí, cada comida es 
          una oportunidad de conectar con siglos de tradición culinaria que se ha 
          mantenido intacta desde los tiempos de nuestros ancestros muiscas.
        </p>
      </div>
    </div>
  );
};

export default Gastronomia;