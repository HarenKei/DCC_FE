import React from "react";
import styled from "styled-components";

const NoticeBodyContainer = () => {
  return (
    <div>
      <MainBodyContainer>
        <BodyContainer>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
        </BodyContainer>
        <BodyContainer>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
        </BodyContainer>
        <BodyContainer>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
          <BodyContents>공지</BodyContents>
        </BodyContainer>
      </MainBodyContainer>
    </div>
  );
};
const MainBodyContainer = styled.div`
  border: solid 1px black;
  padding: 1rem;
  background-color: grey;
  margin: 2rem auto;
  width: 80rem;
  max-width: 95%;
`;
const BodyContainer = styled.div`
  margin-top: 0.7rem;
  display: flex;
  justify-content: space-around;
`;
const BodyContents = styled.div`
  float: left;
  background-color: #81c7e8;
  padding: 1rem;
  width: 13rem;
  height: 15rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
export default NoticeBodyContainer;
