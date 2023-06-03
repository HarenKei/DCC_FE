import React from "react";
import styled from "styled-components";


// const TsPostBox = (props: Props & { onDelete: () => void } & { onUpdate: () => void }) => {
  const TsPostBox = ({data, onDelete, onUpdate} : any) => {
    const {user, content, date} = data;
  
  const handleDelete = async () => {
    onDelete();
  };
  const handleUpdate = async () => {
    onUpdate();
  };

  return (
    <div>
      <ContentContainer>

        <MainContainer>
          <AlignRowContainer>
            <NameText>{user}</NameText>

            <HandleContainer>
              <button onClick={handleUpdate}>수정</button>
              <button onClick={handleDelete}>삭제</button>
            </HandleContainer>
          </AlignRowContainer>

          <RowContainer>
            <ContentText>{content}</ContentText>
            <DateArea>{date}</DateArea>
          </RowContainer>
        </MainContainer>

        <CommentContainer>
          <ContentText>{content}</ContentText>
        </CommentContainer>z
        
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
const AlignRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const HandleContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  
  margin: 1vh 1.6vh 0 0;
  button{
        width: 3vw;
        height: 3vh;
        margin-left: 0.8vw;
        border-radius: 1px;
        border: none;
        color: white;
        font-size: 1em;
        font-weight: 500;
        background: #46B6EB;
        border-radius: 5px;
        transition: all 0.2s;
        box-shadow: 0 0 1px grey;
  }
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
const CommentContainer = styled.div`
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