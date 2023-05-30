import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db, auth, storage } from "../Google2/fbconfig";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";

const WritePage = () => {

  let userid = "";
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User logged in already or has just logged in.
          console.log(user.uid);
          userid = user.uid;
        } else {
          // User not logged in or has just logged out.
        }
      })
     //파이어스토어에서 무비리스트를 가지고 옵니다
     const [newMovieTitle, setNewMovieTitle] = useState("");
     const [newPostDetail, setnewPostDetail] = useState(""); 
     const moviesCollectionRef = collection(db, "Post");

  const onSubmitMovie =async () => {
    try {
        await addDoc(moviesCollectionRef,{
            title: newMovieTitle, 
            detail : newPostDetail,
            writeDate: new Date(),
            //firebase auth에 저장된 userid 이게 개별 토큰 같군요
            userId: auth?.currentUser?.uid,
        });

    } catch (err) {
        console.error(err);
    }
};


  return (
    <div>
      <WriteMain>
        <Title>
          <input onChange={(e) => setNewMovieTitle(e.target.value)} type="text" placeholder="제목" />
        </Title>

        <Content_txt>
          <textarea onChange={(e) => setnewPostDetail(e.target.value)} placeholder="내용을 입력하세요."></textarea>
        </Content_txt>
      </WriteMain>

      <Buttons>
      <button><Link href="/NoticePost">
          취소
      </Link></button>
        <button onClick={onSubmitMovie}><Link href="/NoticePost">
          등록
      </Link></button>
      </Buttons>
    </div>
  );
};

const Title = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  & > input {
    width: 91%;
    padding-bottom: 30px;
    border: none;
    font-size: 22px;
    border-bottom: solid 1px #ababab;
    font-weight: bold;
  }
  & > input:focus {
    outline: none;
  }
`;
const WriteMain = styled.div`
  padding: 20px;
  padding-left: 30px;
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
  margin-right: 12rem;
  flex-direction: row-reverse;
  & > a > button {
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
`;

export default WritePage;
