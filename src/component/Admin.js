import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom'

export default class Admin extends Component {
    render() {
       return (
            <div>
                <h1>this is an admin page only for auth people</h1>
                <Link to="/logout">Logout</Link>
            </div>
        )
    }
}
