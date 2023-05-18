import React, { useState } from "react";
import styled from "styled-components";
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
          <input type="text" placeholder="여기에 검색하세요!" />
          <button type="submit">검색</button>          
        </NoticeSearchBar>
      </NoticeHeadContainer>
      <NoticeMajor/>
      <WritePost>
      <a href="/NoticePost/WriteTest" target="_blank" rel="noopener noreferrer">
        <button>글쓰기</button> 
      </a>
      </WritePost>
    </div>
  );
};

const MainMenuElementsContainer = styled.div`
  justify-content: center;
  background-color: grey;
  border: solid 1px black;
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-direction: row;
  border: 1px black;

`;

const NoticeHeadContainer = styled.div`
  /* border: solid 1px black; */
  padding: 1rem;
  /* background-color: grey; */
  margin: 2rem auto;
  width: 90vw;
  max-width: 95%;
`;

const Noticetitle = styled.div`
  width: 100px;
  /* border: solid 1px black; */
  margin: auto;
`;

const NoticeSearchBar = styled.div`
  width: 500px;
  margin: 0.5rem auto;
  & > button {
    margin: 0 0 0 20px;
    font: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: black;
    border-radius: 12px;
    margin-right: 1rem;
  }
  & > button:hover {
    background-color: #adabab;
  }
  & > input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 12px;
    border: 1px solid #ccc;
    width: 25rem;
    max-width: 100%;
    background-color: #ccc;
  }
  & > input:focus::placeholder {
    color: transparent;
  }
`;

const WritePost = styled.div`
  display: flex;
  margin-right: 12rem;
  flex-direction: row-reverse;
  & > a > button {
    margin: 0 0 0 20px;
    font: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: black;
    border-radius: 12px;
    margin-right: 1rem;
  }
  & > button:hover {
    background-color: #adabab;
  }
`

export default NoticePost;
