import React from 'react';
import './Conditions.css';

const conditions = (props) => {
   return (
       <div className="Wrapper">
            {props.error && <small className="Small">Veuillez entrer un nom de ville valide.</small>}
            {props.loading && <div className="Loader">Chargement...</div>}

           {props.responseObj.cod === 200 ?
               <div>
                   <h1>{props.responseObj.name}</h1>
                   <div className="card bg-light mx-auto">
                        <p>Il fait actuellement {props.responseObj.main.temp}°C</p>
                        <p>Ressenti : {props.responseObj.main.feels_like}°C</p>
                        <img src={`http://openweathermap.org/img/w/${props.responseObj.weather[0].icon}.png`} alt="img" style={{'width':'50px','margin':'auto'}} />
                        <div className="card-body">
                            <p className="btn btn-dark btn-outline-light">{props.responseObj.weather[0].description}</p>
                        </div>
                    </div>  
               </div>
           : null
           }
       </div>
   )
}
export default conditions;