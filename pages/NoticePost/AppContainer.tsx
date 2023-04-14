import NoticeCard from "@/src/Common/NoticeCard";
import React from "react";
import styled from "styled-components";

const AppContainer  = () =>{
  return (
    <div>
      <MainBodyContainer>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
      </MainBodyContainer>
    </div>
  );
};
const MainBodyContainer = styled.div`
  /* border: solid 1px black; */
  padding: 1rem;
  /* background-color: grey; */
  margin: 2rem auto;
  width: 90vw;
  height: auto;
  display: flex;
  flex-flow:row wrap;
`;
export default AppContainer;