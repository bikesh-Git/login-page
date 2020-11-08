import React, { Component } from 'react'
import Login from './component/Login'
import Admin from './component/Admin'
import Logout from './component/Logout'
import Registration from './component/Registration'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css'

export class App extends Component {
  
  render() {
    return (
     <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route  path="/admin" component={Admin}/>
          <Route path="/logout" component={Logout}/>
          <Route path="/reg-page" component={Registration}/>
         
        </Switch>
        </Router>
     
    )
  }
  
}

export default App
