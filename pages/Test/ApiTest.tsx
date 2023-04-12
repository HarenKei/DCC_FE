import React from "react";
import { useState, useEffect } from "react";
import * as API from "../../src/Common/API";
import styled from "styled-components";
import { apiBaseUrl } from "next-auth/client/_utils";

type MealData = {
  msg: string;
  room: string;
  sender: string;
};

const tmpEventData: MealData = {
  msg: "",
  room: "",
  sender: "",
};

const ApiTest = () => {
  const [mealData, setMealData] = useState();
  const [testData, setTestData] = useState(tmpEventData);


  useEffect(()=> {
    API.getMealData().then((apiResult: any) => setMealData(apiResult))
  });

  console.log("testData: " + testData);



  return <ApiTestContainer>
    {testData.msg}
    {testData.room}
    {testData.sender}
  </ApiTestContainer>;
};

const ApiTestContainer = styled.div`
  font-size: 18pt;
`;

export default ApiTest;
