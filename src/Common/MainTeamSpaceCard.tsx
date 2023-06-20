import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  emoji: string;
  title: string;
  name: string;
}

const MainTeamSpaceCard = ({ data }: any) => {
  const { teamName, masterName, emoji } = data;
  return (
    <Link href="/TeamSpace/TeamSpaceLoby/Tsmain">
      <TeamSpaceCardContainer>
        <TeamSpaceEmoji>{emoji}</TeamSpaceEmoji>
        <TeamSpaceTitle>{teamName}</TeamSpaceTitle>
        <TeamSpaceReaderName>{masterName}</TeamSpaceReaderName>
      </TeamSpaceCardContainer>
    </Link>
  );
};

const TeamSpaceCardContainer = styled.div`
  width: 17em;
  height: 23em;
  background-color: #d0d0d0;
  border-radius: 15px;
  /* box-shadow: 0px 0px 5px black; */
  padding-top: 10px;
  padding-bottom: 10px;


  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const TeamSpaceEmoji = styled.h1`
  font-size: 80pt;
`;

const TeamSpaceTitle = styled.h1`
  font-size: 25pt;
  font-weight: 900;
`;

const TeamSpaceReaderName = styled.h1`
  font-size: 20pt;
  font-weight: 400;
`;

export default MainTeamSpaceCard;
