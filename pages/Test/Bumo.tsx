import React, { useState } from "react";
import styled from "styled-components";
import BumoCard from "./BumoCard";
import Jasik from "./Jasik";

const dummyDataArray = [
  {
    id: 1,
    name: "승민",
    age: "24",
  },
  {
    id: 2,
    name: "해파리",
    age: "13",
  },
  {
    id:3,
    name: "리자몽",
    age: "24",
  },
];

const Bumo = () => {
  const [dataArray, setDataArray] = useState(dummyDataArray);
  //초기값은 dummyDataArray 배열

  const onAdd = (form : any) => {
    let tmp = dataArray.slice(); //배열 깊은 복사
    form.id = dataArray[dataArray.length - 1].id + 1;
    tmp.push(form); //배열의 맨 끝에 form (새 데이터 ) 추가
    setDataArray(tmp); //set 함수를 활용해 dataArray의 값을 tmp (새 데이터가 포함된 배열)로 변경
  }

  return (
    <BumoContainer>
      <Jasik onAdd={onAdd}/>
      {dataArray.map((items : any) => (
        <BumoCard key={items.id} data={items}/>
      ))}
    </BumoContainer>
  )
};

const BumoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



export default Bumo;