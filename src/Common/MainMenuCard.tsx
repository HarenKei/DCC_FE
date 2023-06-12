import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
  width: string;
  height: string;
}

interface StyleProps {
  width: string;
  height: string;
}

const MainMenuCard = (props: Props) => {
  
  return (
    <Link href={props.link}>
      <MainMenuCardContainer width={props.width} height={props.height}>
        <MainMenuCardTitleH1>{props.title}</MainMenuCardTitleH1>
      </MainMenuCardContainer>
    </Link>
  );
};

const MainMenuCardContainer = styled.div<StyleProps>`
  width: ${props => props.width + 'vw'};
  height: ${props => props.height + 'vh'};
  border-radius: 10px;
  box-shadow: 0px 1px 1px black;
  background-color: #d0d0d0;
  margin: 10px 42px 10px 0px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const MainMenuCardTitleH1 = styled.h1`
  font-size: 20pt;
  font-weight: 900;
`;

export default MainMenuCard;
