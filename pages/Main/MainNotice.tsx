import React from "react";
import styled from "styled-components";
import MainAllNotice from "./MainAllNotice";
import MainFreeBoard from "./MainFreeBoard";

const MainNotice = () => {
    return(
        <MainNoticeContainer>
          <MainAllNotice/>
          <MainFreeBoard/>
        </MainNoticeContainer>
    );
};

const MainNoticeContainer = styled.div`
  width: 90vw;
  height: 60vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 200px;
`;

export default MainNotice;