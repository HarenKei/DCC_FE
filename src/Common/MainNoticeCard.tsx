import React from "react";
import styled from "styled-components";

interface Props {
  category: string;
  title: string;
  dept: string;
  dir: string;
}

interface StyleProps {
  dir: string;
}

const MainNoticeCard = (props : Props) => {
  return (
    <MainNoticeCardContainer dir={props.dir}>
      <MainNoticeCardContents dir={props.dir}>
        <MainNoticeCardCategory>
          <p>{props.category}</p>
        </MainNoticeCardCategory>

        <MainNoticeCardTitleH1>
          {props.title}
        </MainNoticeCardTitleH1>

        <MainNoticeCardDeptP>
          {props.dept}
        </MainNoticeCardDeptP>
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
  justify-content: ${(props) => (props.dir === 'left') ? `flex-start` : `flex-end` };
  
`;

const MainNoticeCardContents = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.dir === 'left') ? `` : `flex-end` };
  margin: ${(props) => (props.dir === 'left') ? `0px 0px 0px 15px` : `0px 15px 0px 0px` };
`;

const MainNoticeCardCategory = styled.div`
  width: 5vw;
  height: 3vh;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #504a4a;

  p {
    color: #fff;
    font-weight: 500;
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
