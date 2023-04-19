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
];

const ScheduleInfo = () => {
    return(  
    <ScheduleInfoContainer>
        {scheduleDummyDataArray.map((items) => (
          <ScheduleInfoCard
            key={items.id}
            content={items.content}
            startDate={items.startDate}
            endDate={items.endDate}
          />
        ))}
    </ScheduleInfoContainer>
    );
};

const ScheduleInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;
    margin: 1rem auto;
    background-color: white;

    width: 400px;
    heigth: 290px;
    border: 8px solid #D9D9D9;
    border-radius: 50px;
    box-shadow: 0px 1px 1px black;
`;

export default ScheduleInfo;