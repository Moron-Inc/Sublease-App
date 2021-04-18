import React from 'react';
import { Form, FormControl, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1em;
  width: 100%;
  height: 100vh;
`;

// const Styles = styled.div`
//   .navbar { background-color: white; }
//   a, .navbar-nav, .navbar-light .nav-link {
//     color: black;
//     &:hover { color: blue; }
//   }
//   .navbar-brand {
//     font-size: 1.4em;
//     color: black;
//     &:hover { color: blue; }
//   }
//   .form-center {
//     position: absolute !important;
//     left: 25%;
//     right: 25%;
//   }
// `;


export const Home = () => (
  <Wrapper>
    <div className="custom-container">
      <Form className="form-center">
        <span><FormControl type="text" placeholder="Search" className="" /></span>
      </Form>
    </div>  
    <div className='spacer-div'></div>
    <Row className="column-container">
      <Col className="column-content1">
        <h3>How it Works #1</h3>
        <p>arbitrary text #1</p>
      </Col>
      <Col className="column-content2">
        <h3>How it Works #2</h3>
        <p>arbitrary text #2</p>
      </Col>
    </Row>
    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className="footer">footer directory stuff</div>
  </Wrapper>
)