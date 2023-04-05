import React from "react";
import styled from "styled-components";

interface Props {
  classTitle: string;
  classTime: string;
  classProf: string;
  classRoom: string;
}

const MainClass = (props: Props) => {
    return(
        <MainClassContainer>
          <MainClassTitle>현재 강의 📖</MainClassTitle>

          <MainClassContents>
            <MainClassContentTitleP>{props.classTitle}</MainClassContentTitleP>
            <MainClassContentsP>{props.classTime} {props.classProf}</MainClassContentsP>
            <MainClassContentsP>{props.classRoom}</MainClassContentsP>
          </MainClassContents>
            
        </MainClassContainer>
        
    );
};

const MainClassContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  width: 43vw;
  height: 8vh;
  background-color: #D0D1D1;
  border-radius: 15px;
  box-shadow: 0px 1px 1px black;

`;

const MainClassTitle = styled.div`
  font-size: 20pt;
  font-weight: 900;
  letter-spacing: -2px;
  margin-left: 20px;
`;

const MainClassContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
`;

const MainClassContentTitleP = styled.p`
  font-size: 15pt;
  font-weight: 900;
`;

const MainClassContentsP = styled.p`
  font-weight: 100;
`;


export default MainClass;