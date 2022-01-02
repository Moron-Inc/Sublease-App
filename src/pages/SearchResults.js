import React from 'react';
import styled from 'styled-components';
import { Card, ToggleButton, InputGroup, Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { filterPostsByQuery } from '../components/FilterPosts';

const Wrapper = styled.div`
  width: 100%;
  // height: 100%;
`;

export const SearchResults = (props) => {

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s').toLowerCase().split(" ").join("");
  const radioInput = new URLSearchParams(search).get('type');
  const filteredPosts = filterPostsByQuery(query, radioInput);

  return(
    <Wrapper>
      <h2 style={{textAlign: "center", padding: "30px", margin: "0px"}}>Search {(radioInput==='1')?"Offer":"Interest"} Results</h2>
      <Row style={{height: "inherit", marginLeft: "0px", marginRight: "0px", borderTop: "2px solid lightgrey"}}>
        <Col style={{borderRight: "2px solid lightgrey"}}>
          <h3 style={{textAlign: "center"}}>Map</h3>
        </Col>

        <Col style={{maxWidth: "39%", padding: "0px"}}>
          <Row style={{marginLeft: "17px", marginRight: "17px", marginTop: "17px", marginBottom: "85px"}}>
            {filteredPosts.map((post) => (
              <button className="unstyled-button" style={{margin: '17px'}}>
                <Form action="/pages/ResultView" method="get">
                  <Card style={{width: "300px", height: "300px", padding: "17px", position: "static"}} key={post.id}>
                    <h5>{post.name}</h5>
                    <p>{post.bedBath}</p> 
                    <input
                      hidden="true"
                      name="type" 
                      value={radioInput}
                    />
                    <Button variant="outline-info" 
                      type="submit"
                      style={{width: "fit-content"}} 
                      name="post" 
                      value={post.id}
                    >
                      Details
                    </Button>
                  </Card>
                </Form> 
              </button>
            ))}
          </Row>
        </Col>
      </Row>
    </Wrapper>
  )
}