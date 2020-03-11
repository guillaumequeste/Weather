import React, { Component } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

class App extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodyApp text-center">Accueil</div>
                <Footer />
            </div>
        )
    }
}

export default App