import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Header.css'

class Header extends Component {
    render () {
        return (
            <div className="bodyHeader">
                <div className="row">
                    <div className="col-6 text-center">
                        <Link to="/" className="linkHeader">Dieppe</Link>
                    </div>
                    <div className="col-6 text-center">
                        <Link to="/la_reunion" className="linkHeader">La Réunion</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <Link to="/search" className="linkHeader">Chercher une ville</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header