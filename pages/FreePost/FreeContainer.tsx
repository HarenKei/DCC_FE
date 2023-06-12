import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeCard from "@/src/Common/NoticeCard";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import { db } from "../Google2/fbconfig";
import Link from "next/link";
import FreePostCard from "@/src/Common/FreePostCard";

const FreeContainer = () => {

  const [postList, setPostList] : any = useState([]);
  const postCollectionRef = collection(db, "FreePost");
  

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
        <Link href={`/FreePost/FreeAticle/${post.id}/FreePostView`}>
          <FreePostCard major="자유" pre_title="제목 : " title={post.title}/>
        </Link>
              ))}
      </MainBodyContainer>

    </div>
  );
};
const MainBodyContainer = styled.div`
  padding: 1rem;
  margin: 2rem auto;
  width: 90vw;
  height: auto;
  display: flex;
  flex-flow:row wrap;
`;
export default FreeContainer;
