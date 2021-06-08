import React from 'react';
import styled from 'styled-components';
import { Card, ToggleButton, InputGroup, Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { filterPostsByQuery } from '../components/FilterPosts';

const Wrapper = styled.div`
  width: 100%;
  height: 900.5px;                                                                                                                        //exact pixels aren't ideal
`;

export const SearchResults = (props) => {

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s').toLowerCase().split(" ").join("");
  const radioInput = new URLSearchParams(search).get('radio');
  const filteredPosts = filterPostsByQuery(query, radioInput);

  return(
    <Wrapper>
      <h2 style={{textAlign: "center", padding: "30px", margin: "0px"}}>Search {(radioInput==='1')?"Offer":"Interest"} Results</h2>
      <Row style={{minHeight: "802.5px", marginLeft: "0px", marginRight: "0px", borderTop: "2px solid lightgrey"}}>                         {/*minHeight exact pixels aren't ideal*/}
        <Col style={{maxWidth: "25%", borderRight: "2px solid lightgrey"}}>
        </Col>

        <Col style={{padding: "0px"}}>
          <Row style={{marginLeft: "17px", marginRight: "17px", marginTop: "17px", marginBottom: "17px"}}>
            {filteredPosts.map((post) => (
              <Form action="/pages/ResultView" method="get">
                <input
                  hidden="true"
                  name="radio" 
                  value={radioInput}
                />
                  <button
                    className="unstyled-button" 
                    style={{margin: '17px'}} 
                    name="post" 
                    value={post.id}
                  >
                    <Card style={{width: "300px", height: "300px", padding: "17px",}} key={post.id}>
                      <h5>{post.name}</h5>
                      <p>{post.bedBath}</p> 
                    </Card>
                  </button>
              </Form>
            ))}
          </Row>
        </Col>
      </Row>
    </Wrapper>
  )
}