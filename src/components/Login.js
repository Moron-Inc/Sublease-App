import React, { useRef } from 'react';
import { Form, FormControl, Row, Col, ButtonGroup, Button, Tabs, Tab } from 'react-bootstrap';
import ReactDOM from "react-dom";
import Modal from "../components/Modal";
import termsOfUse from './dummy-terms-of-use.pdf';
import formFieldInputs from './LoginFormFieldStyling';


export const Login = (props) => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return(
    <ButtonGroup>
        <Button variant="outline-info" onClick={openModal} className="openingModal">Signup/Login</Button>
        <Modal ref={modalRef}>
            <button type="button" class="close" aria-label="Close" onClick={() => modalRef.current.close()}>&times;</button>
            <div style={{padding: "30px"}}>
              <h2 style={{textAlign: "center"}}>Welcome to Sublease App!</h2>
              <Tabs defaultActiveKey="returningUser" style={{flexDirection: "row"}}>
                <Tab eventKey="returningUser" title="Returning User" style={{padding: "10px"}}> 
                  <Form>
                    {formFieldInputs.map(function(val,index){
                      if (index === 2 || index === 3){
                        return(
                        <div>
                          <p style={{marginBottom: "2px"}}>{val.heading}</p>
                          <FormControl type={val.type} placeholder={val.ph} style={{marginBottom: "1rem"}}/>
                        </div>
                        )
                      };
                    })}
                    <Button variant="secondary" style={{minWidth: "fit-content"}}>Enter</Button>
                  </Form>
                </Tab>
                <Tab eventKey="registerUser" title="Register" style={{padding: "10px"}}>
                  <Form>
                    {formFieldInputs.map(function(val, index) {
                      return(
                        <div>
                          <p style={{marginBottom: "2px"}}>{val.heading}</p>
                          <FormControl type={val.type} placeholder={val.ph} style={{marginBottom: "1rem"}}/>
                        </div>
                      )
                    })}
                    <p style={{marginBottom: "2px"}}>Please read the <em><a href = {termsOfUse} style={{color: "black"}} target = "_blank" rel="noreferrer">Terms of Use</a></em></p>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="I agree to the Terms of Use" />
                    </Form.Group>
                    <Button variant="secondary" style={{minWidth: "fit-content"}}>Submit</Button>
                  </Form>
                </Tab>
              </Tabs>
            </div>
        </Modal>
    </ButtonGroup>
  )
}