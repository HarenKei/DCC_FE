import React from "react";
import styled from "styled-components";
import TaskBar from "./TaskBar";
import TaskBoard from "./TaskBoard";

const TaskMain = () => {
  return (
    <MainContainer>
      <TaskBar/>
      <TaskBoard/>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
`;

export default TaskMain;
