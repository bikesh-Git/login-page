import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Registration.css'

export default class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            username: "",
            email: '',
            password: '',
            Rpassword: "",
            mobileNo: "",
        }
        this.onChange = this.onChange.bind(this)
        this.registration = this.registration.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    async registration(e) {

        let obj = {
            name: this.state.name,
            username: this.state.username, email: this.state.email,
            password: this.state.password,
            Rpassword: this.state.Rpassword, mobileNo: this.state.mobileNo
        }
        console.log(obj)

        const rawResponse = await fetch('https://role-auth-11.herokuapp.com/api/users/register-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        });
        const content = await rawResponse.json();
        console.log(content);
        if(content.success==true)
        {
            alert(content.message)
            
        }
        else{
            alert(content.message)
            
        }


    }
    render() {
        return (
            <div className="login__link">
                <Link to="/">Login</Link>
                <div className="registration__page">
                    <h1>Registration </h1>
                    <br />  <br />
                    <form>
                        <input type="text" placeholder="Full Name" name="name" onChange={this.onChange} />
                        <br />  <br />
                        <input type="text" placeholder="User Name" name="username" onChange={this.onChange} />
                        <br />  <br />
                        <input type="text" placeholder="Email ID" name="email" onChange={this.onChange} />
                        <br />  <br />
                        <input type="password" placeholder="Password" name="password" onChange={this.onChange} />
                        <br />  <br />
                        <input type="password" placeholder="Retype Password" name="Rpassword" onChange={this.onChange} />
                        <br />  <br />
                        <input type="number" placeholder="Mobile no." name="mobileNo" onChange={this.onChange} />

                        <br />  <br /><br />
                        <input type='button' value='Registration' onClick={this.registration} ></input>
                    </form>
                </div>
            </div>
        )
    }
}
