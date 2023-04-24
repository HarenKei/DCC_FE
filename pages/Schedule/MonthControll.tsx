import React, { useState } from 'react';
import styled from 'styled-components';

function MonthControll() {
  var [currentMonth, setCurrentMonth] = useState(1); // 현재 월을 저장하는 State

  function handleNextMonth() { // 다음 월로 이동하는 함수
    setCurrentMonth(currentMonth + 1);
  }

  function handlePrevMonth() { // 이전 월로 이동하는 함수
    setCurrentMonth(currentMonth - 1);
  }

  return (
    <div>
      <ScheduleMonthControll>
      <ScheduleControllBtnCss><button onClick={handlePrevMonth}>◀</button></ScheduleControllBtnCss>
      <MonthControllCss>2023년{currentMonth}월</MonthControllCss>
      <ScheduleControllBtnCss><button onClick={handleNextMonth}>▶</button></ScheduleControllBtnCss>
      </ScheduleMonthControll>
    </div>
  );
}

const ScheduleMonthControll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ScheduleControllBtnCss = styled.div`
  margin-left:15px;
  margin-right:15px;
`;

const MonthControllCss = styled.div`
    font-size: 26pt;
    font-weight: 150px;
    letter-spacing: -2px;
`;

export default MonthControll;
