import React from "react";
import styled from "styled-components";

import MainMenuCard from "@/src/Common/MainMenuCard";

const dummyDataArray = [
  {
    id: "m1",
    title: "📚 나의 할일",
    link: "/MyTask",
  },
  {
    id: "m2",
    title: "📣 공지사항",
    link: "/NoticePost",
  },
  {
    id: "m3",
    title: "📅 학사일정",
    link: "/Schedule",
  },
  {
    id: "m4",
    title: "🗣️ 자유게시판",
    link: "/",
  },
  {
    id: "m5",
    title: "🍽️ 오늘의 학식",
    link: "/",
  },
  {
    id: "m6",
    title: "👥 팀 스페이스",
    link: "/",
  },
  {
    id: "m7",
    title: "🔐 개인정보처리방침",
    link: "/Privacy",
  },
  {
    id: "m8",
    title: "⏰ 내 시간표",
    link: "/TimeTable"
  }
];

const MainMenu = () => {
  return (
    <MainMenuContainer>
      <MainMenuTitleH1>전체메뉴</MainMenuTitleH1>
      <MainMenuTitleP>DCC의 모든 메뉴를 한 눈에 확인하세요 📣</MainMenuTitleP>

      <MainMenuElementsContainer>
        {dummyDataArray.map((items) => (
          <MainMenuCard key={items.id} title={items.title} link={items.link} width={"20"} height={"8"} />
        ))}
      </MainMenuElementsContainer>
    </MainMenuContainer>
  );
};

const MainMenuContainer = styled.div`
  width: 90vw;
  height: 40vh;
`;

const MainMenuTitleH1 = styled.div`
  font-size: 30pt;
  font-weight: 900;
  letter-spacing: -3px;
`;

const MainMenuTitleP = styled.div`
  font-size: 12pt;
  font-weight: 100;
  letter-spacing: -1px;
`;

const MainMenuElementsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap
`;
export default MainMenu;
