import React, { useState } from "react";
import styled from "styled-components";
import TaskList from "./TaskList";

const TaskBoard = ({ data, onDelete }: any) => {
  return (
    <TaskBoardMainContainer>
      <TaskList data={data} status={"all"} onDelete={onDelete} />
      <TaskList
        data={data.filter((items: any) => {
          return items.importance === "true";
        })}
        status={"importance"}
        onDelete={onDelete}
      />
    </TaskBoardMainContainer>
  );
};

const TaskBoardMainContainer = styled.div`
  width: 90%;

  margin-top: 5em;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default TaskBoard;
