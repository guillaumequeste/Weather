import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import WeekContainer from './components/WeekContainer/WeekContainer'
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
                <Header />
                <div className="bodyApp text-center">
                    <p>Il fait {temperature} degrés, ressenti : {ressenti}, description : {description}</p>
                    <img src={`http://openweathermap.org/img/w/${image}.png`} />
                    <WeekContainer />
                </div>
                <Footer />
            </div>
        )
    }
}

export default App