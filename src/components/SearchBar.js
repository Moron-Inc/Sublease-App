import React, {useState} from 'react';
import { ToggleButton, InputGroup, Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";
import titleText from '../images/FindADeal.png';
import searchIcon from '../images/search.svg';

export const SearchBar = () => {

    // const history = useHistory();

    // const routeChange = () => {
    //     let path = '../pages/SearchResults';
    //     history.push(path);
    // }

    // const [checked, setChecked] = useState(false);

    const radios = [
        { name: 'Offers', value: 'offer' },
        { name: 'Interests', value: 'interest' },
      ];
    
    const [radioValue, setRadioValue] = useState('offer');

    return(
        <Form action="/pages/SearchResults" method="get">
            <span>
                <Row style={{justifyContent: "center"}}>
                    <img className="searchbckgndtext" src={titleText} alt="Title Text"/>
                </Row>
                <Row>
                    <Col style={{padding: "0px"}}>
                        <InputGroup>
                            <FormControl required type="text" placeholder="Search" className="" name="s"/>
                            <InputGroup.Append>
                                <Button className="integratedButton" type="submit">
                                    <img alt="Search icon" src={searchIcon}/>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>

                <Row>
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                type="radio"
                                variant="outline-info"
                                className="radiobtn"
                                name="type"
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