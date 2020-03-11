import React, { useState } from 'react';
import ConditionsForecast from '../ConditionsForecast/ConditionsForecast';
import './Forecast.css';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

   function getForecast(e) {
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

    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${uriEncodedCity}&units=${unit}&lang=fr&appid=51fc8505d55fe845e4c757ea6b9ff0cf`, {
        "method": "GET" 
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }
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
    <div>
        <p>Prévisions météo</p>
        <div>
            {JSON.stringify(responseObj)}
        </div>
        <form onSubmit={getForecast}>
                <input
                    type="text"
                    placeholder="Entrer votre ville"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="textInput"
                    />
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
                <button className="Button" type="submit">Prévisions</button>
            </form>
        <ConditionsForecast 
            responseObj={responseObj}
            error={error}
            loading={loading} />
    </div>

   )
}
export default Forecast;