import React from "react";
import styled from "styled-components";

interface Props {
  corner: string;
  meal: string;
}

const MainMealCard = (props : Props) => {
    return(
        <MainMealCardContainer>
          <MainMealCardBanner>{props.corner}</MainMealCardBanner>
          <MainMealCardContentsP>{props.meal}</MainMealCardContentsP>
        </MainMealCardContainer>
    )  
};

const MainMealCardContainer = styled.div`
  width: 40vw;
  height: 6vh;
  border-radius: 15px;
  background-color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 10px;

  box-shadow: 0px 1px 1px black;
`;

const MainMealCardBanner = styled.div`
  width: 7vw;
  height: 3vh;
  border-radius: 8px;
  background-color: #46B6EB;
  color:#0e0e0e;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12pt;
  font-weight: 900;

  margin-left: 20px;
`;

const MainMealCardContentsP = styled.div`
  font-size: 15pt;
  font-weight: 100;
  
  margin-left: 20px;
`;



export default MainMealCard;