import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './ErrorNotFound.css'

class ErrorNotFound extends Component {
    render () {
        return (
            <div>
                <div className="bodyErrorNotFound">
                    <Header />
                    <div className="error">
                        <div className="error2">
                            <div>Il n'y a rien ici...</div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default ErrorNotFound