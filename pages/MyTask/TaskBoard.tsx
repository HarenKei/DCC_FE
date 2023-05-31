import React, { useState } from "react";
import styled from "styled-components";
import TaskList from "./TaskList";

const TaskBoard = ({ data, onDelete, onUpdate }: any) => {
  return (
    <TaskBoardMainContainer>
      <TaskList data={data.filter((items:object) => {
        return items.taskStatus === "wip";
      })} status={"wip"} onDelete={onDelete} onUpdate={onUpdate} />

      <TaskList
        data={data.filter((items: any) => {
          return items.taskStatus === "end";
        })}
        status={"end"}
        onDelete={onDelete}
      />
    </TaskBoardMainContainer>
  );
};

const TaskBoardMainContainer = styled.div`
  width: 90vw;

  margin-top: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default TaskBoard;
