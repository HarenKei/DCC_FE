import React from "react";
import styled from "styled-components";


const MainTimeTableCard = ({props} : any) => {
  const {className, classRoom} = props;
  return(
    <MainTaimeTableCardContainer>
      <MainTimeTableContents>
        <ClassNameP>{className}</ClassNameP>
        <ClassRoomP>{classRoom}</ClassRoomP>
      </MainTimeTableContents>
    </MainTaimeTableCardContainer>
  );
};

const MainTaimeTableCardContainer = styled.div`
  width: 8vw;
  height: 5vh;
  margin-left: 1vw;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 2px black;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainTimeTableContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClassNameP = styled.p`
  font-size: 1em;
  font-weight: 800;
`;

const ClassRoomP = styled.p`
  font-size: 0.8em;
  font-weight: 300;
`

export default MainTimeTableCard;
