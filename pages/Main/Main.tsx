import React from "react";
import styled from "styled-components";
import MainDashborad from "./MainDashborad";
import MainTeamSpace from "./MainTeamSpace";
import MainNotice from "./MainNotice";
import MainMenu from "./MainMenu";
import ApiTest from "../Test/ApiTest";
import MainSchedules from "./MainSchedules";


const Main = () => {
  return (
    <MainContainer>
      <MainDashborad/>
      <MainTeamSpace/>
      <MainNotice/>
      <MainSchedules/>
      <MainMenu/>
      <ApiTest/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 200px;
`;

export default Main;
