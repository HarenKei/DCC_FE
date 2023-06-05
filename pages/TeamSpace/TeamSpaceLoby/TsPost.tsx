import React from "react";
import styled from "styled-components";
import TS_AddButton from "./TsAddButton";

const TsPost = () => {
  return (
    <div>
      <ContentContainer>
        <TeamSpaceContent><h3>프로젝트</h3></TeamSpaceContent>
        <TeamSpaceContent><h3>반</h3></TeamSpaceContent>
        <TeamSpaceContent><h3>스터디</h3></TeamSpaceContent>
        <TS_AddButton/>
      </ContentContainer>
    </div>
  );
};
const TeamSpaceContent = styled.div`
  background-color: #D9D9D9;
  padding: 1rem;
  width: 13rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow:  0px 1px 1px black;
`;
const ContentContainer = styled.div`
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
export default TsPost;
