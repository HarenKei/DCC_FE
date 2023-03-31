import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  emoji: string;
  title: string;
  name: string;
}

const TeamSpaceCard = (props : Props) => {
    return(
        <Link href="">
          <TeamSpaceCardContainer>
            <TeamSpaceEmoji>{props.emoji}</TeamSpaceEmoji>
            <TeamSpaceTitle>{props.title}</TeamSpaceTitle>
            <TeamSpaceReaderName>{props.name}</TeamSpaceReaderName>
          </TeamSpaceCardContainer>
        </Link>
    );
};

const TeamSpaceCardContainer = styled.div`
  width: 250px;
  height: 350px;
  background-color: #d0d0d0;
  border-radius: 15px;
  box-shadow: 0px 1px 1px black;
  margin-bottom: 1vh;

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


export default TeamSpaceCard;