import React from 'react';
import styled from 'styled-components';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 
export const Signup_Login = () => (
  <GridWrapper>
    <h2>Sign Up/Log In</h2>
    <p>Make an account you poop</p>
  </GridWrapper>
)