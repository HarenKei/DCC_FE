import React from "react";
import styled from "styled-components";
import MainDashborad from "./MainDashborad";
import MainTeamSpace from "./MainTeamSpace";

const Main = () => {
  return (
    <MainContainer>
      <MainDashborad/>
      <MainTeamSpace/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

export default Main;
