import React, {useState} from "react";
import styled from "styled-components";
import Table from "./Table";
import TimeTableModal from "./TimeTableModal";

const TimeTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  
            
  return (
    <TimeTableContainer>
      <TimeTableTitleContainer>
        <h1>시간표</h1>
        <button onClick={showModal}>모달 띄우기</button>
        {modalOpen && <TimeTableModal setModalOpen={setModalOpen}/>}
      </TimeTableTitleContainer>
      <Table />
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

const TimeTableTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default TimeTable;
