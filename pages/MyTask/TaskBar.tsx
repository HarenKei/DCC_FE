import React, { useState } from "react";
import styled from "styled-components";

const TaskBar = ({ setModalOpen }: any) => {
  const onClickHandler = () => {
    setModalOpen(true);
  };

  return (
    <TaskHeaderContainer>
      <div></div>
      <button onClick={onClickHandler}>+</button>
    </TaskHeaderContainer>
  );
};

const TaskHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;

  button {
    width: 4vw;
    height: 7vh;
    flex:1;
    margin-left: 75vw;

    background-color: #00ae68;;
    border-radius: 20px;
    border: none;
    box-shadow: 0px 0px 5px black;

    color: #fff;
    font-size: 2em;
    font-weight: 500;
  }
  button:hover {
    color: #fff;
    background: #21825b;
  }
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
