import React, {useState} from "react";
import styled from "styled-components";

interface TimeTableObject {
  class : string,
  prof : string,
  classroom : string,
  time : number
}

const TimeTableModal = (props : any) => {

  const closeModal = () => {
    props.setModalOpen(false);
  };

  const testChagneHandler = (e : any) => {
    props.setTest({
      "class" : e.target.class.value,
      "prof" : e.target.prof.value,
      "classroom" : e.target.classroom.value,
      "day" : e.target.day.value,
      "time" : e.target.endTime.value
    });
    closeModal();
  };

  return (
    <ModalContainer>
      <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
      <FormContainer>
        <ModalFormStyle onSubmit={testChagneHandler}>
          <p>강의 정보를 입력해주세요.</p>
          강의명<br/>
          <input type="text" name="class"/> <br/>
          교수명 : <input type="text" name="prof"/> <br/>
          강의실 : <input type="text" name="classroom"/> <br/>
          요일 : <input type="number" name="day"/> <br/>
          강의시간 : <input type="time" name="startTime"/> ~ <input type="time" name="endTime"/><br/>
          <button type="submit"> 저장 </button>
        </ModalFormStyle>
      </FormContainer>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 30vw;
  height: 50vh;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 1px black;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 2em;
`;

const ModalFormStyle = styled.form`
  width:80%;

  p{
    font-size: 1.5em;
    text-align: center;
  }

  
`;

const ModalCloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
`;

export default TimeTableModal;
