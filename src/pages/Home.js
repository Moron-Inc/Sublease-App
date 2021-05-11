import React from 'react';
import { Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Home = () => (
  <Wrapper>
    <div className="custom-container">
      <Form>
        <span>
            <Row>
              <Col style={{padding: "0px",}}>
                <FormControl type="text" placeholder="Search" className="" />
              </Col>
              <Col style={{padding: "0px", maxWidth: "fit-content"}}>
                <Button variant="secondary">Search</Button>
              </Col>
            </Row>

            <Row>
              <ButtonGroup>
                <Button variant="info mr-1">Subleaser</Button>
                <Button variant="info">Subleasee</Button>
              </ButtonGroup>
            </Row>
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