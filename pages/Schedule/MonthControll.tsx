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
      <span>2023년{currentMonth}월</span>
      <ScheduleControllBtnCss><button onClick={handleNextMonth}>▶</button></ScheduleControllBtnCss>
      </ScheduleMonthControll>
    </div>
  );
}

const ScheduleMonthControll = styled.div`
  display: flex;
  justify-content: row;
`;

const ScheduleControllBtnCss = styled.div`
   margin-bottom: 5px;
`;

export default MonthControll;
