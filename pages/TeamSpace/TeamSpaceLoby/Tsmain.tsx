import React from "react";
import styled from "styled-components";
import MyTeamSpaceCard from "@/src/Common/MyTeamSpaceCard";
import TeamSpaceCard from "@/src/Common/TeamSpaceCard";
import { useEffect, useState } from "react";
import { db, auth } from "../../Google2/fbconfig";
import { doc, setDoc, getDocs, collection, query, where, addDoc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import TsMainModal from "./TsMainModal";
import TaskBar from "@/pages/MyTask/TaskBar";
import TsAddButton from "./TsAddButton";

const deepCopy = require("lodash.clonedeep");

const TS_main = () => {
  const [arr, setArr] = useState([]);
  const [myArr, setMyArr] = useState([]);

  const [tsList, setTsList] = useState([]);
  const [myTsList, setMyTsList] = useState([]);
  // const [lastList, setLastList] = useState([]);

  const [userid, setUserId] = useState("uid");

  const [category, setCategory] = useState("class");

  const [modalOpen, setModalOpen] = useState(false);
  const [taskData, setTaskData] = useState([]);


  Array.prototype.division = function (n) {
    var arr = this;
    var len = arr.length;
    var cnt = Math.floor(len / n);
    var tmp = [];

    for (var i = 0; i <= cnt; i++) {
      tmp.push(arr.splice(0, n));
    }

    return tmp;
  }

  // Users 컬렉션 내부의 TeamSpace 컬렉션 정보를 가져옴
  const userTsCollectionRef = collection(db, `Users/${userid}/TeamSpace`);
  // TeamSpace 컬렉션의 정보를 가져옴
  const teamSpaceCollectionRef = collection(db, "TeamSpace");
  let q = query(teamSpaceCollectionRef, where("category", "==", `${category}`));

  const getTsList = async () => {
    try {
      const data1 = await getDocs(q);
      const filteredData1 = data1.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTsList(filteredData1);
    } catch (err) {
      console.error(err);
    }
  };
  //내(유저)가 속한 팀스페이스를 가져오는 함수
  const getMyTsList = async () => {
    try {
      const data = await getDocs(userTsCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMyTsList(filteredData);
      console.log(filteredData);
      setMyArr(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  // const lastarr: any = [];
  // let rrlastarr: any = [];
  // const getLastArr = () => {
  //   if (myArr.length != 0) {
  //     for (let i = 0; i < myArr.length; i++) {
  //       for (let j = 0; j < arr.length; j++) {
  //         if (!arr[j].id.includes(myArr[i].id) && !arr[j].id.includes(lastarr[j])) {
  //           console.log(arr[j]);
  //           lastarr.push(arr[j]);
  //         }
  //       }
  //     }
  //     rrlastarr = lastarr.division(myArr.length);
  //   } else {
  //     console.log("느금");
  //     return;
  //   }
  // }

  const changeCategory = (arr, category) => {
    arr.filter((item) => { return item.category == category })
  }
  const onSubmitTask = async (tmp: any) => {
    try {
      await addDoc(teamSpaceCollectionRef, {
        ...tmp,
      });
      getTsList();
      console.log(`onSubmit ${taskData}`);
    } catch (err) {
      console.error(err);
    }
  };

  const joinTs = async (teamPk: string, teamName: string) => {
    try {
      await setDoc(doc(db, `TeamSpace/${teamPk}/Users`, userid), {
        name: auth?.currentUser?.displayName,
      })
      await setDoc(doc(db, `Users/${userid}/TeamSpace`, teamPk), {
        teamName: teamName,
      })
      getMyTsList();
      getTsList();
    } catch (error) {

    }
  }
  const exitTs = async (teamPk: string) => {
    try {
      const refForUser = doc(db, `Users/${userid}/TeamSpace`, teamPk);
      await deleteDoc(refForUser);
      getMyTsList();
      getTsList();
    } catch (error) {
      console.error(error);
    }
  }
  const onAdd = (form: any) => {
    onSubmitTask(form);
    getTsList();
  }

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        console.log(user.uid);
      }
    })
    getTsList();
    getMyTsList();
  }, [userid]);

  useEffect(() => {
    getTsList();
  }, [category]);
  return (
    <MainContainer>
      <TS_HeadContainer>
        <TS_title>
          <h2>팀 스페이스</h2>
          {modalOpen && <TsMainModal setModalOpen={setModalOpen} onAdd={onAdd} />}
        </TS_title>
      </TS_HeadContainer>
      <TSButtons>
        <TSCtgContainer onClick={() => { setCategory("project"); }}>
          프로젝트
        </TSCtgContainer>
        <TSCtgContainer onClick={() => { setCategory("class"); }}>
          반
        </TSCtgContainer>
        <TSCtgContainer onClick={() => { setCategory("group"); }}>
          동아리
        </TSCtgContainer>
        <TsAddButton setModalOpen={setModalOpen}/>
      </TSButtons>
      <MY_TS_CardContainer>
        <h3>가입 된 팀</h3>
        {myTsList.map((mts: any) => (
          <MyTeamSpaceCard
            setModalOpen={setModalOpen}
            key={mts.id}
            data={mts}
            exitTs={exitTs}
          />
        ))}
      </MY_TS_CardContainer>
      <ENT_TS_CardContainer>
        {/*전체 팀스페이스 (내가 가입되지 않음) */}
        {/*카테고리별 팀스 (내가 가입되지 않은) */}
        {tsList.map((ts: any) => (
          <TeamSpaceCard
            key={ts.id}
            data={ts}
            joinTs={joinTs}
          />
        ))}
      </ENT_TS_CardContainer>

    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 200px;
`;

const TS_HeadContainer = styled.div`
  /* border: solid 1px black; */
  padding: 1rem;
  /* background-color: grey; */
  margin: 2rem auto;
  width: 90vw;
  max-width: 95%;

`;

const TSButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TSCtgContainer = styled.button`
  background-color: #D9D9D9;
  padding: 1rem;
  width: 13rem;
  max-width: 95%;
  border-radius: 12px;
  border:none;
  text-align: center;
  box-shadow:  0px 1px 1px black;

  margin-left: 1rem;
`;


const TS_title = styled.div`
  width: 150px;
  /* border: solid 1px black; */
  margin: auto;
`;

const MY_TS_CardContainer = styled.div`
  display: grid;
  width: 90vw;
  border-radius: 20px 20px 20px 20px;
  background-color: #D9D9D9;
  margin: 1em auto 1em;
  display: grid;
  place-items: center;
  grid-Template-Rows: 1fr;
  grid-Template-Columns: 1fr 1fr 1fr 1fr;
`;

const ENT_TS_CardContainer = styled.div`
  margin: auto;
  width: 90vw;
  display: grid;
  place-items: center;
  grid-Template-Rows: 1fr;
  grid-Template-Columns: 1fr 1fr 1fr 1fr;
`;

export default TS_main;