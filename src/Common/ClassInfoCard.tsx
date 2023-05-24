import React, { useEffect } from "react";
import styled from "styled-components";

const ClassInfoCard = ({props} : any) => {
  const { className, profName, classRoom } = props;

  return (
    <ClassInfoCardContainer>
      <ClassTitle>{className}</ClassTitle>

      <ClassInfo>
        <p>{profName}</p> | <p>{classRoom}</p> | 
      </ClassInfo>
    </ClassInfoCardContainer>
  );
};

const ClassInfoCardContainer = styled.div`
  width: 30vw;
  height: 10vh;
  background-color: #d0d0d0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin : 0px 0px 20px 20px;
  box-shadow: 0px 1px 1px black;
`;

const ClassTitle = styled.h1`
  font-size: 2em;
`;

const ClassInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export default ClassInfoCard;
