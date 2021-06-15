import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import members from '../components/Members';

const Wrapper = styled.div`
  width: 100%;
  // height: 100%;
`;

export const About = (props) => (
  <Wrapper>
    <br/>
    <br/>
    <br/>

    <Row className="row-centered">
      <div style={{textAlign: "center"}}>
        <h1>About Us</h1>
      </div>
    </Row>

    <br/>
    <br/>

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

    <br/>
    <br/>

    <Row className="row-centered">
      <div style={{textAlign: "center"}}>
        <h2>Members</h2>
      </div>
    </Row>

    <br/>
    <br/>


    {members.map(function(val, index) {
        return(
          <div>
            <Row className="row-centered row-padding">
              <Col style={{order: (index%2===0)?1:12, justifyContent: "center", textAlign: (index%2===0)?"left":"right"}}>
                <h3>{val.name}</h3>
                <p><em>{val.title}</em></p>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
              </Col>
              <Col style={{order: (index%2===0)?12:1, justifyContent: "center", textAlign: (index%2===0)?"right":"left"}}>
                <img className="pfp" src={val.image} alt={val.alt}/>
              </Col>
            </Row>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        )
    })}

{/* 
    <br/>
    <br/>
    <br/>
    <div className="footer">footer directory stuff</div> */}
  </Wrapper>
)