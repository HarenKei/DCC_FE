import NoticeCard from "@/src/Common/NoticeCard";
import { collection, getDocs, orderBy, query } from "@firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Google2/fbconfig";

const ApplicationContainer  = () =>{
  const [postList, setPostList] : any = useState([]);
  const postCollectionRef = collection(db, "ApplicationPost");
  

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
          <NoticeCard major="응용" title={post.title}/>
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
export default ApplicationContainer;