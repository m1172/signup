import React, { Component } from 'react';
import { Body, Container, Head, Title, Title2, Wrapper } from './style';
import './App.css';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Container>
          <Head>
            <Body>
              <img src='' alt='' />
              <h1>Welcome Back</h1>
              <h4>Login back into your account</h4>
            </Body>
          </Head>
          <Wrapper>
            <Body>
              <h2>Login</h2>
              <input type='text' placeholder=' Email address' />
              <input type='text' placeholder='Password' />
              <button type='submit'>LOGIN</button>
            </Body>
          </Wrapper>
        </Container>
      </div>
    );
  }
}
