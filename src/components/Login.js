import React, { useRef } from 'react';
import { Form, FormControl, Row, Col, ButtonGroup, Button, Tabs, Tab } from 'react-bootstrap';
import ReactDOM from "react-dom";
import Modal from "../components/Modal";
import termsOfUse from '../components/dummy-terms-of-use.pdf';


export const Login = (props) => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return(

    /*a lot of redundant code, try to make it cleaner*/
    <ButtonGroup>
        <Button variant="outline-info" onClick={openModal} className="openingModal">Signup/Login</Button>
        <Modal ref={modalRef}>
            <button type="button" class="close" aria-label="Close" onClick={() => modalRef.current.close()}>&times;</button>
            <div style={{padding: "30px"}}>
              <h2 style={{textAlign: "center"}}>Welcome to Sublease App!</h2>
              <Tabs defaultActiveKey="returningUser" style={{flexDirection: "row"}}>
                <Tab eventKey="returningUser" title="Returning User" style={{padding: "10px"}}>
                  
                  <Form>
                    <p style={{marginBottom: "2px"}}>Username or Email</p>
                    <FormControl type="text" placeholder="Enter username" className="" style={{marginBottom: "1rem"}}/> 
                    <p style={{marginBottom: "2px"}}>Password</p>
                    <FormControl type="text" placeholder="Enter password" className="" style={{marginBottom: "1rem"}}/> 
                    <Button variant="secondary" style={{minWidth: "fit-content"}}>Enter</Button>
                  </Form>

                </Tab>
                <Tab eventKey="registerUser" title="Register" style={{padding: "10px"}}>

                  <Form>
                    <p style={{marginBottom: "2px"}}>First Name</p>
                    <FormControl type="text" placeholder="Enter first name" className="" style={{marginBottom: "1rem"}}/> 
                    <p style={{marginBottom: "2px"}}>Last Name</p>
                    <FormControl type="text" placeholder="Enter last name" className="" style={{marginBottom: "1rem"}}/> 
                    <p style={{marginBottom: "2px"}}>Username</p>
                    <FormControl type="text" placeholder="Enter username" className="" style={{marginBottom: "1rem"}}/> 
                    <p style={{marginBottom: "2px"}}>Password</p>
                    <FormControl type="text" placeholder="Enter password" className="" style={{marginBottom: "1rem"}}/> 
                    <p style={{marginBottom: "2px"}}>Confirm Password</p>
                    <FormControl type="text" placeholder="Enter password" className="" style={{marginBottom: "1rem"}}/> 
                    <p style={{marginBottom: "2px"}}>Email</p>
                    <FormControl type="text" placeholder="Enter email" className="" style={{marginBottom: "1rem"}}/> 
                    <p style={{marginBottom: "2px"}}>Confirm Email</p>
                    <FormControl type="text" placeholder="Enter email" className="" style={{marginBottom: "1rem"}}/>

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