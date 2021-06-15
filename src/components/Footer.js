import React from 'react';
import { Form, FormControl, Row, Col, ButtonGroup, Button, Tabs, Tab } from 'react-bootstrap';

export const Footer = () => {

  return(
    <div className="footer">
        <Row style={{marginLeft: '0px', marginRight: '0px'}}>
            <Col>
                <Row className="row-centered">
                    <Col style={{padding: '0px', maxWidth: 'fit-content'}}>About</Col>
                    <Col style={{padding: '0px', maxWidth: 'fit-content'}}>Contact Us</Col>
                    <Col style={{padding: '0px', maxWidth: 'fit-content'}}>Help and Tips</Col>
                    <Col style={{padding: '0px', maxWidth: 'fit-content'}}>List a Unit</Col>
                    <Col style={{padding: '0px', maxWidth: 'fit-content'}}>Post a Search</Col>
                </Row>
            </Col>

            <Col>
            </Col>
        </Row>
    </div>
  )
}