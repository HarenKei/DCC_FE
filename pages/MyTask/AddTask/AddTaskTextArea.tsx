import React from "react";
import styled from "styled-components";

const AddTaskTextArea = (props:any) => {
    return(
        <Container>
          <input
            type="text"
            placeholder="입력해주세요."
          />
        </Container>
    );
};

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 20vw;
  height: 5vh;
  background-color: #d9d9d9;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;

  & > input {
    border: none;
    width : 18vw;
    height: 4vh;
    background-color: #d9d9d9;
  }
`;



export default AddTaskTextArea;