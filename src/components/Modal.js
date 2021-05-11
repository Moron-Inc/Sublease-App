import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import styled from 'styled-components';
import { Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import ReactDOM from "react-dom";

const Modal = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);
  
    useImperativeHandle(ref, () => {
      return {
        openModal: () => open(),
        close: () => close()
      }
    });
  
    const open = () => {
      setDisplay(true); 
    };
  
    const close = () => {
      setDisplay(false);
    };
  
    if (display) {
  
      return ReactDOM.createPortal(
        <div className={'mymodal-wrapper'}>
          <div onClick={close} className={"mymodal-backdrop"}/>
          <div className={"mymodal-box"}>
            {props.children}
          </div>
        </div>,
        document.getElementById("mymodal-root")
      );
    }
  
    return null;
    
  });

  export default Modal