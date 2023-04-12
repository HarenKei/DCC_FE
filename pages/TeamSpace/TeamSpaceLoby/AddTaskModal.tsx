import React from "react";
import styled from "styled-components";
import styles from './AddTaskModal.module.css';
import InputArea from "../../MyTask/AddTask/AddTaskTextArea";
// import PropsType from "./PropsType";

function AddTaskModal({ setModalOpen, id, title, content, writer }: any) {

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <form action="">
    <AddTaskModalContainer>
    <button className={styles.close} onClick={closeModal}>
      X
    </button>

      <WriteTaskContainer>
        <AddTaskTitle>팀 스페이스 추가</AddTaskTitle>
        
        팀 이름:
        <InputArea/>

        팀 슬로건:
        <InputArea/>
      </WriteTaskContainer>

      <ButtonContainer>
        <Button><P>뒤로 가기</P></Button>
        <Button><P>추가 완료</P></Button>
      </ButtonContainer>
      

    </AddTaskModalContainer>
    </form>
  );
};

const AddTaskModalContainer = styled.div`
  width: 45vw;
  height: 47vh;

  background-color: white;
  border-radius: 10px;

  box-shadow: 0 0 20px;
  
  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const WriteTaskContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const AddTaskTitle = styled.h1`
  font-size: 25pt;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 8vw;
    height: 8vh;

    background-color: grey;
    border-radius: 20px;
    margin: 20px;

    box-shadow: 0px 1px 1px black;
`;
const  P= styled.p`
    font-size: 20px;
`;

export default AddTaskModal;
