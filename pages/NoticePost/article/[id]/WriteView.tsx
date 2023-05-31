import { db } from "@/pages/Google2/fbconfig";
import { collection, deleteDoc, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WriteView = () => {
  
  const router = useRouter();
  const [title,setTitle] = useState("");
  const [detail,setDetail] = useState("");

  useEffect(()=>{
    getDoc(doc(db,'Post',router.query.id))
    .then(doc =>{
      const data = doc.data();
      setTitle(data.title);
      setDetail(data.detail);
    })
  },[])

  const deletePost = async (id: string) => {
    const remove = window.confirm("삭제하시겠습니까?");
    if(remove == true){
    const movieDoc = doc(db, 'Post',router.query.id)
  await deleteDoc(movieDoc);  
  alert("게시물이 삭제되었습니다.")
  };
};

  return (
    <div>
      <WriteMain>
        <Title>
          <h1>{title}</h1>
        </Title>
         
        <Content_txt>
          <h3>{detail}</h3>
        </Content_txt>
      </WriteMain>

      <Buttons>
      <button><Link href="/NoticePost" onClick={deletePost}>
          삭제
      </Link></button>
      <button><Link href="/NoticePost">
          메인으로
      </Link></button>
      <button><Link href={`/NoticePost/article/${router.query.id}/WriteEdit`}>
          수정하기
      </Link></button>
      </Buttons>
    </div>
  );
};

const Title = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  & > h1 {
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
  & > h2 {
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


export default WriteView;