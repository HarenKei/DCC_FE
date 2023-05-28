import React, { useState } from "react";
import styled from "styled-components";

const TaskBar = ({setModalOpen}: any) => {

  const onClickHandler = () => {
    setModalOpen(true);
  }

  return (
    <TaskHeaderContainer>
      <TaskHeaderMenuContainer>
        <p>내 Task</p>
        <p>중요한 일</p>
        <p>완료된 Task</p>
      </TaskHeaderMenuContainer>

      <button onClick={onClickHandler}>새 Task 추가</button>
    </TaskHeaderContainer>
  );
};

const TaskHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TaskHeaderMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  width: 40vw;
  height: 7vh;
  background-color: #dedede;
  border-radius: 20px;
  box-shadow: 0px 0px 5px black;
`;

export default TaskBar;
