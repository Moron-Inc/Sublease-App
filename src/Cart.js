import React from 'react';
import styled from 'styled-components';
import Logo from './images/MarioKartBanner.jpg';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export const Cart = () => (
  <Wrapper>
    <h2>Cart</h2>
    <img src={Logo}/>
  </Wrapper>
)