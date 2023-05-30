import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Google2/fbconfig";

const WriteView = () => {
//   const [postList, setPostList] = useState([]);
//   const postCollectionRef = collection(db, "Post");

//   const getPostList = async() => {
//     try{
//         const data = await getDocs(query(postCollectionRef, orderBy("writeDate", "desc")));
//         console.log(data);
//         const filteredData = data.docs.map((doc) => ({
//             ...doc.data(), 
//             id: doc.id,           
//         }));
//         setPostList(filteredData);
//     } catch (err) {
//         console.error(err);
//     }   
// };

// useEffect(() => {
//   getPostList();
// },[]);

  const { id } = useParams();
  const [post, setPost] = useState(null);

  return (
    <div>
      <WriteMain>
        <Title>
          <h1>{postList.title}1</h1>
        </Title>
         
        <Content_txt>
          <h3>{postList.detail}2</h3>
        </Content_txt>
      </WriteMain>

      <Buttons>
      <button><Link href="/NoticePost">
          취소
      </Link></button>
      </Buttons>
    </div>
  );
};

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
  padding: 20px;
  padding-left: 30px;
`;

const Content_txt = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  & > h2 {
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


export default WriteView;