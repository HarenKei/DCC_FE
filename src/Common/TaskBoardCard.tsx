import React from "react";
import styled from "styled-components";

const TaskBoardCard = () => {
  return (
    <TaskBoardCardContainer>
    </TaskBoardCardContainer>
  );
};

const TaskBoardCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 25vw;
  height: 80vh;

  opacity: unset;
  background-color: #dedede;
  border-radius: 30px;
  box-shadow: 0 0 5px black;
`;

export default TaskBoardCard;
