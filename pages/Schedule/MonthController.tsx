import React from 'react';
import styled from 'styled-components';

const MonthController = ({ year, month, onNextMonth, onPrevMonth }) => {
  return (
    <div>
      <ScheduleMonthControll>
        <ScheduleControllBtnCss>
          <button onClick={onPrevMonth}>◀</button>
        </ScheduleControllBtnCss>
        <MonthControllCss>
          {year}년{month}월
        </MonthControllCss>
        <ScheduleControllBtnCss>
          <button onClick={onNextMonth}>▶</button>
        </ScheduleControllBtnCss>
      </ScheduleMonthControll>
    </div>
  );
};

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

export default MonthController;
