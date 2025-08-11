import React from 'react';
import { historicalFacts } from '../../data/monguiData';
import './History.css';

const History: React.FC = () => {
  return (
    <div className="history-page">
      <div className="page-header">
        <h1>History of Monguí</h1>
        <p>Explore the rich historical heritage of this colonial town</p>
      </div>
      
      <div className="history-intro">
        <p>
          Monguí has a fascinating history that spans from pre-colonial indigenous 
          settlements to its current status as one of Colombia's most beautiful heritage towns. 
          The town's name comes from the indigenous Muisca language and translates as "The Wife's Bath."
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
          </div>
        ))}
      </div>
      
      <div className="history-note">
        <h3>Historical Preservation</h3>
        <p>
          Today, Monguí continues to preserve its colonial heritage through careful 
          restoration and maintenance of its historical buildings and traditions. 
          The town's designation as a Heritage Town (Pueblo Patrimonio) helps ensure 
          that its rich history will be protected for future generations to appreciate and enjoy.
        </p>
      </div>
    </div>
  );
};

export default History;