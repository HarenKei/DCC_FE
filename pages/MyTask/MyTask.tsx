import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TaskBoard from "./TaskBoard";
import TaskBar from "./TaskBar";
import MyTaskModal from "./MyTaskModal";

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

const MyTask = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [taskData, setTaskData] = useState(dummyDataArray);
  const [userId, setUserId] = useState("asdf");
  const [userName, setUserName] = useState("asdf");
  const taskCollectionRef = collection(db, `Users/${userId}/Task`);

  //user ID 정보 가져오기 , 마운트와 동시에 실행할것.
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

  //할 일 리스트 받아오는 함수.
  const getTaskList = async () => {
    try {
      const data = await getDocs(taskCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTaskData(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  //fs로 새 할 일 추가.
  const onSubmitTask = async (tmp: any) => {
    try {
      await addDoc(taskCollectionRef, {
        ...tmp,
      });
      getTaskList();
      console.log(`onSubmit ${taskData}`);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask= async (id: string) => {
    const taskDoc = doc(db, `Users/${userId}/Task`, id);
    await deleteDoc(taskDoc);
    getTaskList();
  };

  const onAdd = (form: any) => {
    let tmp = taskData.slice();
    tmp.push(form);
    onSubmitTask(form);
    setTaskData(tmp);
    getTaskList();
  };

  const onDelete = (id: any) => {
    const chk = confirm(`해당 할 일을 삭제하시겠습니까?`);

    if(chk) {
      setTaskData(taskData.filter((item) => item.id !== id));
      deleteTask(id);
    } else {
      return;
    }
  };

  return (
    <MyTaskContainer>
      <TaskBar setModalOpen={setModalOpen} />
      <TaskBoard data={taskData} onDelete={onDelete}/>

      {modalOpen && <MyTaskModal setModalOpen={setModalOpen} onAdd={onAdd} />}
    </MyTaskContainer>
  );
};
const MyTaskContainer = styled.div`
  width: 90vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MyTask;
