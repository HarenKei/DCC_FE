import React from "react";
import styled from "styled-components";
import TaskBar from "./TaskBar/TaskBar";
import TaskBoard from "./TaskBoard/TaskBoard";
import Header from "@/src/Common/Header";

const MyTask = () => {
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
  margin-top: 35px;
`;

export default MyTask;
