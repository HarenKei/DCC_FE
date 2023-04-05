import React from "react";
import styled from "styled-components";

const Header = () => {
    return(
          <HeaderContainer>
            <p>헤더</p>
          </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    width: 100%;
    height: 6vh;
    background-color: grey;
`;


export default Header;