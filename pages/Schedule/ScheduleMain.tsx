import React from "react";
import styled from "styled-components";
import ScheduleCalendar from "./ScheduleCalendar";
import ScheduleInfo from "./ScheduleInfo";
import MonthControll from "./MonthControll";

const ScheduleMain = () => {
    return(
        <>
        <ScheduleTitle>학사 일정</ScheduleTitle>
        <MonthControll/>
        <ScheduleContainer>
            <ScheduleCalendar/>
        </ScheduleContainer>
        <ScheduleInfoContainer>
            <ScheduleInfo/>
        </ScheduleInfoContainer>
        </>
    );
}; 

const ScheduleTitle = styled.div`
    font-size: 50pt;
    font-weight: 900;
    letter-spacing: -3px;
`;

const ScheduleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;
`;

const ScheduleInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 100px;  
`;

export default ScheduleMain;