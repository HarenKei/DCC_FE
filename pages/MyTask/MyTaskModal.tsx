import React, { useState } from "react";
import styled from "styled-components";

const MyTaskModal = ({ setModalOpen, onAdd }: any) => {

  const [form, setForm] = useState({
    className: "",
    profName: "",
    classRoom: "",
    day: 0,
  });

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeInput = (e: any) => {
  };

  const onSubmit = (e: any) => {
  };


  return (
    <ModalContainer>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
      <h1>강의 추가하기</h1>
      <form onSubmit={onSubmit} id="classForm">
        <span>강의명</span>
        <br />
        <input
          type="text"
          name="className"
          onChange={changeInput}
        />
        <button type="submit">저장</button>
      </form>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 30vw;
  height: 40vh;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  opacity: unset;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px black;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  span {
    margin-bottom: -15px;
    font-weight: 800;
  }

  button[type="submit"] {
    width: 6vw;
    height: 3vh;
    margin-left: 19vw;
    border-radius: 1px;
    border: none;
    color: white;
    font-size: 1.2em;
    font-weight: 500;
    background: #00ae68;
    border-radius: 5px;
    transition: all 0.2s;
    box-shadow: 0 0 1px grey;
  }

  button[type="submit"]:hover {
    background: #21825b;
  }

  label {
    position: absolute;
    color: #aaa;
    left: 10px;
    font-size: 20px;
    bottom: 8px;
    transition: all 0.2s;
  }

  input, select {
    width: 25vw;
    height: 3vh;

    font-size: 15px;
    color: #222222;
    border: none;
    border-bottom: solid #aaaaaa 1px;
    padding-bottom: 10px;
    padding-left: 10px;
    position: relative;
    background: none;
    z-index: 5;
  }

  input, select:focus {
    outline: none;
  }

`;

const AddClassForm = styled.div``;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;

  width: 2vw;
  height: 3vh;
  border: none;
  border-radius: 5px;

  font-size: 1em;
  font-weight: 900;

  :hover {
    background: #df3c3c;
    color: #fff;
  }
`;

export default MyTaskModal;
