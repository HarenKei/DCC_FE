import React from "react";
import Link from "next/link";
import styled from "styled-components";


const MyTeamSpaceCard = ({ data, exitTs }: any) => {
  const { id, teamName } = data;

  const exitHandler = () => {
    exitTs(id);
  }

  return (

    <TeamSpaceCardContainer>
      <TeamSpaceTitle>{teamName}</TeamSpaceTitle>
      {/* <TeamSpaceReaderName>{}</TeamSpaceReaderName> 교수님 이름?*/}
      <CardButtons>
        <Link href={{
          pathname: '/TeamSpace/TeamSpaceChannel/TsChannelMain',
          query: { goPk: `${id}` },
        }}>
          <EnterButton>입장</EnterButton>
        </Link>
        <QuitButton onClick={exitHandler} >탈퇴</QuitButton>
      </CardButtons>
    </TeamSpaceCardContainer>

  );
};

const TeamSpaceCardContainer = styled.div`
  width: 250px;
  height: 350px;
  background-color: #d0d0d0;
  border-radius: 15px;
  box-shadow: 0px 1px 1px black;
  margin-top: 1em;
  margin-bottom: 1em;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const TeamSpaceTitle = styled.h1`
  font-size: 25pt;
  font-weight: 900;
  margin-top: 2em;
`;

const TeamSpaceReaderName = styled.h1`
  font-size: 20pt;
  font-weight: 400;
`;

const CardButtons = styled.div`
  display: flex;
`;

const EnterButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    
  width: 5vw;
  height: 4vh;

  background-color: red;
  border-radius: 10px;

  box-shadow: 0px 1px 1px black;
  margin-right: 1em;
`;

const QuitButton = styled.button`  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 5vw;
  height: 4vh;

  background-color: red;
  border-radius: 10px;

  box-shadow: 0px 1px 1px black;
  margin-left: 1em;
`;

export default MyTeamSpaceCard;