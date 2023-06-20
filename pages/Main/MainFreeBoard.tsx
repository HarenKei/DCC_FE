import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { db } from "../Google2/fbconfig";
import Link from "next/link";
import FreePostCard from "@/src/Common/FreePostCard";
import MainNoticeCard from "@/src/Common/MainNoticeCard";

const dummyDataArray = [
  {
    id: "f1",
    category: "자유",
    title: "집에 가고 싶지 않냐?",
    dept: "육영현",
  },
  {
    id: "f2",
    category: "장터",
    title: "리액트 교재 판다 사갈사람?",
    dept: "정승민",
  },
  {
    id: "f3",
    category: "자유",
    title: "아 집가고싶네.",
    dept: "정승민",
  },
];

const MainFreeBoard = () => {
  const [postList, setPostList]: any = useState([]);
  const postCollectionRef = collection(db, "FreePost");

  const getPostList = async () => {
    try {
      const data = await getDocs(
        query(postCollectionRef, orderBy("writeDate", "desc"))
      );
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(filteredData.slice(0,3));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostList();
  },[]);

  return (
    <MainFreeBoardContainer>
      <MainFreeBoardTitleH1>자유게시판</MainFreeBoardTitleH1>
      <MainFreeBoardTitleP>
        컴퓨터정보학부 친구들과 소통해요 📣
      </MainFreeBoardTitleP>

      <MainFreeBoardCardContainer>
        {postList.map((items: any) => (
          <MainNoticeCard
            key={items.id}
            id={items.id}
            category={"자유"}
            title={items.title}
            dept={items.userName}
            dir={`right`}
          />
        ))}
      </MainFreeBoardCardContainer>
    </MainFreeBoardContainer>
  );
};

const MainFreeBoardContainer = styled.div`
  width: 44vw;
  height: 50vh;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const MainFreeBoardTitleH1 = styled.h1`
  font-size: 30pt;
  font-weight: 900;
  letter-spacing: -3px;
`;

const MainFreeBoardTitleP = styled.p`
  font-size: 12pt;
  font-weight: 100;
  letter-spacing: -1px;
`;

const MainFreeBoardCardContainer = styled.div`
  width: 100%;
  height: 42vh;
  background-color: #d0d1d1;
  border-radius: 10px;
  box-shadow: 0px 1px 1px black;
  margin-top: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export default MainFreeBoard;
