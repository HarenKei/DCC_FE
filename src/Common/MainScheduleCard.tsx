import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  date: string;
}

const MainScheduleCard = (props : Props) => {
  return(
    <MainScheduleCardContainer>
      <MainScheduleCardTitleH1>
        {props.title}
      </MainScheduleCardTitleH1>

      <MainScheduleCardDateBanner>
        {props.date}
      </MainScheduleCardDateBanner>
    
    </MainScheduleCardContainer>
  )
};

const MainScheduleCardContainer = styled.div`
  width: 40vw;
  height: 6vh;
  border-radius: 10px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 1px black;
  background-color: grey;
`;

const MainScheduleCardTitleH1 = styled.h1`
  font-size: 18pt;
  margin-left: 20px;
  letter-spacing: -2px;
`;

const MainScheduleCardDateBanner = styled.div`
  width: 14vw;
  background-color: white;
  border-radius: 7px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  
`;

export default MainScheduleCard;