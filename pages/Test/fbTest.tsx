/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { db, auth } from "../Google2/fbconfig";
import { getDocs, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import TeamSpaceCard from "@/src/Common/TeamSpaceCard";

const deepCopy = require("lodash.clonedeep");

const fbTest = () => {
    let userid : any = "";
    let arrs : string[];
    let myarr : string[];

    const [tsList, setTsList] = useState([]);
    const [myTsList, setMyTsList] = useState([]);
    const [lastList, setLastList] = useState([]);
    
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
    let userTsCollectionRef = collection(db, `Users/asd/TeamSpace`);
    // TeamSpace 컬렉션의 정보를 가져옴
    const teamSpaceCollectionRef = collection(db,"TeamSpace");

    const getTsList = async() => {
        try{
            const data = await getDocs(teamSpaceCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setTsList(filteredData);
            arrs = deepCopy(filteredData);
        } catch (err) {
            console.error(err);
        }
    };
    //내(유저)가 속한 팀스페이스를 가져오는 함수
    const getMyTsList = async(ref : any) => {
        try{
            const data = await getDocs(userTsCollectionRef);
            const filteredData = data.docs.map((doc)=>({
                ...doc.data(),
                id: doc.id,
            }));
            setMyTsList(filteredData);
            // myarr = Object.entries(filteredData);
            myarr = deepCopy(filteredData);
            getLastArr();      
            console.log(rrlastarr);     
            setLastList(rrlastarr);
        } catch (err) {
            console.error(err);
        }
    };
    const lastarr : any = [];
    let rrlastarr : any;
    let JJInarr : any;
    const getLastArr = () => {
        for(let i=0; i<myarr.length; i++){
            for(let j=0; j<arrs.length;j++){
                if(!arrs[j].id.includes(myarr[i].id) && !arrs[j].id.includes(lastarr[j])){
                    lastarr.push(arrs[j]);
                }
            }
        }
        rrlastarr = lastarr.division(myarr.length);
    }
    //로그인 한 사람 uid 가져오기
    const authChange = () => {
        onAuthStateChanged(auth, async(user) => {
            if (user) {
              // User logged in already or has just logged in.
              console.log(user.uid+''+user.displayName);
              userid = user.uid;
              // Users 컬렉션 내부의 TeamSpace 컬렉션 정보를 가져옴
              userTsCollectionRef = collection(db,`Users/${userid}/TeamSpace`);
              getMyTsList(userTsCollectionRef);
            } else {
              // User not logged in or has just logged out.
            }
          });
    }

    useEffect(() => {
        getTsList();
        authChange();
    }, [userid]);

    return(
        <div>
            <div>
                <h1>내가 속한 팀스</h1>
                {myTsList.map((ts) => (
                    <TeamSpaceCard key={"asdf"} title={ts.TeamName} />
                ))}
            </div>
            <div>
                <h1>내가 속하지 않은 팀스페이스</h1>
                {lastList.map(ts =>
                    ts.map((mm) => (
                        <TeamSpaceCard 
                        key={"asdfg"}
                        title={mm.TeamName}
                    />
                    )
                ))}
            </div>
            <div>
                <h1>전체 팀스페이스</h1>
                {tsList.map((ts) =>(
                    <TeamSpaceCard 
                        key={"asdfg"}
                        title={ts.TeamName}
                    />
                ))}
            </div>
        </div>
    );
};

export default fbTest;