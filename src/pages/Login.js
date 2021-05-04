import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export const Login = (props) => (
  <Wrapper>
    <h2>Login</h2>
    <p>implement some AWS authentication stuff here</p>
    <p>once the person logs in i gotta find a way to route to the dashboard</p>
  </Wrapper>
)