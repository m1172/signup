import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Login /> */}
        <Signup />
      </div>
    );
  }
}
