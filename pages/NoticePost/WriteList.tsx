import { collection, getDocs, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Google2/fbconfig";
import Link from "next/link";

const WriteLsit = () => {
  const [postList, setPostList]: any = useState([]);
  const postCollectionRef = collection(db, "Post");

  const getPostList = async () => {
    try {
      const data = await getDocs(
        query(postCollectionRef, orderBy("writeDate", "desc"))
      );
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
  }, []);

  return (
    <div>
      <h1>테스트</h1>
      {postList.map((post: any) => (
        <div>
          <h1>
            <Link href={`/NoticePost/article/${post.id}/WriteView`}>
              {post.title}
            </Link>
          </h1>
        </div>
      ))}
    </div>
  );
};

export default WriteLsit;
