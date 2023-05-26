import React, { useEffect } from "react";
import styled from "styled-components";

const ClassInfoCard = ({ props, onDelete }: any) => {
  const { id, className, profName, classRoom } = props;

  const delClick = () => {
    onDelete(id);
  };

  return (
    <ClassInfoCardContainer>
      <ClassInfoContainer>
        <ClassTitle>📚 {className}</ClassTitle>
        <ClassInfo>
          <p>
            {profName} 교수<span>|</span>
            {classRoom}
          </p>
        </ClassInfo>
      </ClassInfoContainer>
      <button onClick={delClick}>삭제</button>
    </ClassInfoCardContainer>
  );
};

const ClassInfoCardContainer = styled.div`
  width: 40vw;
  height: 10vh;
  background-color: #ececec;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  button {
    width: 4vw;
    height: 3vh;
    margin-right: 1em;
    border: none;
    border-radius: 5px;

    font-size: 1em;
    font-weight: 900;

    color: #fff;
    background-color: #df3c3c;
  }

  button:hover {
    background: #750c0c;
    color: #fff;
  }

  margin: 0px 0px 20px 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

const ClassInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 2em;
`;

const ClassTitle = styled.h1`
  font-size: 2em;
`;

const ClassInfo = styled.div`
  display: flex;
  flex-direction: row;

  p {
    font-weight: 200;
  }

  span {
    margin: 0em 0.5em 0em 0.5em;

    font-size: 1em;
    font-weight: 400;
  }
`;

export default ClassInfoCard;
