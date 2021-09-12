import React, { Component } from 'react';
import { Body, Container, Head, Title } from './style';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Container>
          <Head>
            <Title>Welcome Back</Title>
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
