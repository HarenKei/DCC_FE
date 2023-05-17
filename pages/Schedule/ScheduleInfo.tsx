import ScheduleInfoCard from "@/src/Common/ScheduleInfoCard";
import React from "react";
import styled from "styled-components";

const scheduleDummyDataArray = [
    {
      id: "s1",
      content: "국가장학금 신청",
      startDate: "03월 07일",
      endDate: "03월 22일",
    },
    {
      id: "s2",
      content: "중간고사",
      startDate: "04월 20일",
      endDate: "04월 26일",
    },
    {
        id: "s3",
        content: "놀기",
        startDate: "05월 05일",
        endDate: "06월 30일",
      },
    {
      id: "s4",
      content: "정보처리산업기사",
      startDate: "05월 28일",
      endDate: "05월 28일",
    },
    {
      id: "s5",
      content: "기말고사",
      startDate: "06월 15일",
      endDate: "06월 21일",
    }
];

const ScheduleInfo = () => {
    return(  
    <ScheduleInfoContainer>
      <ScheduleInfoWrapper>
        {scheduleDummyDataArray.map((items) => (
          <ScheduleInfoCard
            key={items.id}
            content={items.content}
            startDate={items.startDate}
            endDate={items.endDate}
          />
        ))}
      </ScheduleInfoWrapper>
    </ScheduleInfoContainer>
    );
};

const ScheduleInfoContainer = styled.div`
    display: flex;
    flex-direction: column;

    padding: 1rem;
    margin: 1rem auto;
    margin-right: 80px;
    background-color: white;

    width: 400px;
    height: 695px;
    border: 8px solid #D9D9D9;
    border-radius: 50px;
    box-shadow: 0px 1px 1px black;

    overflow: auto;
`;

const ScheduleInfoWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  -webkit-margin-end: 6px;

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #B3B3B3;
    border-radius: 3px;
  }
`;

export default ScheduleInfo;