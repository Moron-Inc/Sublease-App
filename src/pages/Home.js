import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import backgroundpic from '../images/austin-sketch3.jpg';
import house from '../images/house.png';
import house2 from '../images/house2.png';

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

export const Home = () => (
  <Wrapper>
    <SearchBar/>

    <br/>
    <br/>

    <Row className="row-centered" >
      <div style={{width: "75%", textAlign: "center"}}>
        <h2 style={{paddingBottom: '1rem', borderBottom: "2px dotted"}}>Subleasing Made Easy</h2>
      </div>
    </Row>

    <Row className="row-centered">
      <div style={{width: '75%', display: 'flex'}}>
        <Col className="column-centered" style={{borderRight: "2px dotted"}}>
          <h3 style={{textAlign: 'center'}}>I want to sublease my room</h3>
          <Row className="row-centered">
            <Col style={{maxWidth: '25%', padding: '0px', justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex'}}>
              <img src={house} style={{width: '150px', height: '150px'}}/>
            </Col>
            <Col style={{padding: '0px'}}>
              <ul>
                <li>
                  <h5>Step 1</h5>
                  <p>Create an account!</p>
                </li>
                <li>
                  <h5>Step 2</h5>
                  <p>Create an Offer post. Include all important details like the duration, location, and asking price for the unit.</p>
                </li>
                <li>
                  <h5>Step 3</h5>
                  <p>Find and contact a Searcher. Seal the deal!</p>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        <Col className="column-centered">
          <h3 style={{textAlign: 'center'}}>I'm looking to take over a lease</h3>
          <Row className="row-centered">
            <Col style={{padding: '0px'}}>
              <ul>
                <li>
                  <h5>Step 1</h5>
                  <p>Create an account!</p>
                </li>
                <li>
                  <h5>Step 2</h5>
                  <p>Create an Interest post. Include all important details like who you are, your preferences, and duration.</p>
                </li>
                <li>
                  <h5>Step 3</h5>
                  <p>Find and contact a Subleaser. Seal the deal!</p>
                </li>
              </ul>
            </Col>
            <Col style={{maxWidth: '25%', padding: '0px', justifyContent: 'center', textAlign: 'center', alignItems: 'center', display: 'flex'}}>
              <img src={house2} style={{width: '150px', height: '150px'}}/>
            </Col>
          </Row>
        </Col>
      </div>
    </Row>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </Wrapper>
)