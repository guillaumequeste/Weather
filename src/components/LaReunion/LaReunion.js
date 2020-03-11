import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './LaReunion.css'

class LaReunion extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodyLaReunion text-center">
                    <p>La Réunion</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default LaReunion