import React from 'react';
import { festivos } from '../../data/monguiData';
const Festivos: React.FC= () => {
  return (
     <div className="attractions-page">
         <div className="page-header">
           <h1>Attractions in Monguí</h1>
           <p>Discover the beautiful landmarks and natural wonders of this heritage town</p>
         </div>
         
         <div className="attractions-list">
           {festivos.map(festivos => (
             <div className="attraction-item" key={festivos.id} id={`${festivos.id}`}>
               <div className="festivos-image">
                   <img src={festivos.img} className="image" alt={festivos.title} />
               </div>
               <div className="festivos-details">
                 <h2>{festivos.title}</h2>
                 <p>{festivos.description}</p>
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

export default Festivos;
