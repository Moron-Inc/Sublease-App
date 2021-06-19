import React, {useState} from 'react';
import { ToggleButton, InputGroup, Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import titleText from '../images/FindADeal.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const SearchBar = () => {

    const radios = [
        { name: 'Offers', value: 'offer' },
        { name: 'Interests', value: 'interest' },
      ];
    
    const [radioValue, setRadioValue] = useState('offer');

    return(
        <div className="custom-container"style={{paddingTop: "15vh", paddingBottom: "15vh"}}>
            <Form action="/pages/SearchResults" method="get">
                <span>
                    <Row style={{marginRight: "0px", marginLeft: "0px"}}>
                        <Col style={{padding: "0px", maxWidth: "60%", left: "20%"}}>
                            <img className="searchbckgndtext" src={titleText} alt="Title Text"/>
                        </Col>
                    </Row>
                    <Row style={{marginRight: "0px", marginLeft: "0px"}}>
                        <Col style={{padding: "0px", maxWidth: "50%", left: "25%"}}>
                            <InputGroup>
                                <FormControl required type="text" placeholder="Search" className="" name="s"/>
                                <InputGroup.Append>
                                    <Button className="integratedButton" type="submit">
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>

                    <Row style={{marginRight: "0px", marginLeft: "0px"}}>
                        <Col style={{padding: "0px", maxWidth: "50%", left: "25%"}}>
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
                        </Col>
                    </Row>
                </span>
            </Form>
        </div>
    )
  }