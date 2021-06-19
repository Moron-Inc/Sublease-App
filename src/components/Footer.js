import React from 'react';
import { Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import termsOfUse from '../components/dummy-terms-of-use.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLocationArrow, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {

  return(
    <div className="footer">
        <Row style={{margin: '0px'}}>
            <Col>
                <Row className="footerLeft">
                    <Col className="footerColStyling"><a href="/pages/About" style={{color: "white"}}>About</a></Col>
                    <Col className="footerColStyling"><a href="/pages/ContactUs" style={{color: "white"}}>Contact Us</a></Col>
                    <Col className="footerColStyling"><a href="/pages/HelpandTips" style={{color: "white"}}>Help & Tips</a></Col>
                    <Col className="footerColStyling"><a href="/pages/FAQ" style={{color: "white"}}>FAQ</a></Col>
                </Row>
                <Row className="footerLeft">
                    <Col className="footerColStyling"><FontAwesomeIcon icon={faLocationArrow} className="footerIcons"/>Austin, Texas, USA</Col>
                    <Col className="footerColStyling"><FontAwesomeIcon icon={faEnvelope} className="footerIcons"/>Company Email</Col>
                </Row>
            </Col>

            <Col>
                <Row className="footerRight">
                    <Col className="footerColStyling">Privacy</Col>
                    <Col className="footerColStyling"><a href = {termsOfUse} style={{color: "white"}} target = "_blank" rel="noreferrer">Terms of Use</a></Col>
                    <Col className="footerColStyling">Copyright 2021</Col>
                </Row>
                <Row className="footerRight">
                    <Col className="footerColStyling"><FontAwesomeIcon icon={faFacebook} className="footerLogos"/></Col>
                    <Col className="footerColStyling"><FontAwesomeIcon icon={faLinkedin} className="footerLogos"/></Col>
                    <Col className="footerColStyling"><FontAwesomeIcon icon={faTwitter} className="footerLogos"/></Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}