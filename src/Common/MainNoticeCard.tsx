import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  id: string;
  category: string;
  title: string;
  dept: string;
  dir: string;
}

interface StyleProps {
  dir: string;
}

const MainNoticeCard = (props: Props) => {
  const [category, setCategory] = useState("");
  
  useEffect(()=> {
    if(props.category === "Web"){
      setCategory("웹");
    } else if(props.category === "App") {
      setCategory("앱");
    } else if(props.category === "Application") {
      setCategory("융합");
    } else {
      setCategory("자유");
    }
  },[]);

  return (
      <MainNoticeCardContainer dir={props.dir}>
        <MainNoticeCardContents dir={props.dir}>
          <MainNoticeCardCategory>
            <p>{category}</p>
          </MainNoticeCardCategory>

          <MainNoticeCardTitleH1>{props.title}</MainNoticeCardTitleH1>

          <MainNoticeCardDeptP>{props.dept}</MainNoticeCardDeptP>
        </MainNoticeCardContents>
      </MainNoticeCardContainer>
  );
};

const MainNoticeCardContainer = styled.div<StyleProps>`
  width: 43vw;
  height: 10vh;
  border-radius: 10px;
  box-shadow: 0px 1px 1px black;
  background-color: #d9d9d9;

  display: flex;
  justify-content: ${(props) =>
    props.dir === "left" ? `flex-start` : `flex-end`};
`;

const MainNoticeCardContents = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.dir === "left" ? `` : `flex-end`)};
  margin: ${(props) =>
    props.dir === "left" ? `0px 0px 0px 15px` : `0px 15px 0px 0px`};
`;

const MainNoticeCardCategory = styled.div`
  width: 5vw;
  height: 3vh;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #46B6EB;

  p {
    color: #000;
    font-weight: 800;
    font-size: 13pt;
  }
`;

const MainNoticeCardTitleH1 = styled.h1`
  font-size: 16pt;
`;

const MainNoticeCardDeptP = styled.p`
  font-size: 12pt;
  font-weight: 100;
`;

export default MainNoticeCard;
