import React from "react";
import { useState, useEffect } from "react";
import * as API from "../../src/Common/API";
import styled from "styled-components";
import axios from "axios";
import { type } from "os";

type MealData = {
  msg: string;
};

const tmpEventData = {
  email: "a@a.com",
  name: "김왕추",
  index: 1
};

const ApiTest = () => {
  const [test, setTest] = useState(tmpEventData);

  useEffect(()=>{
    API.getTestData().then((apiResult : any) => {
      console.log(apiResult.data);
      setTest(apiResult.data);
    });
  },[]);

  return <ApiTestContainer>
  {/* {test.email}
  {test.name}
  {test.index} */}
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
