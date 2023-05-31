import React from "react";
import styled from "styled-components";
import TeamSpaceCard from "@/src/Common/TeamSpaceCard";
import { useEffect, useState } from "react";
import { db, auth } from "../../Google2/fbconfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const deepCopy = require("lodash.clonedeep");

const TS_main = () => {
  const [arr, setArr] = useState([]);
  const [myArr, setMyArr] = useState([]);
  
  const [tsList, setTsList] = useState([]);
  const [myTsList, setMyTsList] = useState([]);
  const [lastList, setLastList] = useState([]);

  const [userid, setUserId] = useState("uid");

  const [category, setCategory] = useState("class");

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
      // arrs = deepCopy(filteredData);
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
      // console.log(myArr);
      // await getLastArr();
      // setLastList(rrlastarr);
    } catch (err) {
      console.error(err);
    }
  };

  const lastarr: any = [];
  let rrlastarr: any = [];
  const getLastArr = () => {
    if (myArr.length != 0) {
      for (let i = 0; i < myArr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (!arr[j].id.includes(myArr[i].id) && !arr[j].id.includes(lastarr[j])) {
            console.log(arr[j]);
            lastarr.push(arr[j]);
          }
        }
      }
      rrlastarr = lastarr.division(myArr.length);
    } else {
      console.log("느금");
      return;
    }
  }
  const sex = (arr, category) => {
    arr.filter((item) => {return item.category == category})
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
    sex(tsList, category);
  }, [userid]);
  useEffect(() => {
    getTsList();
    sex(tsList, category);
  },[category]);
  return (
    <MainContainer>
      <TS_HeadContainer>
        <TS_title>
          <h2>팀 스페이스</h2>
        </TS_title>
      </TS_HeadContainer>
      <div>
        <button onClick={() => { setCategory("project");  }}>프로젝트</button>
        <button onClick={() => { setCategory("class");  }}>반</button>
        <button onClick={() => { setCategory("group");  }}>스터디</button>
      </div>
      <MY_TS_CardContainer>
        <h3>가입 된 팀</h3>
        {myTsList.map((mts) => (
          <TeamSpaceCard
            title={mts.TeamName}
          />
        ))}
      </MY_TS_CardContainer>
      <ENT_TS_CardContainer>
        {/*전체 팀스페이스 (내가 가입되지 않음) */}
        {/*카테고리별 팀스 (내가 가입되지 않은) */}
        {tsList.map((item) => (
          <TeamSpaceCard title = {item.TeamName} />
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
