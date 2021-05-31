import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const SearchResults = (props) => {

  const offerPosts = [
    { id: '1', name: 'Apartment 1' },
    { id: '2', name: 'Apartment 2' },
    { id: '3', name: 'Apartment 3' },
    { id: '4', name: 'Apartment 4' },
  ];

  const interestPosts = [
    { id: '1', name: 'Looking for 1' },
    { id: '2', name: 'Looking for 2' },
    { id: '3', name: 'Looking for 3' },
    { id: '4', name: 'Looking for 4' },
  ];

  const filterPosts = (query, radioInput) => {
    if (radioInput == 1){
      if (!query) {
        return offerPosts;
      }
      return offerPosts.filter((offerPost) => {
        const offerPostName = offerPost.name.toLowerCase();
        return offerPostName.includes(query);
      });
    }
    else if (radioInput == 2){
      if (!query) {
        return interestPosts;
      }
      return interestPosts.filter((interestPost) => {
        const interestPostName = interestPost.name.toLowerCase();
        return interestPostName.includes(query);
      });
    }
    
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const radioInput = new URLSearchParams(search).get('radio');
  const filteredPosts = filterPosts(query, radioInput);

  return(
    <Wrapper>
      <h2>Search {(radioInput==1)?"Offer":"Interest"} Results</h2>
      <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
      </ul>
    </Wrapper>
  )
}