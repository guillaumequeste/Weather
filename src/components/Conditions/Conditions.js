import React from 'react';
import './Conditions.css';

const conditions = (props) => {
   return (
       <div className="Wrapper">
            {props.error && <small className="Small">Veuillez entrer un nom de ville valide.</small>}
            {props.loading && <div className="Loader">Chargement...</div>}

           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>Il fait actuellement {Math.round(props.responseObj.main.temp)} degrés - {props.responseObj.weather[0].description}.</p>
                   <img src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} alt="img" />
               </div>
           : null
           }
       </div>
   )
}
export default conditions;