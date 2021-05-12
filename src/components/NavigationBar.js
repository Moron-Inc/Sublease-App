import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../images/moronlogo.png'
import { Login } from './Login';

const Styles = styled.div`
  .navbar { background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #00A5AF;
    &:hover { color: blue; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #00A5AF;
    &:hover { color: blue; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => {

  return(
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/" style={{paddingLeft: "4%"}}><img className="logo mr-1" src={Logo} alt="Moron Logo"/>Sublease App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{paddingRight: "4%", alignItems: "center"}}>
              <Nav.Item><Nav.Link href="/pages/About">About</Nav.Link></Nav.Item> 
              <Nav.Item><Nav.Link href="/pages/ContactUs">Contact Us</Nav.Link></Nav.Item>
              <Login/>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}