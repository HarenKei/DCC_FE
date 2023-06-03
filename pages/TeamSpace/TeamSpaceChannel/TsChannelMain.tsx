import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "@/src/Common/Header";
import TsCategory from "./TsCategory";
import TsChannelBox from "./TsChannelBox";
import TsMemberList from "./TsMemberList";
import TsPostBox from "./TsPostBox";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/pages/Google2/fbconfig";
import { addDoc, collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "@firebase/firestore";
import { useTable } from "react-table";

const TeamSpace = () => {

    {/* 팀스페이스 id 가져오기 */}
    const [teamPK, setTeamPK] = useState("Wwo1dsM0IQz4FjQ90FXg");

    {/*채팅 입력, 수정, 삭제*/ }
    const handleKeyPress = (e: { key: string; }) => {
        if (e.key === "Enter") {
            onSubmit();
        }
    };

    const [chatList, setChatList] = useState([]);

    const [userid, setUserId] = useState("uid");
    const [userName, setUserName] = useState("정호일");
    const ChatCollectionRef = collection(db, `TeamSpace/${teamPK}/Post`);
    // let q = query(ChatCollectionRef, orderBy("writeDate"));

    // const [NewUser, setIsNewUser] = useState(userName); //작성자
    const [newContent, setNewContent] = useState(""); // 내용
    let newWriteDate = Date.now();

    // const ChatCollectionRef = collection(db, `users/${userid}/TaskList`);

    const getChatList = async () => {
        try {
            const data = await getDocs(ChatCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setChatList(filteredData);
            console.log(chatList);
        } catch (err) {
            console.error(err);
        }
    };

    const deleteChat = async (id: string) => {
        const chatDoc = doc(db, `TeamSpace/${teamPK}/Post`, id);
        await deleteDoc(chatDoc);
        getChatList();
    };

    const updateChatContent = async (id: string) => {
        const chatDoc = doc(db, `TeamSpace/${teamPK}/Post`, id);
        await updateDoc(chatDoc, { content: newContent });
        getChatList();
        setNewContent("");
    };


    const onSubmit = async () => {
        try {
            await addDoc(ChatCollectionRef, {
                user: userName,
                content: newContent,
                writeDate: newWriteDate,
                userid: auth?.currentUser?.uid,
            }
            );
            getChatList();
            setNewContent("");
        } catch (err) {
            console.error(err);
        }
    };

    {/*팀 프로젝트 가져오기*/ }
    const [myTsList, setMyTsList] = useState([]);

    const userTsCollectionRef = collection(db, `Users/${userid}/TeamSpace`);

    //내(유저)가 속한 팀스페이스를 가져오는 함수
    const getMyTsList = async () => {
        try {
            const data = await getDocs(userTsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setMyTsList(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    {/*멤버 가져오기*/}
    const [tsMemberList, setTsMemberList] = useState([]);

    const tsMemberCollectionRef = collection(db, `TeamSpace/${teamPK}/Users`);

    //내(유저)가 속한 팀스페이스를 가져오는 함수
    const getMemberList = async () => {
        try {
            const data = await getDocs(tsMemberCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setTsMemberList(filteredData);
            console.log(tsMemberList);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getChatList();
        console.log("getChatList");
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                // 사용자가 이미 로그인했거나 방금 로그인 한 경우
                console.log(user.uid + '' + user.displayName);
                setUserId(user.uid);
                setUserName(user.displayName);
                //   TaskCollectionRef = collection(db,  `Users/${userid}/TeamSpaceChannel`);
            } else {
                // 사용자가 로그인하지 않았거나 방금 로그아웃 한 경우
            }
        });
        getMyTsList();
        getMemberList();
    }, [userid]);

    useEffect(() => {
        getMemberList();
        getChatList();
        getMyTsList();
    },[teamPK]);

    return (
        <div>
            <GridContainer>
                <TsMember>
                    <MemberLogo><p>멤버</p></MemberLogo>
                    {tsMemberList.map((tml: any) => (
                            <TsMemberList
                            key={tml.id}
                            data={tml} />   
                        ))}
                </TsMember>

                <TsHeaderContainer>

                    <TsCategory title={"팀 프로젝트"} />

                    <TsChannelContainer>
                        {myTsList.map((mts: any) => (
                            <TsChannelBox
                            key={mts.id}
                            data={mts}
                            onClick={() => {setTeamPK(mts.id)}}/>

                            // <>
                            //     <TsChannelBox
                            // key={mts.id}
                            // data={mts}
                            // />
                            // <button onClick={()=>{console.log(mts.id);setTeamPK(mts.id)}}>ddd</button>
                            // </>
                        ))}
                    </TsChannelContainer>
                </TsHeaderContainer>

                <TsPostBoxContainer>
                    {chatList.map((chat: any) => (
                        // eslint-disable-next-line react/jsx-key
                        <TsPostBox data={chat}
                            onDelete={() => deleteChat(chat.id)}
                            onUpdate={() => updateChatContent(chat.id)} />

                    ))}
                </TsPostBoxContainer>

                <InputContainer>
                    <input onChange={(e) => setNewContent(e.target.value)}
                        onKeyPress={handleKeyPress}
                        type="text"
                        placeholder="입력해주세요."
                        value={newContent}
                    />


                    <button onClick={onSubmit}>전송</button>
                </InputContainer>

            </GridContainer>
        </div>
    );
};
const GridContainer = styled.div`
    margin: 10px 10px 10px 10px;
    width: 98vw;
    height: 90vh;
    display: grid;
    grid-Template-Rows: 1fr 7.5fr 1.22fr;
    grid-Template-Columns: 1fr 8.5fr;

    grid-template-areas: 
        "G_Member G_Header"
        "G_Member G_Content"
        "G_Member G_Input";
`;

const TsMember = styled.div`
    grid-area: G_Member;

    width: 9.5vw;
    height: 87vh;
    border-radius: 20px;
    margin-right: 19px;

    background-color: #C3C3C3;
`;

const MemberLogo = styled.div`
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 11px;
    margin-top: 8px;

    font-size : 20px;
    font-weight: 550;
`;

const TsHeaderContainer = styled.div`
    grid-area: G_Header;
    display: flex;
    flex-direction: row;
    width: 86vw;
    height: 10.8vh;
`;

const TsChannelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 75vw;
    height: 10.8vh;
    border-radius: 0px 20px 20px 0px;

    background-color: #D9D9D9;
`;

const TsPostBoxContainer = styled.div` 
    grid-area: G_Content; 
    margin-top: 1vh;

    width: 86.5vw;
    height: 65vh;

    border-radius: 20px;

    overflow: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
    width: 1vw;
    }
    &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #c3c3c3;
    }
`;

const InputContainer = styled.div`
    grid-area: G_Input;

    display: flex;
    flex-direction: row;
    align-items: center;
    width: 85vw;
    height: 8vh;
    border-radius: 15px;

    background-color: #D9D9D9;

    input{
        width: 76vw;
        height: 5vh;
        margin-left: 1.5vw;
        border-radius: 1px;
        border: none;
        outline: none;
        color: black;
        font-size: 1.2em;
        font-weight: 500;
        background: #D9D9D9;
        border-radius: 5px;
    }

    button{
        width: 4vw;
        height: 5vh;
        margin-left: 2vw;
        border-radius: 1px;
        border: none;
        color: white;
        font-size: 1.2em;
        font-weight: 500;
        background: #46B6EB;
        border-radius: 5px;
        transition: all 0.2s;
        box-shadow: 0 0 1px grey;
  }
` ;

export default TeamSpace;