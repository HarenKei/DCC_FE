import React, { useState, useEffect } from "react";
import MainTaskCard from "@/src/Common/MainTaskCard";
import styled from "styled-components";
import Link from "next/link";
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

const dummyDataArray = [
  {
    id: "i1",
    taskName: "테스트 1",
    taskGroup: "수업",
    importance: "false",
    taskStatus: "wip",
  },
  {
    id: "i2",
    taskName: "테스트 2",
    taskGroup: "수업",
    importance: "true",
    taskStatus: "wip",
  },
  {
    id: "i3",
    taskName: "테스트 3",
    taskGroup: "수업",
    importance: "false",
    taskStatus: "wip",
  },
  {
    id: "i4",
    taskName: "테스트 4",
    taskGroup: "수업",
    importance: "true",
    taskStatus: "end",
  },
];

const MainTask = () => {
  const [mainTaskData, setMainTaskData] = useState(
    dummyDataArray
      .filter((items: object) => {
        return items.taskStatus === "wip";
      })
      .slice(0, 3)
  );

  const [taskData, setTaskData] = useState(dummyDataArray);
  const [userId, setUserId] = useState("asdf");
  const [userName, setUserName] = useState("asdf");
  const taskCollectionRef = collection(db, `Users/${userId}/Task`);

  const getTaskList = async () => {
    try {
      const data = await getDocs(taskCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTaskData(filteredData);
      setMainTaskData(
        filteredData
          .filter((items: object) => {
            return items.taskStatus === "wip";
          })
          .slice(0, 3)
      );
    } catch (err) {
      console.error(err);
    }
  };

  const updateTaskStatus = async (id: string) => {
    const taskDoc = doc(db, `Users/${userId}/Task`, id);
    await updateDoc(taskDoc, { taskStatus: "end" });
    getTaskList();
  };

  const onUpdate = (id: string) => {
    const chk = confirm(`해당 할 일을 완료하시겠습니까?`);

    if(chk) {
      updateTaskStatus(id);
      getTaskList();
    } else {
      return;
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User logged in already or has just logged in.
        console.log(user.uid + "" + user.displayName);
        setUserId(user.uid);
        setUserName(user.displayName);
        const UsersDocRef = doc(db, "Users", userId);
        // await addUsers(UsersDocRef);
      } else {
        // User not logged in or has just logged out.
      }
    });
  }, []);

  useEffect(() => {
    console.log(`userID : ${userId} userName : ${userName}`);
    getTaskList();
  }, [userId]);

  return (
    <MainTaskBannerContainer>
      <MainTitleAndLinkZone>
        
        <MainTaskBannerTitle>My Task 📚</MainTaskBannerTitle>
        <Link href="/MyTask">내 할 일 관리하기 &gt;&gt;</Link>
      </MainTitleAndLinkZone>

      <TaskCardZone>
        {mainTaskData.length == 0 && <p>진행중인 할 일 없음</p>}
        {mainTaskData.length != 0 &&
          mainTaskData.map((items: object) => (
            <MainTaskCard key={items.id} data={items} onUpdate={onUpdate}/>
          ))}
      </TaskCardZone>

    </MainTaskBannerContainer>
  );
};

const MainTaskBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 45vw;
  height: 40vh;

  background-color: #d0d1d1;
  border-radius: 20px;

  box-shadow: 0px 0px 3px black;
`;

const TaskCardZone = styled.div`
  display: flex;
  flex:0.8;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const MainTitleAndLinkZone = styled.div`
  width: 40vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: 100;
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }
`;

const MainTaskBannerTitle = styled.h1`
  font-size: 2.2em;
  letter-spacing: -1px;
  margin-bottom: 20px;
`;

export default MainTask;
