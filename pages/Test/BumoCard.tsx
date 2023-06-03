import React, { useState } from 'react';
import styled from 'styled-components';

const BumoCard = ({data} : any) => {
  const {name, age} = data;
  return(
    <CardContainer>
      <p>이름 : {name}</p>
      <p>나이 : {age}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 8vw;
  height: 4vh;
  background-color: #e2e2e2;
  margin-bottom: 1em;


`;

export default BumoCard;