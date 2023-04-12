import React from "react";
import { useState, useEffect } from "react";
import * as API from "../../src/Common/API";
import styled from "styled-components";

type MealData = {
  email: string;
  name: string;
  index: number;
};

const tmpEventData: MealData = {
  email: "",
  name: "",
  index: 0,
};

const ApiTest = () => {
  const [mealData, setMealData] = useState(tmpEventData);
  const [testData, setTestData] = useState(tmpEventData);


  useEffect(()=> {
    API.getPostData().then((apiResult: any) => setTestData(apiResult));
  });

  console.log("testData: " + testData);



  return <ApiTestContainer>
  </ApiTestContainer>;
};

const ApiTestContainer = styled.div`
  font-size: 18pt;
`;

export default ApiTest;
