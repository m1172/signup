import React, { Component } from 'react';
import { Body, Button, Container, Head, Input, Wrapper } from './style';
import './App.css';

export default class Signup extends Component {
  render() {
    return (
      <div>
        <Container>
          <Head>
            <Body>
              <img src='' alt='' />
              <h1>Welcome</h1>
              <h4>Signup into your account</h4>
            </Body>
          </Head>
          <Wrapper>
            <Body>
              <h2>Login</h2>
              <Input type='text' placeholder=' Email address' />
              <Input type='text' placeholder='Password' />
              <Button type='submit'>LOGIN</Button>
              <p>Don't Have An Account? Join Now</p>
            </Body>
          </Wrapper>
        </Container>
      </div>
    );
  }
}
