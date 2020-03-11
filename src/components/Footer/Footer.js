import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './Footer.css'

class Footer extends Component {
    render () {
        return (
            <div className="bodyFooter">
                <div className="row">
                    <div className="col-12 text-center"><Link to="/contact" className="linkFooter">Contact</Link></div>
                </div>
            </div>
        )
    }
}

export default Footer