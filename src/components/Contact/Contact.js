import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Contact.css'

class Contact extends Component {
    render () {
        return (
            <div>
                <div className="bodyContact">
                    <Header />
                    <div className="contact">
                        <div className="contact2">
                            <div>guillaume.queste@laposte.net</div>
                            <div><a href="https://www.guillaumequeste.fr" target="_blank" rel="noopener noreferrer">https://www.guillaumequeste.fr</a></div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Contact