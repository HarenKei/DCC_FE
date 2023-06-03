import { db } from "@/pages/Google2/fbconfig";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const TsPostBox = ({ data, onSubmit, postPk, teamPk, newComment, setNewComment, setPostPk }: any) => {
  const { content, user, writeDate,id } = data;

  const [commentList, setCommentList] = useState([]);
  const [commentVisible, setCommentVisible] = useState(false);
  // const [changeTeamPk, setChangeTeamPk] = useState(teamPK);

  const ref = collection(db, `TeamSpace/${teamPk}/Post/${postPk}/Comment`);
  const q = query(ref, orderBy("writeDate", "desc"));
  const getCommentList = async () => {
    try {
      const data = await getDocs(ref);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        writeDate: new Date(doc.data().writeDate).toLocaleString()
      }));
      setCommentList(filteredData);
      console.log(filteredData);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCommentSubmit = () => {
    onSubmit();
    setNewComment("");
    setCommentVisible(false);
  };
  const toggleCommentVisible = () => {
    setCommentVisible(!commentVisible); // 댓글 입력란의 가시성을 토글합니다.
    setPostPk(id);
    console.log(teamPk);
    console.log(postPk);
    getCommentList();
  };

  return (
    <div>
      <ContentContainer>

        <MainContainer>
          <NameText>{user}</NameText>

          <RowContainer>
            <ContentText>{content}</ContentText>
            <DateArea>{writeDate}</DateArea>
          </RowContainer>
          <CommentBox>
            {commentList.map((cmt: any) => (
              // eslint-disable-next-line react/jsx-key
              <h1>{cmt.content}</h1>
            ))}

          </CommentBox>

        </MainContainer>
        {commentVisible && (
          <CommentBackground>
            <CommentContainer>
              <input
                placeholder="댓글을 입력하세요"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />

              <button onClick={handleCommentSubmit}>완료</button>
            </CommentContainer>
          </CommentBackground>
        )}


        <ButtonContainer>
          <LikeButton><p>좋아요</p></LikeButton>
          <CommentButton onClick={toggleCommentVisible}>{commentVisible ? <p>댓글달기</p> : <p>댓글보기</p>}</CommentButton>
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

const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0px 15px 0px 15px;

  min-height: 5vh;

  background-color: #C3C3C3;
`;
const CommentText = styled.div`
  white-space: pre-wrap;
`;
const CommentBackground = styled.div`
    display: flex;
    align-items: center;
    width: 85vw;
    height: 8vh;

    background-color: #D9D9D9;
`;
const CommentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 85vw;
    height: 8vh;
    border-radius: 15px;

    background-color: #D9D9D9;

    input{
        width: 76vw;
        height: 5vh;
        margin-left: 1.5vw;
        border-radius: 1px;
        border: none;
        outline: none;
        color: black;
        font-size: 1.2em;
        font-weight: 500;
        background: #D9D9D9;
        border-radius: 5px;
    }

    button{
        width: 4vw;
        height: 5vh;
        margin-left: 2vw;
        border-radius: 1px;
        border: none;
        color: white;
        font-size: 1.2em;
        font-weight: 500;
        background: #46B6EB;
        border-radius: 5px;
        transition: all 0.2s;
        box-shadow: 0 0 1px grey;
  }
` ;
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