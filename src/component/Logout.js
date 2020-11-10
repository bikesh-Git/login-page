import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Logout.css'

export default class Logout extends Component {
 

    render() {
        return (
            <div classname="logout">
                <h1>You Have Been Logout</h1>
                <Link to="/" className="style">Login again</Link>
            </div>
        )
    }
}