import React, { useState } from "react";
import styled from "styled-components";
import TaskBoardCard from "@/src/Common/TaskBoardCard";
import TimeTableModal from "../TimeTable/TimeTableModal";

const TaskBoard = ({modalOpen} : any) => {
  return(
    <TaskBoardMainContainer>
      <TaskBoardCard/>
      <TaskBoardCard/>
    </TaskBoardMainContainer>
  );
};

const TaskBoardMainContainer = styled.div`
  width: 80%;

  margin-top: 5em;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;  
`;



export default TaskBoard;