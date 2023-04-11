import React from "react";
import MainTask from "./MainTask";
import MainClass from "./MainClass";
import styled from "styled-components";
import MainMeal from "./MainMeal";

const MainDashborad = () => {
  return (
    <MainDashboardContainer>
      <MainDashboardLeftContainer>
        <MainTask />
      </MainDashboardLeftContainer>
      <MainDashboardRightContianer>
        <MainClass
          classTitle={"웹 프로젝트 1 (캡스톤)"}
          classTime={"10:00 ~ 12:50"}
          classProf={"정호일"}
          classRoom={"J0407"}
        />
        <MainMeal/>
      </MainDashboardRightContianer>
    </MainDashboardContainer>
  );
};

const MainDashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90vw;
  height: 45vh;
  margin-bottom: 200px;
`;

const MainDashboardLeftContainer = styled.div``;

const MainDashboardRightContianer = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MainDashborad;
