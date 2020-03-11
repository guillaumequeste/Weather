import React, { Component } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Weather from '../Weather/Weather'

import './Search.css'

class Search extends Component {
    render () {
        return (
            <div>
                <Header />
                <div className="bodySearch text-center">
                   <Weather />
                   
                </div>
                <Footer />
            </div>
        )
    }
}

export default Search