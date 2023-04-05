import React from "react";
import styled from "styled-components";

const Header = () => {
    return(
          <Container>
            <p>헤더</p>
          </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 8vh;

    background-color: grey;
`;


export default Header;