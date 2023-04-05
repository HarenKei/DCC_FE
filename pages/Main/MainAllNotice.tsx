import React from "react";
import styled from "styled-components";
import MainNoticeCard from "@/src/Common/MainNoticeCard";

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
  return (
    <MainAllNoticeContainer>
      <MainAllNoticeTitleH1>공지사항</MainAllNoticeTitleH1>
      <MainAllNoticeTitleP>
        대림대학교 컴퓨터정보학부의 공지, 놓치지 마세요 📣
      </MainAllNoticeTitleP>

      <MainAllNoticeCardContainer>
        {dummyDataArray.map((items) => (
          <MainNoticeCard
            key={items.id}
            category={items.category}
            title={items.title}
            dept={items.dept}
          />
        ))}
      </MainAllNoticeCardContainer>
    </MainAllNoticeContainer>
  );
};

const MainAllNoticeContainer = styled.div`
  width: 45vw;
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
