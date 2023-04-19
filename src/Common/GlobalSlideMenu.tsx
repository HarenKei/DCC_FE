import React, {useState} from "react";
import styled from "styled-components";
import Login from "@/pages/GoogleLogin/Login";
import TestLogin from "@/pages/GoogleLogin/TestLogin";
import Profile from "@/pages/GoogleLogin/Profile";

const GlobalSlideMenu = () => {
  const [visible,setVisible] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    return (
        <SlideMenuContainer>
          {!isLogin
                ? <TestLogin setUserInfo={setUserInfo} setIsLogin={setIsLogin} />
                : <Profile userInfo={userInfo} />
            }
        </SlideMenuContainer>
    );
};

const SlideMenuContainer = styled.div`
  position: fixed;
    right: 0;
    top: 0;
    transform: translate(-100vw, 0, 0);
    transition : transform .3s cubic-bezier(0, 52, 0, 1);
    width: 20vw;
    height: 100vh;
  background-color: grey;
  box-shadow: -1px 0px 1px black;
  z-index: 998;
`;

export default GlobalSlideMenu;