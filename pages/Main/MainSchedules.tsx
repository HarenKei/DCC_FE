import React from "react";
import styled from "styled-components";
import MainScheduleCard from "@/src/Common/MainScheduleCard";

const dummyDataArray = [
  {
    id: "s1",
    title: "test 제목",
    date: "2023. 04. 04 ~ 2023. 04. 05",
  },
  {
    id: "s2",
    title: "집에 가는 방법",
    date: "2023. 05. 01 ~ 2023. 05. 05",
  },
  {
    id: "s3",
    title: "집에 가고 싶다",
    date: "2023. 04. 19 ~ 2023. 05. 04",
  },
  {
    id: "s4",
    title: "비가 오네요",
    date: "2023.04.04 ~ 2999. 05. 05",
  },
];

const MainSchedules = () => {
  return (
    <MainSchedulesContainer>

      <MainSchedulesTitleContainer>
        <MainSchedulesTitleH1>학사일정</MainSchedulesTitleH1>
        <MainSchedulesTitleP>
          다가오는 학사일정, DCC가 알려드려요 📅
        </MainSchedulesTitleP>
      </MainSchedulesTitleContainer>

      <MainSchedulesContentsConatianer>
        {dummyDataArray.map((items) => (
          <MainScheduleCard
            key={items.id}
            title={items.title}
            date={items.date}
          />
        ))}
      </MainSchedulesContentsConatianer>

    </MainSchedulesContainer>
  );
};

const MainSchedulesContainer = styled.div`
  width: 42vw;
  height: 50vh;
  background-color: skyblue;

  display: flex;
  flex-direction: column;
`;

const MainSchedulesTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MainSchedulesTitleH1 = styled.div`
  font-size: 30pt;
  font-weight: 900;
  letter-spacing: -3px;
`;

const MainSchedulesTitleP = styled.div`
  font-size: 12pt;
  font-weight: 100;
  letter-spacing: -1px;
`;

const MainSchedulesContentsConatianer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 1px 1px black;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default MainSchedules;
