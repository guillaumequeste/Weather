import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './ErrorNotFound.css'

class ErrorNotFound extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodyErrorNotFound text-center">
                    <p>Erreur Not Found</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ErrorNotFound