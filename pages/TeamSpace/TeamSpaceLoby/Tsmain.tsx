import React from "react";
import styled from "styled-components";
import TS_Post from "./TsPost";
import Header from "@/src/Common/Header";
import TeamSpaceCard from "@/src/Common/TeamSpaceCard";

const dummyDataArray = [
  {
    id: "ws1",
    emoji: "🚙",
    title: "융합 전공",
    name: "김미점",
  },
  {
    id: "ws2",
    emoji: "👥",
    title: "리액트 스터디",
    name: "육영현",
  },
  {
    id: "ws3",
    emoji: "👨‍💻",
    title: "웹 앱 전공 1반",
    name: "정호일",
  },
  {
    id: "ws4",
    emoji: "👨‍💻",
    title: "웹 앱 전공 2반",
    name: "정호일",
  },
  {
    id: "ws5",
    emoji: "📖",
    title: "앱 전공",
    name: "김지예",
  },
  {
    id: "ws6",
    emoji: "🏀",
    title: "슬램덩크",
    name: "김경석",
  },
];

const TS_main = () => {
  return (
    <div>
      <TS_HeadContainer>
        <TS_title>
          <h2>팀 스페이스</h2>
        </TS_title>
      </TS_HeadContainer>
      <TS_Post/>
      <TS_CardContainer>
        {dummyDataArray.map((items) => (
          <TeamSpaceCard
            key={items.id}
            emoji={items.emoji}
            title={items.title}
            name={items.name}
          />
          ))}
      </TS_CardContainer>

    </div>
  );
};

const TS_HeadContainer = styled.div`
  /* border: solid 1px black; */
  padding: 1rem;
  /* background-color: grey; */
  margin: 2rem auto;
  width: 90vw;
  max-width: 95%;

`;

const TS_title = styled.div`
  width: 150px;
  /* border: solid 1px black; */
  margin: auto;
`;

const TS_CardContainer = styled.div`
  margin: auto;
  width: 90vw;
  display: grid;
  place-items: center;
  grid-Template-Rows: 1fr;
  grid-Template-Columns: 1fr 1fr 1fr 1fr;
`;

export default TS_main;
