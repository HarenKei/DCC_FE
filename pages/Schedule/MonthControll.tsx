import React, { useState } from 'react';

function MonthControll() {
  const [currentMonth, setCurrentMonth] = useState(1); // 현재 월을 저장하는 State

  function handleNextMonth() { // 다음 월로 이동하는 함수
    setCurrentMonth(currentMonth + 1);
  }

  function handlePrevMonth() { // 이전 월로 이동하는 함수
    setCurrentMonth(currentMonth - 1);
  }

  return (
    <div>
      <button onClick={handlePrevMonth}>이전 월</button>
      <span>{currentMonth}월</span>
      <button onClick={handleNextMonth}>다음 월</button>
    </div>
  );
}
export default MonthControll;
