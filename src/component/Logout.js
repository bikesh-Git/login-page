import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
   
    render() {
        return (
            <div>
                <h1>You Have Been Logout</h1>
                <Link to="/">Login again</Link>
            </div>
        )
    }
}
