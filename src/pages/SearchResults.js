import React from 'react';
import styled from 'styled-components';
import { Card, ToggleButton, InputGroup, Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';

const Wrapper = styled.div`
  width: 100%;
  height: 900.5px;                                                                                                                        //exact pixels aren't ideal
`;

export const SearchResults = (props) => {

  const offerPosts = [
    { id: '1', name: 'Apartment 1' },
    { id: '2', name: 'Apartment 2' },
    { id: '3', name: 'Apartment 3' },
    { id: '4', name: 'Apartment 4' },
    { id: '5', name: 'Apartment 5' },
    { id: '6', name: 'Apartment 6' },
    { id: '7', name: 'Apartment 7' },
    { id: '8', name: 'Apartment 8' },
    { id: '9', name: 'Apartment 9' },
    { id: '10', name: 'Apartment 10' },
    { id: '11', name: 'Apartment 11' },
    { id: '12', name: 'Apartment 12' },
  ];

  const interestPosts = [
    { id: '1', name: 'Looking for 1' },
    { id: '2', name: 'Looking for 2' },
    { id: '3', name: 'Looking for 3' },
    { id: '4', name: 'Looking for 4' },
    { id: '5', name: 'Looking for 5' },
    { id: '6', name: 'Looking for 6' },
    { id: '7', name: 'Looking for 7' },
    { id: '8', name: 'Looking for 8' },
    { id: '9', name: 'Looking for 9' },
    { id: '10', name: 'Looking for 10' },
    { id: '11', name: 'Looking for 11' },
    { id: '12', name: 'Looking for 12' },
  ];

  const filterPosts = (query, radioInput) => {
    if (radioInput == 1){
      if (!query) {
        return offerPosts;
      }
      return offerPosts.filter((offerPost) => {
        const offerPostName = offerPost.name.toLowerCase();
        return offerPostName.includes(query);
      });
    }
    else if (radioInput == 2){
      if (!query) {
        return interestPosts;
      }
      return interestPosts.filter((interestPost) => {
        const interestPostName = interestPost.name.toLowerCase();
        return interestPostName.includes(query);
      });
    }
    
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const radioInput = new URLSearchParams(search).get('radio');
  const filteredPosts = filterPosts(query, radioInput);

  return(
    <Wrapper>
      <h2 style={{textAlign: "center", padding: "30px", margin: "0px"}}>Search {(radioInput==1)?"Offer":"Interest"} Results</h2>

      <Row style={{minHeight: "802.5px", marginLeft: "0px", marginRight: "0px", borderTop: "2px solid lightgrey"}}>                         {/*minHeight exact pixels aren't ideal*/}
        <Col style={{maxWidth: "25%", borderRight: "2px solid lightgrey"}}>

        </Col>

        <Col style={{padding: "0px"}}>
          <Row style={{marginLeft: "17px", marginRight: "17px", marginTop: "17px", marginBottom: "17px"}}>
            {filteredPosts.map((post) => (
              <Card style={{width: "300px", height: "300px", margin: "17px", padding: "17px"}} key={post.id}>{post.name}</Card>
            ))}
          </Row>
        </Col>
      </Row>
    </Wrapper>
  )
}