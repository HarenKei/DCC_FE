import React from "react";
import styled from "styled-components";
import InputArea from "../AddTask/AddTaskTextArea"

const AddTaskModal = () => {
  return (
    <form action="">
    <AddTaskModalContainer>

      <WriteTaskContainer>
        <AddTaskTitle>할 일 추가</AddTaskTitle>
        
        할 일 이름:
        <InputArea/>

        그룹 이름:
        <InputArea/>
        
        내용:
        <InputArea/>

        마감일:
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
  height: 80vh;

  background-color: white;
  border-radius: 10px;

  box-shadow: 0 0 20px;
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

const Button = styled.div`

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

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;

//     width: 8vw;
//     height: 8vh;

//     background-color: red;
//     border-radius: 20px;

//     box-shadow: 0px 1px 1px black;
// `;



export default AddTaskModal;
