import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ClassInfoList from "./ClassInfoList";

const DayView = ({classData, onDelete}: any) => {

  useEffect(() => {
    console.log(`DayView ${classData[0].className}`);
  },[]);

  return (
    <DayContainer>
      <Day>
        <DayTitle>월</DayTitle>
        <ClassInfoList
          data={classData.filter((items: any) => {
            return items.day == 1;
          })}
          onDelete={onDelete}
        />
      </Day>

      <Day>
        <DayTitle>화</DayTitle>
        <ClassInfoList
          data={classData.filter((items: any) => {
            return items.day == 2;
          })}
          onDelete={onDelete}
        />
      </Day>

      <Day>
        <DayTitle>수</DayTitle>
        <ClassInfoList
          data={classData.filter((items: any) => {
            return items.day == 3;
          })}
          onDelete={onDelete}
        />
      </Day>

      <Day>
        <DayTitle>목</DayTitle>
        <ClassInfoList
          data={classData.filter((items: any) => {
            return items.day == 4;
          })}
          onDelete={onDelete}
        />
      </Day>

      <Day>
        <DayTitle>금</DayTitle>
        <ClassInfoList
          data={classData.filter((items: any) => {
            return items.day == 5;
          })}
          onDelete={onDelete}
        />
      </Day>
    </DayContainer>
  );
};

const DayContainer = styled.div``;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

const DayTitle = styled.h1``;

export default DayView;
