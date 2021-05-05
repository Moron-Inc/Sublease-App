import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import Logo from '../images/moronlogo.png';
import pfp1 from '../images/Arjun-pfp.jpg';
import members from '../components/Members';

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



    {members.map(function(val, index) {
        return(
          <div>
            <Row className="row-padding">
              <Col style={{order: (index%2==0)?1:12, justifyContent: "center", textAlign: (index%2==0)?"left":"right"}}>
                <h3>{val.name}</h3>
                <p><em>{val.title}</em></p>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
                <h3>{val.bio}</h3>
              </Col>
              <Col style={{order: (index%2==0)?12:1, justifyContent: "center", textAlign: (index%2==0)?"right":"left"}}>
                <img className="pfp" src={val.image}/>
              </Col>
            </Row>
            <div className='spacer-div'></div>
            <div className='spacer-div'></div>
            <div className='spacer-div'></div>
            <div className='spacer-div'></div>
          </div>
        )
    })}


    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className='spacer-div'></div>
    <div className="footer">footer directory stuff</div>
  </Wrapper>
)