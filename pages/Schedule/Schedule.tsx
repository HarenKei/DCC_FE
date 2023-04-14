import React from "react";
import styled from "styled-components";
import ScheduleCalender from "./ScheduleCalendar";
import ScheduleInfo from "./ScheduleInfo";
import MonthControll from "./MonthControll";

const Schedule = () => {
    return(
        <>
        <ScheduleHeader>
            <ScheduleTitle>학사 일정</ScheduleTitle>
            <MonthControllCss>
                <MonthControll/>
            </MonthControllCss>
        </ScheduleHeader>
        <ScheduleContainer>
            <ScheduleCalender/>
            <ScheduleInfo/>
        </ScheduleContainer>
        </>
    );
}; 

const ScheduleHeader = styled.div`
    display: flex;
    justify-content: row;
    margin-top: 50px;
    margin-left: 80px;
`;

const ScheduleTitle = styled.div`
    font-size: 40pt;
    font-weight: 250px;
    letter-spacing: -2px;

`;

const MonthControllCss = styled.div`
    margin-top: 10px;
    font-size: 26pt;
    font-weight: 150px;
    letter-spacing: -2px;
`;

const ScheduleContainer = styled.div`
    display: flex;
    justify-content: row;
    height: 700px;
`;

export default Schedule;