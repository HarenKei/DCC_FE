import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Google2/fbconfig";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";

import MainNoticeCard from "@/src/Common/MainNoticeCard";
import { Link } from "react-router-dom";

const dummyDataArray = [
  {
    id: "n1",
    category: "병무",
    title: "대림대 예비군대대 해체에 따른 공지",
    dept: "대림대 예비군 대대",
  },
  {
    id: "n2",
    category: "장학",
    title: "제 2차 국가장학금 신청 안내",
    dept: "장학처",
  },
  {
    id: "n3",
    category: "승민이",
    title: "집에 가고 싶어요.",
    dept: "우리집",
  },
];

const MainAllNotice = () => {
  const [postList, setPostList]: any = useState([]);
  const postCollectionRef = collection(db, "Post");

  const getPostList = async () => {
    try {
      const data = await getDocs(
        query(postCollectionRef, orderBy("writeDate", "desc"))
      );

      console.log(data);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPostList(filteredData.slice(0, 3));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <MainAllNoticeContainer>
      <MainAllNoticeTitleH1>공지사항</MainAllNoticeTitleH1>
      <MainAllNoticeTitleP>
        대림대학교 컴퓨터정보학부의 공지, 놓치지 마세요 📣
      </MainAllNoticeTitleP>

      <MainAllNoticeCardContainer>
        {postList.map((items: any) => (
            <MainNoticeCard
              key={items.id}
              id={items.id}
              category={items.category}
              title={items.title}
              dept={items.userName}
              dir={"left"}
            />
        ))}
      </MainAllNoticeCardContainer>
    </MainAllNoticeContainer>
  );
};

const MainAllNoticeContainer = styled.div`
  width: 44vw;
  height: 50vh;
`;

const MainAllNoticeTitleH1 = styled.h1`
  font-size: 30pt;
  font-weight: 900;
  letter-spacing: -3px;
`;

const MainAllNoticeTitleP = styled.p`
  font-size: 12pt;
  font-weight: 100;
  letter-spacing: -1px;
`;

const MainAllNoticeCardContainer = styled.div`
  width: 100%;
  height: 42vh;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 1px black;
  margin-top: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export default MainAllNotice;
