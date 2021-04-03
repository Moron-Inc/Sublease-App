import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export const HomeDash = () => (
  <Wrapper>
    <h2>Home Dash</h2>
    <p>notes: search bar will be able to search for: street name, apartment complex name</p>
    <p>                                   filter by: unit occupancy</p>
  </Wrapper>
)