import React from "react";
import styled from "styled-components";
import MainAllNotice from "./MainAllNotice";
import MainSchedules from "./MainSchedules";

const MainNotice = () => {
    return(
        <MainNoticeContainer>
          <MainAllNotice/>
          <MainSchedules/>
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

  background-color: yellow;
`;

export default MainNotice;