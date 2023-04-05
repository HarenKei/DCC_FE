import React from "react";
import styled from 'styled-components';

interface Props {
  title: string
}


const SearchBar = (props : Props) => {
  return (
    <SearchBarWrapper>
      <PlaceholderText>{props.title}</PlaceholderText>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  width: 20vw;
  height: 5vh;
  background-color: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-radius: 10px;
`;

const PlaceholderText = styled.p`
  color: gray;
`;

export default SearchBar;
