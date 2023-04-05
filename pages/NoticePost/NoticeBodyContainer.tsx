import React from "react";
import styled from "styled-components";
import NoticeCard from "@/src/Common/NoticeCard";

const NoticeBodyContainer = () => {
  return (
    <div>
      <MainBodyContainer>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
      </MainBodyContainer>
    </div>
  );
};
const MainBodyContainer = styled.div`
  border: solid 1px black;
  padding: 1rem;
  background-color: grey;
  margin: 2rem auto;
  width: 60rem;
  height: auto;
  display: flex;
  flex-flow:row wrap;
`;
export default NoticeBodyContainer;
