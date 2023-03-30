import React from "react";
import styled from "styled-components";
import MainDashborad from "./MainDashborad";

const Main = () => {
  return (
    <MainContainer>
      <MainDashborad/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Main;
