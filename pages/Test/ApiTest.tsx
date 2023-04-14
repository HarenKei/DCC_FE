import React from "react";
import { useState, useEffect } from "react";
import * as API from "../../src/Common/API";
import styled from "styled-components";
import axios from "axios";
import { type } from "os";

type MealData = {
  msg: string;
};

const tmpEventData = "왜 안되노";

const ApiTest = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
  //   API.getMealData().then((apiResult: any) =>{
  //     setTest(apiResult);
  // });

  API.getTestData().then((apiResult : any) => {
    setTest(apiResult.data);
  })
  }, []);

  return <ApiTestContainer>
   

  </ApiTestContainer>;
};

const ApiTestContainer = styled.div`
  width: 90vw;
  height: 50vh;
  background-color: black;
  color: #fff;
  font-size: 18pt;
`;

export default ApiTest;
