import React from "react";
import styled from "styled-components";

const NoticeCard = () => {
  return (
    <div>
      {/* <BodyContainer> */}
        <BodyContents>
          <Title>전체</Title>
          <Img>사진</Img>
          <Content>제목<br/>작성자<br/>좋아요</Content>
        </BodyContents>
      {/* </BodyContainer> */}
    </div>
  );
};
// const BodyContainer = styled.div`
//   margin-top: 0.7rem;
//   width: 75rem;
//   border: solid 1px black;
//   display: inline-block;
// `;
const BodyContents = styled.div`
  float: left;
  background-color: #81c7e8;
  padding: 1rem;
  margin:11px;
  width: 13rem;
  height: 15rem;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
const Title = styled.div`
  border: solid 1px black;
`;
const Img = styled.div`
  border: solid 1px black;
  height: 8rem;
`;
const Content = styled.div`
  border: solid 1px black;
`;
export default NoticeCard;
