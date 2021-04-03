import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export const About = (props) => (
  <Wrapper>
    <h2>About</h2>
    <p>This is us</p>
  </Wrapper>
)