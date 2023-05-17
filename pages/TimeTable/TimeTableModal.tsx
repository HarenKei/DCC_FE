import React, {useState} from "react";
import styled from "styled-components";

const TimeTableModal = ({ setModalOpen }: any) => {

  const closeModal = () => {
    setModalOpen(false);
  };

  const testChagneHandler = (e : any) => {
    console.log(e.target.class);
  };

  return (
    <ModalContainer>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
      <div>
        <form onSubmit={testChagneHandler}>
          강의명 : <input type="text" name="class" />
          <br />
          교수명 : <input type="text" />
          <br />
          강의실 : <input type="text" />
          <br />
          수업시간 : <input type="time" /> ~ <input type="time" /> <br />
          <button type="submit"> 저장 </button>
        </form>
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 300px;
  height: 200px;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: gray;
  border: 1px solid black;
  border-radius: 8px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export default TimeTableModal;
