import React, {useState, useEffect} from "react";
import styled from "styled-components";
import TimeTableModal from "./TimeTableModal";
import ClassInfoCard from "@/src/Common/ClassInfoCard";
import DayView from "./DayView";

interface TimeTableObject {
  class : string,
  prof : string,
  classroom : string,
  day: number,
  time : string
}

const TimeTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [test, setTest] = useState<TimeTableObject>({
    "class" : "데이터 없음",
    "prof" : "데이터 없음",
    "classroom" : "데이터 없음",
    "day" : 1,
    "time" : "데이터 없음" 
  });

  const showModal = () => {
    setModalOpen(true);
  };

  useEffect(()=> {
    console.log(test);
  },[test])

  
            
  return (
    <TimeTableContainer>
      <TimeTableTitleContainer>
        <h1>시간표</h1>
        <button onClick={showModal}>모달 띄우기</button>

        <TestContainer>
          <DayView/>
        </TestContainer>

        
        {modalOpen && <TimeTableModal setModalOpen={setModalOpen} setTest={setTest}/>}
      </TimeTableTitleContainer>

    </TimeTableContainer>
  );
};

const TimeTableContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const TimeTableTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

export default TimeTable;
