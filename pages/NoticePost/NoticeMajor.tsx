import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Google2/fbconfig";
import { getDocs, collection, doc, query, orderBy } from "@firebase/firestore";
import PostContainer from "./PostContainer";

const NoticeMajor = () => {
  const [postList, setPostList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [category, setCategory] = useState("");
  const postCollectionRef = collection(db, "Post");

  const getPostList = async () => {
    try {
      const data = await getDocs(
        query(postCollectionRef, orderBy("writeDate", "desc"))
      );

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

  const handleClick = (e) => {
    console.log("onClick!");
    console.log(e);
    setCategory(e);
  };

  useEffect(() => {
    getPostList();
  }, []);

  useEffect(()=> {
    setDataList(postList);
  },[postList]);

  useEffect(() => {
    if (category === "") {
      setDataList(postList);
    } else {
      setDataList(
        postList.filter((item: any) => {
          return item.category === category;
        })
      );
    }
  }, [category]);

  return (
    <div>
      <ContentMajor>
        <MajorBar>
          <MajorSelect onClick={() => handleClick("")}>
            <h3>전체 공지</h3>
          </MajorSelect>
          <MajorSelect onClick={() => handleClick("Web")}>
            <h3>웹 전공</h3>
          </MajorSelect>
          <MajorSelect onClick={() => handleClick("App")}>
            <h3>앱 전공</h3>
          </MajorSelect>
          <MajorSelect onClick={() => handleClick("Application")}>
            <h3>응용 전공</h3>
          </MajorSelect>
        </MajorBar>
        <PostContainer data={dataList} />
      </ContentMajor>
    </div>
  );
};

const MajorBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 3.6rem;
  width: 75rem;
  & > div:hover {
    background-color: #adabab;
  }
`;

const MajorSelect = styled.button`
  background-color: #d9d9d9;
  padding: 1rem;
  width: 17rem;
  max-width: 95%;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0px 1px 1px black;
  border: none;
  cursor: pointer;
`;
const ContentMajor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  max-width: 95%;
`;
export default NoticeMajor;
