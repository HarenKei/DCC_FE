import React from "react";
import styled from "styled-components";
import { Link, Routes, Route } from "react-router-dom";
import AppContainer from "./AppContainer";
import ApplicationContainer from "./ApplicationContainer";
import NoticeBodyContainer from "./NoticeBodyContainer";
const NoticeMajor = () => {
  return (
    <div>
      <ContentMajor>
        <MajorContent>
          <Link to="/NoticePost">
            <h3>웹 전공</h3>
          </Link>
        </MajorContent>
        <MajorContent>
          <Link to="/NoticePost/AppContainer">
            <h3>앱 전공</h3>
          </Link>
        </MajorContent>
        <MajorContent>
          <Link to="/NoticePost/ApplicationContainer">
            <h3>응용 전공</h3>
          </Link>
        </MajorContent>
      </ContentMajor>
      <Routes>
        <Route path="/NoticePost" element={<NoticeBodyContainer/>} />
        <Route path="/NoticePost/AppContainer" element={<AppContainer />} />
        <Route path="/NoticePost/ApplicationContainer" element={<ApplicationContainer />}/>
      </Routes>
    </div>
  );
};
const MajorContent = styled.div`
  background-color: #d9d9d9;
  padding: 1rem;
  width: 13rem;
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
  width: 60vw;
  max-width: 95%;
  & > div:hover {
    background-color: #adabab;
  }
`;
export default NoticeMajor;
