import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
}

const MainMenuCard = (props: Props) => {
  return (
    <Link href={props.link}>
      <MainMenuCardContainer>
        <MainMenuCardTitleH1>{props.title}</MainMenuCardTitleH1>
      </MainMenuCardContainer>
    </Link>
  );
};

const MainMenuCardContainer = styled.div`
  width: 20vw;
  height: 8vh;
  border-radius: 10px;
  box-shadow: 0px 1px 1px black;
  background-color: #d0d0d0;
  margin: 10px 42px 10px 0px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainMenuCardTitleH1 = styled.h1`
  font-size: 20pt;
  font-weight: 900;
`;

export default MainMenuCard;
