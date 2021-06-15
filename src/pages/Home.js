import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import backgroundpic from '../images/austin-sketch3.jpg';

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const Home = () => (
  <Wrapper>
    {/* <div className="custom-container"> */}
    <img src={backgroundpic} style={{width: '100%', height: '65%', backgroundSize: 'cover'}}/>
      <SearchBar/>
    {/* </div>  */}

    <br/>
    <br/>

    <Row className="row-centered" >
      <div style={{width: "75%", textAlign: "center"}}>
        <h2 style={{borderBottom: "2px dotted"}}>How It Works</h2>
      </div>
    </Row>

    <Row className="row-centered">
      <Col className="column-centered" style={{borderRight: "2px dotted"}}>
        <h3>How it Works #1</h3>
        <p>arbitrary text #1</p>
      </Col>
      <Col className="column-centered">
        <h3>How it Works #2</h3>
        <p>arbitrary text #2</p>
      </Col>
    </Row>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </Wrapper>
)