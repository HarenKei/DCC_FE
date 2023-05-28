import React, { useState } from "react";
import styled from "styled-components";
import TaskBoard from "./TaskBoard";
import TaskBar from "./TaskBar";
import MyTaskModal from "./MyTaskModal";

const MyTask = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <MyTaskContainer>
      <TaskBar setModalOpen={setModalOpen}/>
      <TaskBoard/>

      {modalOpen && <MyTaskModal setModalOpen={setModalOpen}/>}
    </MyTaskContainer>
  );
};
const MyTaskContainer = styled.div`
  width: 90vw;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MyTask;
