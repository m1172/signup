import React, { Component } from 'react';
import { Body, Container, Head } from './style';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Container>
          <Head>
            <h1>Welcome Back</h1>
            <h3>Login back into your account</h3>
            <Body>
              <input type='text' />
            </Body>
          </Head>
        </Container>
      </div>
    );
  }
}
