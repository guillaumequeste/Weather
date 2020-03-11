import React from 'react';
import './ConditionsForecast.css';

const ConditionsForecast = (props) => {
   return (
       <div className="Wrapper">
            {props.error && <small className="Small">Veuillez entrer un nom de ville valide.</small>}
            {props.loading && <div className="Loader">Chargement...</div>}

           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>Il fait actuellement {Math.round(props.responseObj.list[0].main.temp)} degrés - </p>
                   
               </div>
           : null
           }
       </div>
   )
}
export default ConditionsForecast;