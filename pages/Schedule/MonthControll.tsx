import React, { useState } from 'react';
import styled from 'styled-components';

function MonthControll() {
  var [currentDate, setCurrentDate] = useState(new Date()); 
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;

  function handleNextMonth() { 
    const nextMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );
    setCurrentDate(nextMonthDate);
  }

  function handlePrevMonth() { 
    const prevMonthDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1,
      1
    );
    setCurrentDate(prevMonthDate);
  }

  return (
    <div>
      <ScheduleMonthControll>
        <ScheduleControllBtnCss>
          <button onClick={handlePrevMonth}>◀</button>
        </ScheduleControllBtnCss>
        <MonthControllCss>
          {year}년{month}월
        </MonthControllCss>
        <ScheduleControllBtnCss>
          <button onClick={handleNextMonth}>▶</button>
        </ScheduleControllBtnCss>
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
    font-weight: 150;
    letter-spacing: -2px;
`;

export default MonthControll;
