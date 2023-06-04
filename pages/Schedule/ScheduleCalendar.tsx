import React from "react";
import styled from "styled-components";
import MonthController from "./MonthController";

const ScheduleCalendar = ({ year, month }) => {
    let jan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 21 ,22, 23 ,24]
    let feb = [1, 2, 3, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21 ,22, 23, 24, 25, 26, 27, 28]
    let mar = [1, 2, 3, 4, 5, 6, 7 , 8, 22]
    let apr = [20, 21, 22, 23, 24, 25, 26]
    let may = [1, 5 ,12, 29]
    let jun = [6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    let jul = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 31]
    let aug = [1, 2, 3, 4, 9, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 28, 29, 30 ,31]
    let sept = [1, 15, 22, 28, 29 ,30]
    let oct = [3, 6, 9, 16, 17 ,18 ,19 ,20]
    let nov = [9, 10]
    let dec = [4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

    const getStartDayOfWeek = (year, month) => {
      const date = new Date(year, month - 1, 1);
      return date.getDay();
    };
  
    const generateCalendar = (year, month) => {
      const startDayOfWeek = getStartDayOfWeek(year, month);
      const daysInMonth = new Date(year, month, 0).getDate();
  
      const calendar = [];
      let week = [];
  
      for (let i = 0; i < startDayOfWeek; i++) {
        week.push(<EmptyContainer key={`empty-${i}`} />);
      }
  
      for (let day = 1; day <= daysInMonth; day++) {
        const isHighlighted = checkIfDayIsHighlighted(month, day);
        week.push(<DateContainer key={day} highlighted={isHighlighted}>
          {day}
        </DateContainer>);
  
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

    const checkIfDayIsHighlighted = (month, day) => {
      const monthArray = getMonthArray(month); // 해당 월에 해당하는 배열 가져오기
      return monthArray.includes(day); // 배열에 날짜가 포함되어 있는지 확인
    };
  
    const getMonthArray = (month) => {
      switch (month) {
        case 1:
          return jan;
        case 2:
          return feb;
        case 3:
          return mar;
        case 4:
          return apr;
        case 5:
          return may;
        case 6:
          return jun;
        case 7:
          return jul;
        case 8:
          return aug;
        case 9:
          return sept;
        case 10:
          return oct;
        case 11:
          return nov;
        case 12:
          return dec;
        default:
          return [];
      }
    }
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
    padding: 2rem;
    background-color: white;
    margin: 1rem auto;
    margin-left: 80px;
    width: 1100px;
    height: fit-content;

    box-shadow: 0px 1px 1px black;
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
    margin: 1px;

    box-shadow: 0px 1px 1px black;
    border: 3px solid #D9D9D9;
    border-radius: 10px;

    ${({ highlighted }) => highlighted && `
    background-color: #46B6EB;
    // add other styles for highlighted dates
  `}
`;

const EmptyContainer = styled.div`
    display:flex;
    justify-content: center;
    width: 130px;
    height: 70px;
`;
export default ScheduleCalendar;