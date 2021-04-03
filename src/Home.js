import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import picture from './images/MarioKartBanner.jpg'

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

const Styles = styled.div`
  .navbar { background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
    &:hover { color: blue; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover { color: blue; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;


export const Home = () => (
  <Wrapper>
    <h2>Home</h2>
    <div className="container">
      <Form className="form-center">
        <span><FormControl type="text" placeholder="Search" className="" /></span>
      </Form>
    </div>    
  </Wrapper>
)