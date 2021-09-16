import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/Login'>
            <Login />
          </Route>
          <Route path='/'>
            <Signup />
          </Route>
        </Switch>
      </Router>
    );
  }
}
