import { db } from "@/pages/Google2/fbconfig";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WriteWebView = () => {
  const router: any = useRouter();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  useEffect(() => {
    getDoc(doc(db, "AppPost", router.query.id)).then((doc) => {
      const data: any = doc.data();
      setTitle(data.title);
      setDetail(data.detail);
    });
  }, []);

  const deletePost: any = async (id: string) => {
    const remove = window.confirm("삭제하시겠습니까?");
    if (remove == true) {
      const movieDoc : any = doc(db, "AppPost", router.query.id);
      await deleteDoc(movieDoc);
      alert("게시물이 삭제되었습니다.");
    }
  };

  return (
    <WritePageContainer>
      <WriteMain>
        <Title>
          <h1>{title}</h1>
        </Title>

        <Content_txt>
          <div>{detail}</div>
        </Content_txt>
      </WriteMain>

      <Buttons>
        <button>
          <Link href="/NoticePost" onClick={deletePost}>
            삭제
          </Link>
        </button>
        <button>
          <Link href="/NoticePost">메인으로</Link>
        </button>
        <button>
          <Link href={`/NoticePost/article/${router.query.id}/WriteAppEdit`}>
            수정하기
          </Link>
        </button>
      </Buttons>
    </WritePageContainer>
  );
};

const WritePageContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  & > h1 {
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
  padding-left: 30px;
  width: 90vw;
  margin: 0 auto;
`;

const Content_txt = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  & > div {
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
  flex-direction: row-reverse;
  align-items: center;

  button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    color: black;
    border-radius: 12px;
    margin-right: 1rem;
  }

  button:first-child {
    margin-right: 15rem;
  }

  button:hover {
    background-color: #adabab;
  }
`;

export default WriteWebView;
