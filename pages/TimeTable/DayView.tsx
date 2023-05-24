import ClassInfoCard from "@/src/Common/ClassInfoCard";
import React from "react";
import styled from "styled-components";

const dummyDataArray = [
  {
    id: "d1",
    className: "테스트 강의1",
    profName: "정호일",
    classRoom: "j0407",
    day: 1,
    date: "10:00 ~ 12:50",
  },
  {
    id: "d2",
    className: "테스트 강의2",
    profName: "정호일",
    classRoom: "j0407",
    day: 1,
    date: "10:00 ~ 12:50",
  },
  {
    id: "d3",
    className: "테스트 강의3",
    profName: "정호일",
    classRoom: "j0407",
    day: 5,
    date: "10:00 ~ 12:50",
  },
  {
    id: "d4",
    className: "테스트 강의4",
    profName: "정호일",
    classRoom: "j0407",
    day: 1,
    date: "10:00 ~ 12:50",
  },
];

const monData = dummyDataArray.filter((items) => {
  return items.day === 1;
});

const friData = dummyDataArray.filter((items) => {
  return items.day == 5;
});

const DayView = (props: any) => {
  return (
    <DayContainer>
      <Day>
        <DayTitle>월</DayTitle>
        {monData.map((items) => (
          <ClassInfoCard key={items.id} props={items} />
        ))}
      </Day>

      <Day>
        <DayTitle>화</DayTitle>
      </Day>

      <Day>
        <DayTitle>수</DayTitle>
      </Day>

      <Day>
        <DayTitle>목</DayTitle>
      </Day>

      <Day>
        <DayTitle>금</DayTitle>
        {friData.map((items) => (
          <ClassInfoCard key={items.id} props={items} />
        ))}
      </Day>
    </DayContainer>
  );
};

const DayContainer = styled.div`
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const DayTitle = styled.h1`
  
`;

export default DayView;
