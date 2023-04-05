import React from "react";
import styled from "styled-components";

import MainMenuCard from "@/src/Common/MainMenuCard";

const MainMenu = () => {
  return (
    <MainMenuContainer>
      <MainMenuTitleH1>전체메뉴</MainMenuTitleH1>
      <MainMenuTitleP>
        DCC의 모든 메뉴를 한 눈에 확인하세요 📣
      </MainMenuTitleP>

      <MainMenuCard title={"메뉴테스트"} link={"/MyTask"}/>
    </MainMenuContainer>
  );
};

const MainMenuContainer = styled.div`
  width: 90vw;
  height: 40vh;
  background-color: yellow;
`;

const MainMenuTitleH1 = styled.div`
  font-size: 30pt;
  font-weight: 900;
  letter-spacing: -3px;
`;

const MainMenuTitleP = styled.div`
  font-size: 12pt;
  font-weight: 100;
  letter-spacing: -1px;
`;
export default MainMenu;
