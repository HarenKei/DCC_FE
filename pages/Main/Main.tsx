import React from "react";
import styled from "styled-components";
import MainDashborad from "./MainDashborad";
import MainTeamSpace from "./MainTeamSpace";
import MainNotice from "./MainNotice";
import MainMenu from "./MainMenu";

const Main = () => {
  return (
    <MainContainer>
      <MainDashborad/>
      <MainTeamSpace/>
      <MainNotice/>
      <MainMenu/>
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
