import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import styled from 'styled-components';
import { Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
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
            <h2 style={{textAlign: "center"}}>Welcome to Sublease App!</h2>
            <p>
                <span>some text</span>
            </p>
            <button onClick={() => modalRef.current.close()}>
                Close Modal
            </button>
        </Modal>
    </ButtonGroup>
  )
}