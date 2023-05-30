import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Google2/fbconfig";
import { FirebaseError } from "firebase/app";
import Link from "next/link";
import router from "next/router";

const WriteLsit = () => {

  const [postList, setPostList] = useState([]);
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
// 게시판 추가
const handlePostClick = (post) => {
  router.push(`/board/${post}`);
};


  return(
    <div>
      <h1>테스트</h1>
                        {postList.map((post) => (
                    // eslint-disable-next-line react/jsx-key
                    <div>
                        <h1><Link href={`/NoticePost/WriteView/${post.id}`}>{post.title}</Link></h1>                                           
                    </div>
                ))}
    </div>
  )
}

export default WriteLsit;