import MainMealCard from "@/src/Common/MainMealCard";
import React, { useEffect, useState } from "react";
import * as API from "../../src/Common/API";
import styled from "styled-components";

type MealData = {
  corner: string,
  menu: string
};

const initMeal : MealData = [
  {
    corner: "Corner 1",
    menu: ""
  },
  {
    corner: "Corner 3",
    menu: ""
  },
  {
    corner: "대림쿡",
    menu: ""
  }
];

const MainMeal = () => {
  const [mealMenu, setMealMenu] = useState("");

  useEffect(()=>{
    API.getMealData().then((apiResult : any) => {
      setMealMenu(apiResult);
    });
  }),[];

  return (
    <MainMealContainer>
      <MainMealCardContainer>
        <MainMealTitle>오늘의 학식 🍽️</MainMealTitle>
        <MainMealCard
          corner={"corner1"}
          meal={"쇠고기 쌀국수 |  사모사 튀김"}
        />
        <MainMealCard
          corner={"corner3"}
          meal={"파닭마요덮밥*데리S | 사과주스"}
        />
        <MainMealCard
          corner={"대림쿡"}
          meal={"운영하지 않습니다."} 
        />
      </MainMealCardContainer>
    </MainMealContainer>
  );
};

const MainMealContainer = styled.div`
  width: 43vw;
  height: 30vh;
  border-radius: 15px;
  background-color: #d0d1d1;
  box-shadow: 0px 1px 1px black;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainMealTitle = styled.h1`
  font-size: 20pt;
  font-weight: 900;
`;

const MainMealCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
`;

export default MainMeal;
