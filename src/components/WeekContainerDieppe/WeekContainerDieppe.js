import React, { Component } from 'react';
import Card from '../Card/Card';

let appKey = process.env.REACT_APP_API_KEY
const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=dieppe&lang=fr&units=metric&appid=${appKey}`;

class WeekContainerDieppe extends Component {
  state = {
    days: []
  }

  componentDidMount = () => {
    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  render() {
    return (
      <div>
        <p>Prévisions météo à 5 jours</p>
        <div className="row justify-content-center mx-auto">
          {this.formatCards()}
        </div>
      </div>
    )
  }
}

export default WeekContainerDieppe