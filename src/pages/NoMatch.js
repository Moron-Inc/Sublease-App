import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export const NoMatch = () => (
  <Wrapper>
    <h2>No Match Ya Fool!!! Looks Like You Made An Error You Amateur Programmer!!!</h2>
  </Wrapper>
)