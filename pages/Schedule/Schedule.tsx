import React, {useState} from "react";
import styled from "styled-components";
import ScheduleCalender from "./ScheduleCalendar";
import ScheduleInfo from "./ScheduleInfo";
import MonthController from "./MonthController";

const Schedule = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const handleNextMonth = () => {
        const nextMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
        );
        setCurrentDate(nextMonthDate);
    };
    
    const handlePrevMonth = () => {
        const prevMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
        );
        setCurrentDate(prevMonthDate);
    };
    
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    return(
        <div>
        <ScheduleHeader>
            <ScheduleTitle>학사 일정</ScheduleTitle>
            <MonthController
                year={year}
                month={month}
                onNextMonth={handleNextMonth}
                onPrevMonth={handlePrevMonth}
            />
        </ScheduleHeader>
        <ScheduleContainer>
            <ScheduleCalender
                year={year}
                month={month}
            />
            <ScheduleInfo/>
        </ScheduleContainer>
        </div>
    );
}; 

const ScheduleHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 25px;
    margin-left: 80px;

`;

const ScheduleTitle = styled.div`
    font-size: 40pt;
    font-weight: 250px;
    letter-spacing: -2px;
`;

const ScheduleContainer = styled.div`
    display: flex;
    justify-content: row;
    height: 820px;
`;

export default Schedule;