import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WeekContainerDieppe from './components/WeekContainerDieppe/WeekContainerDieppe'
import axios from 'axios'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            ressenti: ''
        };
    }

    componentDidMount() {
        let appKey = process.env.REACT_APP_API_KEY;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=dieppe&units=metric&lang=fr&appid=${appKey}`)
        .then(response => {
          this.setState({ 
            temperature: response.data.main.temp,
            ressenti: response.data.main.feels_like,
            description: response.data.weather[0].description,
            image: response.data.weather[0].icon,
            ville: response.data.name});
        })
        .catch(error => {
          console.log(error);
        });
    }

    render () {
        const { temperature, ressenti, description, image, ville } = this.state;
        return (
            <div>
                <div className="bodyApp text-center pt-2">
                    <Header />
                    <h1>{ville}</h1>
                    <div className="card bg-light mx-auto">
                        <p>Il fait actuellement {temperature}°C</p>
                        <p>Ressenti : {ressenti}°C</p>
                        <img src={`http://openweathermap.org/img/w/${image}.png`} alt="img" style={{'width': '70px','margin':'auto'}} />
                        <div className="card-body">
                            <p className="btn btn-dark btn-outline-light">{description}</p>
                        </div>
                    </div>
                    <WeekContainerDieppe />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default App