import React from "react";
import styled from "styled-components";

const NoticeMajor = () => {
  return (
    <div>
      <ContentMajor>
        <MajorContent><h3>웹 전공</h3></MajorContent>
        <MajorContent><h3>앱 전공</h3></MajorContent>
        <MajorContent><h3>응용 전공</h3></MajorContent>
      </ContentMajor>
    </div>
  );
};
const MajorContent = styled.div`
  background-color: #D9D9D9;
  padding: 1rem;
  width: 13rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow:  0px 1px 1px black;
`;
const ContentMajor = styled.div`
  justify-content: space-around;
  display: flex;
  padding: 1rem;
  margin: 2rem auto;
  width: 60vw;
  max-width: 95%;
  & > div:hover {
    background-color: #ADABAB;
  }
`;
export default NoticeMajor;
