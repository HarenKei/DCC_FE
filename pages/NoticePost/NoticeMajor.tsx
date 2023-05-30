import React, { useState } from "react";
import styled from "styled-components";
import AppContainer from "./AppContainer";
import ApplicationContainer from "./ApplicationContainer";
import WebContainer from "./WebContainer";

const NoticeMajor = () => {
  const [showComponent, setShowComponent] = useState(null);

  const handleClick = (divId: any) => {
    setShowComponent(divId);
  };

  return (
    <div>
      <ContentMajor>
        <MajorBar>
          <MajorContent onClick={() => handleClick(1)}>
            <h3>웹 전공</h3>
          </MajorContent>
          <MajorContent onClick={() => handleClick(2)}>
            <h3>앱 전공</h3>
          </MajorContent>
          <MajorContent onClick={() => handleClick(3)}>
            <h3>응용 전공</h3>
          </MajorContent>
        </MajorBar>
        {showComponent === null && <WebContainer/>}
        {showComponent === 1 && <WebContainer />}
        {showComponent === 2 && <AppContainer />}
        {showComponent === 3 && <ApplicationContainer />}
      </ContentMajor>
    </div>
  );
};

  const MajorBar = styled.div`
  display: flex;
  margin: 2rem auto;
  height: 3.6rem;
  width: 75rem;
  justify-content: space-around;
  border: 1px solid black;
  & > div:hover {
    background-color: #adabab;
  }
  `;

const MajorContent = styled.div`
  background-color: #d9d9d9;
  padding: 1rem;
  width: 17rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 1px 1px black;
  
`;
const ContentMajor = styled.div`
  justify-content: space-around;
  display: flex;
  padding: 1rem;
  margin: 2rem auto;
  width: 90vw;
  max-width: 95%;
  flex-flow: row wrap;
  border: 1px solid black;
`;
export default NoticeMajor;
