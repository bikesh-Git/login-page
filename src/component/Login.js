import React, { Component } from 'react'
// import {PostData} from '../services/PostData'
import {Redirect} from 'react-router-dom'
import './Login.css'


export default class Login extends Component {
    constructor(props){
        super(props)
        
        this.state={
            username:"",
            password:"",
            loggedIn:false,
            registration:false
           
        }
       this.onChange=this.onChange.bind(this)
        this.submitForm=this.submitForm.bind(this)
    }

    onChange(e){
            this.setState({
                [e.target.name]:e.target.value
            })
        
    }

    async submitForm(e){
            const rawResponse = await fetch('https://role-auth-11.herokuapp.com/api/users/login-user', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({username:this.state.username, password:this.state.password })
            });
            const content = await rawResponse.json();
          
            console.log(content);
            
            if(content.success == true){
                console.log(content.success)
                this.setState({loggedIn:true})
            }
            else {
              alert(content.message)
            } 
          
    }
   
    Registration=()=>{
           this.setState({
            registration:true
           })
    }

    render() {
         if(this.state.loggedIn === true){
            return <Redirect to="/admin" />
        }
        if(this.state.registration==true) {
            return <Redirect to="/reg-page" ></Redirect>
        }
        
       
        return (
            <div className='login__page'>
                <h1> User Login </h1>

                <form class="form__group field" >
                <br/><br/>
                    <input class="form__field" id='name' required type="text" placeholder="username"  name="username" value={this.state.username} onChange={this.onChange} />
                    <br/><br/>
                    <input class="form__field" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange} />
                    <br/><br/><br/>
                    <input type='button' onClick={this.submitForm}   value="LogIn" ></input>
                    <input className="registration" type='button' onClick={this.Registration}   value="Registration" ></input>
                    <br/>
                </form>
            </div>
        )
    }
}
