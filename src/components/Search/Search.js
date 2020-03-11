import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Weather from '../Weather/Weather'

import './Search.css'

class Search extends Component {
    render () {
        return (
            <div>
                <div className="bodySearch text-center">
                    <Header />
                    <div className="weather">
                        <Weather />
                    </div>
                    <Footer />
                </div>
                
            </div>
        )
    }
}

export default Search