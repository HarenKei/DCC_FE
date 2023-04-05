import React from "react";
import styled from "styled-components";
import LeftTaskBoard from "./LeftTaskBoard";
import RightTaskBoard from "./RightTaskBoard";

const TaskBoard = () => {
    return(
        <TaskBoardMainContainer>
          <LeftTaskBoard/>
          <RightTaskBoard/>
        </TaskBoardMainContainer>
        
    );
};

const TaskBoardMainContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 50px;
  margin-bottom: 50px;

  justify-content: space-around;
`;

export default TaskBoard;