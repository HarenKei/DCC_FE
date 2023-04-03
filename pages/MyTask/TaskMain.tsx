import React from "react";
import styled from "styled-components";
import TaskBar from "./TaskBar";
import TaskBoard from "./TaskBoard";
import Header from "@/src/Common/Header";

const TaskMain = () => {
  return (
    <HeaderContainer>
      <Header/>
      <MainContainer>
        <TaskBar/>
        <TaskBoard/>
      </MainContainer>
    </HeaderContainer>
  );
};
const HeaderContainer = styled.div`
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export default TaskMain;
