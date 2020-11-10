import React, { Component } from 'react'
import Login from './component/Login'
import Logout from './component/Logout'
import Registration from './component/Registration'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Admin from './pages/Admin'
import Support from './pages/Support'
import Team from './pages/Team'
import Product from './pages/Product'
import Messages from './pages/Messages'
import Reports from './pages/Reports'

import './App.css'

export class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/reg-page" component={Registration} />

          <Route exact path="/admin" component={Admin} />
          <Route path="/messages" component={Messages} />
          <Route path="/team" component={Team} />
          <Route path="/product" component={Product} />
          <Route path="/reports" component={Reports} />
          <Route path="/Support" component={Support} />


        </Switch>
      </Router>

    )
  }

}

export default App
