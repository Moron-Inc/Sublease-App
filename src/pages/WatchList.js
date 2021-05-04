import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export const WatchList = (props) => (
  <Wrapper>
    <h2>Watch List</h2>
    <p>Every breath you take, Every move you make, Every bond you break, Every step you take, I'll be watching you </p>
    <p>Every single day, Every word you say, Every game you play, Every night you stay, I'll be watching you</p>
  </Wrapper>
)