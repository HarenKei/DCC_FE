import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeftSpace>
        <TempImageSpace></TempImageSpace>
        <Link href="/Privacy">
          <PrivacyLinkP>개인정보처리방침</PrivacyLinkP>
        </Link>
      </FooterLeftSpace>

      <CopyRightP>
        Copyright 2023. Daelim University Collage - RealMan Club. All Rights
        Reserved.
      </CopyRightP>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 15vh;
  background-color: grey;
`;

const FooterLeftSpace = styled.div`
  width: 20%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TempImageSpace = styled.div`
  width: 12vw;
  height: 6vh;
  background-color: red;
`;

const PrivacyLinkP = styled.p`
  font-weight: 500;
`;

const CopyRightP = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  letter-spacing: -1px;
`;

export default Footer;
