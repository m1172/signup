import React, { Component } from 'react';
import { Body, Button, Container, Head, Input, Wrapper } from './style';
import './App.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Container>
          <Head>
            <Body>
              <div></div>
              <img src='' alt='' />
              <h1>Welcome Back</h1>
              <h4>Login back into your account</h4>
            </Body>
          </Head>
          <Wrapper>
            <Body>
              <h2>Login</h2>
              <Input type='text' placeholder=' Email address' />
              <Input type='text' placeholder='Password' />
              <Button type='submit'>LOGIN</Button>
              <p className='text-white text-center'>
                Don't Have An Account?
                <Link to='/' style={{ color: 'blue', textDecoration: 'none' }}>
                  Join Now
                </Link>
              </p>
            </Body>
          </Wrapper>
        </Container>
      </div>
    );
  }
}
