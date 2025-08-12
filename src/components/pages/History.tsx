import React from 'react';
import { historicalFacts } from '../../data/monguiData';
import './History.css';

const History: React.FC = () => {
  return (
    <div className="history-page">
      <div className="page-header">
        <h1>Historia de Monguí</h1>
        <p>Explora el rico patrimonio histórico de esta ciudad colonial.</p>
      </div>
      
      <div className="history-intro">
        <p>
        Monguí tiene una historia fascinante que abarca desde los asentamientos indígenas 
        precoloniales hasta su estatus actual como uno de los pueblos patrimoniales más bellos 
        de Colombia. El nombre del pueblo proviene de la lengua indígena muisca y se traduce como 
        "El Baño de la Esposa".
        </p>
      </div>
      
      <div className="timeline">
        {historicalFacts.map(fact => (
          <div className="timeline-item" key={fact.id}>
            <div className="timeline-marker">
              <span className="year">{fact.year}</span>
            </div>
            <div className="timeline-content">
              <h3>{fact.title}</h3>
              <p>{fact.description}</p>
            </div>
            <div className="history-image">
                <img src={fact.imageUrl} className="image" alt={fact.title} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="history-note">
        <h3>Historical Preservation</h3>
        <p>
        Hoy en día, Monguí continúa preservando su patrimonio colonial mediante la cuidadosa restauración 
        y el mantenimiento de sus edificios históricos y tradiciones. La designación del pueblo como Pueblo 
        Patrimonio ayuda a garantizar que su rica historia se proteja para que las generaciones futuras la aprecien y disfruten.
        </p>
      </div>
    </div>
  );
};

export default History;