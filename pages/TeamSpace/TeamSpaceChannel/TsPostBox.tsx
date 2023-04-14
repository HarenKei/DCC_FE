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
  width: 86vw;
  height: 74vh;

  border-radius: 20px;
  background-color: red;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 86vw;
  height: 65vh;
  
  border-radius: 20px;

  background-color: purple;
`;
const NameText = styled.div`
  width: 100px;
  height: 100px;

  font-size : 18px;
  font-weight: 300;

  background-color: blue;
`;
const RowContainer = styled.div`
  
`;
const ContentText = styled.div`
  
`;
const DateArea = styled.div`
  
`;
const ButtonContainer = styled.div`
  
`;
const LikeButton = styled.div`
  
`;
const CommentButton = styled.div`
  
`;
export default TsPostBox;