import React, { Component } from 'react';
import { Body, Button, Container, Head, Input, Wrapper } from './style';
import './App.css';
import { Link } from 'react-router-dom';

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
              <h2>Sign Up</h2>
              <Input type='text' placeholder='Full Name' />
              <Input type='text' placeholder=' Email address' />
              <Input type='text' placeholder='Password' />
              <Button type='submit'>SIGN UP</Button>
              <p>
                Already Have An Account?{' '}
                <Link
                  to='/Login'
                  style={{ color: 'blue', textDecoration: 'none' }}
                >
                  Log In
                </Link>
              </p>
            </Body>
          </Wrapper>
        </Container>
      </div>
    );
  }
}
