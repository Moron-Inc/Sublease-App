import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from './images/moronlogo.png'
import pfp1 from './images/Arjun-pfp.jpg'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const About = (props) => (
  <Wrapper>
    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className='spacer-div'></div>

    <Row className="row-centered">
      <div style={{textAlign: "center"}}>
        <h1>About Us</h1>
      </div>
    </Row>

    <div className='spacer-div'></div>

    <Row className="row-centered">
      <div style={{textAlign: "center"}}>
        <h2>Mission Statement</h2>
      </div>
    </Row>
    <Row className="row-centered">
      <div style={{textAlign: "center"}}>
        <p>mission statement text stuff</p>
      </div>
    </Row>

    <div className='spacer-div'></div>

    <Row className="row-centered">
      <div style={{textAlign: "center"}}>
        <h2>Members</h2>
      </div>
    </Row>

    <div className='spacer-div'></div>

    <Row style={{paddingLeft: "100px", paddingRight: "100px"}}>
      <Col style={{justifyContent: "center", textAlign: "left"}}>
        <h3>Arjun Patel</h3>
        <p><em>Cofounder</em></p>
        <h3>Arjun's bio</h3>
        <h3>Arjun's bio</h3>
        <h3>Arjun's bio</h3>
        <h3>Arjun's bio</h3>
        <h3>Arjun's bio</h3>
        <h3>Arjun's bio</h3>
      </Col>
      <Col style={{justifyContent: "center", textAlign: "right"}}>
        <img className="pfp" src={pfp1}/>
      </Col>
    </Row>

    <div className='spacer-div'></div>

    <Row style={{paddingLeft: "100px", paddingRight: "100px"}}>
       <Col style={{justifyContent: "center", textAlign: "left"}}>
        <img className="pfp" src={Logo}/>
      </Col>
      <Col style={{justifyContent: "center", textAlign: "right"}}>
        <h3>Anthony Pham</h3>
        <p><em>Cofounder</em></p>
        <h3>Anthony's bio</h3>
        <h3>Anthony's bio</h3>
        <h3>Anthony's bio</h3>
        <h3>Anthony's bio</h3>
        <h3>Anthony's bio</h3>
        <h3>Anthony's bio</h3>
      </Col>
    </Row>

    <div className='spacer-div'></div>

    <Row style={{paddingLeft: "100px", paddingRight: "100px"}}>
      <Col style={{justifyContent: "center", textAlign: "left"}}>
        <h3>Noah Zamarripa</h3>
        <p><em>Cofounder</em></p>
        <h3>Noah's bio</h3>
        <h3>Noah's bio</h3>
        <h3>Noah's bio</h3>
        <h3>Noah's bio</h3>
        <h3>Noah's bio</h3>
        <h3>Noah's bio</h3>
      </Col>
      <Col style={{justifyContent: "center", textAlign: "right"}}>
        <img className="pfp" src={Logo}/>
      </Col>
    </Row>

    <div className='spacer-div'></div>

    <Row style={{paddingLeft: "100px", paddingRight: "100px"}}>
      <Col style={{justifyContent: "center", textAlign: "left"}}>
        <img className="pfp" src={Logo}/>
      </Col>
      <Col style={{justifyContent: "center", textAlign: "right"}}>
        <h3>Sonia Shrotriya</h3>
        <p><em>Cofounder</em></p>
        <h3>Sonia's bio</h3>
        <h3>Sonia's bio</h3>
        <h3>Sonia's bio</h3>
        <h3>Sonia's bio</h3>
        <h3>Sonia's bio</h3>
        <h3>Sonia's bio</h3>
      </Col>
    </Row>

    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className="footer">footer directory stuff</div>
  </Wrapper>
)