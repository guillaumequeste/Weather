import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import WeekContainerLaReunion from '../WeekContainerLaReunion/WeekContainerLaReunion'
import axios from 'axios'
import './LaReunion.css'

class LaReunion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            ressenti: ''
        };
    }

    componentDidMount() {
        let appKey = process.env.REACT_APP_API_KEY;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=saint-denis,re&units=metric&lang=fr&appid=${appKey}`)
        .then(response => {
          this.setState({ 
            temperature: response.data.main.temp,
            ressenti: response.data.main.feels_like,
            description: response.data.weather[0].description,
            image: response.data.weather[0].icon});
        })
        .catch(error => {
          console.log(error);
        });
    }

    render () {
        const { temperature, ressenti, description, image } = this.state;
        return (
            <div>
                <div className="bodyLaReunion text-center pt-2">
                    <Header />
                    <div className="card bg-light mx-auto">
                        <p>Il fait actuellement {temperature}°C</p>
                        <p>Ressenti : {ressenti}°C</p>
                        <img src={`http://openweathermap.org/img/w/${image}.png`} alt="img" style={{'width':'50px','margin':'auto'}} />
                        <div className="card-body">
                            <p className="btn btn-dark btn-outline-light">{description}</p>
                        </div>
                    </div>
                    <WeekContainerLaReunion />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default LaReunion