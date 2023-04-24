import React from "react";
import styled from "styled-components";

interface Props {
  user: string,
  content: string,
  date: string
 };

const TsPostBox = (props:Props) => {
    return(
        <div>
          <ContentContainer>

            <MainContainer>
              <NameText>{props.user}</NameText>

              <RowContainer>
                <ContentText>{props.content}</ContentText>
                <DateArea>{props.date}</DateArea>
              </RowContainer>
            </MainContainer>

            <ButtonContainer>
              <LikeButton><p>좋아요</p></LikeButton>
              <CommentButton><p>댓글달기</p></CommentButton>
            </ButtonContainer>

          </ContentContainer>
        </div>
    );
};

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;

  border-radius: 20px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 85vw;

  border-radius: 20px 20px 0px 0px;
  background-color: #C3C3C3;

`;
const NameText = styled.div`
  margin: 8px 15px 8px 15px;

  font-size : 18px;
  font-weight: 300;

  background-color: #C3C3C3;
`;
const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0px 15px 0px 15px;

  min-height: 5vh;

  background-color: #C3C3C3;
`;
const ContentText = styled.div`
  white-space: pre-wrap;
`;
const DateArea = styled.div`
  align-self: flex-end;
  
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  margin-bottom: 1vh;
`;
const LikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 43vw;
  height: 6vh;

  border-style: solid;
  border-width: 1px 1px 0px 0px;
  border-radius: 0px 0px 0px 20px;

  background-color: #C3C3C3;
`;
const CommentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 43vw;
  height: 6vh;

  border-style: solid;
  border-width: 1px 0px 0px 0px;
  border-radius: 0px 0px 20px 0px;

  background-color: #C3C3C3;
`;
export default TsPostBox;