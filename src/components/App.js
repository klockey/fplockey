import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import TravelLog from './TravelLog'
import Login from './Login'
import CreateAccount from './CreateAccount'
import Blog from './Blog'

class App extends Component {
  render () {
    return <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/createaccount' component={CreateAccount} />
          <Route exact path='/' component={Login} />
          <Route path='/travellog' component={TravelLog} />
          <Route path='/blog' component={Blog} />
        </Switch>
      </Router>
    </div>
  }
}

export default App
