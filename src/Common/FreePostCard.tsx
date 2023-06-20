import React from "react";
import styled from "styled-components";


interface Props {
  pre_title : string;
  title : string;
  major: string;
  writer: string;
}


const FreePostCard = (props : Props) => {
  return (
    <div>
      <BodyContents>
        <Major>
          <p>{props.major}</p>
        </Major>
        <Title>
          {props.title}
        </Title>

        <InfoContainer>
          <Writer>{props.writer}</Writer>
        </InfoContainer>
      </BodyContents>
    </div>
  );
};
const BodyContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: #d9d9d9;

  padding: 1rem;
  margin: 30px;
  width: 17rem;
  height: 19rem;

  border-radius: 12px;
  box-shadow: 0px 1px 1px black;
`;
const Major = styled.div`
   background-color: #46B6EB;
  border-radius: 4px;
  width: 6em;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  color: white;
`;
const Title = styled.div`
  margin-top: 2vh;
  margin-left: 4px;
  height: 8rem;

  font-size:1.5rem;
  font-weight: 700;
`;

const InfoContainer = styled.div`
  margin-top: 10vh;
`;

const Writer = styled.p`
  font-weight: 300;
  font-size: 1.2rem;
`;
export default FreePostCard;
