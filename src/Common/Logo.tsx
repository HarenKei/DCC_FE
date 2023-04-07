import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface Props {
  width: number,
  height: number
}

const Logo = (props : Props) => {
  return(
    <LogoContainer>
      <Image src="/Images/Dcc_Logo.png" alt="DCC 로고" width={props.width} height={props.height}/>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
`;

export default Logo;