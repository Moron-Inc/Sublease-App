import React, { useRef } from 'react';
import { Row, Col, ButtonGroup, Button, Tabs, Tab } from 'react-bootstrap';
import ReactDOM from "react-dom";
import Modal from "../components/Modal";


export const Login = (props) => {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.openModal();
  };

  return(
    <ButtonGroup>
        <Button variant="outline-info" onClick={openModal}>Signup/Login</Button>
        <Modal ref={modalRef}>
            <button type="button" class="close" aria-label="Close" onClick={() => modalRef.current.close()}>&times;</button>
            <div style={{padding: "30px"}}>
              <h2 style={{textAlign: "center"}}>Welcome to Sublease App!</h2>
              <Tabs defaultActiveKey="returningUser" style={{ flexDirection: "row"}}>
                <Tab eventKey="returningUser" title="Returning User" style={{padding: "10px"}}>
                  <p>hello</p>
                </Tab>
                <Tab eventKey="registerUser" title="Register" style={{padding: "10px"}}>
                  <p>goodbye</p>
                </Tab>
              </Tabs>
            </div>
        </Modal>
    </ButtonGroup>
  )
}