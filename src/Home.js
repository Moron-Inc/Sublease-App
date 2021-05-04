import React from 'react';
import { Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

var borderstyling = {border: "2px dotted bottom"}


export const Home = () => (
  <Wrapper>
    <div className="custom-container">
      <Form>
        <span>
          <FormControl type="text" placeholder="Search" className="" />
          <ButtonGroup>
            <Button variant="info">Subleaser</Button>
            <Button variant="info">Subleasee</Button>
          </ButtonGroup>
        </span>
      </Form>
    </div> 

    <div className='spacer-div'></div>

    <Row className="row-centered">
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

    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className="footer">footer directory stuff</div>
  </Wrapper>
)