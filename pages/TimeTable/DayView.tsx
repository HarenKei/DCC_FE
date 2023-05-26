import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import ClassInfoList from "./ClassInfoList";

const DayView = (props: any) => {
  // const [props.classData, setClassData] = useState(props.classData);

  useEffect(() => {
    console.log(`asdf ${props.classData}`);
  },[]);

  return (
    <DayContainer>
      <Day>
        <DayTitle>월</DayTitle>
        <ClassInfoList
          data={props.classData.filter((items: any) => {
            return items.day == 1;
          })}
        />
      </Day>

      <Day>
        <DayTitle>화</DayTitle>
        <ClassInfoList
          data={props.classData.filter((items: any) => {
            return items.day == 2;
          })}
        />
      </Day>

      <Day>
        <DayTitle>수</DayTitle>
        <ClassInfoList
          data={props.classData.filter((items: any) => {
            return items.day == 3;
          })}
        />
      </Day>

      <Day>
        <DayTitle>목</DayTitle>
        <ClassInfoList
          data={props.classData.filter((items: any) => {
            return items.day == 4;
          })}
        />
      </Day>

      <Day>
        <DayTitle>금</DayTitle>
        <ClassInfoList
          data={props.classData.filter((items: any) => {
            return items.day == 5;
          })}
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
