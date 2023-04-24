import React, { useState, useRef } from "react";
import styled from "styled-components";
import Link from "next/link";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import GlobalSlideMenu from "./GlobalSlideMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <HeaderContainer>
      <Link href={"/"}>
        <LogoContainer>
          <Logo width={168} height={52.5} />
        </LogoContainer>
      </Link>

      <HambugerMenuContainer onClick={toggleSide}>
        
          <FontAwesomeIcon icon={faBars} size={"2x"} />

      </HambugerMenuContainer>
      <GlobalSlideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
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

const HambugerMenuContainer = styled.button`
  margin-right: 80px;
  border: 0;
  background-color: transparent;
`;

export default Header;
