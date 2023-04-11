import React from "react";
import { useState, useEffect } from "react";
import * as API from "../../src/Common/API";
import styled from "styled-components";

type PostData = {
  email: string;
  user: string;
  index: number;
};

const tmpEventData: PostData = {
  email: "노무현",
  user: "노무현",
  index: 0,
};

const ApiTest = () => {
  const [postData, setPostData] = useState(tmpEventData);

  useEffect(() => {
    API.getPostData().then((apiResult: any) => {
      setPostData(apiResult);
    });
  }, []);

  return(
    <ApiTestContainer>
      {postData.user}
    </ApiTestContainer>
  )
};

const ApiTestContainer = styled.div`
  font-size: 18pt;
`;

export default ApiTest;