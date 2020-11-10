import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Sidebar from '../container/SideBar'
import './Admin.css'

export default class Home extends Component {
    constructor(props) {
        super(props)


        this.state = {
            loading: true,
            society: [],
        }

    }
    async componentDidMount() {
        const rawResponse = await fetch('https://cosmo-thoughts.herokuapp.com/api/auth/society/search', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify()
        });
        const content = await rawResponse.json();
        this.setState({
            society: content
        })
        console.log(content);
    }
    render() {
        if (this.state.loggedIn == false) {
            return <Redirect to="/" />
        }

        let data = this.state.society.map((item, index) => {

            return (
                <tr key={index} >
                    <td>{item._id}</td>
                    <td>{item.name}</td>
                    <td>{item.shortname}</td>
                    <td>{item.address}</td>
                    <td>{item.pincode}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.updatedAt}</td>
                </tr>

            )
        });

        return (
            <div>
                <Sidebar />
                <h1>Welcome To My Dashboard</h1><br></br>
                <h3>Total number of record : {data.length}</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Society Id</th>
                            <th>Name</th>
                            <th>ShortName</th>
                            <th>Address</th>
                            <th>PinCode</th>
                            <th>CreatAt</th>
                            <th>updatedAt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
            </div>
        )
    }
}
