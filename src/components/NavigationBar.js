import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../images/moronlogo.png'
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
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img className="logo" src={Logo}/>Sublease App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/ContactUs">Contact Us</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Login">Login</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)