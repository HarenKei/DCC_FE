import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import MainMenuCard from "./MainMenuCard";

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
    title: "사나이 클럽 GitHub",
    link: "https://github.com/RealManClub",
  },
];

const GlobalSlideMenu = (props: any) => {
  const outside = useRef<any>();

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutside);

    return () => {
      document.removeEventListener("mousedown", handlerOutside);
    };
  });

  const handlerOutside = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    props.setIsOpen(false);
  };

  return (
    <SlideMenuContainer
      id="sidebar"
      ref={outside}
      className={props.isOpen ? "open" : ""}
    >
      <FontAwesomeIcon icon={faXmark} size={"2x"} onClick={toggleSide} />
      <SlideMenuWrapper>
        <SlideMenuContents>
          <SlideMenuUserIntro>
            <UserName>정승민님 안녕하세요.</UserName>
            <Link href="/">
              <p>내 프로필 보기 &gt;&gt;</p>
            </Link>
            {/*로그인 되면 로그인 한 사람의 이름 출력 */}
            {/*로그인이 되어있지 않으면 로그인 버튼 출력 */}
          </SlideMenuUserIntro>

          <MenuContainer>
            <h2>전체 메뉴 보기</h2>
            {dummyDataArray.map((items) => (
              <MainMenuCard
                key={items.id}
                title={items.title}
                link={items.link}
                width={"20"}
                height={"5"}
              />
            ))}
          </MenuContainer>
        </SlideMenuContents>
      </SlideMenuWrapper>
    </SlideMenuContainer>
  );
};

const SlideMenuContainer = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100vh;
  width: 28vw;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const SlideMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const SlideMenuContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SlideMenuUserIntro = styled.div`
  a {
    font-weight: 100;
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }
`;

const UserName = styled.h2``;

export default GlobalSlideMenu;
