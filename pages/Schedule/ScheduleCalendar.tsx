import React from "react";
import styled from "styled-components";
import MonthControll from "./MonthControll";

const ScheduleCalendar = () => {
    const year = 2023; 
    const month = 4; 
  
    const getStartDayOfWeek = (year, month) => {
      const date = new Date(year, month, 1);
      return date.getDay();
    };
  
    const generateCalendar = (year, month) => {
      const startDayOfWeek = getStartDayOfWeek(year, month);
      const daysInMonth = new Date(year, month + 1, 0).getDate();
  
      const calendar = [];
      let week = [];
  
      for (let i = 0; i < startDayOfWeek; i++) {
        week.push(<EmptyContainer key={`empty-${i}`} />);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        week.push(<DateContainer key={day}>{day}</DateContainer>);
  
        if (week.length === 7) {
          calendar.push(<DateTableContainer key={calendar.length}>{week}</DateTableContainer>);
          week = [];
        }
      }
  
      if (week.length > 0) {
        for (let i = week.length; i < 7; i++) {
          week.push(<EmptyContainer key={`empty-${i}`} />);
        }
        calendar.push(<DateTableContainer key={calendar.length}>{week}</DateTableContainer>);
      }
  
      return calendar;
    };
  
    const calendar = generateCalendar(year, month);
  
    return (
      <Calender>
        <DayTableContainer>
          <DayContainer>일</DayContainer>
          <DayContainer>월</DayContainer>
          <DayContainer>화</DayContainer>
          <DayContainer>수</DayContainer>
          <DayContainer>목</DayContainer>
          <DayContainer>금</DayContainer>
          <DayContainer>토</DayContainer>
        </DayTableContainer>
        {calendar}
      </Calender>
    );
  };

const Calender = styled.div`
    padding: 1rem;
    background-color: white;
    margin: 1rem auto;
    margin-left: 80px;
    width: 1100px;
    heigth: 360px; 

    box-shadow: 0px 1px 1px black;
    max-width: 99%;
    max-heigth: 99%;
    border: 8px solid #D9D9D9;
    border-radius: 50px;
`;

const DayTableContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-left: 67px;
    width: 910px;
    height: 80px;
    font-size: 15px;
`;

const DateTableContainer = styled.div`
    width: 910px;
    display: flex;
    flex-direction: row;
    margin-left: 67px;
`

const DayContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 130px;
    height: 70px;
    font-size: 35px;
`;

const DateContainer = styled.div`
    font-size: 20px;
    width: 130px;
    height: 105px;

    box-shadow: 0px 1px 1px black;
    border: 3px solid #D9D9D9;
    border-radius: 10px;
`;

const EmptyContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 130px;
    height: 70px;
`;
export default ScheduleCalendar;