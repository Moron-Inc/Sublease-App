import React from 'react';
import { Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export const SearchBar = () => {

    const history = useHistory();

    const routeChange = () => {
        let path = '../pages/SearchResults';
        history.push(path);
    }

    return(
        <Form onSubmit={routeChange}>
            <span>
                <Row>
                    <Col style={{padding: "0px",}}>
                        <FormControl type="text" placeholder="Search" className="" />
                    </Col>
                    <Col style={{padding: "0px", maxWidth: "fit-content"}}>
                        <Button variant="secondary" onClick={routeChange}>Search</Button>
                    </Col>
                </Row>

                <Row>
                    <ButtonGroup>
                        <Button variant="info mr-1">Subleaser</Button>
                        <Button variant="info">Subleasee</Button>
                    </ButtonGroup>
                </Row>
            </span>
        </Form>
    )
  }