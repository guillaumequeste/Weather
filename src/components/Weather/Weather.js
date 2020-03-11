import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import './Weather.css';

const Weather = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

   function getWeather(e) {
    e.preventDefault();

    if (city.length === 0) {
        return setError(true);
    }

    // Clear state in preparation for new data
   setError(false);
   setResponseObj({});
  
   setLoading(true);
  
   let uriEncodedCity = encodeURIComponent(city);
   let appKey = process.env.REACT_APP_API_KEY

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&units=${unit}&lang=fr&appid=${appKey}`)
    .then(response => response.json())
    .then(response => {
        //if (response.cod !== 200) {
            //throw new Error()
        //}
        setResponseObj(response)
        setLoading(false);
    })

    .catch(err => {
        setError(true);
        setLoading(false);
        console.log(err.message);
    });
   }

   return (
    <div className="bodyWeather">
        {/*<div>
            {JSON.stringify(responseObj)}
        </div>*/}
        <form onSubmit={getWeather} className="pt-2">
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Entrer votre ville"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="textInput"
                    />
            </div>
            <div className="form-group">
                <label className="Radio">
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <label className="Radio">
                    <input
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Météo</button>
        </form>
        <div className="pt-2">
        <Conditions 
            responseObj={responseObj}
            error={error}
            loading={loading} />
        </div>
    </div>

   )
}
export default Weather;