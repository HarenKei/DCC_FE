import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import {
  auth,
  googleProvider,
  signInWithGoogleInConfig,
  db,
} from "../../pages/Google2/fbconfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { collection, setDoc, doc } from "firebase/firestore";

import MainMenuCard from "./MainMenuCard";

const dummyDataArray = [
  {
    id: "m1",
    title: "📚 나의 할일",
    link: "/MyTask",
  },
  {
    id: "m2",
    title: "📣 공지사항",
    link: "/NoticePost",
  },
  {
    id: "m3",
    title: "📅 학사일정",
    link: "/Schedule",
  },
  {
    id: "m4",
    title: "🗣️ 자유게시판",
    link: "/",
  },
  {
    id: "m5",
    title: "🍽️ 오늘의 학식",
    link: "/",
  },
  {
    id: "m6",
    title: "👥 팀 스페이스",
    link: "/",
  },
  {
    id: "m7",
    title: "🔐 개인정보처리방침",
    link: "/Privacy",
  },
  {
    id: "m8",
    title: "사나이 클럽 GitHub",
    link: "https://github.com/RealManClub",
  },
];

const GlobalSlideMenu = (props: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const outside = useRef<any>();
  const [userId, setUserId] = useState("asdf");
  const [userName, setUserName] = useState("asdf");

  const signInWithGoogle = async () => {
    try {
      await signInWithGoogleInConfig();
      setIsLogin(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      location.reload();
      setIsLogin(false);
    } catch (error) {
      console.error(error);
    }
  };

  const addUsers = async (ref: any) => {
    try {
      await setDoc(ref, {
        name: userName,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User logged in already or has just logged in.
        setUserId(user.uid);
        setUserName(user.displayName);
        const UsersDocRef = doc(db, "Users", userId);
        await addUsers(UsersDocRef);
      } else {
        // User not logged in or has just logged out.
      }
    });
  }, []);

  useEffect(() => {
  }, [userId, userName]);

  useEffect(() => {
    document.addEventListener("mousedown", handlerOutside);

    return () => {
      document.removeEventListener("mousedown", handlerOutside);
    };
  });

  const handlerOutside = (e: any) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    props.setIsOpen(false);
  };

  return (
    <SlideMenuContainer
      id="sidebar"
      ref={outside}
      className={props.isOpen ? "open" : ""}
    >
      <FontAwesomeIcon icon={faXmark} size={"2x"} onClick={toggleSide} style={{cursor: "pointer"}} />
      <SlideMenuWrapper>
        <SlideMenuContents>
          {isLogin && (
            <SlideMenuUserIntro>
              <UserName>{userName}님 안녕하세요.</UserName>
              <GoogleLogoutButton onClick={logout}>로그아웃</GoogleLogoutButton>
            </SlideMenuUserIntro>
          )}

          {!isLogin && (
            <SlideMenuUserIntro>
              <GoogleLoginButton onClick={signInWithGoogle}>
                <FontAwesomeIcon icon={faGoogle} size="2x" />
                <p>구글 계정으로 로그인</p>
              </GoogleLoginButton>
            </SlideMenuUserIntro>
          )}

          {/*로그인 되면 로그인 한 사람의 이름 출력 */}
          {/*로그인이 되어있지 않으면 로그인 버튼 출력 */}

          <MenuContainer>
            <h2>전체 메뉴 보기</h2>
            {dummyDataArray.map((items) => (
              <MainMenuCard
                key={items.id}
                title={items.title}
                link={items.link}
                width={"20"}
                height={"5"}
              />
            ))}
          </MenuContainer>
        </SlideMenuContents>
      </SlideMenuWrapper>
    </SlideMenuContainer>
  );
};

const SlideMenuContainer = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 15px 0 0 15px;
  background-color: #e7e4e1;
  height: 100vh;
  width: 28vw;
  right: -55%;
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    right: 0;
    transition: 0.5s ease;
  }
`;

const SlideMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const SlideMenuContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SlideMenuUserIntro = styled.div`
  a {
    font-weight: 100;
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }
`;

const UserName = styled.h2`
  font-size: 2em;
`;

const GoogleLogoutButton = styled.button`
  width: 5vw;
  height: 3vh;

  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 5px black;

  background-color: #e7e4e1;
  color: #000;
  
  font-size: 1em;
  font-weight: 500;
  
  :hover {
    background: #df3c3c;
    color: #fff;
  }
`;

const GoogleLoginButton = styled.button`
  width: 20vw;
  height: 5vh;

  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 5px black;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: white;
  font-weight: 500;
  background: #00ae68;
  transition: all 0.2s;

  :hover {
    background: #21825b;
  }

  p {
    margin-left: 0.5em;
    font-size: 1.5em;
  }
`;

export default GlobalSlideMenu;
