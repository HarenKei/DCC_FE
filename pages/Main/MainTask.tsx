import React from "react";
import TaskCard from "@/src/Common/TaskCard";
import styled from "styled-components";
import Link from "next/link";

const MainTask = () => {
  return (
    <MainTaskBannerContainer>
      <TaskCardZone>

        <MainTitleAndLinkZone>
          <MainTaskBannerTitle>My Task 📚</MainTaskBannerTitle>
          <Link href="/MyTask">내 할 일 관리하기 &gt;&gt;</Link>
        </MainTitleAndLinkZone>

        <TaskCard
          title={"test1234"}
          category={"category"}
          date={"3월 29일"}
          status={"진행중"}
        />
        <TaskCard
          title={"test2"}
          category={"category"}
          date={"3월 29일"}
          status={"진행중"}
        />
        <TaskCard
          title={"test3"}
          category={"category"}
          date={"3월 29일"}
          status={"진행중"}
        />
      </TaskCardZone>
    </MainTaskBannerContainer>
  );
};

const MainTaskBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 45vw;
  height: 40vh;

  background-color: #d0d1d1;
  border-radius: 20px;

  box-shadow: 0px 1px 1px black;
`;

const TaskCardZone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MainTitleAndLinkZone = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: row;  
  justify-content: space-between;
  align-items: center;

  a{
    font-weight: 100;
  }
`;

const MainTaskBannerTitle = styled.h1`
  font-size: 25pt;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export default MainTask;
