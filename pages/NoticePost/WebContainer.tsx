import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeCard from "@/src/Common/NoticeCard";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { db } from "../Google2/fbconfig";
import Link from "next/link";

const WebContainer = () => {

  const [postList, setPostList] : any = useState([]);
  const postCollectionRef = collection(db, "Post");
  

  const getPostList = async() => {
    try{
        const data = await getDocs(query(postCollectionRef, orderBy("writeDate", "desc")));
        console.log(data);
        const filteredData = data.docs.map((doc) => ({
            ...doc.data(), 
            id: doc.id,           
        }));
        setPostList(filteredData);
    } catch (err) {
        console.error(err);
    }   
};

useEffect(() => {
  getPostList();
},[]);

  return (
    <div>
             
      <MainBodyContainer>
      {postList.map((post : any) => (
        <Link href={`/NoticePost/article/${post.id}/WriteView`}>
          <NoticeCard major="웹" pre_title="제목 : " title={post.title}/>
        </Link>
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
  /* border: 1px solid black;  */
`;
export default WebContainer;
