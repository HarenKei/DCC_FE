import MainMealCard from "@/src/Common/MainMealCard";
import React, { useEffect, useState } from "react";
import * as API from "../../src/Common/API";
import styled from "styled-components";

const tmpData = [
  ["데이터 없음", "데이터 없음", "데이터 없음", "데이터 없음"],
  ["데이터 없음", "데이터 없음", "데이터 없음", "데이터 없음"],
  ["데이터 없음", "데이터 없음", "데이터 없음", "데이터 없음"],
  ["데이터 없음", "데이터 없음", "데이터 없음", "데이터 없음"],
  ["데이터 없음", "데이터 없음", "데이터 없음", "데이터 없음"],
];

const MainMeal = () => {
  const [meal, setMeal] = useState(tmpData);
  const today = new Date().getDay();

  useEffect(() => {
    if (today >= 1 && today <= 5) {
      API.getMealData().then((apiResult: any) => {
        setMeal(apiResult.split(">>").map((items: any) => items.split("\n")));
      });
    }
  }, []);

  return (
    <MainMealContainer>
      <MainMealCardContainer>
        <MainMealTitle>오늘의 학식 🍽️ </MainMealTitle>
        <TodayDate>{meal[0][0]}</TodayDate>
        <MainMealCard
          corner={meal[1][0].replace("<<", "")}
          meal={`${meal[1][1]} | ${meal[1][2]} | ${meal[1][3]}`}
        />
        <MainMealCard
          corner={meal[2][0].replace("<<", "")}
          meal={`${meal[2][1]} | ${meal[2][2]} | ${meal[2][3]}`}
        />

        <MainMealCard
          corner={meal[3][0].replace("<<", "")}
          meal={`${meal[3][1]} | ${meal[3][2]} | ${meal[3][3]}`}
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
  box-shadow: 0px 0px 3px black;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainMealTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 900;
`;

const TodayDate = styled.p`
  font-size: 1em;
  font-weight: 100;
`;

const MainMealCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 2vh;
`;

export default MainMeal;
