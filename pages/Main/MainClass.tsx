import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import MainTimeTableCard from "@/src/Common/MainTimeTableCard";

import { onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../Google2/fbconfig";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
interface Props {
  className: string;
  profName: string;
  classRoom: string;
  day: number;
}

const dummyDataArray = [
  {
    id: 1,
    className: "테스트 강의1",
    profName: "정호일",
    classRoom: "j0407",
    day: 1,
  },
  {
    id: 2,
    className: "테스트 강의2",
    profName: "정호일",
    classRoom: "j0407",
    day: 2,
  },
  {
    id: 3,
    className: "테스트 강의3",
    profName: "정호일",
    classRoom: "j0407",
    day: 3,
  },
  {
    id: 4,
    className: "테스트 강의4",
    profName: "정호일",
    classRoom: "j0407",
    day: 4,
  },
];

const MainClass = (props: Props) => {
  const [classData, setClassData] = useState(dummyDataArray);
  const [userId, setUserId] = useState("ddd");
  const timeTableCollectionRef = collection(db, `Users/${userId}/TimeTable`);
  const todayDay = new Date().getDay();

  const getTimeTableList = async () => {
    try {
      const data = await getDocs(timeTableCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setClassData(filteredData.filter((items) => items.day == todayDay));
      console.log(`getTimeTableList ${classData[0].className}`);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid + "" + user.displayName);
        setUserId(user.uid);
        // setUserName(user.displayName);
        // await addUsers(UsersDocRef);
      } else {
        alert("로그인 되어있지 않음.");
        // User not logged in or has just logged out.
      }
    });
  }, []);

  useEffect(() => {
    getTimeTableList();
  }, [userId]);

  return (
    <Link href="/TimeTable">
      <MainClassContainer>
        <MainClassTitle>오늘의 강의 📖</MainClassTitle>

        <MainClassContents>
          {classData.map((items) => (
            <MainTimeTableCard key={items.id} props={items} />
          ))}
        </MainClassContents>
      </MainClassContainer>
    </Link>
  );
};

const MainClassContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 43vw;
  height: 8vh;
  background-color: #d0d1d1;
  border-radius: 15px;
  box-shadow: 0px 1px 1px black;
`;

const MainClassTitle = styled.div`
  font-size: 20pt;
  font-weight: 900;
  letter-spacing: -2px;
  margin-left: 20px;
`;

const MainClassContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-right: 20px;
`;

const MainClassContentTitleP = styled.p`
  font-size: 15pt;
  font-weight: 900;
`;

const MainClassContentsP = styled.p`
  font-weight: 100;
`;

export default MainClass;
