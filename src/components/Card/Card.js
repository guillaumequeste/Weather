import React from 'react';
import './Card.css';

class Card extends React.Component {
  // Props: day, key(index)

  render() {    
    const ms = this.props.day.dt * 1000;
    const weekdayName = new Date(ms).toLocaleString('fr', {weekday: 'long'});

    // const farenheit = (parseInt(this.props.day.main.temp) - 273.15) * (9/5) + 32

    return (
      <div className="col-auto">
        <div className="card">
          <h3 className="card-title">{weekdayName}</h3>
          <img src={`http://openweathermap.org/img/w/${this.props.day.weather[0].icon}.png`} alt="img" style={{'width':'50px','margin':'auto'}} />
          <h2>{Math.round(this.props.day.main.temp)} °C</h2>
          <div className="card-body">
            <p>{this.props.day.weather[0].description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Card