import React from 'react';
import { festivos } from '../../data/monguiData';
import './Festivos.css';
const Festivos: React.FC= () => {
  return (
     <div className="attractions-page">
         <div className="page-header">
          <div className='transparente'>
           <h1>Festivos en Mongui</h1>
           <br />
           <p>descubre los hermosos festivos de mongui</p>
           </div>
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
