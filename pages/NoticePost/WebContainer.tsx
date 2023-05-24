import React from "react";
import styled from "styled-components";
import NoticeCard from "@/src/Common/NoticeCard";

const WebContainer = () => {
  return (
    <div>
      <MainBodyContainer>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>
        <NoticeCard/>

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeCard from "@/src/Common/NoticeCard";
import { db } from "../Google2/fbconfig";
import { collection, getDocs } from "firebase/firestore";

const NoticeBodyContainer = () => {
  const [postsList, setPostsList] =useState([]);
  const postsCollectionRef = collection(db, "Post");

  const getPostsList =async () => {
    try {
      const data = await getDocs(postsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log("야 변왕추 이시발련아");
      setPostsList(filteredData);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPostsList();
    console.log('계급장 떼고 붙자');       
  },[]);

  return (
    <div>
      <MainBodyContainer>
        {postsList.map((posts) => (
          // eslint-disable-next-line react/jsx-key
          <NoticeCard title={posts.title}/>
        ))}

      </MainBodyContainer>
    </div>
  );
};
const MainBodyContainer = styled.div`
  /* border: solid 1px black; */
  padding: 1rem;
  /* background-color: grey; */
  margin: 2rem auto;
  width: 90vw;
  height: auto;
  display: flex;
  flex-flow:row wrap;
`;
export default WebContainer;
