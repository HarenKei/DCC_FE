import React, { useState } from "react";
import styled from "styled-components";
import NoticeMajor from "./NoticeMajor";
import Link from "next/link";

const NoticePost = () => {

   return (
    <NoticePostContainer>
      <NoticeHeadContainer>
        <Noticetitle>
          <h1>공지사항</h1>
        </Noticetitle>
      </NoticeHeadContainer>
      <NoticeMajor/>
      <WritePost>   
        <button><Link href="/NoticePost/WritePage">
          글 쓰기
      </Link></button>
      </WritePost>
    </NoticePostContainer>
  );
};

const NoticePostContainer = styled.div`
  margin-left: 8vw;
`;

const NoticeHeadContainer = styled.div`
  padding: 1rem;
  width: 90vw;
  max-width: 95%;
`;

const Noticetitle = styled.div`
  width: 200px;
  margin: auto;
`;
const WritePost = styled.div`
  display: flex;
  margin-right: 12rem;
  flex-direction: row-reverse;
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
    font-weight: bold;
  }
  & > button:hover {
    background-color: #adabab;
  }
`

export default NoticePost;
