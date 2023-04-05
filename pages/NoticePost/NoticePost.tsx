import React from "react";
import styled from "styled-components";
import NoticeBodyContainer from "./NoticeBodyContainer";
import NoticeMajor from "./NoticeMajor";

const NoticePost = () => {
  return (
    <div>
      <NoticeHeadContainer>
        <Noticetitle>
          <h2>학부공지</h2>
        </Noticetitle>
        <NoticeSearchBar>
          <label></label>
          <input type="text" />
          <button type="submit">검색</button>
        </NoticeSearchBar>
      </NoticeHeadContainer>
      <NoticeMajor/>
      <NoticeBodyContainer/>

    </div>
  );
};

const NoticeHeadContainer = styled.div`
  border: solid 1px black;
  padding: 1rem;
  background-color: grey;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;

`;

const Noticetitle = styled.div`
  width: 100px;
  border: solid 1px black;
  margin: auto;
`;

const NoticeSearchBar = styled.div`
  width: 408px;
  border: solid 1px black;
  margin: 0.5rem auto;
  & > button {
    margin : 0 0 0 20px;
    font: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #46B6EB;
    background-color: #46B6EB;
    color: black;
    border-radius: 12px;
    margin-right: 1rem;
  }
  & > input { 
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`;

export default NoticePost;
