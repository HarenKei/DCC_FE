import { collection, addDoc } from "@firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { db, auth } from "../Google2/fbconfig";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";

const FreePostWrite = () => {
  let userid = "";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid);
      userid = user.uid;
    } else {
      // User not logged in or has just logged out.
    }
  });
  //파이어스토어에서 무비리스트를 가지고 옵니다
  const [newFreeTitle, setNewFreeTitle] = useState("");
  const [newFreeDetail, setnewFreeDetail] = useState("");
  //각각의 DB들
  const freePostDb = collection(db, "FreePost");

  const FreeDb = async () => {
    try {
      await addDoc(freePostDb, {
        title: newFreeTitle,
        detail: newFreeDetail,
        writeDate: new Date(),
        //firebase auth에 저장된 userid 이게 개별 토큰 같군요
        userId: auth?.currentUser?.uid,
      });
      alert("글을 작성하였습니다.");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <WritePageContainer>
      <WriteMain>
        <TitleBar>
        <PostTitle>
            <h3>게시판 추가</h3>
        </PostTitle>
          <Title>
            <input
              onChange={(e) => setNewFreeTitle(e.target.value)}
              type="text"
              placeholder="제목"
            />
          </Title>
        </TitleBar>
        <hr />
        <Content_txt>
          <textarea
            onChange={(e) => setnewFreeDetail(e.target.value)}
            placeholder="내용을 입력하세요."
          ></textarea>
        </Content_txt>
      </WriteMain>
      <Buttons>
        <button>
          <Link href="/FreePost">취소</Link>
        </button>
        <button onClick={FreeDb}>
          <Link href="/FreePost">등록</Link>
        </button>
      </Buttons>
    </WritePageContainer>
  );
};

const WritePageContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleBar = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  margin-top: 30px;
  margin-left: 35px;
  margin-bottom: 25px;
  padding: 10px;
  width: 60rem;
  border: 1px solid grey;
  border-radius: 10px;
  & > input {
    width: 91%;
    border: none;
    font-size: 22px;
    font-weight: bold;
  }
  & > input:focus {
    outline: none;
  }
`;
const WriteMain = styled.div`
  padding-left: 30px;
  width: 90vw;
  margin: 0 auto;
`;

const Content_txt = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  & > textarea {
    width: 91%;
    resize: none;
    border: none;
    height: 500px;
  }
  & > textarea:focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: black;
    border-radius: 12px;
    margin-right:1rem;
  }

  button:first-child{
    margin-right: 6rem;
  }

  button:hover {
    background-color: #adabab;
  }
`;

const PostTitle = styled.div`
  width: 150px;
  font-family: inherit;
  border: 1px solid #999;
  height: 2.5rem;
  line-height: 2.5rem;
  border-radius: 10px;
  text-align:center;
`;

export default FreePostWrite;
