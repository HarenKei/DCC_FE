import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeftSpace>
        <Link href={"/"}>
        <LogoContainer>
          <Logo width={168} height={52.5} />
        </LogoContainer>
        </Link>

        <Link href="/Privacy">
          <PrivacyLinkP>개인정보처리방침</PrivacyLinkP>
        </Link>

        <GitHubLinkP>
          이 웹페이지는 Next.js, React.js, Node.js, Express.js, FireStore를 통해
          제작되었습니다
          <br />
          모든 소스코드는{" "}
          <Link href={"https://github.com/RealManClub"}>
            <span>사나이클럽 GitHub </span>
            <FontAwesomeIcon icon={faGithub} size={"1x"} />
          </Link>
          에서 확인하실 수 있습니다.
        </GitHubLinkP>
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
  height: 20vh;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const LogoContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 10px;
`;

const FooterLeftSpace = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 80px;
`;

const PrivacyLinkP = styled.p`
  font-weight: 100;
  margin-bottom: 10px;
  text-decoration-line: underline;
  text-decoration-style: dotted;
`;

const GitHubLinkP = styled.p`
  font-weight: 100;
  letter-spacing: -1px;

  span {
    font-weight: 500;
    text-decoration-line: underline;
    text-decoration-style: dotted;
  }
`;

const CopyRightP = styled.p`
  font-weight: 900;
  letter-spacing: -1px;
  margin-right: 80px;
  color: grey;
`;

export default Footer;
