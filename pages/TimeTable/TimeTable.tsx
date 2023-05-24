import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import DayView from "./DayView";
import TimeTableModal from "./TimeTableModal";

const dummyDataArray = [
  {
    id: 1,
    className: "테스트 강의1",
    profName: "정호일",
    classRoom: "j0407",
    day: 1,
  },
  {
    id: 2,
    className: "테스트 강의2",
    profName: "정호일",
    classRoom: "j0407",
    day: 2,
  },
  {
    id: 3,
    className: "테스트 강의3",
    profName: "정호일",
    classRoom: "j0407",
    day: 3,
  },
  {
    id: 4,
    className: "테스트 강의4",
    profName: "정호일",
    classRoom: "j0407",
    day: 4,
  },
];

const TimeTable = () => {
  const no = useRef(dummyDataArray.length + 1); // 고유 id가 될 no는 데이터.length +1
  const [classData, setClassData] = useState(dummyDataArray); // 데이터 상태
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const onAdd = (form: any) => {
    form.id = no.current++;
    let tmp = classData.slice();
    tmp.push(form);
    setClassData(tmp);
    console.log("으아아악" + tmp);
  };  

  return (
    <TimeTableContainer>
      <TimeTableTitle>⏰ 내 시간표</TimeTableTitle>

      <ModalOpenButton onClick={openModal}>강의 추가하기</ModalOpenButton>

      {modalOpen && (
        <TimeTableModal setModalOpen={setModalOpen} onAdd={onAdd} />
      )}

      <DayView classData={classData} />

      <TableContainer></TableContainer>
    </TimeTableContainer>
  );
};

const TimeTableContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeTableTitle = styled.h1``;

const ModalOpenButton = styled.button`
  width: 5vw;
  height: 3vh;
  background-color: yellow;
  border-radius: 10px;
`;

const TableContainer = styled.div`
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default TimeTable;
