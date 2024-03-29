import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
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
export const NavigationBar_loggedin = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Sublease App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/WatchList">Watch List</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/MyFeed">My Feed</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Messaging">Messaging</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Account">Account</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)