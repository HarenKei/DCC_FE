import FreeNoticeCard from "@/src/Common/FreePostCard";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import FreeContainer from "./FreeContainer";


const FreePost = () => {
  return (
    <div>
      <FreePostHeadContainer>
        <Noticetitle>
          <h1>자유 게시판</h1>
        </Noticetitle>
      </FreePostHeadContainer>
      <WritePost> 
        <FreeContainer/>
      </WritePost>

      <ButtonDiv>
        <button><Link href="/FreePost/FreePostWrite">
          글 쓰기
      </Link></button>
      </ButtonDiv>
    </div>
  );
};


const FreePostHeadContainer = styled.div`
  padding: 1rem;
  margin: 2rem auto;
  width: 90vw;
  max-width: 95%;
`;

const Noticetitle = styled.div`
  width: 200px;
  margin: auto;
`;
const WritePost = styled.div`
  display: flex;
  margin: 0 12rem 0 12rem;
`
const ButtonDiv = styled.div`
  display: flex;
  margin-right: 12rem;
  flex-direction: row-reverse;
  & > button {
    font: inherit;
  cursor: pointer;
  padding: 0.5rem;
  border: 1px solid #d9d9d9;
  background-color: #d9d9d9;
  color: black;
  border-radius: 12px;
  margin-left: 1rem;
  }
`

export default FreePost;