import React, {useState} from 'react';
import { ToggleButton, Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export const SearchBar = () => {

    const history = useHistory();

    const routeChange = () => {
        let path = '../pages/SearchResults';
        history.push(path);
    }

    const radios = [
        { name: 'Subleaser', value: '1' },
        { name: 'Subleasee', value: '2' },
      ];
    
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    return(
        <Form onSubmit={routeChange}>
            <span>
                <Row>
                    <Col><h1 style={{textAlign: "center" , color: "#6A5ACD"}}>FIND A DEAL</h1></Col>
                </Row>
                <br/>
                <Row>
                    <Col style={{padding: "0px",}}>
                        <FormControl type="text" placeholder="Search" className="" />
                    </Col>
                    <Col style={{padding: "0px", maxWidth: "fit-content"}}>
                        <Button variant="secondary" onClick={routeChange}>Search</Button>
                    </Col>
                </Row>

                <Row>
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-info"
                                className=""
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}
                            >
                                {radio.name}
                            </ToggleButton>
                            ))}
                    </ButtonGroup>
                </Row>
            </span>
        </Form>
    )
  }