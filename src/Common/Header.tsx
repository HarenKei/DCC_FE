import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark} from "@fortawesome/free-solid-svg-icons";
import GlobalSlideMenu from "./GlobalSlideMenu";

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <LogoContainer>
          <Logo width={168} height={52.5} />
        </LogoContainer>
      </Link>

      <HambugerMenuContainer onClick={(e)=>setVisible(visible ? false : true)}>
      {visible ? <FontAwesomeIcon icon={faXmark} size={"2x"} /> : <FontAwesomeIcon icon={faBars} size={"2x"} /> }
      </HambugerMenuContainer>

      {visible && <GlobalSlideMenu />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  height: 6vh;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

const LogoContainer = styled.div`
  margin-left: 80px;
`;

const HambugerMenuContainer = styled.div`
  margin-right: 80px;
  position: relative;
  z-index: 9999;
`;

export default Header;
