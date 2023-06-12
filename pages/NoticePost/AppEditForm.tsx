import { addDoc, doc, getDoc, updateDoc} from "firebase/firestore";
import React, {  useEffect, useState } from "react";
import styled from "styled-components";
import { db, auth } from "../Google2/fbconfig";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/router";

function EditForm(initialValues : any) {

  const router: any = useRouter();

  let userid = "";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user.uid);
      userid = user.uid;
    } else {
    }
  });

  const [newPostTitle, setPostTitle] = useState(initialValues?.title);
  const [newPostDetail, setnewPostDetail] = useState(initialValues?.detail);


  const update = async () => {
    const update = doc(db, "AppPost", router.query.id);
    await updateDoc(update, {
      title: newPostTitle,
      detail: newPostDetail,
    });
    alert("수정 되었습니다.");
  };
  


  return (
    <div>
      <WriteMain>
        <Title>
          <input
            onChange={(e) => setPostTitle(e.target.value)}
            type="text"
            value={newPostTitle}
          ></input>
        </Title>

        <Content_txt>
          <textarea
            onChange={(e) => setnewPostDetail(e.target.value)}
            value={newPostDetail}
          ></textarea>
        </Content_txt>
      </WriteMain>

      <Buttons>
        <button>
          <Link href="/NoticePost">취소</Link>
        </button>
        <button onClick={update}>
          <Link href="/NoticePost">수정</Link>
        </button>
      </Buttons>
    </div>
  );
}

const Title = styled.div`
  margin-left: 50px;
  align-items: center;
  
  & > input {
    width: 91%;
    border: none;
    font-size: 22px;
    border-bottom: solid 1px #ababab;
    font-weight: bold;
    height: 60px;
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
    margin-right:1rem;
  }

  button:first-child{
    margin-right: 6rem;
  }

  button:hover {
    background-color: #adabab;
  }
`;

export default EditForm;
