import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Contact.css'

class Contact extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodyContact text-center">
                    <div className="row">
                        <div className="col-12">guillaume.queste@laposte.net</div>
                        <div className="col-12"><a href="https://www.guillaumequeste.fr" target="_blank" rel="noopener noreferrer">https://www.guillaumequeste.fr</a></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact