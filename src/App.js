import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';

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
