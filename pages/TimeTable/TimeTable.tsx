import React, { useState, useEffect, useRef, use } from "react";
import styled from "styled-components";
import DayView from "./DayView";
import TimeTableModal from "./TimeTableModal";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { db, auth, storage } from "../Google2/fbconfig";
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

const TimeTable = () => {
  const no = useRef(dummyDataArray.length + 1); // 고유 id가 될 no는 데이터.length +1
  const [classData, setClassData] = useState(dummyDataArray); // 데이터 상태
  const [modalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState("asdf");
  const [userName, setUserName] = useState("asdf");
  const timeTableCollectionRef = collection(db, `Users/${userId}/TimeTable`);

  const getTimeTableList = async () => {
    try {
      const data = await getDocs(timeTableCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setClassData(filteredData);
      console.log(`getTimeTableList ${classData}`);
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmitMovie = async (tmp : any) => {
    try {
        await addDoc(timeTableCollectionRef,{
            ...tmp,
        });
        getTimeTableList();
        console.log(`onSubmit ${classData}`);
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
      setUserName(user.displayName);
      const UsersDocRef = doc(db, "Users", userId);
      // await addUsers(UsersDocRef);
    } else {
      // User not logged in or has just logged out.
    }
  });
  console.log(`userID : ${userId} userName : ${userName}`);

},[]);

  useEffect(() => {
    
    getTimeTableList();
  }, [userId]);

  const openModal = () => {
    setModalOpen(true);
  };

  const onAdd = (form: any) => {
    form.id = no.current++;
    let tmp = classData.slice();
    tmp.push(form);
    onSubmitMovie(form);
    setClassData(tmp);
  };

  return (
    <TimeTableContainer>
      <TimeTableTitle>⏰ 내 시간표</TimeTableTitle>

      <ModalOpenButton onClick={openModal}>강의 추가하기</ModalOpenButton>

      {modalOpen && (
        <TimeTableModal setModalOpen={setModalOpen} onAdd={onAdd} />
      )}

      <DayView classData={classData} onDelete={onDelete} />

      <TableContainer></TableContainer>
    </TimeTableContainer>
  );
};

const TimeTableContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TimeTableTitle = styled.h1``;

const ModalOpenButton = styled.button`
  width: 5vw;
  height: 3vh;
  background-color: yellow;
  border-radius: 10px;
`;

const TableContainer = styled.div`
  width: 45vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export default TimeTable;
