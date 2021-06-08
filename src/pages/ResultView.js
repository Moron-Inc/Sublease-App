import React from 'react';
import styled from 'styled-components';
import { Card, ToggleButton, InputGroup, Form, FormControl, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { filterPostsByID } from '../components/FilterPosts';

const Wrapper = styled.div`
  width: 100%;
  height: 900.5px;                                                                                                                        //exact pixels aren't ideal
`;

export const ResultView = (props) => {
    const { search } = window.location;
    const postID = new URLSearchParams(search).get('post');
    const radioInput = new URLSearchParams(search).get('radio');
    const filteredPosts = filterPostsByID(postID, radioInput);

    return(
        <Wrapper>
            <h1 style={{textAlign: "center"}}>Post</h1>
            {filteredPosts.map((post) => (
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Card style={{width: "300px", height: "300px", padding: "17px", margin: "0px", textAlign: "center"}} key={post.id}>
                        <h5>{post.name}</h5>
                        <p>{post.bedBath}</p> 
                    </Card>
                </div>
            ))}
        </Wrapper>
    )
}