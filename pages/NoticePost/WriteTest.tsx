import React from "react";
import styled from "styled-components";

const WriteTest = () => {
  return (
    <div>
      <WriteMain>
        <Title>
          <input type="text" placeholder="제목" />
        </Title>

        <Content_txt>
          <textarea placeholder="내용을 입력하세요."></textarea>
        </Content_txt>
      </WriteMain>

      <Buttons>
      <a
          href="/NoticePost"
        >
          <button>취소</button>
        </a>
        <a
          href="/NoticePost/WriteList"
          rel="noopener noreferrer"
        >
          <button>등록</button>
        </a>
      </Buttons>
    </div>
  );
};

const Title = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  & > input {
    width: 91%;
    padding-bottom: 30px;
    border: none;
    font-size: 22px;
    border-bottom: solid 1px #ababab;
    font-weight: bold;
  }
  & > input:focus {
    outline: none;
  }
`;
const WriteMain = styled.div`
  padding: 20px;
  padding-left: 30px;
`;

const Content_txt = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  & > textarea {
    width: 91%;
    resize: none;
    border: none;
    height: 500px;
  }
  & > textarea:focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  margin-right: 12rem;
  flex-direction: row-reverse;
  & > a > button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: black;
    border-radius: 12px;
    margin-right: 1rem;
  }
  & > button:hover {
    background-color: #adabab;
  }
`;

export default WriteTest;
